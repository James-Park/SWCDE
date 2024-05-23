var com = {};

/**
 * 서버 통신 확장 모듈, Submission를 실행합니다.
 *
 * @memberOf com
 * @date 2021.12.09
 * @param {Object} sbmObj submission 객체
 * @param {Object} requestData [Default : null, JSON, XML] 요청 데이터로 submission에 등록된 ref를 무시하고 현재의 값이 할당된다.
 * @param {Object} compObj [Default : null] 전송중 disable시킬 컴포넌트
 * @author InswaveSystems
 * @example 
// Submission의 ref 속성에 서버에 전송할 DataCollection을 설정하는 경우
com.sbm.execute(sbm_search); 

//  Submission의 ref 속성에 서버에 전송할 DataCollection을 설정하지 않고 JSON 객체를 전송하는 경우
var searchParam = {
	id : "A0001"
};
com.execute(sbm_search, searchParam); 
 */
com.execute = function (sbmObj, requestData, compObj) {
	return new Promise(function(resolve, reject) {
		if (typeof sbmObj === "object") {
			var _sbmObj = (typeof sbmObj == 'object') ? sbmObj : (typeof sbmObj == 'string') ? $p.getSubmission(sbmObj) : sbmObj;
			
			if (com.isEmpty(_sbmObj.submitDoneHandler)) {
				_sbmObj._promise_submitDoneHandler = function(rtn) {
					resolve(rtn);
				}
			}
			
			if (com.isEmpty(_sbmObj.submitErrorHandler)) {
				_sbmObj._promise_submitErrorHandler = function(rtn) {
					reject(rtn);
				}
			}
			
			$p.executeSubmission(_sbmObj, requestData, compObj);
		}
	});
};


/**
 * submission의 공통 설정에서 사용.
 * submisison 통신 직전 호출.
 * return true일 경우 통신 수행, return false일 경우 통신 중단
 *
 * @param {Object} sbmObj 서브미션 객체
 * @memberOf com
 * @date 2021.12.09
 * @author Inswave Systems
 * @return {Boolean} true or false
 * @description
config.xml 파일의 submission > preSubmitFunction 태그 value 속성 안에 아래와 같이 "gcm.sbm._preSubmitFunction" 함수를 추가합니다.
preSubmitFunction에 정의된 함수는 submission이 실행되고 서버에 Request가 전달되기 전에 호출되는 전처리 함수입니다.
<submission>
	<preSubmitFunction value="com.preSubmitFunction" />
</submission>
*/
com.preSubmitFunction = function(sbmObj) {
	com.setActionParam(sbmObj);
};


/**
 * REST API 방식 처리를 위해서 Path Variable 치환 및 QueryString으로 생성한다.
 * 
 * 1. Path Variable 처리 : Action에서 "/testJsonMap/{procId}/{seq}/"와 같이 Path Variable(${procId}, ${seq})을 선언할 경우, 
 *    해당 변수를 DataMap이나 RequestData(JSON)에 정의된 Key의 Value으로 치환한다.
 *    DataMap이나 RequestData(JSON) 안에 Path Variable({procId}, {seq})에 정의된 procId와 seq Key(Column)이 존재해야 한다.
 *    Key가 존재하지 않을 경우 Path Variable에 추가하지 않는다.
 *    Path Variable에 추가된 Key 값은 GET 방식일 경우 생성되는 QueryString에서 제외 시킨다.
 *    
 * 2. QueryString 처리 : GET Method으로 Action을 호출할 경우, 해당 변수를 DataMap이나 RequestData(JSON)에 정의된 Key와 Value으로 치환한다.
 *    DataMap이나 RequestData(JSON) 안에 Path Variable({procId}, {seq})에 정의된 procId와 seq Key(Column)이 존재해야 한다.
 *    단 건 데이터(Map)만 QueryString으로 생성해서 서버에 전송하고, Array 형태의 데이터의 경우에는 QueryString으로 포함시키지 않는다.
 *    
 * @param {Object} sbmObj Submission 객체
 * @memberOf com
 * @date 2021.12.09
 * @author Inswave Systems
 * @example
// example-1
var requestData = {
	procId : "PR0001",
	seq : 1
};

// sbm_code.action
com.sbm.execute(sbm_code, requestData);
 */
com.setActionParam = function(sbmObj) {
	
	var requestData = sbmObj.requestData || WebSquare.ModelUtil.getRefToReqData(sbmObj);
	
	if (com.isEmpty(requestData)) {
		return;
	}
	
	if (typeof requestData === "string") {
		requestData = JSON.parse(requestData);
	}
	
	if (com.isEmpty(sbmObj.__action)) {
		sbmObj.__action = sbmObj.action;
	}
	
	var actionUrl = sbmObj.__action;
	
	var queryParam = {};
	if (sbmObj.__action.indexOf("/{") > -1) {
		actionUrl = actionUrl.substr(0, actionUrl.indexOf("/{"));
	}

	// requestData를 QueryString으로 생성해서 submission.action에 추가한다.
	if (com.isJSON(requestData)) {
		
		// DataMap에 저장된 데이터를 queryParam에 저장한다.
		for ( var key in requestData) {
			if ((com.isEmpty(requestData[key]) === false) && (com.isJSON(requestData[key]) === false)) {
				queryParam[key] = encodeURIComponent(requestData[key]);
			} else if ((com.isJSON(requestData[key])) && (com.isArray(requestData[key]) === false)) {
				for ( var subKey in requestData[key]) {
					if ((com.isEmpty(requestData[key][subKey]) === false) && (com.isJSON(requestData[key][subKey]) === false)) {
						queryParam[subKey] = encodeURIComponent(requestData[key][subKey]);
					}
				}
			}
		}
		
		// URL에 Path Variable(ex. {paramId})로 정의된 변수를 queryParam의 정의된 값으로 치환하고, queryParam에서는 제거한다.
		// queryParam에 Path Variable과 일치하는 값이 없을 경우 Skip한다.
		var actionArr = sbmObj.__action.split(/(\{[^}]*})/g);
		for (var i = 0; i < actionArr.length; i++) {
			if (actionArr[i].match(/(\{[^}]*})/g) !== null) {
				var paramKey = actionArr[i].substr(1, actionArr[i].indexOf("}")-1);
				actionUrl += "/" + queryParam[paramKey];
				delete queryParam[paramKey];
			}
		}
		
		actionUrl += ".do";
		
		// GET Method로 전송할 경우 queryParam에 저장된 Key, Value를 QueryString으로 생성해서 Action URL에 붙인다.
		if (sbmObj.method === "get") {
			for (key in queryParam) {
				if (actionUrl.indexOf("?") === -1) {
					actionUrl += "?" + key + "=" + queryParam[key];
				} else {
					actionUrl += "&" + key + "=" + queryParam[key];
				}
			}
		}
		
		sbmObj.action = actionUrl;
		
		alert("Submission Action Url : " + actionUrl);
	}
};

/**
 * 값이 Empty 상태(undefined, null, "")인지 판별한다.
 * @memberOf com
 * @date 2021.12.09
 * @param value Empty 여부를 판단할 값
 * @return Empty 여부 (true : Empty, false : Not Empty)
 * @example
if (com.isEmpty(empCd) === false) {
	console.log("empCd : " + empCd);
}
 */
com.isEmpty = function(value) {
	if ((typeof value === "undefined") || (value === null) || (value === "")) {
		return true;
	} else {
		return false;
	}
};


/**
 * JSON Object인지 여부를 검사한다.
 *
 * @param {Object} jsonObj JSON Object가 맞는지 검사할 JSON Object
 * @memberOf com
 * @date 2021.12.09
 * @author Inswave Systems
 * @return {Boolean} true or false
 * @example
com.isJSON("123");
// return 예시) false
com.isJSON([1,2,3]);
// return 예시) false
com.isJSON([{"name" : "홍길동"}, {"name" : "허균"}]);
// return 예시) true
com.isJSON( {"tbx_sPrjNm": "1", "tbx_sPrtLv": "2", "tbx_sReqLv": "3"} );
// return 예시) true
 */
com.isJSON = function(json) {
	try {
		if (typeof json === "object") {
			try {
				if (com.isArray(json)) {
					if (com.isPlainObject(json[0])) {
						return true;
					} else {
						return false;
					}
				} else {
					if (com.isPlainObject(json)) {
						return true;
					} else {
						return false;
					}
				}
			} catch (ex) {
				return false;
			}
		} else if ((typeof json === "string") && com.isPlainObject(json)) {
			try {
				var jsonObj = JSON.parse(json);
				if (com.isArray(jsonObj)) {
					if (com.isPlainObject(jsonObj[0])) {
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				}
			} catch (ex) {
				console.error(ex);
				return false;
			}
		}
		return false;
	} catch (ex) {
		console.error(ex);
		return false;
	}
};


/**
 * 배열 객체인지 여부를 확인한다.
 *
 * @memberOf com
 * @date 2021.12.09
 * @param {Object}  array :: I :: N :: :: Array Object or String
 * @return {Boolean} Array 배열 판단 여부(Array 객체인 경우 true, 아닌경우 false)
 * @author Inswave Systems
 * @example
com.isArray(arrObject); // return true
 */
com.isArray = function(array) {
	try {
		if ((typeof array !== "undefined") && (array !== null) && (typeof array == "object")) {
			if (array.constructor.name && array.constructor.name.toLowerCase() == "array")
				return true;
			if (array.constructor && array.constructor == Array)
				return true;
		}
		return false;
	} catch (ex) {
		console.error(ex);
		return false;
	}
};

/**
 * 값이 Plain Object인지 검사한다. 
 *
* @memberOf com
* @date 2021.04.19
* @param {Object} obj Plain Object인지 검사할 값
* @author Inswave Systems
* @return Plain 객체 여부
* @example
com.isPlainObject(1); // false
com.isPlainObject("name"); // false
com.isPlainObject([1,2,3]); // false
com.isPlainObject({}); // true
com.isPlainObject({ "name" : "홍길동"}); // true
com.isPlainObject([{ "name" : "홍길동"}]); // false
*/
com.isPlainObject = function(obj) {
	var consObj, protObj;

	if (Object.prototype.toString.call(obj) !== '[object Object]') return false;

	consObj = obj.constructor;
	if (consObj === undefined) return true;

	protObj = consObj.prototype;
	if (Object.prototype.toString.call(protObj) !== '[object Object]') return false;

	if (protObj.hasOwnProperty('isPrototypeOf') === false) {
		return false;
	}

	return true;
};

// =============================================================================
/**
 * 각 WFrame Scope별로 공유되는 Scope 전역 변수와 공통 함수를 작성한다.
 *
 * @date 2020.09.09
 * @author Inswave Systems
 * @namespace com
 * @description
1. com 및 하위 객체(ex. com.sbm, com.data, ..)는 WFrame Scope 업무 개발자가 호출해야할 공통 함수만을 정의한다.
2. com 및 하위 객체는 WFrame Scope 별로 생성되기 때문에 com 객체 내에 정의된 함수에서의 선언된 $p 객체는
  해당 함수를 호출한 화면의 WFrame Scope 내의 $p를 참조하게 된다.
3. com 및 하위 객체는 반드시 Empty Object 형태로 선언해야 한다.
4. Scope별로 생성되는 com 및 하위 객체에 데이터 저장을 위해서 변수(int, string, object, array)를 생성해야할 경우 
   객체 선언 시 변수를 생성하지 마시고, com 및 com 하위 객체에 선언된 함수 스크립트에서 생성하시기 바랍니다.
 
   // 잘못된 사용 예제
   var com.win = { windowSeq : 1 };
   
   // 올바른 사용 예제
   com.win.init = function() {
	   com.win.winodwSeq = 1;
   };
 */
// =============================================================================

var com = {};


// =============================================================================
/**
 * 웹스퀘어 컴포넌트 제어, 엑셀 파일 업로드/다운로드, 파일 업로드/다운로드, 기타 유틸리티 함수를 작성한다.
 *
 * @author Inswave Systems
 * @class util
 * @namespace com.util
 */
 // =============================================================================

com.util = {};

/**
 * JSON Object로 변환해서 반환한다.
 *
 * @memberOf com.util
 * @date 2020.05.16
 * @param {String|XML} value JSON 문자열 또는 XML Document
 * @return {Object} JSON 객체 or null
 * @author Inswave Systems
 * @example
// 유효하지 않은 JSON 문자열 일 경우
com.util.getJSON("");
// return 예시)	null

// 유효한 JSON 문자열
var json = '{"tbx_sPrjNm":"1","tbx_sPrtLv":"2","tbx_sReqLv":"3"}';
com.util.getJSON(json);
// return 예시)	{tbx_sPrjNm: "1", tbx_sPrtLv: "2", tbx_sReqLv: "3"}
 */
com.util.getJSON = function (value) {
	try {
		if (com.util.isXmlDoc(value) === true) {
			return JSON.parse(WebSquare.json.XML2JSONString(value));
		} else {
			return JSON.parse(value);
		}
	} catch (ex) {
		return value;
	}
};


/**
 * JSON Object인지 여부를 검사한다.
 *
 * @param {Object} jsonObj JSON Object가 맞는지 검사할 JSON Object
 * @memberOf com.util
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Boolean} true or false
 * @example
com.util.isJSON("");
// return 예시) false
com.util.isJSON( {"tbx_sPrjNm": "1", "tbx_sPrtLv": "2", "tbx_sReqLv": "3"} );
// return 예시) true
 */
com.util.isJSON = function(json) {
	try {
		if (Object.prototype.toString.call(json) === '[object Object]' && com.util.isArray(json) === false) {
			return false;
		}

		if (typeof json === "object") {
			try {
				JSON.stringify(json);
				return true;
			} catch (ex) {
				return false;
			}
		} else if (typeof json === "string") {
			try {
				JSON.parse(json);
				return true;
			} catch (ex) {
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
 * @memberOf com.util
 * @date 2020.05.16
 * @param {Object}  array :: I :: N :: :: Array Object or String
 * @return {Boolean} Array 배열 판단 여부(Array 객체인 경우 true, 아닌경우 false)
 * @author Inswave Systems
 * @example
com.util.isArray(arrObject); // return true
 */
com.util.isArray = function(array) {
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
 * 값이 Empty 상태(undefined, null, "")인지 판별한다.
 * @memberOf com.util
 * @date 2020.05.16
 * @param value Empty 여부를 판단할 값
 * @return Empty 여부 (true : Empty, false : Not Empty)
 * @example
if (com.util.isEmpty(empCd) === false) {
	console.log("empCd : " + empCd);
}
 */
com.util.isEmpty = function(value) {
	if ((typeof value === "undefined") || (value === null) || (value === "")) {
		return true;
	} else {
		return false;
	}
};


/**
 * XML Document 객체인지 여부를 검사한다.
 *
 * @memberOf com.util
 * @date 2020.05.16
 * @param {Object} data XML Document 객체인지 여부를 검사한다.
 * @author Inswave Systems
 * @return {Boolean} true or false
 */
com.util.isXmlDoc = function(data) {
	if (typeof data != 'object')
		return false;
	if ((typeof data.documentElement != 'undefined' && data.nodeType == 9)
			|| (typeof data.documentElement == 'undefined' && data.nodeType == 1)) {
		return true;
	}
	return false;
};

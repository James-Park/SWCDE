var com = {}; 

/**
 * DataList 또는 DataMap 객체에 컬럼을 추가한다.
 *
 * @memberOf com
 * @function com.insertColumn
 * @date 2022.07.12
 * @param {Object} dataDcObj DataList 또는 DataMap 객체
 * @param {String} columnId 컬럼 아이디
 * @param {Object} columnInfo 컬럼 정보 JSON 객체 (name, dataType)
 * @author InswaveSystems
 * @example 
com.insertColumn(dlt_memberList, "email", {name:"이메일", dataType:"text"}); 
 */
com.insertColumn = function (dataDcObj, columnId, columnInfo) {
	var dataType = dataDcObj.getObjectType().toLowerCase();
	if (dataType === "datamap") {
		columnInfo.id = columnId;
		dataDcObj.addColumn(columnInfo);
	} else if (dataType === 'datalist') {
		dataDcObj.insertColumn(columnId, columnInfo);
	}
};

/**
 * DataList 객체에 컬럼을 삭제한다.
 *
 * @memberOf com
 * @function com.removeColumn
 * @date 2022.07.12
 * @param {Object} dataListObj DataList 객체
 * @param {String} columnId 컬럼 아이디
 * @author InswaveSystems
 * @example 
com.removeColumn(dlt_memberList, "email"); 
 */
com.removeColumn = function (dataListObj, columnId) {
	dataListObj.removeColumn(columnId);
};

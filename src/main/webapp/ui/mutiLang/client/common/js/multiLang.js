/**
 * @type multiLang
 */
window.multiLang = {};

/**
 * Global 변수
 */
(function (global) {
	var _defaultOptions = (function () {
		return {
			'debugMode': true
			, 'w2xPath': $w.getParameter('w2xPath')
			, 'contextRoot': {
				'hyundai_auto': ''
			}
			, 'mainContainer': 'tabControl1'
			, 'processMsg': '처리중 입니다...'
			, 'submissionCons': {}
			, 'locale': 'ko'
			, 'wordShortening': 'short'
			, 'dateFormat': 'yyyy년 MM월 dd일'
			, 'timeFormat': 'HH:mm:ss'
			, 'timezoneOffset': +9
			, 'numberFormat': '#,###.##'
			, 'integerSeparator': ','
			, 'decimalSeparator': '.'
			, 'useDST': false
		};
	})();

	global.defaultOptions = _defaultOptions;

	_defaultOptions = null;
})(multiLang);


multiLang.getLocale = function () {
	return multiLang.defaultOptions.locale;
};

multiLang.setLocale = function (locale, options) {
	multiLang.defaultOptions.locale = locale;
	options = options || {};
	switch (locale.toLowerCase()) {
		case 'en': multiLang.defaultOptions.dateFormat = "MM dd,yyyy";
			multiLang.defaultOptions.timeFormat = "HH:mm";
			multiLang.defaultOptions.timezoneOffset = -5;
			multiLang.defaultOptions.numberFormat = "#,###.00";
			multiLang.defaultOptions.integerSeparator = ",";
			multiLang.defaultOptions.decimalSeparator = ".";
			multiLang.defaultOptions.useDST = true;
			break;
		case 'fr': multiLang.defaultOptions.dateFormat = "dd/MM/yyyy";
			multiLang.defaultOptions.timeFormat = "HH:mm";
			multiLang.defaultOptions.timezoneOffset = +1;
			multiLang.defaultOptions.numberFormat = "#.###,0#";
			multiLang.defaultOptions.integerSeparator = ".";
			multiLang.defaultOptions.decimalSeparator = ",";
			multiLang.defaultOptions.useDST = false;
			break;
		case 'de': multiLang.defaultOptions.dateFormat = "dd.MM.yyyy";
			multiLang.defaultOptions.timeFormat = "HH:mm";
			multiLang.defaultOptions.timezoneOffset = +1;
			multiLang.defaultOptions.numberFormat = "#.###,00";
			multiLang.defaultOptions.integerSeparator = ".";
			multiLang.defaultOptions.decimalSeparator = ",";
			multiLang.defaultOptions.useDST = false;
			break;
		case 'ko': multiLang.defaultOptions.dateFormat = "yyyy년 MM월 dd일";
			multiLang.defaultOptions.timeFormat = "HH:mm:ss";
			multiLang.defaultOptions.timezoneOffset = +9;
			multiLang.defaultOptions.numberFormat = "#,###.##";
			multiLang.defaultOptions.integerSeparator = ",";
			multiLang.defaultOptions.decimalSeparator = ".";
			multiLang.defaultOptions.useDST = false;
			break;
		default: multiLang.defaultOptions.dateFormat = "yyyy.MM.dd";
			multiLang.defaultOptions.timeFormat = "HH:mm:ss";
			multiLang.defaultOptions.timezoneOffset = 0;
			multiLang.defaultOptions.numberFormat = "#,###.##";
			multiLang.defaultOptions.integerSeparator = ",";
			multiLang.defaultOptions.decimalSeparator = ".";
			multiLang.defaultOptions.useDST = false;
			break;
	}
};

multiLang.getDisplayNumberFormat = function (value) {
	var pattern = /[.]/;
	var reg = new RegExp(pattern);
	var integer = value.split(reg)[0];
	var decimal = value.split(reg)[1] || 0;

	var numberFormat = multiLang.defaultOptions.numberFormat;
	var integerSeparator = multiLang.defaultOptions.integerSeparator;
	var decimalSeparator = multiLang.defaultOptions.decimalSeparator;

	var formatter = WebSquare.format.createFormatter("euro", numberFormat, "", "", integerSeparator, decimalSeparator);
	var formattedValue = formatter.format(integer + decimalSeparator + decimal);
	return formattedValue;
};



multiLang.getUTCDate = function (utcDateStr) {
	// UTC milliseconds
	if (!!utcDateStr) {
		var date = WebSquare.date.parseDate(utcDateStr, 'yyyyMMddHHmmss'); // 기준  utc date string -> date object.
		return new Date(new Date(date).getTime());
	}
	else {
		return new Date(Date.now() + (new Date().getTimezoneOffset() * 60000));
	}
};


multiLang.getFormattedUTCDate = function (utcDateStr, format) {
	var dateFormat = multiLang.defaultOptions.dateFormat;
	var timeFormat = multiLang.defaultOptions.timeFormat;

	var formatStr = format || dateFormat + ' ' + timeFormat;
	var tmpDate = '', dateStr = '';
	if (!!utcDateStr) {
		var date = multiLang.getUTCDate(utcDateStr);
		dateStr = WebSquare.date.getFormattedDate(date, formatStr);
		tmpDate = date;
	}
	else {
		var curDate = multiLang.getUTCDate();
		dateStr = WebSquare.date.getFormattedDate(curDate, formatStr);
		tmpDate = curDate;
	}
	if (!format && dateFormat.indexOf('MMM') > -1) {
		var monthStr = tmpDate.toDateString().split(' ')[1];
		return monthStr + dateStr.split('M')[1];
	}

	return dateStr;
};

multiLang.getWorldDate = function (utcDateStr) {
	var tzOffset = multiLang.defaultOptions.timezoneOffset;
	if (multiLang.defaultOptions.useDST) { tzOffset = tzOffset + 1; }

	if (!!utcDateStr) {
		var date = WebSquare.date.parseDate(utcDateStr, 'yyyyMMddHHmmss');
		return new Date(new Date(date).getTime() + (tzOffset * 3600000));
	}
	else {
		return new Date(Date.now() + (new Date().getTimezoneOffset() * 60000) + (tzOffset * 3600000))
	}
};

multiLang.getFormattedWorldDate = function (utcDateStr, format) {
	var dateFormat = multiLang.defaultOptions.dateFormat;
	var timeFormat = multiLang.defaultOptions.timeFormat;

	var formatStr = format || dateFormat + ' ' + timeFormat;
	var tmpDate = '', dateStr = '';
	if (!!utcDateStr) {
		var date = multiLang.getWorldDate(utcDateStr);
		dateStr = WebSquare.date.getFormattedDate(date, formatStr);
		tmpDate = date;
	}
	else {
		var curDate = multiLang.getWorldDate();
		dateStr = WebSquare.date.getFormattedDate(curDate, formatStr);
		tmpDate = curDate;
	}
	if (!format && dateFormat.indexOf('MMM') > -1) {
		var monthStr = tmpDate.toDateString().split(' ')[1];
		return monthStr + dateStr.split('M')[1];
	}

	return dateStr;
};


multiLang.getFormattedWorldTime = function (utcDateStr, format) {
	var timeFormat = format || multiLang.defaultOptions.timeFormat;
	var formatter = WebSquare.format.createFormatter("time", timeFormat.replace(":ss", ""), "", "");

	var tzOffset = multiLang.defaultOptions.timezoneOffset;
	if (WebSquare.util.getBoolean(multiLang.defaultOptions.useDST)) { tzOffset = tzOffset + 1; }

	var gmtStr = formatter.format(WebSquare.text.fillZero(Math.abs(tzOffset), 2));

	var timeStr = '';
	if (!!utcDateStr) {
		var date = multiLang.getWorldDate(utcDateStr);
		timeStr = WebSquare.date.getFormattedDate(date, timeFormat);
	}
	else {
		var curDate = multiLang.getWorldDate();
		timeStr = WebSquare.date.getFormattedDate(curDate, timeFormat);
	}
	return { time: timeStr, gmt: tzOffset >= 0 ? '+' + gmtStr : '-' + gmtStr };
};


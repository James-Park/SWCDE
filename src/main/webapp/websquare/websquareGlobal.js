var _wg = {};
_wg._xv = "SP5";
_wg.domain = null;
//  _wg.baseURI = "/websquare/";
_wg.baseURI = ""; // 초기화 로직이 있으므로 ""로 초기값 변경
_wg.baseServletURI = "";
_wg.baseThemeURI = "";
_wg.sp5ResourcePath = "../websquare/_websquare_";
_wg.w2xDocumentRoot = "";
_wg.w2xHome = "/";
_wg.w2xTheme = "";
_wg.w2xExtension = "w5";
_wg.printConsole = false;
_wg.remoteConsole = false;
_wg.errorConsole = false;
_wg.useWeinre = false;
_wg.weinreUrl = "http://debug._wg.co.kr/target/target-script-min.js";
_wg.hybridSubmissionURL = "";
_wg.isPrintLog = true;
_wg.hybridApp = false; // Hybrid App 여부
_wg.isHoneyComb = false;
_wg.userAgentPattern = {
    serializer: "Android 2.3.5[\\w\\W]+M110|Android 2.3.5[\\w\\W]+M250",
    XMLParser: "Opera[\\w\\W]+Version[\\w\\W]+1[\\d].[\\d]",
    URIEncoder: "Chrome[\\w\\W]16[\.0-9*]*|Version[\\w\\W]+Safari+",
    XPathParser: "Edge" // spartan browser
};
_wg.msActiveXFilteringEnabled = false; //
_wg.externalOption = {}; // HTML단에서 config.xml 로드 이전에 필요한 옵션을 전달할 때 중계할 객체.
_wg.WebSquaredoc = null;
_wg.UUIDPrefix = "wq_uuid";
_wg.UUID = 0;
_wg.scriptCachedList = {}; // 외부 스크립트 url을 저장해두는 배열
_wg.moduleList = {}; // config.xml에 module로 로딩한 스크립트 url을 저장해두는 배열
_wg.noConflict = "$w";
_wg.noConflictFunction = "$p";
_wg.styleSheetEarlyImport = 0;
_wg.styleSheetEarlyImportName = "";
_wg.styleSheetEarlyImportList = [];
_wg._styleSheetEarlyImportListLoaded = false;
_wg.externalCSSList = [];
_wg.externalCSSDOM = [];
_wg.externalCSSURL = [];
_wg.externalCSSRemainder = []; // SPA 페이지 이동 시 이전 화면에서 사용했던 css를 재사용하기 위한 배열
_wg.pageXMLString = null;
_wg.nodeValueDeprecated = (document.createAttribute && document.createAttribute("test").value != undefined);
_wg.scriptIdentifier = ";\n\"wq_Log_$$H";
_wg.targetInfo = "";
_wg.skipLog = false;
_wg.printError = false;
_wg.pluginCache = "default";
_wg.pluginCacheVariable = "__WebSquare__pluginCache";
_wg.suffix = "";
_wg.spaURLMapping = {};
_wg.dataObject = {}; // popup에서 dataObject속성으로 전달받은 parameter를 저장하기 위한 전역객체 
_wg.isWebSquarePopup = false; // popup.html을 통해 열린 websquare popup 페이지인지에 대한 여부 
_wg.strictMode = true; // sp2 strict mode 사용여부(WPFF-180)
_wg.convertPageXML = true; // sp4 xmlJS
_wg.strictModeFrame = null; // strictMode 사용 시 main을 감싸는 wframe component (scope 전용)
_wg.serverDiff = NaN;
_wg.pageURLPrefix = "";
_wg.useLanguagePack = false;
_wg.nowRendering = false;
_wg.WebSquareCache = false;
_wg.WebSquareEngineCache = false;
_wg.appendChildType = null;
_wg._bEngineReadyBeforeOnload = false;
_wg._bDocumentReady = false;
_wg._initImportList = [];
_wg._resourceURI = "";
_wg._bInitModule = false;
_wg.docType = "html4.01";
_wg.dataPrefix = false;
_wg._performance = {
    "use": false
}; // javascript의 performance 기능을 이용한 성능 측정 함수를 모아둔 객체
_wg.amdTimeout = 20;
_wg._dataObject = null;
_wg._dataObjectFlag = false;
_wg._allowedOrigin = "*";
_wg._contextRoot = "";
_wg._idAuto = false;
_wg._idAutoPrefix = "_wq_idAuto_";
try {
    if (window.top === window.self) {
        _wg._innerWidthDiff = window.outerWidth - window.innerWidth;
    }
} catch(e) {
    _wg._innerWidthDiff = null;
}
if (document.doctype != null && document.doctype.name == "html" && document.doctype.publicId == "" && document.doctype.systemId == "") {
    _wg.docType = "html5";
}
window.onload = function() {
    _wg._bDocumentReady = true;
    if (_wg._bEngineReadyBeforeOnload === true) {
        _wg.initialize(_wg.w2xPath);
        _wg._bEngineReadyBeforeOnload = false;
    }
}
if ("sessionStorage" in window) {
    var temp_map = sessionStorage.getItem("wq_spaURLMapping");
    if (temp_map != null) {
        _wg.spaURLMapping = JSON.parse(temp_map);
    }
}
/* 
 * HTML로부터 externalOption 값을 로드하는 코드
 *
 * HTML에서 js 파싱 전에 externalValue 라는 객체가 정의되어 있는 상황을 가정한다.
 * externalValue에서 설정된 맴버 변수(객체)와 같은 이름의 WebSquare 맴버 변수(객체)가 존재할 경우 그곳으로 복사
 * 그렇지 않을 경우 _wg.externalOption 객체 안에 맴버 변수(객체)의 이름으로 된 새로운 하위객체를 만들고 그곳으로 복사함
 *
 * */
try {
    if (typeof externalValue != "undefined") {
        for (var i in externalValue) {
            if (typeof _wg[i] != "undefined") {
                _wg[i] = externalValue[i];
            }
        }
    }
} catch (e) {
    alert("External Option Error! : " + e.toString());
}
if (window.WebSquareExternal == undefined) {
    window.WebSquareExternal = {};
}
if (typeof window.WebSquareExternal.w2xExtension == "string") {
    _wg.w2xExtension = window.WebSquareExternal.w2xExtension || _wg.w2xExtension;
}
_wg.configPath = ""; // config.xml 경로를 지정하는 옵션
var configPathIdx = -1;
if ((configPathIdx = location.toString().indexOf("w2Config")) >= 0) {
    var tempL = location.toString().slice(configPathIdx + "w2Config=".length);
    _wg.configPath = tempL.slice(0, tempL.indexOf("config.js") + "config.js".length);
}
if (typeof window.WebSquareExternal.w2Config == "string") {
    _wg.configPath = window.WebSquareExternal.w2Config || _wg.configPath;
}
_wg.sp5ResourcePath = window.WebSquareExternal.sp5ResourcePath || _wg.sp5ResourcePath;
_wg.document = document;
_wg.ver = "${version}Xw==${java_version}"; //do not modify ${version} tag - @cshan
_wg.logMsgArray = [];
_wg.remoteLogMsgArray = [];
_wg.logTime = 0;
_wg.logTotalTime = 0;
_wg.buildDate = "N/A";
_wg.buildID = ""; // build string을 읽어서 특정 버전의 엔진을 로딩. 우선 순위는 html의 parameter > bootlaoder의 parameter > config.xml > 기본
_wg.uiplugin = {};
_wg.logFileName = "";
_wg.docTitle = "";
_wg.jsString = {}; // 모바일 성능 개선을 위한 JavaScript 문자열 저장 객체
_wg.jsStringOpt = {}; // 모바일 성능 개선을 위한 JavaScript 문자열 저장 객체
_wg.jsStringCore = "";
_wg.$integiry = {
    flag: true,
    passed: [],
    failed: []
};
_wg.allPlugin = "${allPlugin}"; // TNB에서 websquareObject.xml을 읽어서 plugin.list.all를 설정한다. 라이센스 모드일 경우만 필요한 값으로 .js가 포함되어 있어야 한다.
_wg.allPluginArr = []; // bootloader.allEngineLoad가 true인 경우만 데이터가 들어있는 목록으로 생성
_wg.clientLang = window.WebSquareExternal.clientLang || "";
_wg._async = true;
_wg.dragdrop2 = {
    "droppable": {},
    "scrollable": {},
    "scrollByDragDelay": 300,
    "scrollByDragSpeed": 50
};
_wg.timerHash = {};
_wg.measureHash = {};
_wg.userTimerHash = {};
_wg.userIntervalHash = {};
_wg.userData = {};
_wg.logMsgArrayLength = 0;
_wg.logMsgCurrentLength = 0;
_wg.logMsgLength = 0;
_wg.componentsCache = {};
_wg.addListenerCnt = 0;
_wg.elementObjArr = [];
_wg.selectboxCss = false;
_wg.triggerCss = false;
_wg.idCache = {};
_wg.idToUUID = {};
_wg.importsQueue = {};
_wg.controlMatchmarks = {};
_wg.lazyImportsArr = [];
_wg.externalScriptArr = [];
_wg.executePointScriptArr = {};
_wg.pageInheritScriptArr = [];
_wg.pageInheritSubmissionList = [];
_wg.pageInheritWorkflowList = [];
_wg.configCache = [];
_wg.configCacheObj = [];
_wg.configCacheArray = [];
_wg.eventCacheObj = {};
_wg.uiplugin = {};
// ========= postMessage =========
(function() {
    try {
        var evFunc = function(ev) {
            try {
                if (!window.WebSquare) {
                    return;
                }
                var regEx = new RegExp(WebSquare._allowedOrigin.replace("*", "").replace(",","|"));
                if (!ev.origin.match(regEx)) {
                    return;
                }
                if (!ev.data || !ev.data._wq_type) {
                    return;
                }
                if (ev.data._wq_type === "iframeLoaded") {
                    WebSquare.core._handleIframeLoaded();
                } else if (ev.data._wq_type === "iframeClicked") {
                    var bodyComp = WebSquare.getBody();
                    if (bodyComp) {
                        bodyComp._postClick();
                    }
                } else if (ev.data._wq_type === "onwindowloaded") {
                    WebSquare.core._handleWindowLoaded(ev.data.uuid, ev.data.origin);
                } else if (ev.data._wq_type === "dataObject") {
                    if (typeof ev.data._innerWidthDiff === "number" && window.top !== window.self) {
                        WebSquare._innerWidthDiff = ev.data._innerWidthDiff;
                    }
                    if (WebSquare._dataObjectFlag !== true) {
                        WebSquare._dataObjectFlag = true;
                        WebSquare._dataObject = ev.data.dataObject;
                        if (WebSquare.core) {
                            WebSquare.core._initDataObject();
                        }
                    }
                } else if (ev.data._wq_type === "onwindowmousedown") {
                    WebSquare.idCache[ev.data.uuid].handleFrameMouseDownEvent({});
                } else if (ev.data._wq_type === "onwindowkeyup") {
                    WebSquare.idCache[ev.data.uuid].handleFrameKeyupEvent({
                        "keyCode": ev.data.keyCode
                    });
                }
            } catch(err) {
                console.error(err);
            }
        }
        if (window.addEventListener) {
            window.addEventListener("message",evFunc);
        } else if (window.attachEvent) {
            window.attachEvent("onmessage", evFunc);
        }
        if (window.parent !== window.self) {
            var messageObj = {"_wq_type": "iframeLoaded", "href": location.href};
            window.parent.postMessage(messageObj, _wg._allowedOrigin || undefined);
        } 
    } catch(err) {
        console.error(err)
    }
})();
// ========= baseURI =========
(function() {
    try {
        var parseBaseURI = function(path, key) {
            var idx = path.indexOf(key);
            if (idx > -1) {
                _wg.baseURI = path.substring(0, idx);
                return true;
            }
            return false;
        }
        if (!window.WebSquareExternal.baseURI) {
            for (var i = 0; i < (document.getElementsByTagName("script")).length; i++) {
                var _path = (document.getElementsByTagName("script"))[i].src;
                if (parseBaseURI(_path, "HybridPluginAll")) break;
                if (parseBaseURI(_path, "bootloader.js")) break;
                if (!window.WebSquareExternal.baseServletURI) { // baseServletURII가 설정되어 있으면 wq경로를 참고해서 baseURI를 생성하면 안된다.
                    if (parseBaseURI(_path, "javascript.wq?q=/bootloader")) break;
                    if (parseBaseURI(_path, "javascriptPluginAll.wq?q=/bootloader")) break;
                }
            }
            if (_wg.baseURI == "") {
                if (location.protocol != "file:") {
                    var _idx = location.pathname.lastIndexOf("/");
                    if (_idx > -1) {
                        _wg.baseURI = location.pathname.substring(0, _idx + 1);
                        if (_wg.baseURI.charAt(0) != "/") {
                            _wg.baseURI = "/" + _wg.baseURI;
                        }
                    } else {
                        _idx = location.pathname.lastIndexOf("\\");
                        if (_idx > -1) {
                            _wg.baseURI = location.pathname.substring(0, _idx + 1);
                        } else {
                            _wg.baseURI = "./";
                        }
                    }
                } else {
                    var _idx = location.pathname.lastIndexOf("/");
                    if (_idx > -1) {
                        _wg.baseURI = location.pathname.substring(0, _idx + 1);
                    } else {
                        _idx = location.pathname.lastIndexOf("\\");
                        if (_idx > -1) {
                            _wg.baseURI = location.pathname.substring(0, _idx + 1);
                        } else {
                            _wg.baseURI = "./";
                        }
                    }
                    _wg.baseURI = "file://" + _wg.baseURI;
                }
            } else {
                if (location.protocol != "file:") {
                    if (location.pathname.indexOf("/") > -1) {
                        var uriArray = _wg.baseURI.split("/");
                        if (uriArray.length > 0 && (uriArray[0] == ".." || uriArray[0] == ".")) {
                            var locationArray = location.pathname.split("/");
                            locationArray.pop();
                            for (var i = 0; i < uriArray.length; i++) {
                                if (uriArray[i] == "..") {
                                    locationArray.pop();
                                } else if (uriArray[i] != ".") {
                                    uriArray = uriArray.slice(i);
                                    break;
                                }
                            }
                            _wg.baseURI = locationArray.join("/") + "/" + uriArray.join("/");
                            if (_wg.baseURI.charAt(0) != "/") {
                                _wg.baseURI = "/" + _wg.baseURI;
                            }
                        }
                    } else if (location.pathname.indexOf("\\") > -1) {
                        var uriArray = _wg.baseURI.split("\\");
                        if (uriArray.length > 0 && (uriArray[0] == ".." || uriArray[0] == ".")) {
                            var locationArray = location.pathname.split("\\");
                            locationArray.pop();
                            for (var i = 0; i < uriArray.length; i++) {
                                if (uriArray[i] == "..") {
                                    locationArray.pop();
                                } else if (uriArray[i] != ".") {
                                    uriArray = uriArray.slice(i);
                                    break;
                                }
                            }
                            _wg.baseURI = locationArray.join("\\") + "\\" + uriArray.join("\\");
                        }
                    }
                } else {
                    if (location.pathname.indexOf("/") > -1) {
                        var uriArray = _wg.baseURI.split("/");
                        if (uriArray.length > 0 && (uriArray[0] == ".." || uriArray[0] == ".")) {
                            var locationArray = location.pathname.split("/");
                            locationArray.pop();
                            for (var i = 0; i < uriArray.length; i++) {
                                if (uriArray[i] == "..") {
                                    locationArray.pop();
                                } else if (uriArray[i] != ".") {
                                    uriArray = uriArray.slice(i);
                                    break;
                                }
                            }
                            _wg.baseURI = "file://" + locationArray.join("/") + "/" + uriArray.join("/");
                        }
                    } else if (location.pathname.indexOf("\\") > -1) {
                        var uriArray = _wg.baseURI.split("\\");
                        if (uriArray.length > 0 && (uriArray[0] == ".." || uriArray[0] == ".")) {
                            var locationArray = location.pathname.split("\\");
                            locationArray.pop();
                            for (var i = 0; i < uriArray.length; i++) {
                                if (uriArray[i] == "..") {
                                    locationArray.pop();
                                } else if (uriArray[i] != ".") {
                                    uriArray = uriArray.slice(i);
                                    break;
                                }
                            }
                            _wg.baseURI = locationArray.join("\\") + "\\" + uriArray.join("\\");
                        }
                    }
                }
            }
            if (window.WebSquareExternal.baseServletURI) {
                _wg.baseServletURI = window.WebSquareExternal.baseServletURI;
            } else {
                if (_wg.hybridApp == true) {
                    _wg.baseServletURI = "";
                } else {
                    _wg.baseServletURI = _wg.baseURI;
                }
            }
        } else {
            _wg.baseURI = window.WebSquareExternal.baseURI;
            if (window.WebSquareExternal.baseServletURI) {
                _wg.baseServletURI = window.WebSquareExternal.baseServletURI;
            } else {
                _wg.baseServletURI = _wg.baseURI;
            }
        }
        _wg._resourceURI = _wg.baseURI + "_websquare_/";
    } catch (e) {
        console.error("websquare baseURI init error.",e);
    }
})();
// ==================
//      function
// ==================
_wg.loadErrorHandler = function(errorInfo) {
    var errorCode = errorInfo.code;
    var errorMsg = errorInfo.msg;
    switch (errorCode) {
        case "E_initializer_XMLLoadFailError": //"W2X 파일을 읽어들이는데 실패했습니다. 경로를 확인하세요. URL [ %1 ]"
        case "E_initializer_XMLLoadFailError1": //"읽어들인 W2X 파일을 처리하는데 실패했습니다. URL [ %1 ]"
            var funcStr = _wg.core.getConfiguration("/WebSquare/loadErrorHandler/@value");
            if (funcStr != null && funcStr != "") {
                funcStr = funcStr.replace("()", "");
                var func = _wg.util.getGlobalFunction(funcStr);
                if (typeof func === "function") {
                    func(errorInfo);
                } else {
                    alert(errorMsg);
                }
            } else {
                alert(errorMsg);
            }
            break;
        default:
            break;
    }
};
/**
 * @method  WebSquare
 * @name    clearMemory
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  명시적으로 메모리의 캐싱을 날려서 초기화 한다.
 *  openAPI지만 꼭 필요할 때만 사용하도록 한다.
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
/* istanbul ignore next */
_wg.clearMemory = function() {
    ["_wg.clearMemory"];
    try {
        var ret;
        try {
            var stack = [self]; // tree iterative search를 위한 스택.
            var queue = [];
            for (var prevent_loop = 0; prevent_loop < 10000; prevent_loop++) {
                if (stack.length <= 0) {
                    break;
                }
                var size = stack.length;
                for (var i = 0; i < size; i++) {
                    try {
                        var tempWindow = stack.shift();
                        if (prevent_loop > 0) {
                            queue.push(tempWindow);
                        }
                        for (var j = 0; j < tempWindow.window.length; j++) { // window length 체크 시 frames.length로 접근하는것은 위험함. 특히 IE. 
                            try {
                                if (typeof tempWindow.frames[j].WebSquare !== "undefined" && tempWindow.frames[j]._wg.remove !== true) {
                                    stack.push(tempWindow.frames[j]);
                                }
                            } catch (e) {
                                _wg.logger.printLog("WebSquare frameClick fail");
                            }
                        }
                    } catch (e) {
                        _wg.logger.printLog("WebSquare frameClick fail [ " + e.message + " ]");
                    }
                }
            }
            for (var prevent_loop2 = 0; prevent_loop2 < 10000; prevent_loop2++) {
                if (queue.length <= 0) {
                    break;
                }
                try {
                    var tempWindow = queue.pop();
                    if (tempWindow.WebSquare && tempWindow._wg.remove !== true) {
                        tempWindow._wg.clearMemory();
                    }
                } catch (e) {
                    _wg.logger.printLog("WebSquare frameClick fail [ " + e.message + " ]");
                }
            }
            for (var i = 0; i < stack.length; i++) {
                stack[i] = null; // 일반적으로는 실행되지 않는 코드이나 예외가 발생할 경우에 실행될 가능성이 있음.
            }
            for (var i = 0; i < queue.length; i++) {
                queue[i] = null; // 일반적으로는 실행되지 않는 코드이나 예외가 발생할 경우에 실행될 가능성이 있음.
            }
            stack = null;
            queue = null;
        } catch (e) {
            _wg.logger.printLog("clearMemory fail");
        }
        if (WebSquare && _wg.core) {
            if (!_wg.core.firePageunload && !_wg.core.onurlchange && _wg.body) {
                _wg.core.firePageunload = true;
                _wg.event.fireEvent(_wg.getBody(), "onpageunload");
            }
            var userAfterFunction = _wg.core.getConfiguration("/WebSquare/clearMemory/@userAfterFunction");
            _wg.core.clearCommon();
        }
        try {
            if ("onhashchange" in window) {
                window.onhashchange = null;
            } else {
                clearInterval(_wg.util._hashTestKey);
                if (_wg.util._hiddenFrame) {
                    _wg.removeNode(_wg.util._hiddenFrame);
                    _wg.util._hiddenFrame = null;
                }
            }
        } catch (e) {
            _wg.logger.printLog("error : clear historyFrame exception");
            _wg.exception.printStackTrace(e, null, this);
        }
        // 현재 웹스퀘어에서 최상위 컴포넌트인 body의 remove() 함수를 호출한다.
        if (WebSquare && _wg.body) {
            //_wg.getBody().remove(true);
            _wg.getBody().remove();
            //document.body.innerHTML = "";
        }
        if (WebSquare && _wg.strictModeFrame) {
            _wg.strictModeFrame.remove();
            _wg.strictModeFrame = null;
        }
        for (var i in WebSquare) {
            WebSquare[i] = null;
            delete WebSquare[i];
        }
        if (typeof window["imports"] != "undefined") {
            window["imports"] = null;
        }
        if (typeof window["requires"] != "undefined") {
            window["requires"] = null;
        }
        if (typeof $W._a != "undefined") {
            $W._a = null;
        }
        if (typeof _$W._a != "undefined") {
            _$W._a = null;
        }
        if (typeof window["$W"] != "undefined") {
            window["$W"] = null;
        }
        if (typeof window["_$W"] != "undefined") {
            window["_$W"] = null;
        }
        WebSquare = null;
        // delete WebSquare를 호출하면 아래에서 객체가 생성되지 않는 문제가 발생하였음.
        window["_$W"] = window["$W"] = window["WebSquare"] = {
            "logger": {
                "printLog": function() {}
            },
            "exception": {
                "printStackTrace": function() {}
            },
            "timerHash": {},
            "remove": true
        };
        try {
            if (userAfterFunction) {
                ret = window[userAfterFunction]();
            }
        } catch (e) {
            _wg.exception.printStackTrace(e, null, this);
        }
        return ret;
    } catch (e) {
        _wg.exception.printStackTrace(e, null, this);
    }
};
/**
 * @method  WebSquare
 * @name    extend
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};
/**
 * @method  WebSquare
 * @name    extendKeepingType
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.extendKeepingType = function(destination, source) {
    for (var property in source) {
        var value = source[property];
        switch (typeof destination[property]) {
            case "string":
                // string 기반에서는 source의 value가 ""이면 덮어쓰지 않는다
                if (value == "") {
                    continue;
                }
                // $blank 예약어 처리. 
                if (value == "$blank") {
                    value = "";
                }
                break;
            case "number":
                if (value && value.toString().indexOf(".") > -1) {
                    value = parseFloat(value);
                } else {
                    value = parseInt(value, 10);
                }
                break;
            case "boolean":
                value = WebSquare.util.getBoolean(value);
                break;
        }
        destination[property] = value;
    }
    return destination;
};
/**
 * @method  WebSquare
 * @name    setBody
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.setBody = function(control /*id?*/ ) {
    // _wg.bodyControlList.push(control); 어차피 body는 1개만 허용된다. 굳이 배열로 만들필요가 없음.
    _wg.body = control;
};
/**
 * @method  WebSquare
 * @name    getBody
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.getBody = function( /*id?*/ ) {
    return _wg.body;
    //      alert("no body!!!")
};
/**
 * @method  WebSquare
 * @name    _discardElement
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg._discardElement = function(element) {
    // removeChild()를 대신하기 위한 함수.
    // removeChild()의 경우 memory leak이 발생하므로 innertHTML = ""를 이용해서 node를 삭제하도록 함
    var garbageBin = document.getElementById('IELeakGarbageBin');
    if (!garbageBin) {
        garbageBin = document.createElement('DIV');
        garbageBin.id = 'IELeakGarbageBin';
        garbageBin.style.display = 'none';
        document.documentElement.appendChild(garbageBin);
    }
    garbageBin.appendChild(element);
    garbageBin.innerHTML = "";
};
/**
 * @method  WebSquare
 * @name    removeChildren
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.removeChildren = function(node) {
    if (node === undefined || node === null || !node.childNodes) {
        return -1;
    }
    var count = node.childNodes.length;
    while (node.hasChildNodes()) {
        _wg.removeNode(node.firstChild);
    }
    return count;
};
/**
 * @method  WebSquare
 * @name    removeNode
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @param   <Node:Y>    node    node
 * @see
 * @return  
 * @exception   
 * @sample  
 * @hidden  true
 * @deprecated  
 */
_wg.removeNode = function(node) {
    //IE 9이후 부터는 removeChild를 사용한다.
    if (_wg.util.isIE() && parseInt(_wg.core.browserVersion(), 10) < 8) {
        _wg._discardElement(node);
        return node;
    } else {
        if (node && node.parentNode) {
            return node.parentNode.removeChild(node);
        }
    }
};
/**
 * @method  WebSquare
 * @name    initialize
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  WebSquare Engine 구동함수.
 *  XML 경로를 받아 _wg.WebSquaredoc에 Document를 저장한 후 parsing.
 *  _wg.initialize에서 _wg.WebSquaredoc.parsing()을 실행하고 나면 
 *  이전에는 반환값으로 바로 script를 실행하였으나, 
 *  WebSquareDocument에서 렌더링 이후 startOnLoad를 바로 실행합니다.
 *  렌더링을 setTimeout으로 하기 때문에 initialize이후에 바로 스크립트 실행을 하면 안됩니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.initialize = async function(url, spa) {
    ["_wg.initialize"];
    if (!url) {
        var temp_url = _wg.util.getUrlHashText();
        if (temp_url) {
            url = temp_url;
        } else {
            if ("onhashchange" in window && window.onhashchange == null) {
                window.onhashchange = _wg.util.onhashchange;
            }
            return true;
        }
    }
    _wg.core._initDataObject();
    await _wg.date._initServerDiff();
    var allValue = _wg.core.getConfiguration("/WebSquare/allValue/@value");
    if (allValue == "$blank") {
        _wg.allValue = "";
    } else {
        _wg.allValue = allValue || "all";
    }
    _wg.dataPrefix = _wg.core.getConfiguration("/WebSquare/dataPrefix/@value") == "true" ? true : false;
    _wg.tabOrder = {};
    _wg.initStyle = {};
    if (_wg.strictMode && _wg.strictModeFrame == null) {
        var useInitScript = _wg.util.getBoolean(_wg.core.getConfiguration("/WebSquare/initScript/@value")) && _wg.w2xPath !== _wg.net.getBlankXML();
        var usePostScript = _wg.util.getBoolean(_wg.core.getConfiguration("/WebSquare/postScript/@value")) && _wg.w2xPath !== _wg.net.getBlankXML();
        var initScript = "";
        var postScript = "";
        var strictId = _wg.core.getConfiguration("/WebSquare/strictMode/@id");
        if (useInitScript) {
            initScript = _wg.core.getConfigurationJSON("/WebSquare/initScript", {
                "type": "json"
            });
            if (initScript["#cdata"]) {
                initScript = initScript["#cdata"];
                if (typeof initScript === "function") {
                    initScript = "(" + initScript.toString() + ")()"; // 임시방편. eval하지 않도록 추후 개선 필요
                    initScript = _wg.util.scopingFuncBody(initScript, strictId, true);
                }
            }
        }
        if (usePostScript) {
            postScript = _wg.core.getConfigurationJSON("/WebSquare/postScript", {
                "type": "json"
            });
            if (postScript["#cdata"]) {
                postScript = postScript["#cdata"];
                if (typeof postScript === "function") {
                    postScript = "(" + postScript.toString() + ")()"; // 임시방편. eval하지 않도록 추후 개선 필요
                    postScript = _wg.util.scopingFuncBody(postScript, strictId, true);
                }
            }
        }
        var tempPrefix = _wg.UUIDPrefix;
        var tempUUID = _wg.UUID;
        _wg.UUIDPrefix = "wq_strict";
        var msaName = "";
        var src = "";
        if (url.indexOf("://") >= 0) {
            for (var item in _wg.core._msaServerHash) {
                var msaOrigin = _wg.core._msaServerHash[item].origin;
                if (url.startsWith(msaOrigin)) {
                    msaName = item;
                    src = url;
                    break;
                }
            }
        }
        _wg.strictModeFrame = _wg.controlFactory.create(strictId, {
            pluginName: "wframe",
            scope: true,
            scopeExternal: true,
            strictFrame: true,
            initScript: initScript,
            postScript: postScript,
            msaName: msaName,
            src: src
        }, null, null, null, true);
        _wg.UUIDPrefix = tempPrefix;
        _wg.UUID = tempUUID;
    }
    var pageFaultMsg = "",
        xmlDoc;
    if (_wg.WebSquaredoc == null) {
        try {
            if (_wg.pageXMLString) {
                xmlDoc = _wg.pageXMLString;
                _wg.pageXMLString = null;
            } else {
                var pageURL = _wg.core.getPageURL(url, {
                    "skipURL": true,
                    "skipUri": true
                });
                if (!pageURL) {
                    return true;
                }
                xmlDoc = await _wg.jsLoader._loadObj(pageURL);
            }
            if (xmlDoc != null && xmlDoc !== "loadError") {
                await _wg.jsLoader.start(xmlDoc, {
                    "spa": spa
                });
                return true;
            } else {
                pageFaultMsg = _wg.core.getConfiguration("/WebSquare/pageFaultMsg/@value");
                if (pageFaultMsg != "false") {
                    _wg.loadErrorHandler({
                        code: "E_initializer_XMLLoadFailError",
                        msg: _wg.language.getMessage("E_initializer_XMLLoadFailError", _wg.jsLoader.getUri(url))
                    });
                }
            }
        } catch (e) {
            if (pageFaultMsg != "false") {
                _wg.loadErrorHandler({
                    code: "E_initializer_XMLLoadFailError1",
                    msg: _wg.language.getMessage("E_initializer_XMLLoadFailError1", url)
                });
            }
            _wg.exception.printStackTrace(e);
            //throw e;
        }
    }
    return false;
};
_wg.initializeByJSON = async function(jsonObj) {
    return await _wg.jsLoader.start(jsonObj, {
        "type": "js"
    });
}
/**
 * @method  WebSquare
 * @name    startPopupApplication
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  popup으로 열었을때 웹스퀘어를 실행하는 main함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startPopupApplication = async function(src) {
    return _wg.startApplication(src);
};
/**
 * @method  WebSquare
 * @name    startPopupApplication1
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  popup으로 열었을때 debug mode일때 불리는 startPopupApplication함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startPopupApplication1 = async function(src) {
    return _wg.startApplication1(src);
};
/**
 * @method  WebSquare
 * @name    startPopupApplication2
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  popup으로 열었을때 debug mode가 아닐때 불리는 startPopupApplication함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startPopupApplication2 = async function(src) {
    ["_wg.startPopupApplication2"];
    return _wg.startApplication2(src);
};
/**
 * @method  WebSquare
 * @name    startApplication
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  WebSquare 시작시 _wg.html 에서 Engine 호출 함수            
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startApplication = async function(src, bSkip) {
    ["_wg.startApplication"];
    _wg.nowRendering = true;
    await _wg.BootLoader._initImport();
    if (_wg.core.getConfiguration("/WebSquare/localStorage/@defer") == 'true') {
        _wg.createLocalStorage();
    }
    var systemPreProcessor = _wg.core.getConfiguration("/WebSquare/preProcessor/systemPreProcessor/@value");
    var func = _wg.util.getGlobalFunction(systemPreProcessor);
    if (typeof func === "function") {
        var ret = func();
        if (ret == false) {
            return;
        }
    }
    await _wg.setMsaLanguagePack();
    await _wg.startApplication1(src, bSkip);
};
/**
 * @method  WebSquare
 * @name    initializeComponent
 * @cdate   2015-07-22
 * @version 5.0 
 * @author  
 * @description 
 *  WebSquare 시작시 _wg.html 에서 Engine 호출 함수            
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.initializeComponent = function(src, targetInfo) {
    ["_wg.initializeComponent"];
    if (_wg.WebSquaredoc != null) {
        _wg.initializeComponent_wframe(src, targetInfo);
        return;
    }
    _wg.nowRendering = true;
    if (_wg.core.getConfiguration("/WebSquare/localStorage/@defer") == 'true') {
        _wg.createLocalStorage(window);
    }
    //  _wg.event.addListener( window , "onbeforeunload" , _wg.event.clear);
    //  window.onbeforeunload = _wg.event.clear;
    var systemPreProcessor = _wg.core.getConfiguration("/WebSquare/preProcessor/systemPreProcessor/@value");
    var func = _wg.util.getGlobalFunction(systemPreProcessor);
    if (typeof func === "function") {
        var ret = func();
        if (ret == false) {
            return;
        }
    }
    _wg.setLanguagePack();
    if (src) {
        _wg.targetInfo = targetInfo;
        _wg.w2xPath = src;
    } else if (_wg.net.getParameter("w2xPath") != "") {
        _wg.w2xPath = _wg.net.getParameter("w2xPath");
    }
    // 2번 호출
    //_wg._loadCSS();
    // false logic 안에 message를 감춰놓음. 나중에 소스 유출 시 우리 소스인지 검사용
    if (1 == 2) {
        var MyMessage = "ErtOqpezr Ukptvqtzp IIWENNA Stwbreo Agp Zvydtn Vmfwnvzh";
    }
    var re = /[\\]/g; //Initialize pattern.
    _wg.w2xPath = _wg.w2xPath.replace(re, "/");
    var lastIndexOfSlash = _wg.w2xPath.lastIndexOf("/");
    var external_w2xHome = "";
    var external_w2xDocumentRoot = "";
    if (typeof WebSquareExternal == "object" && WebSquareExternal != null) {
        external_w2xHome = WebSquareExternal.w2xHome || "";
        external_w2xDocumentRoot = WebSquareExternal.w2xDocumentRoot || "";
    }
    if (external_w2xHome == "" && _wg.net.getParameter("w2xHome") == "") {
        if (lastIndexOfSlash > -1) {
            _wg.w2xHome = _wg.w2xPath.substring(0, lastIndexOfSlash + 1);
        } else {
            _wg.w2xHome = "/";
        }
    } else {
        _wg.w2xHome = external_w2xHome || _wg.net.getParameter("w2xHome");
    }
    if (lastIndexOfSlash > -1) {
        _wg.logFileName = " " + _wg.w2xPath.substring(lastIndexOfSlash + 1);
    } else {
        _wg.logFileName = " " + _wg.w2xPath;
    }
    /* configDocumentRoot : config.xml에서 읽어온 DocumentRoot 값
     * paranDocumentRoot  : w2xDocument 형식으로 url 에서 읽어온 DocumentRoot 값
     * 두 함수 모두 값이 없을경우 기본값으로 ""를 리턴하므로 에러걱정하지 않아도 됨
     * 
     * 우선순위 : param > config > 기본값(이 경우 ""(공백)
     * 1. param이 / \\ 등 root를 의미할경우 DocumentRoot 의미가 없으므로 "" 대입(기본적으로 \에서 찾으니까)
     * 2. 그 외의 param이 있을 경우 대입
     * 3. param이 없을 경우 config 가 있으면 config 대입, 없으면 "" 대입         * 
     */
    var configDocumentRoot = _wg.core.getConfiguration("/WebSquare/DocumentRoot");
    var paramDocumentRoot = external_w2xDocumentRoot || _wg.net.getParameter("w2xDocumentRoot");
    if (paramDocumentRoot == "/" || paramDocumentRoot == "\\") {
        _wg.w2xDocumentRoot = "";
    } else if (paramDocumentRoot != "") {
        _wg.w2xDocumentRoot = paramDocumentRoot;
    } else {
        if (configDocumentRoot != null && configDocumentRoot != "") {
            _wg.w2xDocumentRoot = configDocumentRoot;
        } else {
            _wg.w2xDocumentRoot = "";
        }
    }
    _wg.logger.printLog("w2xDocumentRoot[" + _wg.w2xDocumentRoot + "]");
    _wg.logger.printLog("w2xHome        [" + _wg.w2xHome + "]");
    _wg.logger.printLog("w2xPath        [" + _wg.w2xPath + "]");
    _wg.logger.printLog("w2xTheme       [" + _wg.w2xTheme + "]");
    _wg.initialize(_wg.w2xPath);
};
_wg.initializeComponent_wframe = async function(src, targetInfo) {
    ["_wg.initializeComponent_wframe"];
    try {
        requires("uiplugin.wframe");
        var wframeComp = new _wg.uiplugin.wframe(_wg.UUIDPrefix + "_" + _wg.UUID++, {
            src: src
        });
        await wframeComp.makeFrame();
        wframeComp.createFlag = true;
        var script = wframeComp.frameDoc.scriptSection;
        if (wframeComp.wframeScript.length > 0) {
            for (var i = 0; i < wframeComp.wframeScript.length; i++) {
                script += wframeComp.wframeScript[i];
            }
        }
        _wg.BootLoader.globalEval(script);
        wframeComp.frameDoc.scriptSection = "";
        wframeComp.setAction();
        for (var i = 0; i < targetInfo.length; i++) {
            var obj = targetInfo[i];
            var target_uuid = _wg.idToUUID[obj.component];
            if (target_uuid && _wg.idCache[target_uuid] != undefined) {
                var target_dom = obj.target;
                if (typeof target_dom === "string") {
                    target_dom = document.getElementById(target_dom);
                }
                var targetComp = _wg.idCache[target_uuid];
                _wg.core._safeInnerHTML(target_dom, targetComp.toHTML());
                targetComp.activate();
                targetComp.onComplete();
            }
        }
    } catch (e) {
        _wg.exception.printStackTrace(e, null);
    }
};
/**
 * @method  WebSquare
 * @name    startApplication1
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  debug mode일때 불리는 startApplication함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startApplication1 = async function(src, bSkip) {
    ["_wg.startApplication1"];
    var temp = "";
    if (src) {
        _wg.w2xPath = src;
    } else if ((temp = _wg.net.getParameter("w2xPath")) != "") {
        _wg.w2xPath = temp;
    } else if ((temp = _wg.net.getParameter("wq_spaParam")) != "") {
        try {
            var org_src = parent._wg.idCache[temp].render.getAttribute("src").slice(0);
            var _index = org_src.lastIndexOf("w2xPath");
            if (_index >= 0) {
                var tmpStr = org_src.slice(_index);
                tmpStr = tmpStr.split(/[\&\?\#]/)[0];
                var tmpArray = tmpStr.split("=");
                if (tmpArray.length == 2) {
                    _wg.w2xPath = (tmpArray[1]).wq_trim();
                }
            } else {
                _wg.w2xPath = _wg.core.getConfiguration("/WebSquare/welcome-file/@value");
            }
        } catch (e) {
            _wg.w2xPath = _wg.core.getConfiguration("/WebSquare/welcome-file/@value");
        }
    } else {
        _wg._styleSheetEarlyImportListLoaded = true;
        _wg.w2xPath = _wg.core.getConfiguration("/WebSquare/welcome-file/@value");
    }
    // false logic 안에 message를 감춰놓음. 나중에 소스 유출 시 우리 소스인지 검사용
    if (1 == 2) {
        var MyMessage = "ErtOqpezr Ukptvqtzp IIWENNA Stwbreo Agp Zvydtn Vmfwnvzh";
    }
    var re = /[\\]/g; //Initialize pattern.
    _wg.w2xPath = _wg.w2xPath.replace(re, "/");
    var lastIndexOfSlash = _wg.w2xPath.lastIndexOf("/");
    var external_w2xHome = "";
    var external_w2xDocumentRoot = "";
    if (typeof WebSquareExternal == "object" && WebSquareExternal != null) {
        external_w2xHome = WebSquareExternal.w2xHome || "";
        external_w2xDocumentRoot = WebSquareExternal.w2xDocumentRoot || "";
    }
    if (external_w2xHome == "" && _wg.net.getParameter("w2xHome") == "") {
        if (lastIndexOfSlash > -1) {
            _wg.w2xHome = _wg.w2xPath.substring(0, lastIndexOfSlash + 1);
        } else {
            _wg.w2xHome = "/";
        }
    } else {
        _wg.w2xHome = external_w2xHome || _wg.net.getParameter("w2xHome");
    }
    if (lastIndexOfSlash > -1) {
        _wg.logFileName = " " + _wg.w2xPath.substring(lastIndexOfSlash + 1);
    } else {
        _wg.logFileName = " " + _wg.w2xPath;
    }
    /* configDocumentRoot : config.xml에서 읽어온 DocumentRoot 값
     * paranDocumentRoot  : w2xDocument 형식으로 url 에서 읽어온 DocumentRoot 값
     * 두 함수 모두 값이 없을경우 기본값으로 ""를 리턴하므로 에러걱정하지 않아도 됨
     * 
     * 우선순위 : param > config > 기본값(이 경우 ""(공백)
     * 1. param이 / \\ 등 root를 의미할경우 DocumentRoot 의미가 없으므로 "" 대입(기본적으로 \에서 찾으니까)
     * 2. 그 외의 param이 있을 경우 대입
     * 3. param이 없을 경우 config 가 있으면 config 대입, 없으면 "" 대입         * 
     */
    var configDocumentRoot = _wg.core.getConfiguration("/WebSquare/DocumentRoot");
    var paramDocumentRoot = external_w2xDocumentRoot || _wg.net.getParameter("w2xDocumentRoot");
    if (paramDocumentRoot == "/" || paramDocumentRoot == "\\") {
        _wg.w2xDocumentRoot = "";
    } else if (paramDocumentRoot != "") {
        _wg.w2xDocumentRoot = paramDocumentRoot;
    } else {
        if (configDocumentRoot != null && configDocumentRoot != "") {
            _wg.w2xDocumentRoot = configDocumentRoot;
        } else {
            _wg.w2xDocumentRoot = "";
        }
    }
    _wg.logger.printLog("w2xDocumentRoot[" + _wg.w2xDocumentRoot + "]");
    _wg.logger.printLog("w2xHome        [" + _wg.w2xHome + "]");
    _wg.logger.printLog("w2xPath        [" + _wg.w2xPath + "]");
    _wg.logger.printLog("w2xTheme       [" + _wg.w2xTheme + "]");
    if (_wg.w2xPath == _wg.net.getBlankXML()) {
        if (!("onhashchange" in window)) {
            if (_wg.util._hiddenFrame) {
                if (document.getElementById(_wg.util._hiddenFrame.id) == null) {
                    document.body.appendChild(_wg.util._hiddenFrame);
                }
            } else {
                _wg.util._makeFrame();
            }
            _wg.util._iframe_wait = true;
            _wg.util._hiddenFrame.contentWindow.location.search = _wg.w2xPath;
        }
        if ("onhashchange" in window) {
            window.onhashchange = _wg.util.onhashchange;
        } else {
            _wg.util._wait_for_iframe_reload();
        }
        return;
    }
    if (bSkip !== true) {
        if (_wg._bDocumentReady === true) {
            await _wg.initialize(_wg.w2xPath);
        } else {
            _wg._bEngineReadyBeforeOnload = true;
        }
    }
};
/**
 * @method  WebSquare
 * @name    startOnLoad
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  엔진이 다 불리고 난뒤에 script 파싱등을 하는 함수입니다.
 *  웹스퀘어의 실제 onload 이벤트에 해당하는 함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startOnLoad = function(spa) {
    ["_wg.startOnLoad"];
    _wg.jsLoader._startCallback2(spa); // sp4에서는 더 이상 사용되지 않는 함수. 하위호환을 위해 동작만 하도록 남겨둠.
};
/**
 * @method  WebSquare
 * @name    startApplication2
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  debug mode가 아닐때 불리는 startApplication함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.startApplication2 = async function(src) {
    try {
        _wg.startApplication1(src);
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
};
/**
 * @method  WebSquare
 * @name    setLanguagePack
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.setLanguagePack = function() {
    if (!_wg.useUserSystemLang) {
        _wg.useLanguagePack = _wg.core.getConfiguration("/WebSquare/languagePack/@useLanguagePack");
        if (_wg.useLanguagePack == "true") {
            var lang = _wg.BootLoader.getBrowserLanguage();
            _wg.loagLanguagePack(lang);
            _wg.systemLanguage = lang;
        } else {
            _wg.WebSquareLang = {};
        }
    }
};
_wg.setMsaLanguagePack = async function() {
    try {
        if (!_wg.useUserSystemLang) {
            _wg.useLanguagePack = _wg.core.getConfiguration("/WebSquare/languagePack/@useLanguagePack");
            if (_wg.useLanguagePack == "true") {
                var lang = _wg.BootLoader.getBrowserLanguage();
                await _wg.loagLanguagePack(lang);
                await _wg.msaLoagLanguagePack(lang);
                _wg.systemLanguage = lang;
            } else {
                _wg.WebSquareLang = {};
            }
        }
    } catch(e) {
        _wg.exception.printStackTrace(e);
    }
};
/**
 * @method  WebSquare
 * @name    loagLanguagePack
 * @cdate   2009-12-11
 * @version 2.0 
 * @author  
 * @description 
 *  langpack을 load하는 함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.loagLanguagePack = function(lang) {
    try {
        var lang = _wg.cookie.getCookie("system_language") || lang;
        if (!lang || lang === "null" || lang === "undefined") {
            lang = "ko";
        }
        var loadFileUrl = _wg.core.getConfiguration("/WebSquare/languagePack/url[@lang='" + lang + "']/@value");
        return imports(loadFileUrl);
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}

/**
 * @method  WebSquare
 * @name    msaLoagLanguagePack
 * @cdate   2024-03-06
 * @version 5.0 
 * @author  
 * @description 
 *  MSA langpack을 load하는 함수입니다.
 * @return  
 * @exception
 * @sample 
 * @hidden  true
 * @deprecated
 */
_wg.msaLoagLanguagePack = function(lang) {
    try {
        var promiseObj = Promise.resolve();
        var msaUrl = _wg.core.getChildConfiguration("/WebSquare/msaLanguagePack", {
            "singleMode": true
        });
        var promiseArr = [];
        for (var i = 0; i < msaUrl.length; i++) {
            if (msaUrl[i]["@lang"] !== lang || !msaUrl[i]["@msaName"]) {
                continue;
            }
            var opt = {
                "msaName": msaUrl[i]["@msaName"]
            };
            var url = _wg.core.getURL(msaUrl[i]["@value"], opt);
            url = url.replace(/(http:\/\/|https:\/\/)(.*?)(\/\/+)/g, function(match, p1, p2, p3) {
                return p1 + p2 + p3.replace(/\/\/+/g, '/');
            });
            try {
                var promiseObj = _wg.BootLoader.loadAsync(url);
                if (promiseObj instanceof window.Promise) { 
                    promiseArr.push(promiseObj);
                }
            } catch (e) {
                _wg.exception.printStackTrace(e);
            }
        }
        if (promiseArr.length > 0) {
            promiseObj = Promise.allSettled(promiseArr).then(async function(resultArr) {
                for (var i = 0; i < resultArr.length; i++) {
                    if (resultArr[i].status === "rejected" && resultArr[i].reason) {
                        console.error(resultArr[i].reason);
                        continue;
                    }
                    if (resultArr[i].status !== "fulfilled" || !resultArr[i].value) {
                        continue;
                    }
                    var moduleStr = resultArr[i].value;
                    if (typeof moduleStr === "string" && moduleStr.indexOf("{") > -1) {
                        var moduleIdx = moduleStr.indexOf("{");
                        var msaLangObj = JSON.parse(moduleStr.slice(moduleIdx));
                        if (!_wg.WebSquareLang) {
                            _wg.WebSquareLang = {};
                        }
                        _wg.extend(_wg.WebSquareLang, msaLangObj);
                    }
                }
            }).catch(function(err) {
                console.error(err);
            });
        }
        return promiseObj;
    } catch (e) {
        _wg.exception.printStackTrace(e);
        return Promise.resolve();
    }
};
_wg.addMark = function(name) {
    if (!window._fCoverage) {
        try {
            if (parent != window && parent._fCoverage) {
                window._fCoverage = parent._fCoverage;
            } else if (typeof window.opener != 'undefined' && window.opener != null && !window.opener.closed && window.opener._fCoverage) {
                window._fCoverage = opener._fCoverage;
            } else {
                window._fCoverage = {};
            }
        } catch (e) {
            window._fCoverage = {};
        }
    }
    if (typeof _fCoverage[name] != "undefined") {
        _fCoverage[name]++;
    } else {
        _fCoverage[name] = 1;
    }
};
_wg.ax_logger = function(log_str) {};
_wg._loadCSS = async function(options) {
    // css 미리 로딩
    var external = {};
    if (typeof WebSquareExternal == "object" && WebSquareExternal != null) {
        external = WebSquareExternal;
    }
    var _head = _wg.document.getElementsByTagName('head')[0];
    var isSPA = options && options.isSPA;
    var _tempRoot = "";
    var _tempHome = "";
    if (_wg.styleSheetEarlyImport > 0) {
        if (_wg.styleSheetEarlyImport == 2) {
            var style = document.createElement('link');
            var styleCacheURL = "";
            if (_wg.WebSquareEngineCache == true) {
                styleCacheURL = _wg.BootLoader.getEngineCachePostfix(_wg.styleSheetEarlyImportName);
            } else {
                styleCacheURL = _wg.BootLoader.getRandomPostfix(_wg.styleSheetEarlyImportName);
            }
            var stylePath = _wg.BootLoader.inquiresPath("skin/");
            style.href = _wg.baseThemeURI + stylePath + styleCacheURL;
            style.type = "text/css";
            style.rel = "stylesheet";
            _head.appendChild(style);
            _wg.logger.printLog("import core css : " + style.href);
        }
        // xml에 포함된 css를 미리 로딩하기 위해 w2xPath로 지정된 xml파일을 미리 한 번 로딩한다.
        var adaptive = _wg.net.getParameter("adaptive") || "";
        var explicitPath = options && options.w2xPath;
        var url = explicitPath || external.w2xPath || _wg.net.getParameter("w2xPath") || _wg.w2xPath || _wg.core.getConfiguration("/WebSquare/welcome-file/@value");
        if (url == "") {
            return;
        }
        var re = /[\\]/g;
        url = url.replace(re, "/");
        var retText = "";
        var pageURL = _wg.core.getPageURL(url, {
            "skipURL": true,
            "skipUri": true
        });
        if (_wg.hybridApp == true && pageURL.indexOf("://") < 0 && pageURL.startsWith('/')) {
            pageURL = _wg.util.appendingPathComponent(_wg.w2xDocumentRoot, pageURL);
        }
        var retText;
        if (_wg._async !== true) {
            var retText = await _wg.jsLoader.load(pageURL, {
                "useXML": true, // && 인코딩 처리
                "skipError": true
            });
        }
        var temp_remainder = [];
        if (retText && _wg.jsLoader.getPageTypeByString(retText) === "xml") {
            var headerIndex = retText.indexOf("<html");
            if (headerIndex < 0) {
                headerIndex = retText.indexOf("<HTML");
                if (headerIndex < 0) {
                    headerIndex = retText.indexOf("< html");
                    if (headerIndex < 0) {
                        headerIndex = retText.indexOf("< HTML");
                    }
                }
            }
            var tempStr = "";
            if (headerIndex >= 0) {
                tempStr = retText.slice(0, headerIndex);
            } else {
                tempStr = retText;
            }
            var tempIndex = -1;
            while ((tempIndex = tempStr.indexOf("<!--")) >= 0) {
                var tempIndex2 = tempStr.indexOf("-->");
                if (tempIndex2 >= 0) {
                    tempStr = tempStr.substring(0, tempIndex) + tempStr.slice(tempIndex2 + 3);
                } else {
                    tempStr = tempStr.substring(0, tempIndex);
                }
            }
            _tempHome = external.w2xHome || _wg.net.getParameter("w2xHome");
            if (!_tempHome) {
                _tempHome = external.w2xPath || _wg.net.getParameter("w2xPath");
                var re = /[\\]/g;
                _tempHome = _tempHome.replace(re, "/");
                var _index = _tempHome.lastIndexOf("/");
                if (_index > -1) {
                    _tempHome = _tempHome.substring(0, _index + 1);
                } else {
                    _tempHome = "/";
                }
            }
            var _tempConfigRoot = _wg.core.getConfiguration("/WebSquare/DocumentRoot");
            var _paramDocumentRoot = external.w2xDocumentRoot || _wg.net.getParameter("w2xDocumentRoot");
            if (_paramDocumentRoot == "/" || _paramDocumentRoot == "\\") {
                _tempRoot = "";
            } else if (_paramDocumentRoot != "") {
                _tempRoot = _paramDocumentRoot;
            } else {
                if (_tempConfigRoot != null && _tempConfigRoot != "") {
                    _tempRoot = _tempConfigRoot;
                } else {
                    _tempRoot = "";
                }
            }
            var tempArr = tempStr.split(/xml-stylesheet/i);
            var leftTrimRegExp = new RegExp("^\\s\\s*");
            var rightTrimRegExp = new RegExp("\\s\\s*$");
            for (var i = 1; i < tempArr.length; i++) {
                var dataArr = tempArr[i].split("\"");
                dataArr.pop();
                var obj = {};
                for (var j = 0; j < dataArr.length; j += 2) {
                    obj[dataArr[j].replace(leftTrimRegExp, "").replace("=", "").replace(rightTrimRegExp, "")] = dataArr[j + 1];
                }
                if (obj.type == undefined) {
                    obj.type = "text/css";
                }
                if (obj.rel == undefined) {
                    obj.rel = "stylesheet";
                }
                if (obj.href != undefined) {
                    if (obj.href.substring(0, 1) != "/" && obj.href.substring(0, 1) != "\\") {
                        obj.href = _tempHome + obj.href;
                    }
                    if (_tempRoot != "" && obj.href.substring(0, 2) != "..") {
                        obj.href = _tempRoot + obj.href;
                    }
                }
                var isMatch = false;
                var real_href = _wg.util.getAbsolutePath(obj.href);
                for (var j = 0; j < _wg.styleSheetEarlyImportList.length; j++) {
                    if (real_href == _wg.util.getAbsolutePath(_wg.styleSheetEarlyImportList[j])) {
                        isMatch = true;
                        break;
                    }
                }
                while (_wg.externalCSSRemainder.length > 0) {
                    var temp_dom = _wg.externalCSSRemainder.shift();
                    if (real_href === _wg.util._getAbsolutePath(temp_dom.href.toString())) {
                        isMatch = true;
                        temp_remainder.push(real_href);
                        _wg.externalCSSDOM.push(temp_dom);
                        break;
                    } else {
                        temp_dom.parentNode.removeChild(temp_dom);
                    }
                }
                if (!isMatch) {
                    if (adaptive != "" && obj.adaptive) {
                        if (adaptive == obj.adaptive) {
                            _wg.externalCSSList.push(obj);
                        }
                    } else {
                        if (obj.adaptive) {
                            if (_wg.util.isMobile() && obj.adaptive == "mobile") {
                                _wg.externalCSSList.push(obj);
                            } else if (!_wg.util.isMobile() && obj.adaptive == "pc") {
                                _wg.externalCSSList.push(obj);
                            }
                        } else {
                            _wg.externalCSSList.push(obj);
                        }
                    }
                }
            }
            while (_wg.externalCSSRemainder.length > 0) {
                var temp_dom = _wg.externalCSSRemainder.shift();
                temp_dom.parentNode.removeChild(temp_dom);
            }
        }
        if (_wg._async !== true) {
            _wg.pageXMLString = retText || "loadError";
            retText = "";
        }
    }
    if ((isSPA && _wg.externalCSSList.length > 0) || ((!isSPA || (isSPA && _wg._styleSheetEarlyImportListLoaded === false)) && _wg.externalCSSList.length + _wg.styleSheetEarlyImportList.length > 0)) {
        try {
            /* istanbul ignore if */
            if (!isSPA || (isSPA && _wg._styleSheetEarlyImportListLoaded === false)) {
                _wg._styleSheetEarlyImportListLoaded = true;
                for (var i = 0; i < _wg.styleSheetEarlyImportList.length; i++) {
                    var _url = _wg.styleSheetEarlyImportList[i];
                    if (_url.substring(0, 1) != "/" && _url.substring(0, 1) != "\\") {
                        _url = _tempHome + _url;
                    }
                    if (_tempRoot != "" && _url.substring(0, 2) != "..") {
                        _url = _tempRoot + _url;
                    }
                    var _cssHref = _wg.BootLoader.getResourcePostfix(_url);
                    var _realHref = _wg.util.getAbsolutePath(_url);
                    _wg.styleSheetEarlyImportList[i] = _realHref;
                    var style = document.createElement('link');
                    style.href = _cssHref;
                    style.type = "text/css";
                    style.rel = "stylesheet";
                    _head.appendChild(style);
                    _wg.externalCSSURL.push(_realHref);
                    _wg.logger.printLog("import user css(early_common) : " + _url);
                }
            }
            for (var i = 0; i < _wg.externalCSSList.length; i++) {
                var style = document.createElement('link');
                var _obj = _wg.externalCSSList[i];
                if (!_obj || (typeof _obj != "string" && typeof _obj != "object")) {
                    continue;
                }
                if (typeof _obj == "string") {
                    var cpy = _obj;
                    _obj = {
                        "href": cpy
                    };
                }
                if (_obj.href.substring(0, 1) != "/" && _obj.href.substring(0, 1) != "\\") {
                    _obj.href = _tempHome + _obj.href;
                }
                if (_tempRoot != "" && _obj.href.substring(0, 2) != "..") {
                    _obj.href = _tempRoot + _obj.href;
                }
                var _cssHref = _wg.BootLoader.getResourcePostfix(_obj.href);
                style.href = _cssHref;
                style.type = _obj.type || "text/css";
                style.rel = _obj.rel || "stylesheet";
                _head.appendChild(style);
                _wg.externalCSSURL.push(_wg.util._getAbsolutePath(style.href.toString()));
                _wg.externalCSSDOM.push(style);
                _wg.logger.printLog("import user css(early_xml) : " + _obj.href);
            }
        } catch (e) {
            _wg.exception.printStackTrace(e, null);
        }
    }
    _head = null;
    _wg.skin.skinTag = _wg.externalCSSURL.slice(0).concat(temp_remainder);
};
_wg.createLocalStorage = function() {
    try {
        if (WebSquare["localStorage"] == undefined) {
            WebSquare["localStorage"] = (function() {
                var reservedKey = "websquare_localStorage_keyList";
                var keyDelimiter = ";";
                try {
                    if ('localStorage' in window && typeof window['localStorage'] !== "unknown" && window['localStorage'] !== null) {
                        var _storage = window['localStorage'];
                        var ret = {};
                        ret.length = _storage.length;
                        ret.key = function(index) {
                            var index = Number(index);
                            if (isNaN(index) || index >= this.length || index < 0) {
                                return null;
                            }
                            return _storage.key(index);
                        };
                        ret.getItem = function(key) {
                            return _storage.getItem(key);
                        };
                        ret.setItem = function(key, value) {
                            var ch = key.charAt(0);
                            var exp = /[a-zA-Z]/;
                            if (exp.exec(ch)) {
                                if (key === reservedKey) {
                                    $l(reservedKey + ": This key is reserved.[localStorage]");
                                    return null;
                                }
                                if (key.search(keyDelimiter) >= 0) {
                                    $l(keyDelimiter + ": The key name must not contain colon(;).[localStorage]");
                                    return null;
                                }
                                _storage.setItem(key, value);
                                this.length = _storage.length;
                            } else {
                                $l("The key name must start with [a-zA-Z][localStorage]");
                                return null;
                            }
                        };
                        ret.removeItem = function(key) {
                            _storage.removeItem(key);
                            this.length = _storage.length;
                        };
                        ret.clear = function() {
                            _storage.clear();
                            this.length = _storage.length;
                        };
                        ret.getAllItem = function() {
                            var r = {};
                            for (var key in _storage) {
                                r[key] = _storage[key];
                            }
                            return r;
                        };
                        return ret;
                    } else {
                        if (_wg.core.browserCheck.ie && _wg.core.browserVersion() < "9") {
                            var userdataKey = "websquare_localStorage";
                            var tagName = "div";
                            var ret = {};
                            //                      var initialized = false;
                            var keyStr = "";
                            var userdata = {};
                            var initialize = function() {
                                //if(initialized){
                                //  return;
                                //}
                                if (document.getElementById(userdata.id) != null) {
                                    return;
                                }
                                userdata = document.createElement(tagName);
                                userdata.id = userdataKey + "_" + tagName;
                                userdata.style.display = 'none';
                                userdata.style.position = 'absolute';
                                userdata.style.top = '-999999px';
                                userdata.style.behavior = 'url("#default#userData")';
                                document.body.appendChild(userdata);
                                userdata.load(userdataKey);
                                keyStr = userdata.getAttribute(reservedKey) || "";
                                ret.length = keyStr.split(keyDelimiter).length - 1;
                                //          initialized = true;
                            };
                            ret.length = 0;
                            ret.key = function(index) {
                                initialize();
                                var index = Number(index);
                                if (isNaN(index) || index >= this.length || index < 0) {
                                    return null;
                                }
                                var keyArr = keyStr.split(keyDelimiter);
                                var ret = keyArr[index];
                                return ret;
                            };
                            ret.getItem = function(key) {
                                initialize();
                                return userdata.getAttribute(key);
                            };
                            ret.setItem = function(key, value) {
                                initialize();
                                var ch = key.charAt(0);
                                var exp = /[a-zA-Z]/;
                                if (exp.exec(ch)) {
                                    if (key === reservedKey) {
                                        $l(reservedKey + ": This key is reserved.[localStorage]");
                                        return null;
                                    }
                                    if (key.search(keyDelimiter) >= 0) {
                                        $l(keyDelimiter + ": The key name must not contain colon(;).[localStorage]");
                                        return null;
                                    }
                                    userdata.setAttribute(key, value);
                                    if (keyStr.search(key) < 0) {
                                        keyStr += key + keyDelimiter;
                                        this.length++;
                                    }
                                    userdata.setAttribute(reservedKey, keyStr);
                                    try {
                                        userdata.save(userdataKey);
                                    } catch (e) {
                                        $l(e.name + " : localstorage overflowed[localStorage]");
                                    }
                                } else {
                                    $l("The key name must start with [a-zA-Z]");
                                    return null;
                                }
                            };
                            ret.removeItem = function(key) {
                                initialize();
                                userdata.removeAttribute(key);
                                var bKeyStr = keyStr;
                                keyStr = bKeyStr.replace(key + keyDelimiter, "");
                                if (bKeyStr !== keyStr) {
                                    this.length--;
                                }
                                userdata.setAttribute(reservedKey, keyStr);
                                userdata.save(userdataKey);
                            };
                            ret.clear = function() {
                                initialize();
                                var keyArr = keyStr.split(keyDelimiter);
                                for (var i = 0; i < keyArr.length - 1; i++) {
                                    userdata.removeAttribute(keyArr[i]);
                                }
                                userdata.removeAttribute(reservedKey);
                                keyStr = "";
                                this.length = 0;
                                userdata.save(userdataKey);
                            };
                            ret.getAllItem = function() {
                                initialize();
                                var r = {};
                                var keyArr = keyStr.split(keyDelimiter);
                                for (var i = 0; i < keyArr.length - 1; i++) {
                                    var key = keyArr[i];
                                    r[key] = userdata.getAttribute(key);
                                }
                                return r;
                            };
                            return ret;
                        } else {
                            // localStorage에 접근할 수 없을 때 (WEF-191)
                            $l('localStorage creation error, falling back to sessionStorage.');
                            var _storage = window['sessionStorage'];
                            if (_storage === null) {
                                // sessionStorage도 접근할 수 없을 때
                                $l('cannot create _wg.localStorage.');
                                return;
                            }
                            var ret = {};
                            ret.length = _storage.length;
                            ret.key = function(index) {
                                var index = Number(index);
                                if (isNaN(index) || index >= this.length || index < 0) {
                                    return null;
                                }
                                return _storage.key(index);
                            };
                            ret.getItem = function(key) {
                                return _storage.getItem(key);
                            };
                            ret.setItem = function(key, value) {
                                var ch = key.charAt(0);
                                var exp = /[a-zA-Z]/;
                                if (exp.exec(ch)) {
                                    if (key === reservedKey) {
                                        $l(reservedKey + ": This key is reserved.[localStorage]");
                                        return null;
                                    }
                                    if (key.search(keyDelimiter) >= 0) {
                                        $l(keyDelimiter + ": The key name must not contain colon(;).[localStorage]");
                                        return null;
                                    }
                                    _storage.setItem(key, value);
                                    this.length = _storage.length;
                                } else {
                                    $l("The key name must start with [a-zA-Z][localStorage]");
                                    return null;
                                }
                            };
                            ret.removeItem = function(key) {
                                _storage.removeItem(key);
                                this.length = _storage.length;
                            };
                            ret.clear = function() {
                                _storage.clear();
                                this.length = _storage.length;
                            };
                            ret.getAllItem = function() {
                                var r = {};
                                for (var key in _storage) {
                                    r[key] = _storage[key];
                                }
                                return r;
                            };
                            return ret;
                        }
                    }
                } catch (e) {
                    // localStorage에 접근할 수 없을 때 (WEF-191)
                    $l('localStorage creation error, falling back to sessionStorage.');
                    var _storage = window['sessionStorage'];
                    if (_storage === null) {
                        // sessionStorage도 접근할 수 없을 때
                        $l('cannot create _wg.localStorage.');
                        return;
                    }
                    var ret = {};
                    ret.length = _storage.length;
                    ret.key = function(index) {
                        var index = Number(index);
                        if (isNaN(index) || index >= this.length || index < 0) {
                            return null;
                        }
                        return _storage.key(index);
                    };
                    ret.getItem = function(key) {
                        return _storage.getItem(key);
                    };
                    ret.setItem = function(key, value) {
                        var ch = key.charAt(0);
                        var exp = /[a-zA-Z]/;
                        if (exp.exec(ch)) {
                            if (key === reservedKey) {
                                $l(reservedKey + ": This key is reserved.[localStorage]");
                                return null;
                            }
                            if (key.search(keyDelimiter) >= 0) {
                                $l(keyDelimiter + ": The key name must not contain colon(;).[localStorage]");
                                return null;
                            }
                            _storage.setItem(key, value);
                            this.length = _storage.length;
                        } else {
                            $l("The key name must start with [a-zA-Z][localStorage]");
                            return null;
                        }
                    };
                    ret.removeItem = function(key) {
                        _storage.removeItem(key);
                        this.length = _storage.length;
                    };
                    ret.clear = function() {
                        _storage.clear();
                        this.length = _storage.length;
                    };
                    ret.getAllItem = function() {
                        var r = {};
                        for (var key in _storage) {
                            r[key] = _storage[key];
                        }
                        return r;
                    };
                    return ret;
                }
            })();
        }
        if (_wg.api) {
            _wg.api.local = WebSquare["localStorage"];
        }
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
};
_wg._jQuerySupport = async function() {
    try {
        if (!window["jQuery"]) {
            var versionXPath = _wg.core.getConfiguration("/WebSquare/jquerySupport/@src");
            if (versionXPath != "") {
                await _wg.BootLoader.importAsync(versionXPath);
                if (!window["jQuery"]) {
                    await inquires("externalJS/jquery/jquery-3.7.1.min.js");
                    $l("ERROR : Please verify the jquerySupport path in the config.xml file. The current version is " + $.fn.jquery);
                }
            } else {
                await inquires("externalJS/jquery/jquery-3.7.1.min.js");
            }
        }
        if (window["jQuery"]) {
            (function($) {
                $.expr[":"].wq = function(obj, idx, matched) {
                    var comp = null;
                    if ("idToUUID" in WebSquare) {
                        comp = _wg.idCache[_wg.idToUUID[$(obj).attr("id")]];
                    } else {
                        comp = _wg.componentIdCache[$(obj).attr("id")];
                    }
                    if (comp && comp.render == obj) {
                        if (matched[3] === "" || matched[3] == undefined || matched[3] == "*") { // #.:로 시작하면 #group8:wq
                            return true;
                        } else { // 아니면 :wq(pluginName)
                            return comp.options.pluginName == matched[3].trim();
                        }
                    }
                    return false;
                };
                var jwq = function($this) {
                    return new jwq.fn.init($this);
                };
                var wq = function(wqApi, value) {
                    var _this = this; // 매칭된 jQuery 객체 _this에 저장
                    if (this.length > 0 && !this[0].getPluginName) { // jQuery 객체이면 WebSquare 객체로 변환
                        _this = jwq(this);
                    }
                    if (wqApi) { // 첫째 인자가 있으면 첫째 인자명의 웹스퀘어 api를 실행
                        for (var i = 0; i < _this.length; i++) {
                            var args = [];
                            for (var j = 1; j < arguments.length; j++) {
                                args.push(arguments[j]);
                            }
                            _this[i][wqApi].apply(_this[i], args);
                        }
                    }
                    return _this;
                };

                function focusable(element, isTabIndexNotNaN) {
                    var map, mapName, img,
                        nodeName = element.nodeName.toLowerCase();
                    if ("area" === nodeName) {
                        map = element.parentNode;
                        mapName = map.name;
                        if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                            return false;
                        }
                        img = $("img[usemap='#" + mapName + "']")[0];
                        return !!img && visible(img);
                    }
                    return (/^(input|select|textarea|button|object)$/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) &&
                        // the element and all of its ancestors must be visible
                        visible(element);
                }

                function visible(element) {
                    return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
                        return $.css(this, "visibility") === "hidden";
                    }).length;
                }
                jwq.fn = jwq.prototype = {
                    constructor: jwq,
                    init: function($this) {
                        if (!$this[0].getPluginName) { // jQuery에서 WebSqaure 객체로 바뀌는 경우
                            //웹스퀘어 객체로 변환
                            for (var i = 0; i < $this.length; i++) {
                                var comp = null;
                                if ("idToUUID" in WebSquare) {
                                    comp = _wg.idCache[_wg.idToUUID[$($this[i]).attr("id")]];
                                } else {
                                    comp = _wg.componentIdCache[$($this[i]).attr("id")];
                                }
                                if (comp && comp.render == $this[i]) {
                                    this.push(comp);
                                }
                            }
                        }
                    },
                    selector: "",
                    length: 0,
                    size: $.fn.size,
                    toArray: $.fn.toArray,
                    //              get: $.fn.get,   // fix no-dupe-keys
                    pushStack: $.fn.pushStack,
                    push: [].push,
                    sort: [].sort,
                    splice: [].splice,
                    wq: wq,
                    jq: function(jqApi, value) { // dom 객체를 jQuery로 반환해주는 api, 첫번째 인자가 있을 경우 그 인자명의 jquery 함수를 실행해줌.
                        if (this[0].getPluginName) { // this가 웹스퀘어 객체를 담고 있는 경우
                            // jquery 객체로 변환
                            var jqArr = [];
                            for (var i = 0; i < this.length; i++) {
                                jqArr.push(this[i].render);
                            }
                            this.splice(0, this.length);
                            for (var i = 0; i < jqArr.length; i++) {
                                this.push(jqArr[i]);
                            }
                        }
                        if (jqApi) {
                            var args = [];
                            for (var j = 1; j < arguments.length; j++) {
                                args.push(arguments[j]);
                            }
                            return $(this)[jqApi].apply($(this), args);
                        }
                        return $(this);
                    },
                    get: function(wqApi, value) { // WebSquare 객체의 첫번째 요소를 첫번째 인자로 들어온 인자명의 WebSquare 함수로 실행하고 그 값을 리턴함.(chaining을 끊는 역할)
                        var args = [];
                        for (var j = 1; j < arguments.length; j++) {
                            args.push(arguments[j]);
                        }
                        return this[0][wqApi].apply(this[0], args); // 매칭된 첫번째 WebSquare 요소의 실행값만 리턴함.
                    },
                    each: function(func) { // WebSquare 객체에 대한 each 함수
                        if (typeof func == "function") {
                            for (var i = 0; i < this.length; i++) {
                                func.call(this[i], i, this[i]);
                            }
                        }
                    },
                    map: function(obj, func) { // WebSquare 객체에 대한 map 함수
                        if (typeof func == "function") {
                            var results = [];
                            if (Object.prototype.toString.call(obj) === '[object Array]') { // array일 경우
                                for (var i = 0; i < obj.length; i++) {
                                    results.push(func.call(obj, obj[i], i));
                                }
                            } else { // object일 경우
                                for (var i in obj) {
                                    results.push(func.call(obj, obj[i], i));
                                }
                            }
                            return results;
                        }
                    },
                    animate: function(options) {
                        return this.jq("animate", options).wq();
                    }
                };
                jwq.fn.init.prototype = jwq.fn;
                jQuery.fn.extend({
                    wq: wq
                });
                jQuery.fn.extend($.expr[":"], {
                    focusable: function(element) {
                        return focusable(element, !isNaN($.attr(element, "tabindex")));
                    },
                    showable: function(element) {
                        return visible(element);
                    },
                    tabbable: function(element) {
                        var tabIndex = $.attr(element, "tabindex"),
                            isTabIndexNaN = isNaN(tabIndex);
                        return $(element).hasClass("w2grid") || // gridView는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2checkbox") || // checkbox는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2anchor") || $(element).hasClass("w2anchor2") || // anchor는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2radio") || $(element).hasClass("w2radio_input") || // radio는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2inputCalendar") || $(element).hasClass("w2inputCalendar_div") || // inputCalendar는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2searchbox") || // searchbox는 tabindex가 없더라도 tabbable하다고 판단.
                            $(element).hasClass("w2textarea") || // textarea는 tabindex가 없더라도 tabbable하다고 판단.
                            (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
                    }
                });
            })(jQuery);
        }
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._XMLSupport = function() {
    try {
        if (_wg.core.supportDOM) {
            if (!_wg.core.browserCheck.opera) {
                if (_wg.document.implementation.hasFeature("XPath", "3.0")) {
                    XMLDocument.prototype.selectNodes = function(path, xNode) {
                        if (!path) {
                            return;
                        }
                        if (typeof xNode == "undefined") {
                            xNode = this;
                        }
                        var resolver = this.createNSResolver(this.documentElement);
                        var item = this.evaluate(path, xNode, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                        var result = [];
                        for (var i = 0; i < item.snapshotLength; i++) {
                            result[i] = item.snapshotItem(i);
                        }
                        return result;
                    };
                    XMLDocument.prototype.selectSingleNode = function(path, xNode) {
                        if (!path) {
                            return;
                        }
                        if (typeof xNode == "undefined") {
                            xNode = this;
                        }
                        var xItems = this.selectNodes(path, xNode);
                        if (xItems.length > 0) {
                            return xItems[0];
                        } else {
                            return null;
                        }
                    };
                    Document.prototype.selectNodes = XMLDocument.prototype.selectNodes;
                    Document.prototype.selectSingleNode = XMLDocument.prototype.selectSingleNode;
                    //var xpathResult = document.evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result);
                    Element.prototype.selectNodes = function(path) {
                        if (!path) {
                            return;
                        }
                        var ownerDom = this.ownerDocument;
                        var resolver = ownerDom.createNSResolver(ownerDom.documentElement);
                        var item = ownerDom.evaluate(path, this, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                        var result = [];
                        for (var i = 0; i < item.snapshotLength; i++) {
                            result[i] = item.snapshotItem(i);
                        }
                        return result;
                    };
                    Element.prototype.selectSingleNode = function(path) {
                        if (!path) {
                            return;
                        }
                        var xItems = this.selectNodes(path);
                        if (xItems.length > 0) {
                            return xItems[0];
                        } else {
                            return null;
                        }
                    };
                }
            }
        }
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._initImportFunction = function() {
    try {
        window["_$W"] = WebSquare;
        window["$W"] = WebSquare;
        _$W._a = _$W.uiplugin;
        $W._a = _$W._a;
        window.WebSquareLang = {};
        window.requires = _wg.BootLoader.requireAsync;
        window.imports = _wg.BootLoader.importAsync;
        window.inquires = _wg.BootLoader.inquires;
        window.$integrity = _wg.BootLoader.$integrity;
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._initWebsquareModule = function() {
    try {
        for (var i = 0; i < _wg._initImportList.length; i++) {
            var moduleName = _wg._initImportList[i].split(".");
            var target = _wg;
            for (var j = 0; j < moduleName.length - 1; j++) {
                target = _wg[moduleName[j]]
            }
            target[moduleName[moduleName.length - 1]]._initImport();
        }
        _wg._initImportList = [];
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._initModule = async function() {
    _wg._bInitModule = true;
    _wg._XMLSupport();
    await _wg._jQuerySupport();
    await inquires("externalJS/papaparse.js");
    window[_wg.noConflict] = _wg.api;
    window[_wg.noConflict]["comp"] = {};
    window["$l"] = _wg.logger.printLog;
    _wg._initWebsquareModule();
}
_wg._dynamicImport = async function(modulePath, options) {
    try {
        try {
            var temp = new Function("u", "return import(u)");
            if (temp) {
                return await temp(modulePath);
            }
        } catch (e) {
            // import를 지원하지 않는 IE11과 같은 브라우저
            var altModulePath;
            if (options && options.altModulePath) {
                altModulePath = options.altModulePath;
            } else {
                altModulePath = modulePath;
            }
            var moduleStr = await _wg.BootLoader.loadAsync(altModulePath);
            var prefix = "export default ";
            var evalStr = moduleStr.slice(moduleStr.indexOf(prefix) + prefix.length);
            return new Function("return { default : " + evalStr + "}")();
        }
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._dynamicImportAMD = async function(modulePath, noRequireJS) {
    try {
        _wg.clearScriptHead();
        if (noRequireJS === true) {
            return _wg._dynamicImportFunc(modulePath);
        } else {
            await inquires("externalJS/requirejs/require.js");
            window.requirejs.config({
                "waitSeconds": _wg.amdTimeout
            });
            return new Promise(function(resolve, reject) {
                window.requirejs([modulePath], function(moduleObj) {
                    resolve(moduleObj);
                    window.requirejs.undef(modulePath); // requireJS에서 같은 url이 넘어온 경우 아예 url 요청 자체를 보내지 않는 것을 방지하기 위한 코드.
                }, function(err) {
                    _wg.logger.printLog(err.message);
                    var ret = _wg._dynamicImportFunc(modulePath);  // requireJS 요청 실패 시(timeout 발생 등) xhr을 통해 화면을 로딩하도록 한다.
                    resolve(ret);
                });
            }).catch(function(e) {
                window.requirejs.undef(modulePath);
                return _wg._dynamicImportFunc(modulePath);
            });
        }
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._dynamicImportFunc = async function(modulePath) {
    try {
        var promiseObj = _wg.BootLoader.loadAsync(modulePath);
        return promiseObj.then(function(resolve, reject) {
            var moduleStr = resolve;
            var prefix = "define(";
            var evalStr = moduleStr.slice(moduleStr.indexOf(prefix) + prefix.length);
            var idx = evalStr.lastIndexOf(")");
            evalStr = evalStr.slice(0, idx);
            return new Function("return " + evalStr)();
        });
    } catch (e) {
        _wg.exception.printStackTrace(e);
    }
}
_wg._loadModuleDynamic = function(name) {
    var promiseObj;
    // webpack에서 chunk가 가능하도록 dynamic import를 일일이 하나씩 호출해준다. 
    switch (name) {
        // ================================================================
        //  for index_minimum.js
        // ================================================================ 
        case "uiplugin.balloonTip":
            promiseObj = import("./uiplugin/balloonTip/balloonTip.js").then(function(resolve, reject) {
                WebSquare.uiplugin.balloonTip = resolve.balloonTip;
            });
            break;
        case "uiplugin.group":
            promiseObj = import("./uiplugin/group/group.js").then(function(resolve, reject) {
                WebSquare.uiplugin.group = resolve.group;
            });
            break;
        case "uiplugin.wframe":
            promiseObj = import("./uiplugin/wframe/wframe.js").then(function(resolve, reject) {
                WebSquare.uiplugin.wframe = resolve.wframe;
            });
            break;
        case "uiplugin.textbox":
            promiseObj = import("./uiplugin/textbox/textbox.js").then(function(resolve, reject) {
                WebSquare.uiplugin.textbox = resolve.textbox;
            });
            break;
        case "uiplugin.anchor":
            promiseObj = import("./uiplugin/anchor/anchor.js").then(function(resolve, reject) {
                WebSquare.uiplugin.anchor = resolve.anchor;
            });
            break;
        case "uiplugin.selectbox":
            promiseObj = import("./uiplugin/selectbox/selectbox.js").then(function(resolve, reject) {
                WebSquare.uiplugin.selectbox = resolve.selectbox;
                WebSquare.uiplugin.selectbox_native = resolve.selectbox_native;
            });
            break;
        case "uiplugin.input":
            promiseObj = import("./uiplugin/input/input.js").then(function(resolve, reject) {
                WebSquare.uiplugin.input = resolve.input;
            });
            break;
        case "uiplugin.span":
            promiseObj = import("./uiplugin/span/span.js").then(function(resolve, reject) {
                WebSquare.uiplugin.span = resolve.span;
            });
            break;
        case "uiplugin.calendar":
            promiseObj = import("./uiplugin/calendar/calendar.js").then(function(resolve, reject) {
                WebSquare.uiplugin.calendar = resolve.calendar;
            });
            break;
        case "uiplugin.inputCalendar":
            promiseObj = import("./uiplugin/inputCalendar/inputCalendar.js").then(function(resolve, reject) {
                WebSquare.uiplugin.inputCalendar = resolve.inputCalendar;
            });
            break;
        case "uiplugin.textarea":
            promiseObj = import("./uiplugin/textarea/textarea.js").then(function(resolve, reject) {
                WebSquare.uiplugin.textarea = resolve.textarea;
            });
            break;
        case "uiplugin.checkcombobox":
            promiseObj = import("./uiplugin/checkcombobox/checkcombobox.js").then(function(resolve, reject) {
                WebSquare.uiplugin.checkcombobox = resolve.checkcombobox;
            });
            break;
        case "uiplugin.autoComplete":
            promiseObj = import("./uiplugin/autoComplete/autoComplete.js").then(function(resolve, reject) {
                WebSquare.uiplugin.autoComplete = resolve.autoComplete;
            });
            break;
        case "uiplugin.list":
            promiseObj = import("./uiplugin/list/list.js").then(function(resolve, reject) {
                WebSquare.uiplugin.list = resolve.list;
            });
            break;
        case "uiplugin.floatingLayer":
            promiseObj = import("./uiplugin/floatingLayer/floatingLayer.js").then(function(resolve, reject) {
                WebSquare.uiplugin.floatingLayer = resolve.floatingLayer;
            });
            break;
        case "uiplugin.radio":
            promiseObj = import("./uiplugin/radio/radio.js").then(function(resolve, reject) {
                WebSquare.uiplugin.radio = resolve.radio;
            });
            break;
        case "uiplugin.spinner":
            promiseObj = import("./uiplugin/spinner/spinner.js").then(function(resolve, reject) {
                WebSquare.uiplugin.spinner = resolve.spinner;
            });
            break;
        case "uiplugin.gridView":
            promiseObj = import("./uiplugin/gridView/gridView.js").then(function(resolve, reject) {
                WebSquare.uiplugin.gridView = resolve.gridView;
                WebSquare.uiplugin.drilldown = resolve.drilldown;
                WebSquare.uiplugin.mappingController = resolve.mappingController;
                WebSquare.uiplugin.linkedMappingController = resolve.linkedMappingController;
                WebSquare.uiplugin.cellInfo = resolve.cellInfo;
                WebSquare.uiplugin.headerInfo = resolve.headerInfo;
            });
            break;
        case "uiplugin.trigger":
            promiseObj = import("./uiplugin/trigger/trigger.js").then(function(resolve, reject) {
                WebSquare.uiplugin.trigger = resolve.trigger;
            });
            break;
        case "uiplugin.button":
            promiseObj = import("./uiplugin/button/button.js").then(function(resolve, reject) {
                WebSquare.uiplugin.button = resolve.button;
            });
            break;
        case "uiplugin.image":
            promiseObj = import("./uiplugin/image/image.js").then(function(resolve, reject) {
                WebSquare.uiplugin.image = resolve.image;
            });
            break;
        case "uiplugin.pageList":
            promiseObj = import("./uiplugin/pageList/pageList.js").then(function(resolve, reject) {
                WebSquare.uiplugin.pageList = resolve.pageList;
            });
            break;
        case "uiplugin.tabControl":
            promiseObj = import("./uiplugin/tabControl/tabControl.js").then(function(resolve, reject) {
                WebSquare.uiplugin.tabControl = resolve.tabControl;
                WebSquare.uiplugin.content = resolve.content;
            });
            break;
        case "uiplugin.generator":
            promiseObj = import("./uiplugin/generator/generator.js").then(function(resolve, reject) {
                WebSquare.uiplugin.generator = resolve.generator;
            });
            break;
        case "uiplugin.upload":
            promiseObj = import("./uiplugin/upload/upload.js").then(function(resolve, reject) {
                WebSquare.uiplugin.upload = resolve.upload;
            });
            break;
        case "uiplugin.treeview":
            promiseObj = import("./uiplugin/treeview/treeview.js").then(function(resolve, reject) {
                WebSquare.uiplugin.treeview = resolve.treeview;
            });
            break;
        case "uiplugin.treeview_virtual":
            promiseObj = import("./uiplugin/treeview/virtualTreeView.js").then(function(resolve, reject) {
                WebSquare.uiplugin.treeview_virtual = resolve.treeview_virtual;
            });
            break;
        case "uiplugin.checkbox":
            promiseObj = import("./uiplugin/checkbox/checkbox.js").then(function(resolve, reject) {
                WebSquare.uiplugin.checkbox = resolve.checkbox;
            });
            break;
        case "uiplugin.output":
            promiseObj = import("./uiplugin/output/output.js").then(function(resolve, reject) {
                WebSquare.uiplugin.output = resolve.output;
            });
            break;
        case "uiplugin.window":
            promiseObj = import("./uiplugin/window/window.js").then(function(resolve, reject) {
                WebSquare.uiplugin.window = resolve.wq_window;
            });
            break;
        case "uiplugin.windowContainer":
            promiseObj = import("./uiplugin/windowContainer/windowContainer.js").then(function(resolve, reject) {
                WebSquare.uiplugin.windowContainer = resolve.windowContainer;
            });
            break;
        case "uiplugin.accordion":
            promiseObj = import("./uiplugin/accordion/accordion.js").then(function(resolve, reject) {
                WebSquare.uiplugin.accordion = resolve.accordion;
                WebSquare.uiplugin.panels = resolve.panels;
            });
            break;
        case "uiplugin.widgetContainer":
            promiseObj = import("./uiplugin/widgetContainer/widgetContainer.js").then(function(resolve, reject) {
                WebSquare.uiplugin.widgetContainer = resolve.widgetContainer;
                WebSquare.uiplugin.widget = resolve.widget;
            });
            break;
        case "uiplugin.panelContainer":
            promiseObj = import("./uiplugin/panelContainer/panelContainer.js").then(function(resolve, reject) {
                WebSquare.uiplugin.panelContainer = resolve.panelContainer;
                WebSquare.uiplugin.panel = resolve.panel;
            });
            break;
        case "uiplugin.mapchart":
            promiseObj = import("./uiplugin/mapchart/mapchart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.mapchart = resolve.mapchart;
            });
            break;
        case "uiplugin.gridLayout":
            promiseObj = import("./uiplugin/gridLayout/gridLayout.js").then(function(resolve, reject) {
                WebSquare.uiplugin.gridLayout = resolve.gridLayout;
            });
            break;
        case "uiplugin.udc":
            promiseObj = import("./uiplugin/udc/udc.js").then(function(resolve, reject) {
                WebSquare.uiplugin.udc = resolve.udc;
            });
            break;
        case "uiplugin.pageFrame":
            promiseObj = import("./uiplugin/pageFrame/pageFrame.js").then(function(resolve, reject) {
                WebSquare.uiplugin.pageFrame = resolve.pageFrame;
            });
            break;
            // ================================================================
            //  loading="N"
            // ================================================================
        case "uiplugin.mapchart":
            promiseObj = import("./uiplugin/mapchart/mapchart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.mapchart = resolve.mapchart;
            });
            break;
        case "uiplugin.pivot":
            promiseObj = import("./uiplugin/pivot/pivot.js").then(function(resolve, reject) {
                WebSquare.uiplugin.pivot = resolve.pivot;
            });
            break;
        case "uiplugin.editor":
            promiseObj = import("./uiplugin/editor/editor.js").then(function(resolve, reject) {
                WebSquare.uiplugin.editor = resolve.editor;
            });
            break;
        case "uiplugin.multiupload":
            promiseObj = import("./uiplugin/multiupload/multiupload.js").then(function(resolve, reject) {
                WebSquare.uiplugin.multiupload = resolve.multiupload;
            });
            break;
        case "uiplugin.fusionchart":
            promiseObj = import("./uiplugin/fusionchart/fusionchart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fusionchart = resolve.fusionchart;
            });
            break;
        case "uiplugin.fwFunnelChart":
            promiseObj = import("./uiplugin/fwFunnelChart/fwFunnelChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwFunnelChart = resolve.fwFunnelChart;
            });
            break;
        case "uiplugin.fwPyramidChart":
            promiseObj = import("./uiplugin/fwPyramidChart/fwPyramidChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwPyramidChart = resolve.fwPyramidChart;
            });
            break;
        case "uiplugin.fwSparkChart":
            promiseObj = import("./uiplugin/fwSparkChart/fwSparkChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwSparkChart = resolve.fwSparkChart;
            });
            break;
        case "uiplugin.fwGaugeChart":
            promiseObj = import("./uiplugin/fwGaugeChart/fwGaugeChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwGaugeChart = resolve.fwGaugeChart;
            });
            break;
        case "uiplugin.fwGanttChart":
            promiseObj = import("./uiplugin/fwGanttChart/fwGanttChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwGanttChart = resolve.fwGanttChart;
            });
            break;
        case "uiplugin.fwRealtimeChart":
            promiseObj = import("./uiplugin/fwRealtimeChart/fwRealtimeChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwRealtimeChart = resolve.fwRealtimeChart;
            });
            break;
        case "uiplugin.fwBulletChart":
            promiseObj = import("./uiplugin/fwBulletChart/fwBulletChart.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fwBulletChart = resolve.fwBulletChart;
            });
            break;
            // ================================================================
            //  not important
            // ================================================================
        case "uiplugin.spinPicker":
            promiseObj = import("./uiplugin/spinPicker/spinPicker.js").then(function(resolve, reject) {
                WebSquare.uiplugin.spinPicker = resolve.spinPicker;
            });
            break;
        case "uiplugin.datePicker":
            promiseObj = import("./uiplugin/datePicker/datePicker.js").then(function(resolve, reject) {
                WebSquare.uiplugin.datePicker = resolve.datePicker;
            });
            break;
        case "uiplugin.slider":
            promiseObj = import("./uiplugin/slider/slider.js").then(function(resolve, reject) {
                WebSquare.uiplugin.slider = resolve.slider;
                WebSquare.uiplugin.thumb = resolve.thumb;
            });
            break;
        case "uiplugin.searchbox":
            promiseObj = import("./uiplugin/searchbox/searchbox.js").then(function(resolve, reject) {
                WebSquare.uiplugin.searchbox = resolve.searchbox;
            });
            break;
        case "uiplugin.fliptoggle":
            promiseObj = import("./uiplugin/fliptoggle/fliptoggle.js").then(function(resolve, reject) {
                WebSquare.uiplugin.fliptoggle = resolve.fliptoggle;
            });
            break;
        case "uiplugin.pageControl":
            promiseObj = import("./uiplugin/pageControl/pageControl.js").then(function(resolve, reject) {
                WebSquare.uiplugin.pageControl = resolve.pageControl;
            });
            break;
        case "uiplugin.repeat":
            promiseObj = import("./uiplugin/repeat/repeat.js").then(function(resolve, reject) {
                WebSquare.uiplugin.repeat = resolve.repeat;
                WebSquare.uiplugin.repeatAPI = resolve.repeatAPI;
            });
            break;
        case "uiplugin.graphicUtil":
            promiseObj = import("./uiplugin/graphicUtil/graphicUtil.js").then(function(resolve, reject) {
                WebSquare.uiplugin.graphicUtil = resolve.graphicUtil;
            });
            break;
        case "uiplugin.roundRectangle":
            promiseObj = import("./uiplugin/roundRectangle/roundRectangle.js").then(function(resolve, reject) {
                WebSquare.uiplugin.roundRectangle = resolve.roundRectangle;
            });
            break;
        case "uiplugin.multiselect":
            promiseObj = import("./uiplugin/multiselect/multiselect.js").then(function(resolve, reject) {
                WebSquare.uiplugin.multiselect = resolve.multiselect;
            });
            break;
        case "uiplugin.Switch":
            promiseObj = import("./uiplugin/Switch/Switch.js").then(function(resolve, reject) {
                WebSquare.uiplugin.Switch = resolve.Switch;
            });
            break;
        case "uiplugin.slideHide":
            promiseObj = import("./uiplugin/slideHide/slideHide.js").then(function(resolve, reject) {
                WebSquare.uiplugin.slideHide = resolve.slideHide;
            });
            break;
        case "uiplugin.iframe":
            promiseObj = import("./uiplugin/iframe/iframe.js").then(function(resolve, reject) {
                WebSquare.uiplugin.iframe = resolve.iframe;
            });
            break;
        case "uiplugin.layer":
            promiseObj = import("./uiplugin/layer/layer.js").then(function(resolve, reject) {
                WebSquare.uiplugin.layer = resolve.layerU;
            });
            break;
        case "uiplugin.grid":
            promiseObj = import("./uiplugin/gridView/gridView.js").then(function(resolve, reject) {
                WebSquare.uiplugin.gridView = resolve.gridView;
                WebSquare.uiplugin.drilldown = resolve.drilldown;
                WebSquare.uiplugin.mappingController = resolve.mappingController;
                WebSquare.uiplugin.linkedMappingController = resolve.linkedMappingController;
                WebSquare.uiplugin.cellInfo = resolve.cellInfo;
                WebSquare.uiplugin.headerInfo = resolve.headerInfo;
                return import("./uiplugin/grid/grid.js").then(function(resolve, reject) {
                    WebSquare.uiplugin.grid = resolve.grid;
                });
            });
            break;
        case "uiplugin.pageInherit":
            promiseObj = import("./uiplugin/pageInherit/pageInherit.js").then(function(resolve, reject) {
                WebSquare.uiplugin.pageInherit = resolve.pageInherit;
            });
            break;
        case "uiplugin.scrollView":
            promiseObj = import("./uiplugin/scrollView/scrollView.js").then(function(resolve, reject) {
                WebSquare.uiplugin.scrollView = resolve.scrollView;
            });
            break;
        case "uiplugin.scheduleCalendar":
            promiseObj = import("./uiplugin/scheduleCalendar/scheduleCalendar.js").then(function(resolve, reject) {
                WebSquare.uiplugin.scheduleCalendar = resolve.scheduleCalendar;
            });
            break;
        case "uiplugin.progressbar":
            promiseObj = import("./uiplugin/progressbar/progressbar.js").then(function(resolve, reject) {
                WebSquare.uiplugin.progressbar = resolve.progressbar;
            });
            break;
        case "uiplugin.gridLayout":
            promiseObj = import("./uiplugin/gridLayout/gridLayout.js").then(function(resolve, reject) {
                WebSquare.uiplugin.gridLayout = resolve.gridLayout;
            });
            break;
        case "engine.wUnit":
            promiseObj = import("./engine/wUnit.js").then(function(resolve, reject) {
                WebSquare.wUnit = resolve.wUnit;
            });
            break;
        default:
            return;
    }
    promiseObj.then(function(resolve, reject) {
        if (_wg._bInitModule === true) {
            _wg._initWebsquareModule();
        }
    });
    return promiseObj;
}
_wg._getModuleSrc = function(src) {
    if (typeof src !== "string") {
        return src;
    }
    var idx = src.indexOf("websquare/externalJS");
    var isWebSquareReg = /big|bisCommon|bootstrap|ckfinder|editor|fullCalendar|FusionChart|jquery|mapchart|progressbar|underscore|xmlparser|xpath/;
    if (idx >= 0 && src.match(isWebSquareReg) && src.slice(idx - 12, idx + 10) !== "_websquare_/externalJS") {
        src = src.replace("externalJS", "_websquare_/externalJS");
    }
    return src;
}
_wg._performance._valid = function() {
    try {
        var bUse = _wg._performance.use;
        return bUse === true || (typeof bUse === "string" && bUse.toLowerCase() === "true");
    } catch (e) {
        window.console && window.console.error(e);
    }
}
_wg._performance.mark = function(name, markOptions) {
    try {
        if (_wg._performance._valid() && name) {
            var markPrefix = "wq.mark.";
            if (!markOptions) {
                markOptions = {
                    "detail": _wg.w2xPath
                }
            }
            performance.mark(markPrefix + name, markOptions);
        }
    } catch (e) {
        window.console && window.console.error(e);
    }
}
_wg._performance.measure = function(name, startMark, detail) {
    try {
        if (_wg._performance._valid() && name) {
            var markPrefix = "wq.mark.";
            var measurePrefix = "wq.";
            if (startMark) {
                startMark = markPrefix + startMark;
            } else {
                startMark = 0;
            }
            if (!detail) {
                detail = {
                    "src" : _wg.w2xPath || "",
                    "id" : _wg.strictModeFrame ? _wg.strictModeFrame.id : "",
                    "log" : ""
                }
            }
            if (detail.endMark) {
                endMark = markPrefix + detail.endMark;
            }
            var measureOption = {
                "start": startMark,
                "detail": detail
            }
            performance.measure(measurePrefix + name, measureOption, detail.endMark);
        }
    } catch (e) {
        window.console && window.console.error(e);
    }
}
_wg.safeRandom = function() {
    try {
        if (window.crypto && typeof window.crypto.getRandomValues === "function") {
            return window.crypto.getRandomValues(new Uint32Array(1))[0];
        } else {
            return new Date().getTime() % 10000000000;
        }
    } catch (e) {
        window.console && window.console.error(e);
    }
};
_wg.clearScriptHead = function() {
    try {
        var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        var scriptTagArr = head.getElementsByTagName("script");
        for (var i = scriptTagArr.length - 1; i >= 0; i--) {
            var sElem = scriptTagArr[i];
            if (sElem.getAttribute("data-wqexternal") == "true" || sElem.getAttribute("data-wqInternal") == "true" || sElem.getAttribute("data-requirecontext") === "_") {
                head.removeChild(sElem);
            }
        }
    } catch (e) {
        window.console && window.console.error(e);
    }
};
export {
    _wg
};
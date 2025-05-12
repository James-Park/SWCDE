var bootloader = {};
bootloader._binitImport = false;
bootloader.useWebSquareLicense = true;
bootloader.excludeSet = null;
bootloader.$integrity = function(flag, origHash, runHash) {
    if (typeof flag == 'undefined') { // 결과 반
        if (WebSquare.util && WebSquare.util.watermark && !WebSquare.$integiry.flag) WebSquare.util.watermark("integrity check failed!!!");
        return WebSquare.$integiry.flag;
    } else if (flag === true) {
        WebSquare.$integiry.passed.push(origHash);
    } else if (flag === false) {
        WebSquare.$integiry.flag = false;
        WebSquare.$integiry.failed.push({
            original: origHash,
            runtime: runHash
        });
    }
}
bootloader.setFullViewInHtml = function(zoomResolve, parentXmlName, options) { // 현재 Chrome, Safari, Firefox, Opera, IE10+ 까지 지원할 계획.
    ["bootloader.setFullViewInHtml"];
    try {
        var options = options || {};
        var resizeOnce = (options.resizeOnce === true) ? true : false;
        var ratio = null;
        var size = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight
        };
        if (zoomResolve !== null && typeof zoomResolve === 'function') {
            var ret = zoomResolve();
            if (ret !== null && typeof ret === 'object' && ret.baseHeight && ret.baseWidth) { //zoomResolve의 return값이 object인 경우
                var widthRatio = size.width / ret.baseWidth;
                var heightRatio = size.height / ret.baseHeight;
                ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
            }
        }

        function fullViewOnResize() {
            if (bootloader.onResizing) {
                return;
            }
            var ratioOnResize = null;
            var size = {
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            };
            if (zoomResolve !== null && typeof zoomResolve === 'function') {
                var ret = zoomResolve();
                if (ret !== null && typeof ret === 'object' && ret.baseHeight && ret.baseWidth) { //zoomResolve의 return값이 object인 경우
                    var widthRatioOnResize = size.width / ret.baseWidth;
                    var heightRatioOnResize = size.height / ret.baseHeight;
                    ratioOnResize = widthRatioOnResize > heightRatioOnResize ? heightRatioOnResize : widthRatioOnResize;
                }
            }
            if (ratioOnResize == null) {
                return;
            }
            bootloader.onResizing = true;
            bootloader.zoomed(document.body, ratioOnResize);
            document.body.style.width = ret.baseWidth + "px";
            document.body.style.height = ret.baseHeight + "px";
            bootloader.onResizing = false;
            bootloader.fullViewed = true;
            bootloader.fullViewRatio = ratioOnResize;
            // document.documentElement.style.overflow = "hidden";
        }

        function fullViewBody(ratio) {
            // var cssText = "body {zoom : " + ratio +  "}";
            var cssText = "body {" + "-webkit-transform : scale(" + ratio + ");" + "-moz-transform : scale(" + ratio + ");" + "-ms-transform : scale(" + ratio + ");" + "-o-transform : scale(" + ratio + ");" + "transform : scale(" + ratio + ");" + "transform-origin : 0 0;" + "-ms-transform-origin : 0 0;" + "width : " + ret.baseWidth + "px;" + "height : " + ret.baseHeight + "px;" + "}";
            var head = WebSquare.document.getElementsByTagName('head')[0];
            bootloader.fullViewClass = true;
            bootloader.fullViewClassCssText = cssText;
            bootloader.fullViewRatio = ratio;
            if (WebSquare.core.browserCheck.ie) {
                var s = document.createElement("style");
                s.setAttribute("type", "text/css");
                s.styleSheet.cssText = cssText;
                head.appendChild(s);
            } else {
                var s = WebSquare.document.createElementNS("http://www.w3.org/1999/xhtml", "style");
                s.appendChild(document.createTextNode(cssText));
                head.appendChild(s);
            }
        }
        bootloader.fullViewed = true;
        var tempUrl = (window.WebSquareExternal && WebSquareExternal.w2xPath) || WebSquare.net.getParameter("w2xPath") || WebSquare.w2xPath || bootloader.configurationJSON[0].WebSquare["welcome-file"]["@value"];
        if (typeof tempUrl === "string" && tempUrl.indexOf(parentXmlName) >= 0) { // 최상위 window인 경우
            bootloader.fullViewRatio = ratio;
            // document.documentElement.style.overflow = "hidden";
            fullViewBody(ratio);
            var checkBodyLoadFunc = function() {
                if (WebSquare && WebSquare.scriptSectionExcuteFlag && WebSquare.scriptSectionExcuteFlag === "executed") {
                    clearInterval(obfuscator_checkBodyLoad);
                    fullViewOnResize();
                    // style태그로만 scale적용시 무시되는 경우가 있어 시작하자마자 fullViewOnResize로직을 불러 body의 속성으로 scale 설정함.
                    if (!resizeOnce) {
                        WebSquare.getBody().event.addListener(window, "onresize", fullViewOnResize);
                    }
                }
            };
            checkBodyLoadFunc();
            var obfuscator_checkBodyLoad = setInterval(checkBodyLoadFunc, 70);
        } else { // 자식인 경우
            // document.documentElement.style.overflow = "hidden";
            // fullViewBody(parent.bootloader.fullViewRatio);
        }
    } catch (e) {
        WebSquare.exception.printStackTrace(e);
    }
};
bootloader.zoomed = function(obj, ratio) {
    if (WebSquare.core.browserCheck.moz && obj && obj.style) {
        obj.style.MozTransform = "scale(" + ratio + ")"; /* Firefox */
        obj.style.MozTransformOrigin = "left top";
        bootloader.fullViewRatio = ratio;
    } else if (obj && obj.style) {
        // obj.style.zoom = ratio;
        obj.style["-webkit-transform"] = "scale(" + ratio + ")";
        obj.style["-moz-transform"] = "scale(" + ratio + ")";
        obj.style["-ms-transform"] = "scale(" + ratio + ")";
        obj.style["-o-transform"] = "scale(" + ratio + ")";
        obj.style["transform"] = "scale(" + ratio + ")";
        obj.style["transform-origin"] = "top left";
        bootloader.fullViewRatio = ratio;
        if (bootloader.fullViewClass) {
            bootloader.fullViewClass = false;
            var styles = document.getElementsByTagName('style');
            for (var i = 0; i < styles.length; i++) {
                if (styles[i].textContent == bootloader.fullViewClassCssText) {
                    document.getElementsByTagName("head")[0].removeChild(styles[i])
                    break;
                }
            }
        }
    }
}
/**
 * @plugin  bootloader
 * @cdate   20100408
 * @version 2.0
 * @author  SW2
 * @description
 *          전역 공간에 인자로 넘어온 script 문자열을 eval 합니다.
 * @param   <String:Y> scr javascript 문자열
 * @see
 * @return
 * @exception
 * @sample
 * @hidden  true
 */
bootloader.globalEval = function(scr, type) {
    ["bootloader.globalEval"];
    var configType;
    if (!type) {
        configType = bootloader.configurationJSON[0].WebSquare.eval || bootloader.configurationJSON[0].WebSquare.executeScript;
        if (configType) {
            configType = configType["@value"];
        }
    }
    return bootloader._globalEval(scr, {
        "type": configType || type
    });
}
bootloader._globalEval = function(scr, options) {
    ["bootloader._globalEval"];
    if (!scr || typeof scr !== "string") {
        return;
    }
    try {
        if (typeof options === "undefined" || options === null) {
            options = {};
        }
        // Chrome 11까지는 execScript가 있었지만 12부터는 사용할 수 없게되었다
        // execScript를 쓸 수 있는 경우는 쓰는 것이 바람직하고, 향후에 없어질 가능성도 있기 때문에 아래와 같이 하나의 코드로 통합하였다
        // IE는 에러 발생 line을 잘 표시해 주지 못하는 버그가 있으므로 다시 eval할 필요가 없다.
        var isInternal = (bootloader.fixErrorLineNumber && options.type == "internal") || (options.type === "script");
        if (isInternal) {
            if (bootloader.fixErrorLineNumber) {
                bootloader.globalEvalArr.push(scr);
            }
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = "UTF-8";
            script.text = scr;
            script.setAttribute("data-wqinternal", "true");
            var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            head.appendChild(script);
        } else {
            if (window.execScript && scr !== "") {
                window.execScript(scr);
            } else {
                new Function(scr)();
            }
        }
    } catch (e) {
        var fScr = [];
        var t_str = "\n<<Internal JavaScript Source Block";
        if (scr) {
            var sourcesList = scr.split(WebSquare.scriptIdentifier);
            var multiPart = (sourcesList.length > 1) ? 1 : 0;
            var lineNumber = 1;
            for (var ff = 0; ff < sourcesList.length; ff++) {
                if (sourcesList[ff] == "") {
                    continue;
                }
                var sources = sourcesList[ff].split("\n");
                var fileuri = sources[0] + "";
                var fileuriidx = fileuri.indexOf("\";");
                if (fileuriidx > 0) {
                    fileuri = sources[0].substring(0, fileuriidx);
                    sources[0] = sources[0].substring(fileuriidx + 2);
                }
                if (multiPart === 1) {
                    fScr.push("\n" + t_str + " [" + fileuri + "] Start>>");
                } else {
                    fScr.push("\n" + t_str + " Start>>");
                }
                for (var i = 0, len = sources.length; i < len; i++) {
                    fScr.push("\n");
                    fScr.push("[");
                    fScr.push(bootloader.fillZero(lineNumber, 4));
                    fScr.push("]");
                    fScr.push(sources[i]);
                    lineNumber++;
                }
                if (multiPart === 1) {
                    fScr.push(t_str + " [" + fileuri + "] End>>");
                } else {
                    fScr.push(t_str + " End>>");
                }
            }
        }
        if (options.path) {
            fScr.push("\n", "xml page url:", options.path);
        }
        this.printStackTrace(e, "bootloader.globalEval:", "* message     : " + e.message + fScr.join(''));
    }
};
bootloader._isCache = function(path) {
    var ret = false;
    if (bootloader.importCache[path] == null) {
        bootloader.importCache[path] = path;
    } else {
        ret = path;
    }
    /* istanbul ignore if */
    if (bootloader.useWebSquareLicense === true) {
        var path2 = path;
        if (path2.indexOf("uiplugin.") >= 0) {
            path2 = path2.replace(".", "/");
            path2 = path2 + path2.substring(path2.indexOf("/")) + ".js";
            if (bootloader.importCache[path2]) {
                return path2;
            }
        }
        if (!bootloader.incrementalChunkImport) {
            for (var i = 0;
                ((i < WebSquare.allPluginArr.length) && ret == false); i++) {
                if (WebSquare.allPluginArr[i] == path2) {
                    ret = path2;
                    break;
                }
            }
        }
    }
    return ret;
}
bootloader._getloadPath = function(path, skipLog) {
    var uri;
    /* istanbul ignore if */
    if (bootloader.useWebSquareLicense === true) {
        if (path.indexOf("/") > -1) {
            if (path.split("/")[0] == "engine" || path.split("/")[0] == "uiplugin") {
                if (skipLog === undefined) bootloader.printLog("bootloader.imports [engine/uiplugin][" + path + "]");
                uri = bootloader.loadPath2(path);
            } else {
                if (skipLog === undefined) bootloader.printLog("bootloader.imports [ext][" + path + "]");
                uri = path;
            }
        } else {
            var obj = bootloader.parseObjPath(path);
            if (typeof obj != "function") {
                if (skipLog === undefined) bootloader.printLog("bootloader.imports [object][" + path + "]");
                uri = bootloader.loadPath2(path);
            }
        }
    } else {
        if (path.indexOf("/") > -1) {
            uri = path;
        } else {
            var obj = bootloader.parseObjPath(path);
            if (typeof obj != "function") {
                var loadPath = bootloader.loadPath(path);
                uri = loadPath;
            }
        }
    }
    return uri;
};
/**
 * @plugin  bootloader
 * @cdate   20100408
 * @version 2.0
 * @author  SW2
 * @description
            JavaScript 객체를 동적으로 Loading한다.
            path에 /가 있는 경우 파일 경로로 인식해서 엔진 모듈을 로딩하고
            그 외의 경우에는 UI Plug-in으로 인식해서 .을 /로 변환해서 로딩한다.
            await bootloader.importAsync("engine/session.js");   ==> engine/session.js 파일 로딩
            await bootloader.importAsync("uiplugin.radio");      ==> uiplugin/radio/radio.js 파일 로딩
 * @param   <String:Y> path import하기 위한 js 경로
 * @param   <Array:N> eval을 한번에 하기위해서 조회한 결과를 push할 Array를 추가 파라미터로 지정할 수 있다.
 * @see
 * @return
 * @exception
 * @sample
 * @hidden  true
 */
bootloader.importAsync = function(path, options) {
    ["bootloader.importAsync"];
    if (!path) {
        return;
    }
    var tempPath = bootloader._isCache(path);
    if (tempPath) {
        return bootloader.importCache[tempPath];
    }
    var promiseObj = Promise.resolve();
    var bImport = options && options.import === true;
    if (bootloader.useWebSquareLicense === true) {
        var uri;
        try {
            var path2 = path;
            /* istanbul ignore if */
            if (bootloader.useWebSquareLicense === true) {
                if (path2.indexOf("uiplugin.") >= 0) {
                    path2 = path2.replace(".", "/");
                    path2 = path2 + path2.substring(path2.indexOf("/")) + ".js";
                }
            }
            if (bootloader.incrementalChunkImport && WebSquare.allPluginArr.indexOf(path2) > -1) {
                while (bootloader.currentChunkNum < bootloader.engineChunkNum && !bootloader.importCache[path2]) {
                    bootloader.importChunkPlugin(bootloader.currentChunkNum++, bootloader.engineChunkNum);
                }
            } else {
                uri = bootloader._getloadPath(path2);
                uri = bootloader.getEngineUri(uri);
                if (bImport) {
                    promiseObj = WebSquare._dynamicImport(uri);
                } else {
                    promiseObj = bootloader.writeAsync(uri);
                }
            }
        } catch (e) {
            bootloader.printStackTrace(e, "bootloader.imports [" + path + "]");
        }
    } else {
        try {
            uri = bootloader._getloadPath(path);
            uri = bootloader.getEngineUri(uri);
            if (bImport) {
                promiseObj = WebSquare._dynamicImport(uri);
            } else {
                promiseObj = bootloader.writeAsync(uri);
            }
        } catch (e) {
            bootloader.printStackTrace(e, "bootloader.importAsync [" + path + "]");
        }
    }
    bootloader.importCache[path] = promiseObj;
    return promiseObj;
};
bootloader.write = function(src, charset, callback) {
    ["bootloader.write"];
    try {
        var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        var s = document.createElement("script");
        s.type = "text/javascript";
        if (charset) {
            s.charset = charset;
        }
        s.src = src;
        if (callback) {
            s.onload = function() {
                callback();
            }
        }
        head.appendChild(s);
        head = null;
    } catch (e) {
        this.printStackTrace(e, "bootloader.write");
    }
};
bootloader.writeAsync = function(src, charset) {
    ["bootloader.write"];
    try {
        return new Promise(function(resolve, reject) {
            var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            var s = document.createElement("script");
            s.type = "text/javascript";
            if (charset) {
                s.charset = charset;
            }
            s.src = WebSquare._getModuleSrc(src);
            s.onload = function() {
                resolve();
            }
            s.onerror = function(err) {
                var src = err && err.target ? err.target.src : ""; 
                reject(src);
            }
            head.appendChild(s);
            head = null;
        });
    } catch (e) {
        this.printStackTrace(e, "bootloader.write");
    }
};
/**
 * @plugin  bootloader
 * @cdate   20100408
 * @version 2.0
 * @author  SW2
 * @description
            2.0엔진 로딩시 한번에 모든 engine과 plugin을 지정된 크기만큼 (기본값 60K)가져온다.
 * @param
 * @see
 * @return  <Number> 로딩된 JavaScript 문자열
 * @exception
 * @sample
 * @hidden  true
 */
/* istanbul ignore next */
bootloader.importChunkPlugin = function(idx, chunkNum) {
    ["bootloader.importChunkPlugin"];
    var ret = "";
    if (bootloader.useWebSquareLicense === true) {
        try {
            if (idx >= chunkNum) {
                return false;
            }
            var jspUri = WebSquare.baseServletURI + "javascriptPluginAll.wq?";
            var chunkNum = chunkNum || 1;
            if (WebSquare.engineType) {
                jspUri = jspUri + WebSquare.engineType;
            }
            jspUri = jspUri + "idx=" + idx + "&chunkNum=" + chunkNum;
            if (jspUri.length > 3) {
                if (jspUri.indexOf(".wq") >= 0) {
                    jspUri = bootloader.getEngineVersionPostfix(jspUri);
                } else { // JS파일 등
                    if (WebSquare.WebSquareEngineCache == true) {
                        jspUri = bootloader.getEngineCachePostfix(jspUri);
                    } else {
                        jspUri = bootloader.getRandomPostfix(jspUri);
                    }
                }
            }
            var http = bootloader.getXMLHTTPObject();
            http.open('GET', jspUri, false);
            http.send(null);
            bootloader.globalEval(http.responseText);
            return true;
        } catch (e) {
            ret = "";
            this.printStackTrace(e, "bootloader.importChunkPlugin [" + idx + "]");
        }
    }
};
/**
 * @plugin  bootloader
 * @cdate   20100408
 * @version 2.0
 * @author  SW2
 * @description
            2.0엔진 로딩시 한번에 모든 engine과 plugin을 가져온다.
 * @param
 * @see
 * @return  <Number> 로딩결과 값
 * @exception
 * @sample
 * @hidden  true
 */
bootloader.importPluginAll = async function() {
    ["bootloader.importPlugin"];
    var ret = 0;
    if (bootloader.importCache["ALL_PLUGIN"] == null) {
        bootloader.importCache["ALL_PLUGIN"] = "ALL_PLUGIN";
    } else {
        return ret;
    }
    /* istanbul ignore if */
    if (bootloader.useWebSquareLicense === true) {
        try {
            var jspUri = WebSquare.baseServletURI + "javascriptPluginAll.wq";
            if (WebSquare.engineType) {
                jspUri = jspUri + "?" + WebSquare.engineType.substring(0, WebSquare.engineType.length - 1);
            }
            if (jspUri.charAt(0) != "/" && jspUri.search(/http(s)?:\/\//) != 0) {
                jspUri = WebSquare.baseServletURI + jspUri;
            }
            if (jspUri.length > 3) {
                if (jspUri.indexOf(".wq") >= 0) {
                    jspUri = bootloader.getEngineVersionPostfix(jspUri);
                } else { // JS파일 등
                    if (WebSquare.WebSquareEngineCache == true) {
                        jspUri = bootloader.getEngineCachePostfix(jspUri);
                    } else {
                        jspUri = bootloader.getRandomPostfix(jspUri);
                    }
                }
            }
            if (WebSquare.pluginCache === "all") {
                var engineStr = bootloader.loadUri(jspUri);
                if (engineStr == null || engineStr == "") {
                    ret = 1;
                } else {
                    bootloader.globalEval(engineStr);
                }
            } else {
                WebSquare.startApplication = function() {};
                await bootloader.writeAsync(jspUri, undefined, function() {
                    bootloader._afterEngineLoad();
                    if (window.WebSquareExternal && window.WebSquareExternal._onload === true) {
                        // 엔진이 load되기 전에 document.init이벤트가 발생하여 WebSquare.startApplication이 실행된 경우. 
                        // 일반적으론 발생하지 않으나 이에 대한 예외 처리를 확실하게 해 준다. IE 분할로드 시에 간헐적으로 발생하는 오류가 수정될 것으로 기대함.
                        WebSquare.startApplication();
                    }
                });
            }
            /*
            var c = bootloader.loadUri( jspUri );
            if( c == null || c == "" ) {
                ret = 1;
            } else {
                bootloader.globalEval(c);
            }
            */
        } catch (e) {
            ret = 2;
            bootloader.printLog("bootloader.importPluginAll module imports failure.");
        }
    }
    return ret;
};
/**
 * @plugin  bootloader
 * @cdate   20100408
 * @version 2.0
 * @author  SW2
 * @description
            Plugin에서 사용되는 다른 Plugin이 있을 경우 그 플러그인이 정의 되기 전에 실행되어 미리 imports 한다.
            사용방법은 uiplugin과 같다.
            imports 되지 않은 plugin인지 확인하여 없는 경우에만 imports한다.
            2.0 기준으로 imports에서 하는 동작과 차이가 없어 보임 삭제 대상
 * @param
 * @see
 * @return  <Number> 로딩결과 값
 * @exception
 * @sample
 * @hidden  true
 */
bootloader.requires = function(path) {
    ["bootloader.requires"];
    try {
        //          if (bootloader.useWebSquareLicense === true){
        //              var path2 = path;
        //              if( path2.indexOf("uiplugin.")>=0 ){
        //                  path2 = path2.replace(".","/");
        //                  path2 = path2 + path2.substring( path2.indexOf("/") )+".js";
        //              }
        //              for( var i = 0 ; i < WebSquare.pluginList.length; i++){
        //                  if (WebSquare.pluginList[i] == path2){
        //                      return;
        //                  }
        //              }
        //          }
        var obj = bootloader.parseObjPath(path);
        //          var loadPath = bootloader.loadPath(path);
        if (typeof obj != "function") {
            if (WebSquare.hybridApp == true && WebSquare.WebSquaredoc) {
                if (bootloader.useWebSquareLicense === true) {
                    //path = bootloader.getEngineUri("HybridPluginOthers.js");
                    if (typeof path === "string" && (path.slice(0, 8) === "uiplugin" || path.slice(0, 6) === "engine")) {
                        path = bootloader.getEngineUri("HybridPluginAll_ui_4.js");
                    }
                }
            }
            imports(path);
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.requires");
    }
};
bootloader.requireAsync = async function(path) {
    ["bootloader.requireAsync"];
    try {
        if (typeof path !== "string") {
            return;
        }
        path = path.wq_trim();
        if (path.slice(0, 9) === "uiplugin." || path.slice(0, 7) === "engine.") {
            return WebSquare._loadModuleDynamic(path);
        }
        var obj = bootloader.parseObjPath(path);
        //          var loadPath = bootloader.loadPath(path);
        if (!obj || JSON.stringify(obj) === "{}") {
            await bootloader.importAsync(path);
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.requires");
    }
};
/**
 * @plugin  bootloader
 * @cdate   20201201
 * @version 5.0
 * @author  전병진
 * @description
            _websquare_ 폴더하위에 있는 자원을 imports 한다.
            _websquare_ 폴더명은 변경이 가능하다.
 * @param
 * @see
 * @return  <Number> 로딩결과 값
 * @exception
 * @sample
 * @hidden  true
 */
bootloader.inquires = async function(pathStr) {
    ["bootloader.inquires"];
    try {
        var obj = bootloader.parseObjPath(pathStr);
        var path = bootloader.inquiresPath(pathStr); // path는 상대경로
        if (typeof obj != "function") {
            await bootloader.importAsync(path);
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.inquires");
    }
};
bootloader.inquiresPath = function(path) {
    return WebSquare.sp5ResourcePath + "/" + path; // path는 상대경로
}
/**
    삭제 대상 : 이미 모든 플러그인들은 로딩 되어있음
    private method
    3. parseObjPath
        imports 할 때 사용되는 메소드로 path에 해당하는 Object를 parentObj로부터 찾아 없을경우 생성하여 리턴한다.
        parentObj를 지정하지 않는 경우 기본적으로 WebSquare로부터 찾는다.
        parseObjPath("uiplugin.plugin",WebSquare);
 */
bootloader.parseObjPath = function(path, parentObj) {
    ["bootloader.parseObjPath"];
    try {
        function isEmpty(obj) {
            if (typeof obj !== "object") return false;
            if (obj === WebSquare || obj === WebSquare.uiplugin) return true;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) return false;
            }
            return true;
        }
        var path2 = path.replace(/\//g, '.');
        var object = (parentObj != null ? parentObj : WebSquare);
        var names = "";
        if (path2.startsWith('engine')) {
            names = path2.replace('engine.', '').split('.');
        } else if (path2.startsWith('control')) {
            names = path2.replace('control.', '').split('.');
        } else if (path2.startsWith('uiplugin.pivot.')) {
            names = path2.replace('uiplugin.pivot.', 'uiplugin.').split('.');
        } else {
            names = path2.split('.');
        }
        for (var i = 0, l = names.length; i < l && isEmpty(object); i++) {
            object = bootloader.evalProp(names[i], object);
        }
        return object;
    } catch (e) {
        this.printStackTrace(e, "bootloader.parseObjPath");
    }
};
/**
    private method
    4. loadPath
        UI Plug-in객체의 경로를 상대경로로 변환한다.
        loadPath("uiplugin.radio");     ==> uiplugin/radio/radio.js 반환
 */
bootloader.loadPath = (function() {
    var loadPathHash = {};
    return function(path) {
        ["bootloader.loadPath"];
        try {
            if (!loadPathHash[path]) {
                if (path.slice(-2) === "js") {
                    loadPathHash[path] = path;
                } else {
                    var tokens = path.split('.');
                    tokens[tokens.length] = tokens[tokens.length - 1] + ".js";
                    loadPathHash[path] = tokens.join("/");
                }
            }
            return loadPathHash[path];
        } catch (e) {
            bootloader.printStackTrace(e, "bootloader.loadPath");
        }
    };
})();
/* istanbul ignore next */
bootloader.loadPath2 = function(path) {
    ["bootloader.loadPath"];
    try {
        return path;
        if (bootloader.useWebSquareLicense === true && typeof excludeLicenseList != 'undefined' && excludeLicenseList != null && excludeLicenseList.length != 0) {
            for (var i in excludeLicenseList) {
                if (excludeLicenseList[i] == path) {
                    if (path.length >= 9 && path.substring(0, "uiplugin.".length) == "uiplugin.") {
                        return bootloader.loadPath(path);
                    } else {
                        return path;
                    }
                }
            }
        }
        var names;
        var namePath;
        if (path.indexOf("/") > -1) {
            var temp = path.split(".");
            names = temp[0].split(".");
        } else {
            names = path.split(".");
        }
        //        var opener1 = null;
        //        while( typeof openerWindow != 'undefined' && openerWindow != null ) {
        //          opener1 = openerWindow;
        //          openerWindow = openerWindow.opener;
        //        }
        //          namePath= WebSquare.baseURI + "WebSquareLicenseCheck?path=/";
        namePath = WebSquare.baseServletURI + "javascript.wq?" + WebSquare.engineType + "q=";
        for (var i = 0, l = names.length; i < l - 1; i++) {
            namePath += names[i] + "/";
        }
        namePath += names[names.length - 1];
        return namePath;
    } catch (e) {
        this.printStackTrace(e, "bootloader.loadPath");
    }
};
/**
    private method
    5. evalProp
        parseObjPath에서 사용되는 메소드로 object로 지정된 객체의 name객체가 있는경우 이를 리턴하고 없으면 생성하여 리턴한다.
        bootloader.evalProp("uiplugin",WebSquare);
 */
bootloader.evalProp = function( /*String*/ name, /*Object*/ object) {
    ["bootloader.evalProp"];
    try {
        //      bootloader.printLog(object + " [  " + name  + "  ] " );
        var ret = {};
        if (object && bootloader.isDef(name, object)) {
            ret = object[name];
        }
        return ret;
    } catch (e) {
        this.printStackTrace(e, "bootloader.evalProp");
    }
};
/**
    private method
    6. loadUri
        지정된 경로에 있는 파일을 Loading한다. loadUri는 자동으로 최상위 frame에 있는 함수를 호출한다.
        사용방법] loadUri("uiplugin/radio/radio.js");
 */
bootloader.loadUri = function(uri) {
    ["bootloader.loadUri"];
    var contents = null;
    try {
        if (WebSquare.pluginCache === "false") {
            contents = this.getText(uri) || "";
        } else if (WebSquare.pluginCache === "all") {
            try {
                var tempFrame = self;
                var tempLimit = 0;
                while (tempFrame.opener != null) {
                    tempLimit++;
                    tempFrame = tempFrame.opener;
                    if (tempLimit > 100) {
                        throw ({
                            "message": "opener limit exceeded"
                        });
                    }
                }
                if (tempFrame.top[WebSquare.pluginCacheVariable] == undefined) {
                    tempFrame.top[WebSquare.pluginCacheVariable] = {};
                }
                if (tempFrame.top[WebSquare.pluginCacheVariable][uri] == undefined) {
                    contents = this.getText(uri);
                    tempFrame.top[WebSquare.pluginCacheVariable][uri] = contents.toString().slice(0);
                } else {
                    contents = tempFrame.top[WebSquare.pluginCacheVariable][uri];
                }
            } catch (e) {
                contents = this.getText(uri) || "";
            }
        } else {
            contents = bootloader.PluginCache[uri];
            if (typeof contents == 'undefined') {
                try {
                    if (window.opener && window.opener.WebSquare) {
                        contents = window.opener.WebSquare.BootLoader.loadUri(uri);
                        if (contents == null || contents == "") {
                            contents = this.getText(uri);
                        }
                    } else if (window.parent !== window.self && window.parent.WebSquare) {
                        contents = window.parent.WebSquare.BootLoader.loadUri(uri);
                        if (contents == null || contents == "") {
                            contents = this.getText(uri);
                        }
                    } else {
                        contents = this.getText(uri);
                    }
                } catch (e) {
                    contents = this.getText(uri);
                }
                if (!(contents == null || contents == "")) {
                    bootloader.setPluginCache(uri, contents);
                    //bootloader.PluginCache[uri] = contents;
                }
            }
        }
    } catch (e) {
        this.printStackTrace(e, "bootloader.loadUri");
    }
    return contents;
};
/**
    7. getText
        서버의 지정된 경로에 있는 파일의 내용을 반환한다.
        사용방법] getText("uiplugin/radio/radio.js");
 */
bootloader.getText = function(uri) {
    ["bootloader.getText"];
    try {
        var originalURI = uri;
        var http = this.getXMLHTTPObject();
        try {
            bootloader.openEngineUri(uri, http);
            var charset = window.WebSquareExternal.charset;
            if (charset) {
                http.overrideMimeType("text/javascript;charset=" + charset);
            }
            http.send(null);
            if (http.status >= "400") {
                if (originalURI.indexOf("uiplugin") > -1) {
                    bootloader.printError("Plugin [" + originalURI + "] Does not exist.");
                } else {
                    bootloader.printError("Module [" + originalURI + "] Does not exist.");
                }
                http = null;
                return null;
            }
        } catch (e) {
            if (originalURI.indexOf("uiplugin") > -1) {
                bootloader.printError("Plugin [" + originalURI + "] Does not exist.");
            } else {
                bootloader.printError("Module [" + originalURI + "] Does not exist.");
            }
        }
        var ret = http.responseText;
        http = null;
        return ret;
    } catch (e) {
        this.printStackTrace(e, "bootloader.getText(" + uri + ")");
    }
};
/**
    8. getXMLHTTPObject
        XMLHttpRequest 객체를 반환한다.
        사용방법]  var http = bootloader.getXMLHTTPObject();
 */
bootloader.getXMLHTTPObject = function(isCORSXHR) {
    ["bootloader.getXMLHTTPObject"];
    try {
        var http = null;
        try {
            if (bootloader.useActiveXObject && isCORSXHR !== true) {
                //                  this.printLog("XHR : using " + bootloader._XMLHTTP_PROGIDS[0]);
                http = new ActiveXObject(bootloader._XMLHTTP_PROGIDS[0]);
            } else if (window.XMLHttpRequest) {
                //                  this.printLog("XHR : using XMLHttpRequest()");
                http = new XMLHttpRequest();
            }
        } catch (e) {
            this.printStackTrace(e, "bootloader.getXMLHTTPObject");
        }
        if (typeof http == 'undefined' || http == null) {
            bootloader.printError("This Browser does not support Ajax.");
            return null;
        }
        return http;
    } catch (e) {
        this.printStackTrace(e, "bootloader.getXMLHTTPObject");
    }
};
/**
    9. isDef
        객체에 하위 객체가 있는지 체크
        사용방법]  if( bootloader.isDef("BootLoader", WebSquare) ) { ...
 */
bootloader.isDef = function( /*String*/ name, /*Object?*/ object) {
    ["bootloader.isDef"];
    try {
        if (object == null) {
            object = window;
        }
        if (object[name] == null) {
            return false;
        } else {
            return (typeof object[name] != "undefined");
        } // Boolean
    } catch (e) {
        this.printStackTrace(e, "bootloader.isDef");
    }
};
/**
    10. printError
        에러 내용을 출력
 */
bootloader.printError = function(msg) {
    ["bootloader.printError"];
    try {
        if (WebSquare.skipLog === true) {
            return;
        }
        if (typeof WebSquare.logger != "undefined" && typeof WebSquare.logger.printLog != "undefined") {
            WebSquare.logger.printLog("[WebSquare BootLoader Error]\n\n" + msg);
        } else {
            bootloader.printLog("[WebSquare BootLoader Error]\n\n" + msg);
        }
    } catch (e) {
        bootloader.printLog("[WebSquare BootLoader Error]\n\n" + msg);
    }
};
/**
    11. printStackTrace
        Exception이 발생한 경우 상세 내용을 출력
 */
bootloader.printStackTrace = function(e, pos, msg) {
    ["bootloader.printStackTrace"];
    if (WebSquare.skipLog === true) {
        return;
    }
    var str = "";
    for (var idx in e) {
        var tmp = idx + "               ";
        tmp = tmp.substring(0, 15);
        if (idx == "number") {
            str += tmp + ":" + (e[idx] & 0xFFFF) + "\n"; // Prints the error code.
        } else {
            str += tmp + ":" + e[idx] + "\n";
        }
    }
    //str += "caller         :" + bootloader.getSignature(bootloader.printStackTrace.caller);
    if (typeof msg == "undefined") {
        str = pos + " Error occurs during the execution. \n\n" + str;
    } else {
        str = pos + " Error occurs during the execution.  \n" + msg + "\n\n" + str;
    }
    try {
        if (typeof WebSquare.logger != "undefined" && typeof WebSquare.logger.printLog != "undefined") {
            WebSquare.logger.printLog(str);
            if (e && typeof e.aleradyThrow == "undefined") {
                e.aleradyThrow = "djshin";
            }
        } else {
            bootloader.printLog(str);
        }
        if (WebSquare.errorConsole === true) {
            console.error(str);
        }
        var errorHandler = WebSquare.core.getConfiguration("/WebSquare/debug/@errorHandler");
        var errorHandlerFunc = WebSquare.util.getGlobalFunction(errorHandler);
        if (errorHandlerFunc) {
            errorHandlerFunc(e, e.message);
        }
    } catch (e1) {
        bootloader.printLog(str);
    }
};
/*
 * uri를 키로 하여 contents를 저장한다.
 */
bootloader.setPluginCache = function(uri, contents) {
    bootloader.PluginCache[uri] = contents;
};
/**
    14. browserCheck
        현재 사용하고 있는 브라우저의 종류를 검사한다.
        bootloader.browserCheck.ie가 true이면 Internet Explorer
        bootloader.browserCheck.moz가 true이면 Firefox, Netscape
        bootloader.browserCheck.opera가 true이면 Opera
 */
bootloader.browserCheck = function() {
    ["bootloader.browserCheck"];
    return navigator.appName;
};
//alert(navigator.userAgent);
//alert(navigator.appName);
//alert(navigator.vendor);
bootloader.engineLoadingMode = { // 0 : ALL Download + All Eval , 1 : 64K Download + All Eval , 2 : 개별 Download + All Eval , 3 : 개별 Download + 개별 Eval
    "ie": 1,
    "moz": 1,
    "opera": 1,
    "android": 1,
    "iphone": 1,
    "blackberry": 1,
    "chrome": 1,
    "safari": 1,
    "mode": 1
};
bootloader.browserCheck.ie = navigator.appName.match(/Explorer/i) != null;
bootloader.browserCheck.ieAllVersion = navigator.appName.match(/Explorer/i) != null || navigator.userAgent.match(/Trident/i) != null || navigator.userAgent.match(/MSIE/i) != null; // XMLHTTP, XML(Parsing, XPath, SelectSingleNode) 처리시에는 최신 IE11도 구형 IE와 동일하게 처리해야 함
bootloader.browserCheck.moz = navigator.userAgent.match(/Firefox/i) != null || (navigator.userAgent.match(/Gecko/i) != null && navigator.userAgent.match(/AppleWebKit/i) == null && navigator.userAgent.match(/Trident/i) == null);
bootloader.browserCheck.opera = navigator.userAgent.match(/Opera/i) != null;
bootloader.browserCheck.android = /Android/.test(navigator.userAgent);
bootloader.browserCheck.iphone = /iPhone/.test(navigator.userAgent) || /iPhone/.test(navigator.platform);
bootloader.browserCheck.ipad = /iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
bootloader.browserCheck.ipod = /iPod/.test(navigator.userAgent);
bootloader.browserCheck.blackberry = /BlackBerry/.test(navigator.userAgent);
bootloader.browserCheck.chrome = !bootloader.browserCheck.ie && (/Chrome/.test(navigator.userAgent));
bootloader.browserCheck.chromeEdge = !bootloader.browserCheck.ie && (/Chrome/.test(navigator.userAgent)) && (/Edg/.test(navigator.userAgent));
if (typeof navigator.vendor != "undefined") {
    bootloader.browserCheck.safari = navigator.vendor.indexOf("Apple") > -1;
} else {
    bootloader.browserCheck.safari = false;
}
//  bootloader.browserCheck.safari = /Safari/.test(navigator.userAgent);        // Windows용 Safari, Mac용 Safari, iphone용 Safari, Android브라우저에서 동일하게 나타남.
bootloader.browserCheck.ffox = /Firefox/.test(navigator.userAgent); // bootloader.browserCheck.moz와 일치함, 사용금지. 2010년 08월 02일 김욱래
//  bootloader.browserCheck.moz = navigator.appName.match(/\Netscape/i)!= null; // 기존 코딩임. Firefox, Safari, Chrome, Iphone, Android에서 Netscape라고 표시되어 core와 동일하게 수정함. 관련 소스도 변경함. 2010년 08월 02일 김욱래
bootloader.browserCheck.spartan = /Edge/.test(navigator.userAgent);
/**
    15. browserVersion
        현재 사용하고 있는 브라우저의 버전을 반환한다.
 */
bootloader.browserVersion = function() {
    ["bootloader.browserVersion"];
    try {
        if (bootloader.browserCheck.ieAllVersion) {
            // ie8에서 documentMode추가
            if (document.documentMode) {
                return document.documentMode + "";
            }
            if (navigator.appVersion.charAt(0) == "2") {
                return "2";
            } else if (navigator.appVersion.charAt(0) == "3") {
                return "3";
            } else if (navigator.appVersion.charAt(0) == "4") {
                if (navigator.appVersion.indexOf("MSIE 9") != -1) {
                    return "9";
                } else if (navigator.appVersion.indexOf("MSIE 8") != -1) {
                    return "8";
                } else if (navigator.appVersion.indexOf("MSIE 7") != -1) {
                    return "7";
                } else if (navigator.appVersion.indexOf("MSIE 6") != -1) {
                    return "6";
                } else if (navigator.appVersion.indexOf("MSIE 5.5") != -1) {
                    return "5.5";
                } else if (navigator.appVersion.indexOf("MSIE 5.0") != -1) {
                    return "5.0";
                } else {
                    return "4";
                }
            } else if (navigator.appVersion.charAt(0) == "5") {
                return "5";
            }
        } else {
            if (navigator.appVersion.charAt(0) == 2) {
                return "2";
            } else if (navigator.appVersion.charAt(0) == 3) {
                return "3";
            } else if (navigator.appVersion.charAt(0) == 4) {
                return "4";
            } else if (navigator.appVersion.charAt(0) == 5) {
                return "6";
            }
        }
        return "";
    } catch (e) {
        this.printStackTrace(e, "bootloader.browserVersion");
    }
};
/**
    WebSquare.logger.printLog
        log를 남긴다. 디버그창에서 확인가능하다

        @param    msg : 로그 메시지
        사용방법]  WebSquare.logger.printLog("함수 호출 시작");
*/
bootloader.printLog = function(msg) {
    ["bootloader.printLog"];
    try {
        if (WebSquare.skipLog === true || !WebSquare.logEnableFlag) {
            return;
        }
        //IE의 경우 console창이 없을 경우 오류가 나기 때문에 console객체를 만들어준다
        if (!window.console) {
            var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
            window.console = {};
            for (var i = 0; i < names.length; ++i) {
                window.console[names[i]] = function() {};
            }
        }
        if (WebSquare.logMsgArray.length > 500) {
            delete WebSquare.logMsgArray;
            WebSquare.logMsgArray = [];
            WebSquare.logMsgArray.push(bootloader.getLogTime() + " " + "BootLoader] Delete logs for reducing memory usage.");
        }
        var logMsg1 = bootloader.getLogTime();
        var logMsg2 = " " + "BootLoader] " + msg;
        WebSquare.logMsgArray.push(logMsg1 + logMsg2);
        if (WebSquare.printConsole) {
            console.log(logMsg1 + logMsg2);
        }
        if (WebSquare.remoteConsole) {
            WebSquare.remoteLogMsgArray.push(logMsg1 + WebSquare.logFileName + logMsg2);
        }
    } catch (e) {
        console.error(e);
    }
};
/**
    private method
  bootloader.getLogTime
        로그의 시간을 가져오는 함수

        @param    logDate : 로그에 찍힐 시간
        @return   hh:mm:ss.SSS을 반환

        사용방법]
*/
bootloader.getLogTime = function(logDate) {
    ["bootloader.getLogTime"];
    var d = null;
    if (logDate == 'undefined' || logDate == null) {
        d = new Date();
    } else {
        d = new Date(logDate);
    }
    var tmpTime = d.getTime();
    var offsetTime = tmpTime - WebSquare.logTime;
    var hour = bootloader.fillZero(d.getHours(), 2);
    var minute = bootloader.fillZero(d.getMinutes(), 2);
    var second = bootloader.fillZero(d.getSeconds(), 2);
    var millisecond = bootloader.fillZero(d.getMilliseconds(), 3);
    var tmStr = hour + ":" + minute + ":" + second + "." + millisecond;
    if (offsetTime < 100000) {
        WebSquare.logTotalTime += offsetTime;
        tmStr += " " + bootloader.fillZero(offsetTime, 5) + " " + bootloader.fillZero(WebSquare.logTotalTime, 6);
    } else {
        tmStr += " 00000 000000";
    }
    WebSquare.logTime = tmpTime;
    return tmStr;
};
/**
  bootloader.fillZero
    문자열의 앞쪽에 0을 채워서 지정한 길이의 문자열을 만든다.

    @param  str : 문자열
            len : 길이
    @return 0을 채운 문자열
    사용방법]   bootloader.fillZero( "1234" , 5 );
 */
bootloader.fillZero = function(str, len) {
    ["bootloader.fillZero"];
    var offset;
    var tempStr = (str + "");
    if (isNaN(tempStr)) {
        return str;
    }
    if (tempStr.length >= len) return tempStr;
    offset = len - tempStr.length;
    while (offset > 0) {
        switch (offset) {
            case 1:
                offset = 0;
                tempStr = "0" + tempStr;
                break;
            case 2:
                offset = 0;
                tempStr = "00" + tempStr;
                break;
            case 3:
                offset = 0;
                tempStr = "000" + tempStr;
                break;
            case 4:
                offset = 0;
                tempStr = "0000" + tempStr;
                break;
            case 5:
                offset = 0;
                tempStr = "00000" + tempStr;
                break;
            case 6:
                offset = 0;
                tempStr = "000000" + tempStr;
                break;
            case 7:
                offset = 0;
                tempStr = "0000000" + tempStr;
                break;
            case 8:
                offset = 0;
                tempStr = "00000000" + tempStr;
                break;
            case 9:
                offset = 0;
                tempStr = "000000000" + tempStr;
                break;
            case 10:
                offset = 0;
                tempStr = "0000000000" + tempStr;
                break;
            case 11:
                offset = 0;
                tempStr = "00000000000" + tempStr;
                break;
            case 12:
                offset = 0;
                tempStr = "000000000000" + tempStr;
                break;
            case 13:
                offset = 0;
                tempStr = "0000000000000" + tempStr;
                break;
            case 14:
                offset = 0;
                tempStr = "00000000000000" + tempStr;
                break;
            case 15:
                offset = 0;
                tempStr = "000000000000000" + tempStr;
                break;
            default:
                offset -= 15;
                tempStr = "000000000000000" + tempStr;
                break;
        }
    }
    return tempStr;
};
bootloader.getParameter = function(url, param, defaultValue) {
    ["bootloader.getParameter"];
    try {
        var _idx = url.indexOf("?");
        if (_idx >= 0) {
            var srch = url.substring(_idx + 1);
            var arrayOfSrch = srch.split("&");
            for (var i = 0; i < arrayOfSrch.length; i++) {
                var tmpArray = arrayOfSrch[i].split("=");
                if (tmpArray.length == 2 && tmpArray[0] == param) {
                    if (tmpArray[1] == "" && typeof defaultValue != 'undefined') {
                        return defaultValue;
                    } else {
                        return tmpArray[1];
                    }
                }
            }
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.getParameter");
    }
    if (typeof defaultValue != 'undefined') {
        return defaultValue;
    } else {
        return "";
    }
};
/**
    private method
    WebSquare.exception.getSignature

        @param    obj : 객체
        @return

        사용방법]
*/
bootloader.getSignature = function(obj, depth) {
    ["bootloader.getSignature"];
    if (typeof depth == "undefined") {
        depth = 0;
    }
    if (depth > 5) {
        return "...(omission)";
    }
    if (obj == null || obj == 'null') {
        return '';
    } else {
        try {
            var parentStr = "";
            if (obj.caller != null && obj.toString() != obj.caller.toString()) {
                parentStr = bootloader.getSignature(obj.caller, ++depth);
                //              if( parentStr != "" ) {
                //                  parentStr =  parentStr + "\n";
                //              }
            }
            var str = obj.toString();
            //          bootloader.printLog( str );
            //          var property_list  = "";
            //          for (var prop in obj)
            //              property_list += prop + "   "  + obj[prop] +  "\n";
            //          bootloader.printLog(obj.constructor);
            //          var idx = str.indexOf('"WebSquare' );
            var idx = str.indexOf('["');
            if (idx == -1) {
                var idx1 = str.indexOf(')');
                if (idx1 == -1) {
                    return "    at " + str + "\n" + parentStr;
                } else {
                    return "    at " + str.substring(0, idx1 + 1) + "\n" + parentStr;
                }
            } else {
                var idx1 = str.indexOf('"', idx + 2);
                //              bootloader.printLog( idx + "  " + idx1 );
                if (idx1 == -1) {
                    return "    at " + str + "\n" + parentStr;
                } else {
                    return "    at " + str.substring(idx + 2, idx1) + "\n" + parentStr;
                }
            }
        } catch (e) {
            return obj;
        }
    }
};
// config.xml 의 <environment cache="nocache"/> cache값이 nocache인경우 false , cache인경우 true
// WebSquare.WebSquareCache가 false인 경우 url호출시 ?idx에 랜덤값을 넣어 새로운 url 호출하도록하여 캐쉬하지 않도록 한다.
bootloader.getImagePostfix = function(uri) {
    try {
        if (bootloader.useWebSquareLicense === true) {
            uri = bootloader.getImageVersionPostfix(uri);
            //          } else  if( WebSquare.WebSquareCache == false ) {   // JAR를 배포한 경우에는 발생할 수 없는 조건이므로 제외함. - 김욱래
            //              uri = bootloader.getRandomPostfix( uri );
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.getImagePostfix");
    }
    return uri;
};

bootloader.openEngineUri = function(uri, http) {
    try {
        uri = bootloader.getEngineUri(uri);
        http.open('GET', uri, false);
    } catch (e) {
        bootloader.printStackTrace(e, "openEngineUri");
    }
};
bootloader.getEngineUri = function(uri) {
    if (uri.charAt(0) != "/" && uri.search(/http(s)?:\/\//) != 0 && uri.search(/file:\/\//) != 0) {
        if (uri.indexOf(".wq") >= 0) {
            uri = WebSquare.baseServletURI + uri;
        } else {
            uri = WebSquare.baseURI + uri;
        }
    }
    if (WebSquare.hybridApp == true) {
        if (uri.charAt(0) == "/" && WebSquare.w2xDocumentRoot != "") {
            uri = WebSquare.w2xDocumentRoot + uri;
        }
        return uri;
    }
    if (uri.length > 3) {
        if (uri.indexOf(".wq") >= 0) {
            uri = bootloader.getEngineVersionPostfix(uri);
        } else { // JS파일 등
            if (WebSquare.WebSquareEngineCache == true) {
                uri = bootloader.getEngineCachePostfix(uri);
            } else {
                // ssh : fix
                //uri = bootloader.getRandomPostfix(uri);
            }
        }
    }
    return uri;
};
bootloader._getEncodeURL = function(url) {
    try {
        // IE에서 한글 url이 들어온 경우에 encode 처리를 한다. IE 외의 브라우저에서는 처리 불필요
        if (!WebSquare.BootLoader.browserCheck.ieAllVersion || typeof url !== "string") {
            return url;
        }
        var ascIIMax = 127;
        var ret = url;
        for (var i = 0; i < url.length; i++) {
            if (url.charCodeAt(i) > ascIIMax) {
                ret = encodeURIComponent(url).replace(/%2F/g, "/");
                break;
            }
        }
        return ret;
    } catch (e) {
        return url;
    }
};
bootloader.openResourceUri = function(uri, http) {
    try {
        if (WebSquare.isHoneyComb) {
            http.open('GET', uri, false);
        } else {
            var _uri = bootloader.getResourcePostfix(uri);
            http.open('GET', _uri, false);
            // http.setRequestHeader("x-websquare", "1");
            // http.setRequestHeader("If-Modified-Since", bootloader.ifModifiedSince);
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getResourcePostfix = function(uri) {
    try {
        var suffixPostfix = bootloader.generateSuffixPostfix(uri);
        if (suffixPostfix && typeof WebSquare.suffix == "object") { // 하위호환
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + suffixPostfix;
            } else {
                uri += "?postfix=" + suffixPostfix;
            }
        } else if (WebSquare.WebSquareCache == false) {
            uri = bootloader.getRandomPostfix(uri);
        } else {
            uri = bootloader.getResourceCachePostfix(uri);
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getImageVersionPostfix = function(uri) {
    try {
        var suffixPostfix = bootloader.generateSuffixPostfix(uri);
        if (suffixPostfix) {
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + suffixPostfix;
            } else {
                uri += "?postfix=" + suffixPostfix;
            }
        } else if (bootloader.imageVersion != null) {
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + bootloader.imageVersion;
            } else {
                uri += "?postfix=" + bootloader.imageVersion;
            }
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getEngineVersionPostfix = function(uri) {
    try {
        if (uri.indexOf("?") > -1) {
            uri += "&postfix=" + WebSquare.ver;
        } else {
            uri += "?postfix=" + WebSquare.ver;
        }
        if (uri.indexOf("?") > -1) {
            uri += "&compression=" + bootloader.compression;
        } else {
            uri += "?compression=" + bootloader.compression;
        }
        if (WebSquare.buildID) {
            if (uri.indexOf("?") > -1) {
                uri += "&build=" + WebSquare.buildID;
            } else {
                uri += "?build=" + WebSquare.buildID;
            }
        }
        if (window.WebSquarePluginOrderHash) {
            if (uri.indexOf("?") > -1) {
                uri += "&poh=" + window.WebSquarePluginOrderHash;
            } else {
                uri += "?poh=" + window.WebSquarePluginOrderHash;
            }
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getRandomPostfix = function(uri) {
    try {
        if (typeof uri !== "string") {
            return uri;
        }
        var imgList = {
            "png" : true,
            "jpg" : true,
            "jpeg" : true,
            "gif" : true,
            "bmp" : true,
            "tiff" : true,
            "tif" : true,
            "svg" : true,
            "raw" : true,
            "psd" : true,
            "ai" : true,
            "eps" : true,
            "pdf" : true,
            "ico" : true,
            "xcf" : true,
            "webp" : true,
            "heic" : true,
            "heif" : true
        }
        var suri = uri.toLowerCase();
        for (var ext in imgList) {
            var rext = "." + ext;
            if (suri.slice(-rext.length) === rext) {
                return uri;
            } 
        }
        if (uri.indexOf("?") > -1) {
            uri += "&postfix=" + (new Date()).getTime() + WebSquare.safeRandom();
        } else {
            uri += "?postfix=" + (new Date()).getTime() + WebSquare.safeRandom();
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getResourceCachePostfix = function(uri) {
    try {
        var suffixPostfix = bootloader.generateSuffixPostfix(uri);
        if (suffixPostfix) {
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + suffixPostfix;
            } else {
                uri += "?postfix=" + suffixPostfix;
            }
        } else if (bootloader.resourcePostfix) {
            for (var i = 0; i < bootloader.resourcePostfixKey.length; i++) {
                if (uri.indexOf(bootloader.resourcePostfixKey[i]) > -1) {
                    if (uri.indexOf("?") > -1) {
                        uri += "&postfix=" + bootloader.resourcePostfixValue[i];
                    } else {
                        uri += "?postfix=" + bootloader.resourcePostfixValue[i];
                    }
                    return uri;
                }
            }
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + bootloader.resourcePostfix;
            } else {
                uri += "?postfix=" + bootloader.resourcePostfix;
            }
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.getEngineCachePostfix = function(uri) {
    try {
        var suffixPostfix = bootloader.generateSuffixPostfix(uri);
        if (suffixPostfix) {
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + suffixPostfix;
            } else {
                uri += "?postfix=" + suffixPostfix;
            }
        } else if (bootloader.enginePostfix) {
            if (uri.indexOf("?") > -1) {
                uri += "&postfix=" + bootloader.enginePostfix;
            } else {
                uri += "?postfix=" + bootloader.enginePostfix;
            }
        }
    } catch (e) {
        return url;
    }
    return uri;
};
bootloader.rebuildInnerHTML = function(dom, str) {
    WebSquare.core._safeInnerHTML(dom, str);
};
bootloader.addObjStr = function(dom, str) {
    dom.insertAdjacentHTML('beforeEnd', str);
};
bootloader.generateSuffixPostfix = function(uri) {
    var str = "";
    if (WebSquare.suffix && WebSquare.suffix != "") { // 맨 처음 suffix를 JSON으로 파싱하거나 안하는 부분
        if (typeof WebSquare.suffix == "string") {
            try {
                var suffixParse = JSON.parse(WebSquare.suffix);
                if (typeof suffixParse == "object") {
                    WebSquare.suffix = suffixParse;
                } else {
                    return WebSquare.suffix;
                }
            } catch (e) {
                return WebSquare.suffix;
            }
        }
        try {
            var changeList = ["day", "week", "month", "year", "random"];
            var targetList = [];
            var d = new Date();
            var tempDate = new Date();  // week 계산을 위한 date 객체
            targetList.push(d.getDate() <= 9 ? "0" + d.getDate() : "" + d.getDate()); // day
            var firstDay = new Date(tempDate.setDate(1)).getDay();
            var week = Math.ceil((d.getDate() + firstDay) / 7);
            targetList.push(week); // week
            targetList.push(d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1)); // month
            targetList.push(d.getFullYear()); // year
            targetList.push(d.getTime() + WebSquare.safeRandom()); // random
            // targetList에 필요한 문자열을 미리 넣어놓고 일치하는 day나 week가 있을 경우 치환한다.
            var changeProperty = function(str) {
                if (str.indexOf("$") < 0) {
                    return str;
                }
                for (var i = 0; i < changeList.length; i++) {
                    var cp = str.indexOf("${" + changeList[i] + "}");
                    while (cp >= 0) {
                        str = str.substring(0, cp) + targetList[i] + str.substring(cp + changeList[i].length + 3);
                        cp = str.indexOf("${" + changeList[i] + "}", cp);
                    }
                }
                return str;
            };
            var suffix = WebSquare.suffix.suffix;
            for (var i = 0; i < suffix.length; i++) {
                var check = true;
                if (suffix[i].path) { // 기능 중 path에 관한 구현
                    check = false;
                    if (uri.indexOf(suffix[i].path) >= 0) {
                        check = true;
                    }
                }
                if (check) {
                    // IE8에서 <script>태그의 bootloader.js를 로드할 때 어떤 이유에서인지 suffix[i].default로 접근하면 문제 생김
                    // default말고 다른 어떤 이름을 써도 문제 안생기는데 default만 문제가 있음
                    // 그래서 for...in을 사용해서 접근 하는 방법으로 변경함
                    var keyName = "defaults"; // keyName이 default인 경우 IE8에서 오류 발생 (default는 예약어)
                    var strObj = {
                        "extension": ""
                    };
                    strObj[keyName] = "";
                    if (suffix[i]) {
                        for (var key in suffix[i]) {
                            var key2 = key;
                            if (key === "default") {
                                key2 = keyName;
                            }
                            if (key2 == keyName) {
                                strObj[key2] = changeProperty(suffix[i][key2]);
                            }
                            if (key2 == "extension") {
                                var ext = uri.substring(uri.lastIndexOf(".") + 1);
                                if (ext.indexOf("?") > 0) {
                                    ext = ext.substring(0, ext.indexOf("?"));
                                }
                                if (suffix[i].extension[ext]) {
                                    strObj[key2] = changeProperty(suffix[i].extension[ext]);
                                }
                            }
                        }
                        if (strObj["extension"] == "" && strObj[keyName] != "") {
                            str = strObj[keyName];
                        } else {
                            str = strObj["extension"];
                        }
                    }
                    if (str) {
                        break;
                    }
                }
            }
        } catch (e) {
            bootloader.printStackTrace(e, "generateSuffixPostfix");
        }
    }
    return str;
};
bootloader.generatePostfix = function(str) {
    try {
        if (WebSquare.suffix && WebSquare.suffix != "" && typeof WebSquare.suffix == "string") {
            str = WebSquare.suffix;
        } else {
            if (str == 'day') {
                var d = new Date();
                var month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
                var date = d.getDate() <= 9 ? "0" + d.getDate() : "" + d.getDate();
                str = d.getFullYear() + "_" + month + "_" + date;
            } else if (str == 'week') {
                var d = new Date();
                var tempDate = new Date();
                //calculate week
                var firstDay = new Date(tempDate.setDate(1)).getDay();
                var week = Math.ceil((d.getDate() + firstDay) / 7);
                var month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
                str = d.getFullYear() + "_" + month + "_W" + week;
            } else if (str == 'month') {
                var d = new Date();
                var month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
                str = d.getFullYear() + "_" + month;
            } else if (str.indexOf('hour') > -1) {
                var d = new Date();
                var hourStr = str.wq_replaceAll("hour", "").wq_trim();
                var term = parseInt(hourStr, 10);
                d.setHours(d.getHours() + term);
                var month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
                var date = d.getDate() <= 9 ? "0" + d.getDate() : "" + d.getDate();
                var hour = d.getHours() <= 9 ? "0" + d.getHours() : "" + d.getHours();
                str = d.getFullYear() + "_" + month + "_" + date + "_" + hour;
            }
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.generatePostfix");
    }
    return str;
};
bootloader.loadLanguagePack = async function(paramLang) {
    try {
        var msgLang = bootloader.getBrowserLanguage(),
            path, uri, defaultLang;
        defaultLang = WebSquare.core.getConfiguration("/WebSquare/language/@defaultValue") || "en";
        var langPath = WebSquare.core.getConfiguration("/WebSquare/language/@path") || "";
        msgLang = paramLang || WebSquare.cookie.getCookie("system_language") || msgLang || WebSquare.core.getConfiguration("language") || defaultLang;
        if (typeof msgLang === "string") {
            msgLang = msgLang.toLowerCase();
        }
        if (langPath) {
            uri = langPath + "/" + msgLang + ".js";
        } else {
            if (msgLang == 'ko') {
                uri = "message/ko.js";
            } else if (msgLang == 'cn' || msgLang == 'zh') {
                uri = "message/cn.js";
            } else if (msgLang == 'ja' || msgLang == 'jp') {
                uri = "message/ja.js";
            } else { // default en
                var lang = WebSquare.clientLang;
                if (lang == "") {
                    uri = "message/en.js";
                } else {
                    uri = "message/" + lang + ".js";
                }
            }
            uri = bootloader.inquiresPath(uri);
        }
        if (bootloader._isCache(uri)) {
            return;
        }
        path = bootloader._getloadPath(uri);
        path = bootloader.getEngineUri(path);
        try {
            await bootloader.writeAsync(path, "UTF-8");
        } catch (e) {
            if (paramLang == undefined) {
                await bootloader.loadLanguagePack(defaultLang);
            }
        }
    } catch (e) {
        bootloader.printStackTrace(e, "bootloader.generatePostfix");
    }
};
/**
 * @method      bootloader
 * @name        getLanguage
 * @cdate       2009-12-11
 * @version
 * @author
 * @description 브라우저의 language 문자만을 얻어온다.
 * |ex)
 * |ko-KR : kr
 * |en-US : us
 * |ko    : kr
 * @param
 * @see
 * @return      <String>    language
 * @exception
 * @sample
 * @hidden      true
 * @deprecated
 */
bootloader.getBrowserLanguage = function() {
    ["bootloader.getLanguage"];
    try {
        var language = navigator.language || navigator.browserLanguage;
        if (language.indexOf("-") > -1) {
            language = language.substring(0, language.indexOf("-"));
        }
        return language;
    } catch (e) {
        bootloader.printLog("bootloader.getLanguage failure.");
    }
};
bootloader.loadEngineModuleAsync = async function(spa) {
    var moduleInfoList = WebSquare.core.getChildConfiguration("/WebSquare/engine", {
        "singleMode": true
    });
    var promiseArr = [];
    for (var i = 0, len = moduleInfoList.length; i < len; i++) {
        var moduleInfo = moduleInfoList[i];
        var uri = moduleInfo["@src"];
        var moduleInfoCache = moduleInfo["@cache"];
        var bAsync = moduleInfo["@async"] === true || (typeof moduleInfo["@async"] === "string" && moduleInfo["@async"].toLowerCase() === "true");
        if (!uri) {
            continue;
        }
        if (typeof WebSquare.moduleList[uri] == "undefined" || WebSquare.moduleList[uri] === null) {
            WebSquare.moduleList[uri] = 1;
        }
        if (spa && WebSquare.moduleList[uri] > 1 && moduleInfoCache != "false") {
            continue;
        }
        if (WebSquare.core.getConfiguration("/WebSquare/spa/scriptCache/@value").toLowerCase() != "false" || moduleInfoCache == "true") {
            WebSquare.moduleList[uri]++;
        }
        if (moduleInfoCache == "false") {
            WebSquare.moduleList[uri] = 0;
        }
        if (WebSquare.hybridApp == true && uri.charAt(0) == "/" && WebSquare.w2xDocumentRoot != "") {
            uri = WebSquare.w2xDocumentRoot + uri;
        }
        uri = WebSquare.core._getWpackUrl(uri, moduleInfo["@wpack"]);
        uri = WebSquare.core._getContextRootUri(uri);
        if (WebSquare.WebSquareCache == false) {
            uri = bootloader.getRandomPostfix(uri);
        } else {
            uri = bootloader.getResourceCachePostfix(uri);
        }
        var promiseObj = bootloader.writeAsync(uri, moduleInfo.charset);
        if (bAsync === true) {
            promiseArr.push(promiseObj);
        } else {
            await promiseObj.catch(function(err) {
                bootloader.printLog("[ERROR] Module load fail :" + err);
            });
        }
    }
    if (promiseArr.length > 0) {
        await Promise.allSettled(promiseArr).catch(function(err) {
            bootloader.printLog("[ERROR] Module load fail :" + err);
        });
    }
};
bootloader.loadUdcRequires = async function() {
    var udcInfoList = WebSquare.core.getChildConfiguration("/WebSquare/udc/requires", {
        "singleMode": true
    });
    var promiseArr = [];
    for (var i = 0, len = udcInfoList.length; i < len; i++) {
        var udcInfo = udcInfoList[i];
        var udcSrc = WebSquare.core.getPageURL(udcInfo["@src"]);
        var udcType = udcInfo["@type"];
        var udcName = udcInfo["@as"];
        if (udcType === "page" && udcName) {
            if (WebSquare.core.udcObj[udcName] == undefined) {
                var msaOpt = {
                    "msaName": udcInfo["@msaName"]
                };
                var src = WebSquare.core.getPageURL(udcSrc, msaOpt);
                WebSquare.core.udcObj[udcName] = await WebSquare.jsLoader._loadObj(src, msaOpt);
                WebSquare.core.udcMsa[udcName] = msaOpt.msaName;
            }
        } else {
            promiseArr.push(WebSquare.util.loadUserComponent(udcSrc));
        }
    }
    if (promiseArr.length > 0) {
        await Promise.allSettled(promiseArr).catch(function(err) {
            bootloader.printLog("[ERROR] UDC load fail :" + err);
        });
    }
};
bootloader.loadInheritRequires = async function() {
    var inheritInfoList = WebSquare.core.getChildConfiguration("/WebSquare/inherit/requires", {
        "singleMode": true
    });
    var inheritInfoList2 = WebSquare.core.getChildConfiguration("/WebSquare/exc/requires", {
        "singleMode": true
    });
    inheritInfoList = inheritInfoList.concat(inheritInfoList2);
    var promiseArr = [];
    for (var i = 0, len = inheritInfoList.length; i < len; i++) {
        var inheritInfo = inheritInfoList[i];
        promiseArr.push(WebSquare.util.loadInheritComponent(inheritInfo["@src"]));
    }
    if (promiseArr.length > 0) {
        await Promise.allSettled(promiseArr).catch(function(err) {
            bootloader.printLog("[ERROR] Inherit load fail :" + err);
        });
    }
};
bootloader.initJSONConfig = function() {
    var existXhrNode = false;
    for (var idx = bootloader.configurationJSON.length - 1; idx >= 0; idx--) {
        var ret = bootloader.configurationJSON[idx];
        for (var i in ret["WebSquare"]) {
            var childNode = ret["WebSquare"][i];
            if (Object.prototype.toString.call(childNode) === "[object Array]") {
                childNode = childNode[0];
            }
            if (i == "engineCache") {
                if (childNode["@enable"] == "true") {
                    WebSquare.WebSquareEngineCache = true;
                    bootloader.enginePostfix = bootloader.generatePostfix(childNode["@postfix"]);
                }
                if (childNode["@compression"] == "false") {
                    bootloader.compression = false;
                } else if (childNode["@compression"] == "always") {
                    bootloader.compression = "always"; // 2010.12.07 김욱래 - Header에 올라와야 하는 Accept-Encoding이 올라오지 않는 경우에도 압축을 하고 싶으면 always로 설정한다.
                } else {
                    bootloader.compression = true;
                }
                if (childNode["@pluginCache"] === "false") {
                    WebSquare.pluginCache = "false";
                } else if (childNode["@pluginCache"] === "all") {
                    WebSquare.pluginCache = "all";
                }
            } else if (i == "imageCache" && childNode["@enable"] == "true") {
                bootloader.imageVersion = bootloader.generatePostfix(childNode["@version"]);
                //                  bootloader.imageVersion = childNode["@version"];
                bootloader.imageServlet = childNode["@serverUrl"];
                bootloader.imageHostUrl = childNode["@hostUrl"];
                if (bootloader.imageServlet == "") {
                    bootloader.imageServlet = WebSquare.baseServletURI + "resource.wq?url=";
                    //                      bootloader.imageServlet="engine/servlet/image.jsp?url=";
                }
                if (bootloader.imageHostUrl) {
                    if (bootloader.imageHostUrl.substring(0, 4) == "http") {
                        bootloader.imageHostUrl = bootloader.imageHostUrl.substring(7);
                    }
                    if (!bootloader.imageHostUrl.substring(bootloader.imageHostUrl.length - "/".length, bootloader.imageHostUrl.length) == "/") {
                        bootloader.imageHostUrl = bootloader.imageHostUrl + "/";
                    }
                }
                //              engineType 7, 8을 생성하는 로직을 검증한 다음 아래 주석을 제거할 예정임. - 2010.09.24 김욱래
                //              } else if ( i == "debugMenu" )  {
                //                  if( childNode["@value"] == "block" ) {
                //                      if( WebSquare.engineType === '4' ) {
                //                          WebSquare.engineType = '7';
                //                      } else if( WebSquare.engineType === '6' ) {
                //                          WebSquare.engineType = '8';
                //                      }
                //                  }
            } else if (i == "license") {
                if (childNode["@value"] == "false") {
                    // bootloader.useWebSquareLicense = false;
                    bootloader.useWebSquareLicense = true;
                } else {
                    bootloader.useWebSquareLicense = true;
                }
            } else if (i == "xhr") {
                existXhrNode = true;
                if (bootloader.browserCheck.ieAllVersion) {
                    if (childNode["@useActiveXObject"] == "false") {
                        bootloader.useActiveXObject = false;
                    } else {
                        bootloader.useActiveXObject = true;
                    }
                }
                if (childNode["@useResponseXML"] == "true") {
                    bootloader.useResponseXML = true;
                }
            } else if (i == "debug") {
                if (childNode["@console"] == "true" && window.console) {
                    WebSquare.printConsole = true;
                }
                if (childNode["@remoteConsole"] == "true") {
                    WebSquare.remoteConsole = true;
                }
                if (childNode["@errorConsole"] == "true") {
                    WebSquare.errorConsole = true;
                }
                if (childNode["@fixErrorLineNumber"] == "true") {
                    bootloader.fixErrorLineNumber = true;
                }
                if (childNode["@weinre"] == "true") {
                    WebSquare.useWeinre = true;
                    if (childNode["@weinreUrl"] != null && childNode["@weinreUrl"] != "") {
                        WebSquare.weinreUrl = childNode["@weinreUrl"];
                    }
                }
                if (childNode["@skipLog"] == "true") {
                    WebSquare.skipLog = true;
                    if (WebSquare.logger && typeof WebSquare.logger._skipLog === "function") {
                        WebSquare.logger._skipLog(WebSquare.logger);
                    }
                }
                if (childNode["@printError"] == "true") {
                    WebSquare.printError = true;
                }
            } else if (i == "environment") {
                if (childNode["@cache"] == "nocache") {
                    WebSquare.WebSquareCache = false;
                } else {
                    bootloader.resourcePostfix = bootloader.generatePostfix(childNode["@postfix"]);
                    WebSquare.WebSquareCache = true;
                    bootloader.resourcePostfixKey = [];
                    bootloader.resourcePostfixValue = [];
                    for (var j in childNode) {
                        var postfixChildNode = childNode[j];
                        if (Object.prototype.toString.call(postfixChildNode) === "[object Array]") {
                            postfixChildNode = postfixChildNode[0];
                        }
                        if (j == "postfix") {
                            bootloader.resourcePostfixKey.push(postfixChildNode["@key"]);
                            bootloader.resourcePostfixValue.push(bootloader.generatePostfix(postfixChildNode["@value"]));
                        }
                    }
                }
                if (childNode["@mode"] == "development") {
                    window._alert = function(msg) {
                        alert(msg);
                    };
                }
                if (childNode["@buildID"] && WebSquare.buildID == "") { // config.xml의 우선순위가 bootloader.wq나 html에 설정된 것보다 낮으므로 값이 없는 경우에만 설정
                    WebSquare.buildID = childNode["@buildID"];
                }
            } else if (i == "engineLoadingMode") {
                var tmpMode = {
                    "ie": parseInt(childNode["@ie"], 10),
                    "moz": parseInt(childNode["@moz"], 10),
                    "opera": parseInt(childNode["@opera"], 10),
                    "android": parseInt(childNode["@android"], 10),
                    "iphone": parseInt(childNode["@iphone"], 10),
                    "blackberry": parseInt(childNode["@blackberry"], 10),
                    "chrome": parseInt(childNode["@chrome"], 10),
                    "safari": parseInt(childNode["@safari"], 10)
                };
                for (var j in tmpMode) {
                    var value = tmpMode[j];
                    if (value >= 0 && value <= 3) {
                        bootloader.engineLoadingMode[j] = value;
                    }
                }
                //              } else if(i == "engineResourceCache" && childNode["@enable"] == "true") {
                //                  /*
                //                   * hostUrl은 websquare.xml에서 결정한다.
                //                   * */
                //                  bootloader.engineResourceVersion = childNode["@version"];
            } else if (i == "engineChunkNum") {
                var chunkNum = parseInt(childNode["@value"], 10);
                var incremental = (childNode["incremental"] && childNode["incremental"]["@value"] === "true");
                bootloader.engineChunkNum = chunkNum || 1;
                bootloader.currentChunkNum = 0;
                bootloader.incrementalChunkImport = incremental;
            } else if (i == "userAgentPattern") {
                for (var j in childNode) {
                    if (j.length > 1 && j.charAt(0) == "@" && childNode[j]) {
                        WebSquare.userAgentPattern[j.substring(1)] = childNode[j];
                    }
                }
            } else if (i == "noConflict") {
                if (childNode["@value"]) {
                    WebSquare.noConflict = childNode["@value"];
                }
                if (childNode["@function"]) {
                    WebSquare.noConflictFunction = childNode["@function"];
                }
            } else if (i == "stylesheet") {
                if (childNode["@import"] == "link") {
                    WebSquare.styleSheetEarlyImport = 1;
                    if (childNode["@enable"] != "false") {
                        WebSquare.styleSheetEarlyImport = 2;
                        WebSquare.styleSheetEarlyImportName = childNode["@value"] || "stylesheet_ext.css";
                    }
                }
                if (childNode["@earlyImportList"]) {
                    WebSquare.styleSheetEarlyImportList = childNode["@earlyImportList"].split(",");
                    for (var j in WebSquare.styleSheetEarlyImportList) {
                        WebSquare.styleSheetEarlyImportList[j] = WebSquare.styleSheetEarlyImportList[j].wq_trim();
                    }
                }
            } else if (i == "scriptLoading") {
                if (childNode["@merge"] == "false") {
                    bootloader.traceWframe = true;
                }
            } else if (i == "strictMode") {
                if (childNode["@value"] == "true") {
                    // WebSquare.strictMode = true;
                }
            } else if (i === "pageURLPrefix") {
                WebSquare.pageURLPrefix = childNode["@value"] || "";
                WebSquare.pageURLPrefixType = childNode["@type"] || "";
            } else if (i === "performance" && window.performance && window.performance.constructor === window.Performance) {
                WebSquare._performance.use = childNode["@value"] || false;
            } else if (i === "requirejs") {
                if (childNode["@timeout"] > 0) {
                    WebSquare.amdTimeout = parseInt(childNode["@timeout"], 10);
                }
            } else if (i === "allowedOrigin") {
                WebSquare._allowedOrigin = childNode["@value"] || "*";
            } else if (i === "contextRoot") {
                WebSquare._contextRoot = childNode["@value"] || "";
            } else if (i === "idAuto") {
                WebSquare._idAuto = childNode["@value"] || WebSquare._idAuto;
                WebSquare._idAutoPrefix = childNode["@prefix"] || WebSquare._idAutoPrefix;
            }
        }
    }
    if (!existXhrNode) {
        if (bootloader.browserCheck.ieAllVersion) {
            //  bootloader.useActiveXObject = true;     // IE9에서 new DOMParser() 구현을 사용하면 createElement("한글노드") 실행시 오류가 발생. false에서 true로 기본 값을 변경
        }
    }
};
//function parseBaseURI(path, key) {
//    var idx = path.indexOf(key);
//    if (idx > -1) {
//        WebSquare.baseURI = path.substring(0, idx);
//        WebSquare.buildID = bootloader.getParameter(path, "build", WebSquare.buildID);
//        return true;
//    }
//    return false;
//}
//bootloader.XML2JSON = function(doc) {
//    var obj = {};
//    if(doc.nodeType == 1) {
//        element2json(doc, obj);
//    } else {
//        element2json(doc.documentElement, obj);
//    }
//    return obj;
//};
//function element2json(node, obj) {
//    var subObj = {};
//    var attributeNodeMap = node.attributes;
//    var leftTrimRegExp = new RegExp("^\\s\\s*");
//    var rightTrimRegExp = new RegExp("\\s\\s*$");
//    for (var i = 0; i < attributeNodeMap.length; i++) {
//        var att = attributeNodeMap.item(i);
//        if (WebSquare.nodeValueDeprecated) {
//            subObj["@" + att.name] = att.value;
//        } else {
//            subObj["@" + att.nodeName] = att.nodeValue;
//        }
//    }
//    var dataList = node.childNodes;
//    for (var i = 0; i < dataList.length; i++) {
//        var dataNode = dataList.item(i);
//        if (dataNode.nodeType == 1) {
//            element2json(dataNode, subObj);
//        } else if (dataNode.nodeType == 3) {
//            var ret = dataNode.nodeValue.replace(leftTrimRegExp, '').replace(rightTrimRegExp, '');
//            if (ret) {
//                subObj["#text"] = ret;
//            }
//        } else if (dataNode.nodeType == 4) {
//            var ret = dataNode.nodeValue.replace(leftTrimRegExp, '').replace(rightTrimRegExp, '');
//            if (ret) {
//                subObj["#cdata"] = ret;
//            }
//        }
//    }
//    if (obj[node.nodeName]) {
//        if (Object.prototype.toString.call(obj[node.nodeName]) === "[object Array]") {
//            obj[node.nodeName].push(subObj);
//        } else {
//            obj[node.nodeName] = [obj[node.nodeName], subObj];
//        }
//    } else {
//        obj[node.nodeName] = subObj;
//    }
//}
bootloader.setBaseThemeURI = function() {
    //우선순위(1.parameter, 2.cookie, 3.WebSquare.baseURI;
    WebSquare.w2xTheme = window.WebSquareExternal.w2xTheme || bootloader.getParameter(location.search, "w2xTheme", "");
    if (WebSquare.w2xTheme) {
        bootloader.setCookie("w2xTheme", WebSquare.w2xTheme);
    } else {
        WebSquare.w2xTheme = bootloader.getCookie("w2xTheme");
    }
    var baseThemePath = WebSquare.baseURI;
    if (bootloader.configurationJSON[0].WebSquare.theme) {
        WebSquare.w2xTheme = WebSquare.w2xTheme || bootloader.configurationJSON[0].WebSquare.theme["@default"];
        var themes = bootloader.configurationJSON[0].WebSquare.theme.name || [];
        if (Object.prototype.toString.call(themes) === "[object Array]") {
            for (var i = 0; i < themes.length; i++) {
                if (themes[i]["@value"] === WebSquare.w2xTheme) {
                    baseThemePath = themes[i]["@path"];
                    break;
                }
            }
        } else { //object
            baseThemePath = themes["@path"];
        }
    }
    if (baseThemePath.indexOf("/") === 0 || baseThemePath.match(/^http:\/\//)) { //absolute path
        WebSquare.baseThemeURI = baseThemePath;
    } else {
        WebSquare.baseThemeURI += baseThemePath;
    }
};
bootloader.mergeJSON = function(destination, source) {
    try {
        for (var property in source) {
            var value = source[property];
            switch (typeof destination[property]) {
                case "object":
                    if (destination[property].constructor == Array) {
                        var useAppConfig = WebSquare.core.getConfiguration("/WebSquare/useAppConfig/@value") || false;
                        if (useAppConfig && (property == "column")) {
                            var columnArr = destination[property];
                            for (var i = 0; i < columnArr.length; i++) {
                                if (columnArr[i]["@inputType"] == source[property]["@inputType"]) {
                                    WebSquare.extendKeepingType(columnArr[i], source[property]);
                                }
                            }
                        } else {
                            destination[property].push(source[property]);
                        }
                    } else {
                        bootloader.mergeJSON(destination[property], value);
                    }
                    continue;
            }
            destination[property] = value;
        }
        return destination;
    } catch (e) {
        this.printStackTrace(e);
    }
};
bootloader.getCookie = function(sName) {
    try {
        var aCookie = WebSquare.document.cookie.split("; ");
        for (var i = 0; i < aCookie.length; i++) {
            var aPart = aCookie[i].split("=");
            if (sName == aPart[0]) {
                if (aPart.length == 1) {
                    return "";
                } else {
                    return unescape(aPart[1]);
                }
            }
        }
    } catch (e) {
        this.printStackTrace(e);
    }
    return null;
};
bootloader.setCookie = function(sName, sValue) {
    WebSquare.document.cookie = sName + "=" + escape(sValue) + ";path=/";
};
bootloader._afterEngineLoad = async function(sName) {
    try {
        // engine load가 끝나자마자 처리해야 하는 일들. 
        try {
            await bootloader.loadEngineModuleAsync(); // config.xml에 <engine><module src> 로 등록한 engine load 
        } catch (e) {
            //this.printStackTrace(e, "", "cannot find config.js engine module : Check config.js");
            bootloader.printStackTrace(e, "bootloader._afterEngineLoad" + sName);
        }
        await bootloader.loadUdcRequires(); // sp1 방식 udc load 
        await bootloader.loadInheritRequires(); // sp1 방식 inherit load 
        WebSquare._loadCSS(); // xml화면 내에 정의된 외부 css 미리 로드
    } catch (e) {
        this.printStackTrace(e);
    }
    return null;
};
bootloader.loadAsync = async function(paramUri) {
    if (typeof paramUri !== "string") {
        return;
    }
    var uri = paramUri.wq_trim();
    return new Promise(function(resolve, reject) {
        var xhr = bootloader.getXMLHTTPObject();
        if (uri.indexOf("://") > -1 && uri.indexOf(location.origin) !== 0) {
            xhr.withCredentials = true;
        }
        xhr.open('GET', uri, true);
        // CORS 관련 처리 추가로 필요
        var callbackFunc = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status >= "400" || 0 === xhr.status) {
                    reject(xhr.statusText);
                } else {
                    resolve(xhr.responseText);
                }
                xhr = null;
            }
        }
        if (bootloader.useActiveXObject) {
            xhr.onreadystatechange = callbackFunc;
        } else {
            xhr.onload = callbackFunc;
            xhr.onerror = function(e) {
                reject(xhr.statusText);
                xhr = null;
            };
        }
        xhr.send(null);
    });
};
bootloader._initSuffix = async function() {
    var suffixName = "suffix.txt";
    var suffixEnable = "true";
    if (window.WebSquareExternal && window.WebSquareExternal.suffixName) {
        suffixName = window.WebSquareExternal.suffixName;
    }
    
    if (window.WebSquareExternal && typeof window.WebSquareExternal.suffixEnable != "undefined") {
        suffixEnable = window.WebSquareExternal.suffixEnable + "";
        if (suffixEnable != "false") {
            suffixEnable = "true";
        }
    }

    if(suffixEnable == "true") {
        return new Promise(function(resolve, reject) {
            var xhr;
            try {
                xhr = WebSquare.BootLoader.getXMLHTTPObject();
                var uri = WebSquare.baseURI + suffixName + "?postfix=" + (new Date()).getTime() + WebSquare.safeRandom();
                xhr.open("GET", uri, true);
                xhr.setRequestHeader("Cache-Control", "no-cache");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        WebSquare.suffix = xhr.responseText.wq_trim();
                        resolve();
                    }
                }
                xhr.send();
            } catch (e) {
                reject();
            }
        });
    }
}
// bootloader init
bootloader._initImport = async function() {
    /* istanbul ignore next */
    try {
        if (bootloader._binitImport === true) {
            return;
        }
        bootloader._binitImport = true;
        bootloader.PluginCache = {};
        bootloader.stopCheckOpener = false;
        bootloader.stopCheckParentFrame = false;
        bootloader._XMLHTTP_PROGIDS = ['Microsoft.XMLHTTP'];
        bootloader._MSMXL_PROGIDS = ['Microsoft.XMLDOM'];
        bootloader.useActiveXObject = false;
        bootloader.useResponseXML = false;
        bootloader.useWebSquareXMLParser = false;
        bootloader.useWebSquareXPathParser = false;
        bootloader.configurationJSON = [];
        bootloader.fixErrorLineNumber = false;
        bootloader.traceWframe = false;
        bootloader.globalEvalArr = []; // enable only fixErrorLineNumber true;
        bootloader.performanceCheck = {};
        if (typeof WebSquare.externalOption.startDate != "undefined") {
            bootloader.performanceCheck.start = WebSquare.externalOption.startDate;
        } else {
            bootloader.performanceCheck.start = new Date();
        }
        bootloader.performanceCheck.mid1 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid2 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid3 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid4 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid5 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid6 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid7 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid8 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.mid9 = bootloader.performanceCheck.start;
        bootloader.performanceCheck.end = bootloader.performanceCheck.start;
        WebSquare.renderStartTime = bootloader.performanceCheck.mid1;
        //  bootloader.date = new Date();
        //  bootloader.date.setTime(bootloader.date.getTime() - 24 * 60 * 60 * 1000);
        //  bootloader.ifModifiedSince = bootloader.date.toUTCString();
        //  bootloader.ifModifiedSince = bootloader.ifModifiedSince.slice(0,-3) + "GMT";
        bootloader.ifModifiedSince = "Tue, 24 Jan 2006 01:13:57 GMT";
        var _alert = function() {};
        if (window.WebSquareExternal.skipLog) {
            WebSquare.skipLog = window.WebSquareExternal.skipLog;
        }
        WebSquare.logEnableFlag = true;
        if (window.WebSquareExternal.disableLog) {
            WebSquare.logEnableFlag = !window.WebSquareExternal.disableLog;
        }
        if (location.protocol === "file") {
            bootloader.useWebSquareLicense = false;
        }
        //        if (window.WebSquareExternal.baseURI) {
        //            for (var i = 0; i < (document.getElementsByTagName("script")).length; i++) {
        //                var _path = (document.getElementsByTagName("script"))[i].src;
        //                if (_path.indexOf("HybridPluginAll") > -1 || _path.indexOf("bootloader.js") > -1 || _path.indexOf("javascript.wq?q=/bootloader") > -1 || _path.indexOf("javascriptPluginAll.wq?q=/bootloader") > -1) {
        //                    WebSquare.buildID = bootloader.getParameter(_path, "build", WebSquare.buildID);
        //                    break;
        //                }
        //            }
        //        }
        //        WebSquare.buildID = bootloader.getParameter(location.search, "build", WebSquare.buildID);
    } catch (e) {
        bootloader.printStackTrace(e, "Initialize baseURI");
    }
    var useNativeParser = (window.WebSquareExternal.useNativeParser && bootloader.browserCheck.ieAllVersion && bootloader.browserVersion() >= 9);
    if (bootloader.browserCheck.ieAllVersion && !useNativeParser) {
        try {
            if (typeof window.external == "object" && typeof window.external.msActiveXFilteringEnabled != "undefined" && typeof window.external.msActiveXFilteringEnabled != "unknown" && window.external.msActiveXFilteringEnabled() == true) {
                WebSquare.msActiveXFilteringEnabled = true; //
            }
        } catch (ee) {
            bootloader.printStackTrace(ee, "bootloader._initImport");
        }
        try {
            if (WebSquare.msActiveXFilteringEnabled) {
                bootloader.useActiveXObject = false;
            } else {
                // new ActiveXObject(bootloader._XMLHTTP_PROGIDS[0]);
                // new ActiveXObject(bootloader._MSMXL_PROGIDS[0]);
                // bootloader.useActiveXObject = true;
                bootloader.useActiveXObject = false;
            }
            //          if ( window.location.protocol !== "file:" && window.XMLHttpRequest && !!document.implementation && !!document.implementation.createDocument) {
            //              bootloader.useActiveXObject = false;
            //          } else {
            //              bootloader.useActiveXObject = true;
            //          }
        } catch (ee) {
            //          if (WebSquare.msActiveXFilteringEnabled) {
            bootloader.useActiveXObject = false;
            //          } else {
            //              bootloader.useActiveXObject = true;
            //          }
        }
    }
    /*
    if (bootloader.browserCheck.ie){
        doc.oncontextmenu=function() {
            ["WebSquare.logger.showContextMenu"];
            if( event.ctrlKey || event.ctrlLeft ) {
                alert( WebSquare.logMsgArray.join("\n") );
                return false;
            } else {
                return true;
            }
        };
    } else if (bootloader.browserCheck.opera){
        doc.onmousedown=function(e){
            ["WebSquare.logger.showContextMenuOpera"];
            if (e.ctrlKey && e.shiftKey) {
                alert( WebSquare.logMsgArray.join("\n") );
                return false;
            } else {
                return true;
            }
        };
    } else {
        doc.oncontextmenu=function(e){
            if (e.ctrlKey) {
                alert( WebSquare.logMsgArray.join("\n") );
                return false;
            } else {
                return true;
            }
        };
    }
    */
    WebSquare._initImportFunction();
    bootloader.importCache = {};
    // 이미지 캐싱을 위한 Servlet 경로 null이면 사용되지 않음.
    bootloader.imageServlet = null;
    // 이미지를 관리하는 서버가 다를 경우 사용한다. null 이면 사용하지 않는다.
    bootloader.imageHostUrl = null;
    //bootloader.engineVersion = null;
    bootloader.compression = true;
    if (bootloader.browserCheck.ie) {
        try {
            document.execCommand('BackgroundImageCache', false, true);
        } catch (ignored) {
            bootloader.printStackTrace(ignored, "bootloader._initImport");
        }
    }
    /*
     * config.xml 파일을 읽어 와서 initConfig 한다.
     */
    try {
        // false logic 안에 message를 감춰놓음. 나중에 소스 유출 시 우리 소스인지 검사용
        if (1 == 2) {
            var MyMessage = "ErtOqpezr Ukptvqtzp IIWENNA Stwbreo Agp Zvydtn Vmfwnvzh";
        }
        var configPath = "./";
        var bModule = false;
        try {
            new Function("u", "return import(u)");
            bModule = true;
        } catch (ignored) {
            //bootloader.printStackTrace(ignored, "bootloader._initImport");
            bModule = false;
        }
        if (bModule && (!window.WebSquareExternal || window.WebSquareExternal._mode !== "dev")) {
            configPath = "../";
        } else {
            configPath = WebSquare.baseURI;
        }
        configPath += "config.js";
        var altModulePath = WebSquare.baseURI + "config.js";
        if (typeof WebSquare.configPath === "string" && WebSquare.configPath.length > 0) {
            configPath = WebSquare.configPath;
            altModulePath = configPath;
        }
        await bootloader._initSuffix();
        if (window.WebSquareExternal && window.WebSquareExternal.useConfigPostfix === true) {
            var suffixStr = bootloader.generateSuffixPostfix("config.xml");
            if (!suffixStr) {
                suffixStr = String(new Date().getTime());
            }
            var uChar = configPath.indexOf("?") > -1 ? "&" : "?" ;
            configPath += uChar + "postfix=" + suffixStr;
        }
        var configModule = await WebSquare._dynamicImport(configPath, {
            "altModulePath": altModulePath
        });
        var configJSON = configModule.default;
        if (configJSON.WebSquare == undefined) {
            var _temp = {};
            _temp.WebSquare = {};
            for (var key in configJSON) {
                _temp.WebSquare[key] = configJSON[key];
            }
            configJSON = _temp;
        }
        for (var confObj in window.WebSquareExternal.configOverride) {
            configJSON.WebSquare[confObj] = window.WebSquareExternal.configOverride[confObj];
        }
        bootloader.configurationJSON.unshift(configJSON);
        bootloader.initJSONConfig();
        try {
            //theme info
            bootloader.setBaseThemeURI();
            //theme xml loading & merge
            //            if (WebSquare.baseThemeURI != WebSquare.baseURI) {
            //                var http = bootloader.getXMLHTTPObject();
            //                var uri = WebSquare.baseThemeURI + "config.xml"; //themme config는 캐시처리한다.
            //                uri = bootloader.getEngineVersionPostfix(uri);
            //                http.open('GET', uri, false);
            //                http.send(null);
            //                if (http.status >= "400") {
            //                    http = null;
            //                } else {
            //                    var themeConfigJSON = bootloader.XML2JSON(http.responseXML);
            //                    //merge JSONConfig
            //                    bootloader.mergeJSON(bootloader.configurationJSON[0], themeConfigJSON);
            //                }
            //                bootloader.initJSONConfig();
            //            }
        } catch (e) {
            bootloader.printStackTrace(e, "Cannot read config.xml in theme");
        }
        if (WebSquare.hybridApp == true) {
            if (location.protocol == "file:" && WebSquare.baseServletURI == "") {
                if (typeof WebSquare.hybridSubmissionURL === "string" && WebSquare.hybridSubmissionURL != "") {
                    WebSquare.baseServletURI = WebSquare.hybridSubmissionURL;
                } else {
                    WebSquare.baseServletURI = bootloader.configurationJSON[0].WebSquare.hybrid.submissionURL["#text"] || "";
                }
                if (WebSquare.baseServletURI.lastIndexOf("/") != WebSquare.baseServletURI.length - 1) {
                    WebSquare.baseServletURI = WebSquare.baseServletURI + "/";
                }
            }
        }
    } catch (e) {
        bootloader.printStackTrace(e, "Cannot read config.xml");
    }
    //    if (bootloader.browserCheck.ieAllVersion && !useNativeParser) {
    //        var MSXML = {
    //            "DOM": "MSXML2.DOMDocument",
    //            "XHR": "MSXML2.XMLHTTP"
    //        };
    //        var MSXML4 = {
    //            "DOM": "MSXML2.DOMDocument.4.0",
    //            "XHR": "MSXML2.XMLHTTP.4.0"
    //        }; // 64bit 브라우저에서는 동작 안함.
    //        var MSXML6 = {
    //            "DOM": "MSXML2.DOMDocument.6.0",
    //            "XHR": "MSXML2.XMLHTTP.6.0"
    //        };
    //        try {
    //            if (window.location.protocol !== "file:" && window.XMLHttpRequest && !!document.implementation && !!document.implementation.createDocument && !bootloader.useActiveXObject) {
    //                new ActiveXObject(MSXML.DOM);
    //                new ActiveXObject(MSXML.XHR);
    //                bootloader._XMLHTTP_PROGIDS[0] = MSXML.XHR;
    //                bootloader._MSMXL_PROGIDS[0] = MSXML.DOM;
    //            } else {
    //                bootloader.useActiveXObject = true;
    //                try {
    //                    new ActiveXObject(MSXML6.DOM);
    //                    new ActiveXObject(MSXML6.XHR);
    //                    bootloader._XMLHTTP_PROGIDS[0] = MSXML6.XHR;
    //                    bootloader._MSMXL_PROGIDS[0] = MSXML6.DOM;
    //                } catch (ee1) {
    //                    try {
    //                        new ActiveXObject(MSXML4.DOM);
    //                        new ActiveXObject(MSXML4.XHR);
    //                        bootloader._XMLHTTP_PROGIDS[0] = MSXML4.XHR;
    //                        bootloader._MSMXL_PROGIDS[0] = MSXML4.DOM;
    //                    } catch (ee3) {
    //                        new ActiveXObject(MSXML.DOM);
    //                        new ActiveXObject(MSXML.XHR);
    //                        bootloader._XMLHTTP_PROGIDS[0] = MSXML.XHR;
    //                        bootloader._MSMXL_PROGIDS[0] = MSXML.DOM;
    //                    }
    //                }
    //            }
    //        } catch (ee) {
    //            bootloader.useActiveXObject = false;
    //            if (WebSquare.msActiveXFilteringEnabled) {
    //                var msgLang = bootloader.getBrowserLanguage();
    //                if (msgLang == "ko") {
    //                    bootloader.printLog("ActiveX 필터링이 설정되어 ActiveX를 사용하는 페이지의 경우 오류가 발생할 수 있습니다. \nAcitveX 필터링 해제 : 메뉴 > 도구 > ActiveX 필터링");
    //                } else {
    //                    bootloader.printLog("ActiveX Filtering is enabled. If you want to disable ActiveX Filtering, use Menu > Tools > ActiveX Filtering.");
    //                }
    //            }
    //        }
    //        if (bootloader.useActiveXObject) {
    //            bootloader.printLog("XHR : " + bootloader._XMLHTTP_PROGIDS[0] + ", XMLDOM : " + bootloader._MSMXL_PROGIDS[0]);
    //        } else {
    //            bootloader.printLog("XHR : new XMLHttpRequest(), XMLDOM : new DOMParser()");
    //        }
    //    }
    //    if (useNativeParser) {
    //        bootloader.useActiveXObject = false;
    //    }
    bootloader.useActiveXObject = false;
    var lhost = location.host.replace(/\./g, "|");
    WebSquare.isLocal = lhost.indexOf("127|0|0|1") > -1 || location.host.indexOf("localhost") > -1;
    if (WebSquare.useWeinre) {
        if (bootloader.browserCheck.android || bootloader.browserCheck.iphone || bootloader.browserCheck.ipad || bootloader.browserCheck.ipod || bootloader.browserCheck.blackberry) {
            (function() {
                var doc = window.document;
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = WebSquare.weinreUrl;
                head.appendChild(script);
            })();
        }
    }
    /**
     *
     * bootloader 가야할 길
     *
     * 1. 쓸데 없는 코드를 없애봅시다. ( core, initializer )
     *          -> 브라우저, 버전 체크등은 다 없애 버리고, core, util
     *
     * 2. WebSquare Cache를 통한 엔진 로딩을 빠르게
     *
     * 3. cross browsing 숨기기 : 브라우저, 버전에 관한 코드는 없애도록
     *          -> bootloader를 나눌수 있을거 같다. bootloader_ie.js,bootloader_ff.js
     *
     * 4. bootloader에서 필요한 내용
     *      a. 엔진 로딩(parent, opener의 엔진 존재 확인을 포함)
     *      b. config.xml 로딩
     *      c. 각 엔진별 pre loading되어야 하는 엔진에 대한 정의를 잘해야 한다.
     *      d. 손으로 정의된 import 순서를 빌드타임에서 파싱가능하도록 하면 좋겠다.
     *
     */
    WebSquare.remoteLogMsgArray.push("");
    WebSquare.remoteLogMsgArray.push(location.href);
    bootloader.printLog("WebSquare AI v6.0");
    bootloader.printLog("WebSquare AI Engine v6.0.0");
    bootloader.printLog(WebSquare.ver);
    bootloader.printLog("    Copyright 2009  INSWAVE Systems Co., Ltd. All Rights Reserved.");
    bootloader.printLog("Browser Information : " + navigator.userAgent);
    bootloader.printLog("[STEP1][START] Loading Runtime Engine.");
    WebSquare._performance.mark("step1");
    
    // var logStr = WebSquare.language.getMessage("Performance_step1");  (language 로딩이 안된 시점이므로 사용할 수 없음.)
    var logStr = "Time elapsed from initiating a browser URL call until the 'BootLoader' finishes loading. 'BootLoader' is essential for the initial startup of the WebSquare engine.";
    WebSquare._performance.measure("step1", 0, {
        "log" : logStr
    });
    //    function parserTest() {
    //        try {
    //            // IE 11 일부 브라우저에서 native dom parser 사용 시 body attribute를 파싱하지 못하는 현상을 체크하기 위함.
    //            if (bootloader.useActiveXObject) {
    //                return true;
    //            }
    //            var testStr = '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms">' + '<body ev:onpageload="scwin.onpageload" ev:onpageunload="scwin.onpageunload">' + '</body>' + '</html>';
    //            var testDom = new DOMParser().parseFromString(testStr, "text/xml");
    //            var testElem = testDom.documentElement.getElementsByTagName("body")[0];
    //            return testElem.getAttribute("ev:onpageload") === "scwin.onpageload" && testElem.getAttribute("ev:onpageunload") === "scwin.onpageunload";
    //        } catch (e) {}
    //    }
    //    bootloader.useWebSquareXMLParser = (new RegExp(WebSquare.userAgentPattern.XMLParser)).test(navigator.userAgent) || parserTest() === false;
    //    bootloader.useWebSquareXPathParser = WebSquare.userAgentPattern.XPathParser && (new RegExp(WebSquare.userAgentPattern.XPathParser)).test(navigator.userAgent);
    bootloader.useWebSquareXMLParser = new RegExp(WebSquare.userAgentPattern.XMLParser).test(navigator.userAgent);
    bootloader.useWebSquareXPathParser = WebSquare.userAgentPattern.XPathParser && (new RegExp(WebSquare.userAgentPattern.XPathParser)).test(navigator.userAgent);
    if (bootloader.useWebSquareXMLParser) {
        bootloader.printLog("Install JavaScript Implementation for XML & XPath. User Agent Pattern : " + WebSquare.userAgentPattern.XMLParser);
        await bootloader.writeAsync(WebSquare._resourceURI + "externalJS/xmlparser/xmlsax.js");
        await bootloader.writeAsync(WebSquare._resourceURI + "externalJS/xmlparser/xmlw3cdom.js");
        await bootloader.writeAsync(WebSquare._resourceURI + "externalJS/xpath/xpath.js");
        installXPath(new XPathParser());
    } else if (bootloader.useWebSquareXPathParser) {
        try {
            bootloader.printLog("Install XPath Implementation for not support xPath Parser.");
            await bootloader.writeAsync(WebSquare._resourceURI + "externalJS/xpath/xpath.js");
            installXPath(new XPathParser());
        } catch (e) {
            bootloader.printStackTrace(e, "xpath");
        }
    } else if (bootloader.browserCheck.ieAllVersion && !bootloader.useActiveXObject) {
        //        try {
        //            if (typeof Document != "undefined" && (typeof Document.prototype.createNSResolver == "undefined" || typeof Document.prototype.evaluate == "undefined")) {
        //                bootloader.printLog("Install XPath Implementation for Internet Explorer Native XML Document.");
        //                await bootloader.importAsync("externalJS/xpath/xpath.js");
        //                installXPath(new XPathParser());
        //            } else {
        //                bootloader.printLog("Already have a XPath Implementation.");
        //            }
        //        } catch (e) {
        //            bootloader.printStackTrace(e, "xpath");
        //        }
    } else if (bootloader.browserCheck.android) {
        try {
            //          alert("^^ Install XPath Implementation for Google Android. typeof XMLDocument [" + (typeof XMLDocument) + "] typeof XMLDocument.prototype.createNSResolver [" + (typeof XMLDocument.prototype.createNSResolver) + "] typeof XMLDocument.prototype.evaluate [ " + (typeof XMLDocument.prototype.evaluate) + "]");
            if (typeof XMLDocument == "undefined" || typeof XMLDocument.prototype.createNSResolver == "undefined" || typeof XMLDocument.prototype.evaluate == "undefined") {
                bootloader.printLog("Install XPath Implementation for Google Android.");
                await bootloader.importAsync("externalJS/xpath/xpath.js");
                installXPath(new XPathParser());
            } else {
                bootloader.printLog("Already have a XPath Implementation.");
            }
        } catch (e) {
            bootloader.printStackTrace(e, "xpath");
        }
    }
    if (typeof importAllList != "undefined" && importAllList != null) {
        WebSquare.pluginList = importAllList;
    } else {
        WebSquare.pluginList = []; // 라이센스 모드가 아닐 경우 필요 없다.
        if (bootloader.useWebSquareLicense === true) {
            //WebSquare.pluginList = WebSquare.allPlugin.split(",");
        }
    }
    WebSquare.core._createGlobalVariable();
    if (WebSquare.core.getConfiguration("/WebSquare/localStorage/@defer") != 'true') {
        WebSquare.createLocalStorage(window);
    }
    //set the language pack
    bootloader.loadLanguagePack();
    await WebSquare._initModule();
    WebSquare.core._loadMsaServer();
    WebSquare.core._loadMsaStylesheet();
    try {
        if (document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) {
            WebSquare.graphicPlatformType = "svg";
        } else {
            WebSquare.graphicPlatformType = "vml";
        }
        if (WebSquare.graphicPlatformType === "vml") {
            document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
            WebSquare.defaultStyle = document.createStyleSheet();
            WebSquare.defaultStyle.addRule('v\\:group', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:line', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:stroke', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:oval', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:rect', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:roundrect', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:image', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:roundrect', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:shape', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:path', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:fill', "behavior: url(#default#VML);");
            WebSquare.defaultStyle.addRule('v\\:extrusion', "behavior: url(#default#VML);");
        }
    } catch (e) {
        bootloader.printStackTrace(e, "VML Namespace");
    }
    if (WebSquare.core.getConfiguration("debug") == 'true') {
        WebSquare.logger.debug = true;
    }
    WebSquare.logger.debugKey = WebSquare.core.getConfiguration("debugKey"); // 디버깅할 key값들. ex) output, controlFactory, cssManager, ..  , controlManager에서 옮겨옴.
    if (WebSquare.core.getConfiguration("exceptionHandler") != 'system' && WebSquare.skipLog !== true) {
        if (WebSquare.core.browserCheck.ie) {
            //window.onerror = WebSquare.exception.ieErrorHandler; // install the handler
        } else {
            //      } else if ( WebSquare.core.browserCheck.moz ) {
            //window.onerror = WebSquare.exception.ffErrorHandler; // install the handler
        }
    }
    if (WebSquare.core.getConfiguration("/WebSquare/checkUpdate/@enable") == 'true') {
        WebSquare.util.checkInterval = WebSquare.util.parseInt(WebSquare.core.getConfiguration("/WebSquare/checkUpdate/@interval"), 30000);
        WebSquare.util.checkMode = WebSquare.core.getConfiguration("/WebSquare/checkUpdate/@mode");
        WebSquare.util.checkURL = WebSquare.core.getConfiguration("/WebSquare/checkUpdate/@serverUrl");
        if (WebSquare.util.checkMode == "" || WebSquare.util.checkURL == "") {
            WebSquare.util.checkMode = "client";
        }
        window.setTimeout("WebSquare.util.checkUpdate()", WebSquare.util.checkInterval);
    }
    WebSquare.requestID = "";
    var _requestID = WebSquare.core.getConfiguration("/WebSquare/submission/requestID/@value");
    if (_requestID != '') {
        WebSquare.requestID = _requestID + "=";
    }
    WebSquare.core.useSubmissionGlobal = WebSquare.util.getBoolean(WebSquare.core.getConfiguration("/WebSquare/submission/makeGlobalObject/@value"));
    WebSquare.core.useWorkflowGlobal = WebSquare.util.getBoolean(WebSquare.core.getConfiguration("/WebSquare/workflow/makeGlobalObject/@value"));
    // WebSquare.core.scriptPrecedence = WebSquare.util.getBoolean(WebSquare.core.getConfiguration("/WebSquare/scriptPrecedence/@value"));
    WebSquare.core.scriptPrecedence = true;
    window.useWebSquareLicense = bootloader.useWebSquareLicense;
    await bootloader._afterEngineLoad();
    if (bootloader.engineLoadingMode.mode != 0 || typeof WebSquareAllInOne != "undefined") {
        if (document.title == "WebSquare" || document.title == "NEW RENDERING") {
            document.title = "WebSquare";
        }
        bootloader.performanceCheck.mid1 = new Date();
        bootloader.printLog("[STEP2][ENGINE] Runtime Engine Load complete. Time:" + (bootloader.performanceCheck.mid1.getTime() - bootloader.performanceCheck.start.getTime()) + "ms");
        WebSquare._performance.mark("step2");
        var logStr = WebSquare.language.getMessage("Performance_step2");
        WebSquare._performance.measure("step2", "step1", WebSquare.core._makeDetail(logStr));
    }
    //application cache기능
    if (WebSquare.pluginCache === "default" && window.applicationCache) {
        window.applicationCache.addEventListener('updateready', function() {
            bootloader.printLog("[ApplicationCache] ApplicationCache updateready");
            window.applicationCache.swapCache();
        }, false);
    }
}
export {
    bootloader
};
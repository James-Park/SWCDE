if( !window.WebSquareExternal ) window.WebSquareExternal = {};

WebSquareExternal.baseURI = "/websquare/";

WebSquareExternal.configJSON = ﻿
{
    "WebSquare": {
        "allValue": {
            "@value": "all"
        }, 
        "docType": {
            "@value": "standard"
        }, 
        "debug": {
            "@value": "true", 
            "@remoteConsole": "false", 
            "@console": "false"
        }, 
        "debugMenu": {
            "@value": "use"
        }, 
        "debugKey": {
            "@value": ""
        }, 
        "language": {
            "@value": "ko"
        }, 
        "exceptionHandler": {
            "@value": "websquare"
        }, 
        "welcome-file": null, 
        "postDrawMode": {
            "@value": "synchronous"
        }, 
        "forcedValueSetting": {
            "@value": "true"
        }, 
        "processMsgHeight": {
            "@value": "81"
        }, 
        "processMsgWidth": {
            "@value": "295"
        }, 
        "processMsgBackground": {
            "@value": "true", 
            "@backgroundColor": "#112233"
        }, 
        "byteCheckEncoding": {
            "@value": "euc-kr"
        }, 
        "initScript": {
            "@value": "true", 
            "#text": "//console.log(\"[Main] initScript \" + $p.getParameter(\"w2xPath\"));"
        }, 
        "postScript": {
            "@value": "true", 
            "#text": "//console.log(\"[Main] postScript \" + $p.getParameter(\"w2xPath\"));"
        }, 
        "wframe": {
            "scope": {
                "@value": "true"
            }, 
            "mode": {
                "@value": "sync"
            }, 
            "initScript": {
                "@value": "true", 
                "#text": "//console.log(\"[WFrame] initScript \" + $p.getFrameId());"
            }, 
            "postScript": {
                "@value": "true", 
                "#text": "//console.log(\"[WFrame] postScript \" + $p.getFrameId());"
            }
        }, 
        "clearMemory": {
            "@value": "true"
        }, 
        "stylesheet": {
            "@value": "stylesheet_ext.css", 
            "@import": "link", 
            "@enable": "true", 
            "@earlyImportList": ""
        }, 
        "engine": null, 
        "ModelUtil": {
            "copyChildrenNodes": {
                "@refresh": "false"
            }
        }, 
        "preProcessor": {
            "systemPreProcessor": {
                "@value": ""
            }, 
            "businessPreProcessor": {
                "@value": ""
            }
        }, 
        "workflow": {
            "processMsg": {
                "@value": ""
            }, 
            "makeGlobalObject": {
                "@value": "true"
            }
        }, 
        "submission": {
            "processMsg": {
                "@value": ""
            }, 
            "showSubmissionTime": {
                "@value": "true"
            }, 
            "makeGlobalObject": {
                "@value": "true"
            }, 
            "requestID": {
                "@value": ""
            }
        }, 
        "visibleHelper": {
            "targetHandler": {
                "@value": ""
            }
        }, 
        "spa": {
            "onpageunload": {
                "@value": ""
            }, 
            "variable": {
                "@value": "scwin", 
                "@clone": "com"
            }, 
            "scriptCache": {
                "@value": "true"
            }, 
            "autoReload": {
                "@value": "true", 
                "@count": "50"
            }
        }, 
        "scriptLoading": {
            "@merge": "true"
        }, 
        "scriptPrecedence": {
            "@value": "true"
        }, 
        "strictMode": {
            "@value": "true", 
            "@id": "mf"
        }, 
        "checkUpdate": {
            "@enable": "false", 
            "@interval": "60000", 
            "@mode": "client", 
            "@serverUrl": ""
        }, 
        "engineCache": {
            "@compression": "true", 
            "@enable": "false", 
            "@postfix": "month"
        }, 
        "userAgentPattern": {
            "@XPathParser": "Edge"
        }, 
        "preserveWhiteSpace": {
            "@value": "false"
        }, 
        "environment": {
            "@mode": "development", 
            "@cache": "nocache"
        }, 
        "script": {
            "@postfix": "environment"
        }, 
        "emptyTag": {
            "@value": "area,base,basefont,br,col,frame,hr,img,input,link,meta,param"
        }, 
        "engineLoadingMode": {
            "@ie": "0", 
            "@moz": "0", 
            "@opera": "0", 
            "@android": "0", 
            "@iphone": "0", 
            "@chrome": "0", 
            "@safari": "0"
        }, 
        "dataList": {
            "removeDummyRowStatus": {
                "@value": "true"
            }, 
            "removedDataMatch": {
                "@value": "true"
            }, 
            "keepDataType": {
                "@value": "true"
            }
        }, 
        "grid": {
            "rowNumStatusUniqueId": {
                "@value": "true"
            }, 
            "drilldownRealRowIndexAll": {
                "@value": "true"
            }, 
            "collectGarbage": {
                "@value": "none"
            }, 
            "fastScroll": {
                "@value": "true"
            }, 
            "dataType": {
                "date": {
                    "@displayFormat": "yyyy-MM-dd"
                }
            }, 
            "editType": {
                "@value": "focus"
            }, 
            "rowNumBackgroundColor": {
                "@value": "#e5eff7"
            }, 
            "selectedRowColor": {
                "@value": "#fcf8e3"
            }, 
            "oddEvenColorDisplay": {
                "@value": "true"
            }, 
            "evenRowBackgroundColor": {
                "@value": "#f5f5f5"
            }, 
            "oddRowBackgroundColor": {
                "@value": "#ffffff"
            }, 
            "rowMouseOver": {
                "@value": "true"
            }, 
            "rowMouseOverColor": {
                "@value": "#edf3fb"
            }, 
            "tooltipStyle": {
                "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
            }, 
            "noResultMessageVisible": {
                "@value": "true"
            }, 
            "noResultMessage": {
                "@value": "\ub370\uc774\ud130\uac00 \uc5c6\uc74c"
            }, 
            "noResultMessageStyle": {
                "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
            }, 
            "pasteMessage": {
                "@value": "\ub370\uc774\ud130 \ubd99\uc774\ub294 \uc911"
            }, 
            "getColumnVisible": {
                "@useRealColIndex": "true"
            }, 
            "colIdToColIndex": {
                "@value": "true"
            }, 
            "column": [
                {
                    "@inputType": "text", 
                    "editType": {
                        "@value": "select"
                    }
                }, 
                {
                    "@inputType": "select", 
                    "chooseOptionLabel": {
                        "@value": "-\uc120\ud0dd-"
                    }
                }, 
                {
                    "@inputType": "calendar", 
                    "dataType": {
                        "@value": "date"
                    }, 
                    "displayFormat": [
                        {
                            "@valueType": "yearMonth", 
                            "@value": "yyyy-MM"
                        }, 
                        {
                            "@valueType": "yearMonthDate", 
                            "@value": "yyyy-MM-dd"
                        }, 
                        {
                            "@valueType": "yearMonthDateTime", 
                            "@value": "yyyy-MM-dd HH:mm"
                        }, 
                        {
                            "@valueType": "yearMonthDateTimeSec", 
                            "@value": "yyyy-MM-dd HH:mm:SS"
                        }
                    ]
                }
            ]
        }, 
        "gridView": {
            "rowNumStatusUniqueId": {
                "@value": "true"
            }, 
            "preventMultipleClick": {
                "@value": "true"
            }, 
            "drilldownRealRowIndexAll": {
                "@value": "true"
            }, 
            "collectGarbage": {
                "@value": "none"
            }, 
            "fastScroll": {
                "@value": "true"
            }, 
            "hammerEnabled": {
                "@value": "true"
            }, 
            "dataType": {
                "date": {
                    "@displayFormat": "yyyy-MM-dd"
                }
            }, 
            "editType": {
                "@value": "focus"
            }, 
            "rowNumBackgroundColor": {
                "@value": "#e5eff7"
            }, 
            "selectedRowColor": {
                "@value": "#fcf8e3"
            }, 
            "oddEvenColorDisplay": {
                "@value": "true"
            }, 
            "evenRowBackgroundColor": {
                "@value": "#f5f5f5"
            }, 
            "oddRowBackgroundColor": {
                "@value": "#ffffff"
            }, 
            "rowMouseOver": {
                "@value": "true"
            }, 
            "rowMouseOverColor": {
                "@value": "#edf3fb"
            }, 
            "tooltipStyle": {
                "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
            }, 
            "noResultMessageVisible": {
                "@value": "true"
            }, 
            "noResultMessage": {
                "@value": "\ub370\uc774\ud130\uac00 \uc5c6\uc74c"
            }, 
            "noResultMessageStyle": {
                "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
            }, 
            "pasteMessage": {
                "@value": "\ub370\uc774\ud130 \ubd99\uc774\ub294 \uc911"
            }, 
            "getColumnVisible": {
                "@useRealColIndex": "true"
            }, 
            "keepDefaultColumnWidth": {
                "@value": "true"
            }, 
            "colIdToColIndex": {
                "@value": "true"
            }, 
            "column": [
                {
                    "@inputType": "text", 
                    "editType": {
                        "@value": "select"
                    }
                }, 
                {
                    "@inputType": "select", 
                    "chooseOptionLabel": {
                        "@value": "-\uc120\ud0dd-"
                    }, 
                    "eventPriority": {
                        "@value": "oneditend"
                    }
                }, 
                {
                    "@inputType": "calendar", 
                    "dataType": {
                        "@value": "date"
                    }, 
                    "displayFormat": [
                        {
                            "@valueType": "yearMonth", 
                            "@value": "yyyy-MM"
                        }, 
                        {
                            "@valueType": "yearMonthDate", 
                            "@value": "yyyy-MM-dd"
                        }, 
                        {
                            "@valueType": "yearMonthDateTime", 
                            "@value": "yyyy-MM-dd HH:mm"
                        }, 
                        {
                            "@valueType": "yearMonthDateTimeSec", 
                            "@value": "yyyy-MM-dd HH:mm:SS"
                        }
                    ]
                }
            ], 
            "enterKeyMove": {
                "@value": "none"
            }, 
            "escape": {
                "@value": "true"
            }
        }, 
        "inputCalendar": {
            "validCheck": {
                "@value": "false"
            }, 
            "dataType": {
                "@value": "date"
            }, 
            "delimiter": {
                "@value": "-"
            }, 
            "mask": {
                "@value": "MM-dd-yyyy"
            }, 
            "delimiterLocaleKey": {
                "@value": "IC_Delimiter"
            }, 
            "maskLocaleKey": {
                "@value": "IC_Mask"
            }, 
            "calendarImage": {
                "@value": ""
            }, 
            "calendarImageOver": {
                "@value": ""
            }, 
            "invalidMessageFunc": {
                "@value": "com.validateMsg"
            }
        }, 
        "input": {
            "focusStyle": {
                "@value": ""
            }, 
            "dateMask": {
                "@value": "yyyy-MM-dd"
            }, 
            "timeMask": {
                "@value": "HH:mm"
            }, 
            "focusCalcSize": {
                "@value": "false"
            }, 
            "invalidMessageFunc": {
                "@value": "com.validateMsg"
            }
        }, 
        "calendar": {
            "minYear": {
                "@value": "1978"
            }, 
            "maxYear": {
                "@value": "2030"
            }
        }, 
        "selectbox": {
            "visibleRowNum": {
                "@value": "5"
            }, 
            "invalidMessageFunc": {
                "@value": "com.validateMsg"
            }, 
            "dataListAutoRefresh": {
                "@value": "true"
            }
        }, 
        "treeview": {
            "tooltipGroupClass": {
                "@value": "false"
            }
        }, 
        "textarea": {
            "useConfig": {
                "@value": "true"
            }, 
            "invalidMessageFunc": {
                "@value": "com.validateMsg"
            }
        }, 
        "trigger": {
            "preventMultipleClick": {
                "@value": "true"
            }
        }, 
        "anchor": {
            "preventMultipleClick": {
                "@value": "true"
            }
        }, 
        "pageInherit": {
            "mode": {
                "@value": "sync"
            }
        }, 
        "windowContainer": {
            "tooltipGroupClass": {
                "@value": "false"
            }, 
            "getWindow": {
                "@searchTarget": "windowId"
            }, 
            "displayOnlyTopWindow": {
                "@value": "true"
            }
        }, 
        "tabControl": {
            "focusOnStart": {
                "@value": "false"
            }
        }, 
        "pageList": null, 
        "style": {
            "removeDefaultClass": {
                "@value": "true"
            }
        }, 
        "radio": {
            "nameScope": {
                "@value": "true"
            }
        }, 
        "body": {
            "toolTipSec": {
                "@value": "1"
            }
        }, 
        "editor": {
            "version": {
                "@value": "4.11.3"
            }
        }, 
        "fusionchart": {
            "version": {
                "@value": "3.13"
            }
        }, 
        "scheduleCalendar": {
            "version": {
                "@value": "3.6.2"
            }
        }, 
        "languagePack": {
            "@useLanguagePack": "true", 
            "url": [
                {
                    "@lang": "ko", 
                    "@value": "/sp4_unofficial/mutiLang/client/common/lang/client_ko.js"
                }, 
                {
                    "@lang": "en", 
                    "@value": "/sp4_unofficial/mutiLang/client/common/lang/client_en.js"
                }, 
                {
                    "@lang": "de", 
                    "@value": "/sp4_unofficial/mutiLang/client/common/lang/client_de.js"
                }, 
                {
                    "@lang": "fr", 
                    "@value": "/sp4_unofficial/mutiLang/client/common/lang/client_fr.js"
                }
            ]
        }
    }
}
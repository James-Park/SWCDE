// 웹 브라우저 단축키가 동작하지 않도록 설정함 (true : 동작, false : 미동작)
// iframe 안에 포함된 컨텐츠는 Frame 영역이 분리되기 때문에 별도의 추가 작업을 해야 단축키 제어를 할 수 있다.
var gcm = {};

gcm.hkey = {
	IS_USE_BROWSER_SHORTCUT : false
};

/**
 * KeyDown 이벤트 발생 시 로그를 출력하고, 웹 브라우저의 단축 동작을 제어한다.
 *
 * @param {Object} e 키보드 이벤트
 */
gcm.hkey.keydownEvent = function(e) {
	try {
		var lastKey = e.key || e.keyCode || e.which;
		var complexKey = "";

		if (e.ctrlKey && e.altKey) {
			complexKey = "ctrlAltKey";
		} else if (e.ctrlKey && e.shiftKey) {
			complexKey = "ctrlShiftKey";
		} else if (e.altKey && e.shiftKey) {
			complexKey = "altShiftKey";
		} else {
			if (e.altKey) {
				complexKey = "altKey";
			} else if (e.ctrlKey) {
				complexKey = "ctrlKey";
			} else if (e.shiftKey) {
				complexKey = "shiftKey";
			} else {
				complexKey = "singleKey";
			}
		}

		// (Ctrl, Alt, Shift)가 아닌 lastKey가 인식될 경우 
		if (lastKey != "Control" && lastKey != "Alt" && lastKey != "Shift") {
			
			// KeyboardEvent.key 값이 전달되지 않는 구형 브라우저에서 lastKey 재설정
			if ((typeof lastKey === "number") || (lastKey === "Unidentified")) {
				if (e.keyCode >= 112 && e.keyCode <= 123) {
					var funtionKey = [ "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12" ];
					lastKey = funtionKey[e.keyCode - 112];
				} else if (e.keyCode == 9) {
					lastKey = "Tab";
				} else if (e.keyCode == 27) {
					lastKey = "Escape"; 
				} else if (e.keyCode == 187) {
					lastKey = "="; 
				} else if (e.keyCode == 189) {
					lastKey = "-"; 
				} else {
					lastKey = String.fromCharCode(e.keyCode).toUpperCase();
				}
			}
			
			if (gcm.hkey.isPreventKey(complexKey, lastKey)) {
				
				// 아래의 코드는 단축키 로그를 출력하기 위한 코드로 실제 프로젝트에 적용 시 주석으로 막으시기 바랍니다.
				// 원하는 단축키 동작이 있을 경우
				// searchBox 컴포넌트에 포커스가 위치한 경우에는 scwin.writeKeyLog 함수를 찾지 못해서 로그 출력이 안됩니다.
				if (typeof $p.debug.getScope(document.activeElement).scwin.writeKeyLog === "function") {
					$p.debug.getScope(document.activeElement).scwin.writeKeyLog(complexKey, lastKey);
				}
				
				// 전역 단축키 실행한다.
				gcm.hkey.runGlobalEvent(complexKey, lastKey);
				
				// 운영 환경에서 브라우저 단축키의 동작을 정지 시킴
				if (gcm.hkey.IS_USE_BROWSER_SHORTCUT === false) {
					
					// IE에서 F1 Key 동작을 중지 시킴
					if ('onhelp' in window) {
						window.onhelp = function() {
							return false;
						}
					}
					
					if (e.preventDefault) {
						e.preventDefault();
					} else if (e.returnValue) {
						e.returnValue = false;
					}
				}
			}
		}
	} catch (ex) {
		console.error(ex);
	}
};

/**
 * 단축키 실행을 막을 대상 Key인지 검사를 수행한다.
 */ 
gcm.hkey.isPreventKey = function(complexKey, lastKey) {
	var exTag = ["INPUT", "TEXTAREA", "IFRAME"]; 
	var controlKeyList = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "ctrlKey", "altKey", "ctrlAltKey", "ctrlShiftKey", "altShiftKey" , "Tab", "Escape"];

	var activeTag = document.activeElement.tagName;
	var ucLastKey = lastKey.toUpperCase();

	if ((exTag.indexOf(activeTag) === -1)) {
		return true;
	} else if ((exTag.indexOf(activeTag) > -1) && (((complexKey === "ctrlKey") && (ucLastKey === "A"))
		|| ((complexKey === "ctrlKey") && (ucLastKey === "C")) || ((complexKey === "ctrlKey") && (ucLastKey === "V"))
		|| ((complexKey === "ctrlKey") && (ucLastKey === "X")) || ((complexKey === "ctrlKey") && (ucLastKey === "Y"))
		|| ((complexKey === "ctrlKey") && (ucLastKey === "Z")) || ((complexKey === "ctrlShiftKey") && (ucLastKey === "Z")))) {
		return false;
	} else if ((controlKeyList.indexOf(complexKey) !== -1) || (controlKeyList.indexOf(lastKey) !== -1)) {
		return true;
	} else {
		return false;
	}
};

/**
 * 전역 단축키 실행 함수.
 * @param {String} complexKey 입력된 복합키 ("ctrlKey", "altKey", "ctrlAltKey", "ctrlShiftKey", "altShiftKey")
 * @param {String} eventKey 입력된 키 ("F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Tab", "Escape", "0~9", "a-z", "A-Z", 특수문자(!@#~) 등)
 */
gcm.hkey.runGlobalEvent = function(complexKey, eventKey) {
	try {
		// 아래의 전역 단축키 동작에 대해서 코드를 작성합니다.
		if (eventKey === "F1") {
			alert("F1 키가 입력 되었습니다.");
		} else if (eventKey === "Escape") {
			alert("Escape 키가 입력 되었습니다.");
		}
	} catch (ex) {
		console.error(ex);
	}
}

/**
 * Document 객체에 keyDown 이벤트를 바인딩 시킨다.
 */
gcm.hkey.setShortKeyDownAction = function() {
	var shortcutTargetElement = document;
	
	if (shortcutTargetElement.addEventListener) {
		shortcutTargetElement.addEventListener('keydown', gcm.hkey.keydownEvent);
	} else if (shortcutTargetElement.attachEvent)  {
		shortcutTargetElement.attachEvent('keydown', gcm.hkey.keydownEvent);
	}
};

// 단축키 제어 동작 함수를 실행합니다.
gcm.hkey.setShortKeyDownAction();
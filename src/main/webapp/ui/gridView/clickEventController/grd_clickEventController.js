window.com = {};

// Double Click Check를 한 Timer Id
com.clickEventTimerId = "clickEventTimer";

// Double Click Check를 위한 Interval (unit : ms) (500으로 설정할 경우 0.5초 안에 Click 이벤트가 두 번 발생하면 Click이 아닌 Double Click으로 인식하도록 함)
com.dblClickCheckInterval = 500;

/**
 * GridView, Trigger의 Click, Double Click 이벤트를 제어하기 위한 이벤트 제어를 설정한다.
 * 
 * 1. 웹스퀘어 기본 Click, Double Click 이벤트 동작 
 * - GridView와 Trigger 컴포넌트에서 Click 이벤트가 2번 발생하면, Click 이벤트가 2번, Double Click 이벤트가 1번 발생한다. 
 * 
 * 2. 웹스퀘어 기본 Click, Double Click 이벤트 동작 (<preventMultipleClick value="true"/> 설정)
 * - config.xml 파일에 <trigger><preventMultipleClick value="true"/></trigger><gridView><preventMultipleClick value="true"/></gridView> 설정
 * - GridView와 Trigger 컴포넌트에서 Click 이벤트가 2번 발생하면, Click 이벤트가 2번, Double Click 이벤트가 1번 발생한다. 
 * 
 * 3. com.setClickEvent() 함수로 GridView, Trigger Click, Double Click 제어 시 이벤트 동작
 * - GridView와 Trigger 컴포넌트에서 Click 이벤트가 1번 발생하면, Click 이벤트만 1번 발생한다.
 * - GridView와 Trigger 컴포넌트에서 Click 이벤트가 2번 발생하면, Click 이벤트가 발생하지 않고, Double Click 이벤트만 1번 발생한다. 
 * 
 * 4. 특정 화면에서만 com.setClickEvent() 함수로 GridView, Trigger Click, Double Click 이벤트를 제어하기 위한 예시 코드
 * <script src="grd_clickEventController.js" />
 * <script type="text/javascript" lazy="false"><![CDATA[
 *      scwin.onpageload = function () {
 *         com.setClickEvent($p);
 *      };
 * ]]></script>
 * 
 * 5. 모든 화면에서 com.setClickEvent() 함수로 GridView, Trigger Click, Double Click 이벤트를 제어하기 위한 설정 방법
 * - config.xml 파일에 아래의 설정 추가
 * <initScript value="true"><![CDATA[
 * 	    com.setClickEvent($p);
 * ]]></initScript>
 * <wframe>
 *     <mode value="sync"/>
 *     <scope value="true"/>
 *     <initScript value="true"><![CDATA[
 *         com.setClickEvent($p);
 *     ]]></initScript>
 * </wframe>
 * <engine>
 *     <module src="/ui/gridView/clickEventController/grd_clickEventController.js"/>	
 * </engine>
 */
com.setClickEvent = function($p) {
	let frame = null; 
	if ($p.getFrameId() === $p.top().$p.getFrameId()) {
		frame = WebSquare.getBody();
	} else {
		frame = $p.getFrame();
	}
	
	let compList = WebSquare.util.getChildren(frame, {
		includePlugin: "trigger gridView",
		recursive: true
	});

	for (let i = 0; i < compList.length; i++) {
		for (let j = 0; j < compList[i].userEventList.length; j++) {
			if ($p.getFrameId() === compList[i].getScopeWindow().$p.getFrameId()) {
				let eventInfo = compList[i].userEventList[j];
				if ((eventInfo.name === "onclick") || (eventInfo.name === "ondblclick") || (eventInfo.name === "oncellclick") || (eventInfo.name === "oncelldblclick")) {
					eventInfo.param.handler = "com._clickEvent";
					compList[i].userEventList.push({
						name : "_" + eventInfo.name,
						action : eventInfo.action,
						param : eventInfo.param
					})
				}
			}
		}
	}
};

com._clickEvent = function() {
	let compObj = $p.getComponentById($p.getEventTarget(this).realId);	
	
	if (window.event.detail === 1) {
		$p.setTimeout(function() {
				for (let i = 0; i < compObj.userEventList.length; i++) {
					if ((compObj.userEventList[i].name === "_onclick") || (compObj.userEventList[i].name === "_oncellclick")) {
						this.getScopeWindow().scwin[this.getOriginalID() + compObj.userEventList[i].name](arguments[0], arguments[1], arguments[2]);
					}
				}
			}, 
			{delay: com.dblClickCheckInterval, key: com.clickEventTimerId, caller: compObj, args: arguments}
		);
	} else if (window.event.detail === 2) {
		$p.clearTimeout(com.clickEventTimerId);
		for (let i = 0; i < compObj.userEventList.length; i++) {
			if ((compObj.userEventList[i].name === "_ondblclick") || (compObj.userEventList[i].name === "_oncelldblclick")) {
				this.getScopeWindow().scwin[this.getOriginalID() + compObj.userEventList[i].name](arguments[0], arguments[1], arguments[2]);
			}
		}
	}
};
window.com = {};

com.clickEventTimerId = "clickEventTimer";

com.setClickEvent = function($p) {
	let compList = WebSquare.util.getChildren($p.getFrame(), {
		includePlugin: "trigger gridView",
		recursive: true
	});

	for (let i = 0; i < compList.length; i++) {
		for (let j = 0; j < compList[i].userEventList.length; j++) {
			let eventInfo = compList[i].userEventList[j];
			if ((eventInfo.name === "onclick") || (eventInfo.name === "ondblclick") || (eventInfo.name === "oncellclick") || (eventInfo.name === "oncelldblclick")) {
				eventInfo.param.handler = "com.clickEvent";
				compList[i].userEventList.push({
					name : "_" + eventInfo.name,
					action : eventInfo.action,
					param : eventInfo.param
				})
			}
		}
	}
};

com.clickEvent = function() {
	let compObj = $p.getComponentById($p.getEventTarget(this).realId);	
	
	if (window.event.detail === 1) {
		$p.setTimeout(function() {
				for (let i = 0; i < compObj.userEventList.length; i++) {
					if ((compObj.userEventList[i].name === "_onclick") || (compObj.userEventList[i].name === "_oncellclick")) {
						this.getScopeWindow().scwin[this.getOriginalID() + compObj.userEventList[i].name](arguments[0], arguments[1], arguments[2]);
					}
				}
			}, 
			{delay: 500, key: com.clickEventTimerId, caller: compObj, args: arguments}
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
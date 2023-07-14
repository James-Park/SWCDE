//그리드 뷰 클릭, 더블클릭 이벤트 구분처리 함수.
wt.gridDblclickEvent = async function(gridComp, type) {
	console.log("wt.gridDblclickEvent ===== ");
	if (nx.frame.isMobile(true)) return; //모바일은 예외 처리
	
	var userEventList = gridComp.userEventList;
    var fnClick = "";
    var fnDblclick = "";
    for (var key in userEventList) {
        if (userEventList[key].name == "oncellclick" && userEventList[key].action == "script") {
            fnClick = typeof userEventList[key].param != "undefined" ? userEventList[key].param.handler : "";
        } else if (userEventList[key].name == "oncelldblclick" && userEventList[key].action == "script") {
            fnDblclick = typeof userEventList[key].param != "undefined" ? userEventList[key].param.handler : "";
        }
    }
    
    //그리드 더블클릭이 있을때만 추가 2022-05-10
    if (fnDblclick != "" || type == "multiError") {
    //if (fnClick != "" || fnDblclick != "" || type == "multiError") {
    	
    	if(type == "multiError") gridComp.setAttribute("multiError",true);
    	
//        gridComp.unbind("oncellclick");
//        gridComp.unbind("oncelldblclick");
//        gridComp.setUserData("cellclickEv", fnClick);
    	//2022.04.21 oncellclick 함수가 존재하지 않을 경우만 unbind 한다. 
    	if(gcm.isEmpty(gridComp.getUserData("cellclickEv"))) {
    		gridComp.unbind("oncellclick");
    		gridComp.setUserData("cellclickEv", fnClick);
    	}
        gridComp.unbind("oncelldblclick");
        if(gcm.isEmpty(gridComp.getUserData("celldblclickEv"))) gridComp.setUserData("celldblclickEv", fnDblclick);
        var clickEv = async function(e) {
        	console.log("clickCount:",e.detail);
        	var gridComp = $p.getComponentById(this.id); //화면 그리드 실제 ID
        	var gridTd;
        	if (e.target.tagName == "TD") {
        		gridTd = e.target;
        	} else if (gridComp.isEditing()) {
        		gridTd = gridComp.editedCell.editTd;
        	} else {
        		var tdTagList = $(e.target).closest("td");
        		if (tdTagList.length > 0) {
        			gridTd = tdTagList.get(0);
        		} else {
        			return;
        		}
        	}
            var originalRowIndex = gridComp.rowIndex;
        	var tdIndex = parseInt(gridTd.getAttribute("tdIndex"));
        	if (isNaN(tdIndex)) return;
        	var trIndex = parseInt(tdIndex/gridComp.realRowDataLength);
            var displayRowIndex = gridComp.rowIndex + tdIndex;
            var newRowIndex = gridComp._getGroupbyDisplayRowIndex(trIndex + originalRowIndex);
            var newColIndex = tdIndex % gridComp.realRowDataLength - (gridComp.realRowDataLength - gridComp.oneRowDataLength);
        	var colId = gridTd.getAttribute("col_id");
			var isEditDisabled = gridComp._getEditDisabled(newRowIndex, newColIndex);
			if (isEditDisabled == false) {
				//click카운트 체크하여 서로 다른dom을 연속 2번 클릭했을 때 더블클릭으로 인식하는 문제 수정. 
    			if (e.detail == 2) {
    				if(typeof gridComp.clickTimer != "undefined"){
	    				console.log("DblclickCount:",e.detail);
	    				clearTimeout(gridComp.clickTimer);
	    				gridComp.clickTimer = undefined;
	    				delete gridComp.clickTimer;
	    				//ondblclick 동작 호출.
	    				// 2022.04.22 MS.Ko 이벤트 함수 획득 수정.
	    				// var func = wt.findFunction(gridComp.getUserData("celldblclickEv"));
	    				var _evStrArr = gridComp.getUserData("celldblclickEv").split('.');
						var _scopeObj = gridComp.getScopeWindow();
						var func = _scopeObj;
						
						for (var idx = 0, iCnt = _evStrArr.length; idx < iCnt; idx++) {
			    			/*
			    			  * 변경 사항 : _evStrArr[idx] 빈 값 처리
			    			  * 영향도 : 
			    			  * 수정자(사번, 이름) : SGO1016746, 이진수
			    			  * 관련 화면(화면ID) : 
			    			  * 관련 결함(오케스트라ID) : 
			    			  * 요청자 : 
			    			  * 작업일 : 20220826
			    			*/
							if(nx.util.isEmpty(_evStrArr[idx])) continue;
							else func = func[_evStrArr[idx]];
						}
	    				
	    				if(typeof func != "function" && gridComp.getAttribute("multiError")) func = ()=>{};
	                    if (typeof func == "function") {
	                        // func.apply(gridComp, [ trIndex, newColIndex, colId ]);
	                    	
	                    	//20220406 wt.tr multiTranCallback 함수에서 처리결과 필드명으로 체크하고있음. 같은방식으로 처리.
	                    	//그리드 더블 클릭 시 오류팝업 표시 -> 닫고나면 그다음 동작하도록. multiSend여부는 showMultiResultMessageAsync 함수에서 판단중
	                    	var fRow = gridComp.getFocusedRowIndex();
	                    	if(colId == "처리결과" && !(gcm.isEmpty(gridComp.getCellData(fRow,colId)))){
	                    		await wt.showMultiResultMessageAsync.apply(gridComp, [ fRow, newColIndex, colId ]);
	                    	}
	                        func.apply(gridComp, [ fRow, newColIndex, colId ]);
	                    }
	    				}
    			} else if(e.detail == 1) {
    				//20220312 수정. wframe안의 그리드바인딩함수를 찾지못함.
    				gridComp.clickTimer = setTimeout(function() {
    					clearTimeout(gridComp.clickTimer);
    					gridComp.clickTimer = undefined;
    					delete gridComp.clickTimer;
    					//onclick 동작 호출.
    					
    					var _evStrArr = gridComp.getUserData("cellclickEv").split('.');
    					var _scopeObj = gridComp.getScopeWindow();
    					var _func = _scopeObj;
    					
    					for (var idx = 0, iCnt = _evStrArr.length; idx < iCnt; idx++) {
    						_func = _func[_evStrArr[idx]];	
    					}	
    					
    					// var func = _wt.findFunction(gridComp.getUserData("cellclickEv"));
    					if (typeof _func == "function") {
                        // 	func.apply(gridComp, [ trIndex, newColIndex, colId ]);
    						_func.apply(gridComp, [ gridComp.getFocusedRowIndex(), newColIndex, colId ]);
    						// 2022.03.23 이벤트 호출 이후 포커스가 빠지는 문제점이 발생하여 포커스 유지를 위해 포커스 지정.
    						var isFocus = true;
    						try {
    							// 2022.04.06 그리드의 포커스 지정시 캘린더가 열려 있는 경우는 포커스를 지정하지 않도록 수정(포커스 지정시 캘린더가 닫힘)
	    						var gridColInfo = gridComp.getCellInfo(colId) || {};
	    						var gridId = gridComp.org_id || "";
	    						if (gridId != "" && gridColInfo.options && gridColInfo.options.inputType == "calendar") {
	    							var openCalendar = $(".w2inputCalendar_calendar:visible");
	    							if (typeof openCalendar.get(0) != "undefined" && openCalendar.attr("id").indexOf(gridId) > -1) {
	    								isFocus = false;
	    							}
	    						}
    						} catch(checkE) {

    						}
    						if (isFocus) {
    							gridComp.setFocusedCell(gridComp.getFocusedRowIndex(), newColIndex, true);
    						}

    					}
    				}, 500); //더블클릭 기본값(500ms)으로 변경 
    			}
			}
		}
        //20220406 이벤트 이미 바인딩 된 경우 다시 바인딩 못하게 처리.
        if(typeof gridComp.render.extClick == "function" && gridComp.render.extClick.name == clickEv.name) return;
        gridComp.render.addEventListener("click", clickEv);
        gridComp.render.extClick = clickEv;
    }
};




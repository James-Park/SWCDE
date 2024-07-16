"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[803],{803:(t,e,i)=>{i.r(e),i.d(e,{checkbox:()=>c});var s=i(1570),o=i(8548),r=i(866),n=i(2847),a=i(6323),l=i(3885),h=i(4302),p=i(5217),c=function(t,e,i){l.q.call(this,t,e,i)};s.q.extend(c.prototype,l.q.prototype),s.q.extend(c.prototype,h.t.prototype),s.q.extend(c.prototype,p.G.prototype),c.prototype.defaultOptions={pluginType:"uiplugin.checkbox",pluginName:"checkbox",userEvents:["onchange","onlabelclick","oncheckboxclick","onviewchange","onkeyup","onkeydown"],useConfig:!0,serializable:!0,renderType:"",tagname:"div",itemTagname:"div",value:"",cols:0,rows:0,name:"",selectedindex:-1,initValue:"",mandatory:!1,maxlength:-1,minlength:-1,allowChar:"",ignoreChar:"",characterCase:"",maxByteLength:-1,minByteLength:-1,validator:"",invalidMessage:"",invalidMessageFunc:"",displaymessage:!1,title:"",useCheckboxTitle:!0,escape:!0,falseValue:"",ignoreTabIndex:!1,separator:" ",tooltipItemLabel:"",tooltipShowAlways:!1,tooltipDisplay:!1,tooltipClass:"",tooltipTime:1,visibleColumn:"",visibleColumnFalseValue:"0,false,FALSE,F",enableColumn:"",enableColumnFalseValue:"0,false,FALSE,F",refInitSync:!1},c.prototype.initialize=function(t){try{this.inputType="checkbox";var e=o.I.getConfiguration("/WebSquare/checkbox/renderType/@value");""==this.options.renderType&&""!=e?this.options.renderType=e:""==this.options.renderType&&(this.options.renderType="table"),"native"==this.options.renderType?this.itemArr=[{label:"",value:this.options.value}]:this.initializeItemArr(t),this.itemDisabledArray=[];for(var i=0;i<this.itemArr.length;i++)this.itemDisabledArray.push(!1);this.setTableCount(),this.validator=new WebSquare.validator.validateInvoker(this.id,this.options),this.oldValueForIE=[],this.settingData=!1,this.options.tooltipFormatter&&(this.tooltipFormatter=a.Z.getGlobalFunction(this.options.tooltipFormatter,this.scope_id))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.toHTML=function(){try{var t=[],e="label",i=this.itemArr.length,s=this.options.name||this.id+"_input",o=""==this.options.style?"":"style='"+this.options.style+"'",n=""==this.options.title?"":"title='"+this.options.title+"'",l=1==this.options.ignoreTabIndex?" tabindex='-1'":""==this.options.tabIndex?"":" tabIndex='"+this.options.tabIndex+"'",h=a.Z.getDataPrefix("index");if("native"==this.options.renderType.toLowerCase())t.push("<input type='"+this.inputType+"' "+o+" class='w2"+this.inputType+"_input "+this.options.className+"' name='"+s+"' id='"+this.id+"' "+h+"='0' "+n+l+" />");else if("checkboxgroup"==this.options.renderType.toLowerCase()){t.push("<"+this.options.tagname+" id='"+this.id+"' "+o+" class='w2"+this.inputType+" "+this.options.className+"' "+n+">");for(var p=0;p<i;p++){var c="";this.itemArr&&this.itemArr[p]&&!0===this.itemArr[p]._hidden&&(c=" style='display:none;'");var d=this.id+"_input_"+p,u=this.options.escape?WebSquare.xml._encode(this.itemArr[p].label):this.itemArr[p].label,b="",y="";this.itemDisabledArray[p]&&(b="disabled",y="w2checkbox_disabled"),t.push("<"+this.options.itemTagname+" class='w2checkbox_item w2checkbox_item_"+p+"'"+c+">");u=this.options.escape?WebSquare.xml._encode(this.itemArr[p].label):this.itemArr[p].label;var f=this.options.useCheckboxTitle?" title='"+u+"' ":"";t.push("<input type='"+this.inputType+"' class='w2"+this.inputType+"_input' name='"+s+"' "+h+"='"+p+"' id='"+d+"' "+b+l+f+" />"),t.push("<label class='w2"+this.inputType+"_label "+y+"' "+h+"='"+p+"' for='"+d+"'>"+u+"</"+e+">"),t.push("</"+this.options.itemTagname+">")}t.push("</"+this.options.tagname+">")}else{t.push("<div id='"+this.id+"' "+o+" class='w2"+this.inputType+" "+this.options.className+"' "+n+">"),t.push("<table class='w2"+this.inputType+"_main'>");for(var m=0;m<this.rowCount;m++){d=this.id+"_input_"+m,t.push("<tr class='w2"+this.inputType+"_row'>");for(var g=0;g<this.colCount;g++){var v=m*this.colCount+g;c="";this.itemArr&&this.itemArr[v]&&!0===this.itemArr[v]._hidden&&(c=" style='display:none;'")
;d=this.id+"_input_"+v,b="",y="";if(this.itemDisabledArray[v]&&(b="disabled",y="w2checkbox_disabled"),v<i){u=this.options.escape?WebSquare.xml._encode(this.itemArr[v].label):this.itemArr[v].label,f=this.options.useCheckboxTitle?" title='"+u+"' ":"";t.push("<td class='w2"+this.inputType+"_td_input'"+c+"><input type='"+this.inputType+"' class='w2"+this.inputType+"_input' name='"+s+"' "+h+"='"+v+"'  id='"+d+"'"+f+b+l+"/></td>"),t.push("<td class='w2"+this.inputType+"_td_label'"+c+"><"+e+" class='w2"+this.inputType+"_label "+y+"' "+h+"='"+v+"' for='"+d+"'>"+u+"</"+e+"></td>")}else t.push("<td class='w2"+this.inputType+"_td_input'"+c+"></td>"),t.push("<td class='w2"+this.inputType+"_td_label'"+c+"></td>")}t.push("</tr>")}t.push("</table>"),t.push("</div>")}return t.join("")}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setAction=function(){try{if(this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.modelControl.isItemsetBinded()&&(this.refreshItemArr(),this.componentRedraw(),this.options.enableColumn&&this.refreshEnable()),this.modelControl.isBinded()){var t=this.modelControl.getData();this.setValueNM(t)}var e=this.getCheckboxList();if(this.options.selectedindex>-1){for(var i=0;i<e.length;i++){e[i].checked=!1,this.oldValueForIE[i]=!1}this.setSelectedIndexNM(this.options.selectedindex),this.modelControl.isBinded()&&this.modelControl.setData(this.getValue())}else{for(i=0;i<e.length;i++)this.modelControl.isBinded()||(this.oldValueForIE[i]=!1);this.options.falseValue&&this.modelControl.isBinded()&&this.options.refInitSync&&this.modelControl.setData(this.options.falseValue)}this.options.mandatory&&this.onPropertyChange("mandatory",a.Z.getBoolean(this.options.mandatory)),this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onkeyup",this.event.bindAsEventListener(this,this.handleKeyupEvent)),(this.options.tooltipDisplay||this.options.tooltipShowAlways)&&(this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent)))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getAccessibiltyId=function(){try{return"native"==this.options.renderType?this.id:this.id+"_input_0"}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.refreshItemset=function(){try{if(this.modelControl.isItemsetBinded()){var t=this.getValue();this.refreshItemArr(),this.itemDisabledArray=new Array;for(var e=0;e<this.itemArr.length;e++)this.itemDisabledArray.push(this.options.disabled);this.componentRedraw(t),this.options.enableColumn&&this.refreshEnable()}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.getValue(),e=this.modelControl.getData();this.setValueNM(e),t!=this.getValue()&&n.f.fireEvent(this,"onchange",{oldValue:t,newValue:this.getValue()})}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.componentRedraw=function(t){try{this.setTableCount(),this.redraw(),this.setValueNM(t)}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getItemCount=function(){try{return this.itemArr.length}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setSelectedIndex=function(t,e){try{if(a.Z.isNull(t)||1==isNaN(Number(t)))return;t=parseInt(t);var i=this.getValue();a.Z.isIEAllVersion()&&parseInt(o.I.browserVersion(),10)>8?this.setSelectedIndexNM(t,null,e):this.setSelectedIndexNM(t),this.settingData=!0,this.modelControl.setData(this.getValue()),this.settingData=!1,i!=this.getValue()&&n.f.fireEvent(this,"onchange",{oldValue:i,newValue:this.getValue()})}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getSelectedIndex=function(t){try{t||(t=this.options.separator||" ")
;for(var e=[],i=this.getCheckboxList(),s=0;s<i.length;s++)i[s].checked&&e.push(s);return e.join(t).wq_trim()}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setSelectedIndexNM=function(t,e,i){try{if((t=parseInt(t))<0||t>=this.getItemCount())return!1;var s=this.getCheckboxList()[t];return e=null==e?!s.checked:e,s.checked=e,2!=i&&1!=this.settingData&&(this.oldValueForIE[t]=e),!0}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setValue=function(t){try{if(a.Z.isNull(t))return;var e=this.getValue();this.setValueNM(t),this.modelControl.setData(t),e!=this.getValue()&&n.f.fireEvent(this,"onchange",{oldValue:e,newValue:this.getValue()})}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setValueNM=function(t){try{if(a.Z.isNull(t))return;for(var e=(t=t.toString()).split(this.options.separator||" "),i=[],s=0;s<e.length;s++)i[e[s]+""]="";var o=this.getItemCount();for(s=0;s<o;s++){null!=i[t=this.itemArr[s].value]?this.setSelectedIndexNM(s,!0):this.setSelectedIndexNM(s,!1)}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setInstanceValue=function(t){try{if(null!=t){if(a.Z.isNull(t))return;t=parseInt(t)}var e=this.getValue(),i="";this.modelControl.isBinded()?(i=this.modelControl.getData(),this.modelControl.setData(e),i!=e&&n.f.fireEvent(this,"onchange",{oldValue:i,newValue:e})):(i=this.getValue(null,t),n.f.fireEvent(this,"onchange",{oldValue:i,newValue:e}))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setTableCount=function(){try{if(this.rowCount=this.itemArr.length,this.colCount=1,0!=this.options.rows){var t=this.options.rows;this.rowCount=t,this.colCount=Math.ceil(this.itemArr.length/t)}if(0!=this.options.cols){var e=this.options.cols;this.colCount=e,this.rowCount=Math.ceil(this.itemArr.length/e)}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getText=function(t){try{t||(t=this.options.separator||" ");for(var e=[],i=this.getCheckboxList(),s=0;s<i.length;s++)i[s].checked&&e.push(this.itemArr[s].label);return e.join(t).wq_trim()}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getValue=function(t,e){try{t||(t=this.options.separator||" ");for(var i=[],s=this.getCheckboxList(),o=0;o<s.length;o++)void 0!==e&&o===e?s[o].checked||i.push(this.itemArr[o].value):s[o].checked&&i.push(this.itemArr[o].value);return i.join(t).wq_trim()||this.options.falseValue}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.addItem=function(t,e,i){try{i=parseInt(i,10),(isNaN(i)||i<0||i>=this.getItemCount())&&(i=this.getItemCount());var s=this.getValue(),o={};o.value=t,o.label=e,this.itemArr.splice(i,0,o),this.itemDisabledArray.splice(i,0,!!this.options.disabled);for(var n=this.getCheckboxList(),a=[],l=0;l<n.length;l++)a.push(n[l].itemDisabled);a.splice(i,0,!1),this.componentRedraw(s);var h=this.getCheckboxList();for(l=0;l<h.length;l++)h[l].itemDisabled=a[l];return i}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.deleteItem=function(t){try{if(t=parseInt(t,10),isNaN(t))return;for(var e=this.getValue(),i=null,s=this.getCheckboxList(),o=[],n=0;n<s.length;n++)o.push(s[n].itemDisabled);t>=0&&t<this.getItemCount()&&(i=this.itemArr.splice(t,1)[0],this.itemDisabledArray.splice(t,1),o.splice(t,1)),this.componentRedraw(e);var a=this.getCheckboxList();for(n=0;n<a.length;n++)a[n].itemDisabled=o[n];return i}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.removeAll=function(){try{this.itemArr=new Array,this.itemDisabledArray=new Array,this.componentRedraw("")}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.onPropertyChange=function(t,e){try{switch(t){case"readOnly":for(var i=this.getCheckboxList(),s=0;s<i.length;s++)i[s].disabled=e;1==e?this.addClass(this.render,"w2checkbox_readonly"):this.removeClass(this.render,"w2checkbox_readonly");break;case"mandatory":1==e?this.addClass(this.render,"w2checkbox_mandatory"):this.removeClass(this.render,"w2checkbox_mandatory")}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getCheckboxList=function(){try{
return"native"==this.options.renderType?[this.render]:this.getDomList("checkboxArr","input")}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getLabelList=function(){try{return this.getDomList("labelArr","label")}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.focus=function(){try{this.getCheckboxList()[0].focus()}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.click=function(t){try{this.getCheckboxList()[t].click()}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.reset=function(){try{for(var t=this.getCheckboxList(),e=this.getValue(),i=0;i<t.length;i++)t[i].checked&&(t[i].checked=!1,this.oldValueForIE[i]=!1);var s=this.getValue();this.modelControl.setData(s),e!=s&&n.f.fireEvent(this,"onchange",{oldValue:e,newValue:s})}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.checkAll=function(t){try{for(var e=this.getItemCount(),i=0;i<e;i++)this.setSelectedIndexNM(i,t);this.modelControl.isBinded()&&this.modelControl.setData(this.getValue())}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.validate=function(){try{var t=this.validator.validate(this.getValue());return t||this.focus(),t}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.validateObject=function(){try{var t=this.validator.validate(this.getValue()),e={};return t||(this.focus(),this.validator&&this.validator.obfuscator_invalidObject&&(e.callerId=this.validator.obfuscator_invalidObject.callerId,e.type=this.validator.obfuscator_invalidObject.getType(),e.value=this.validator.obfuscator_invalidObject.getValue())),e}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setDisabled=function(t){try{t=a.Z.getBoolean(t);for(var e=this.getCheckboxList(),i=this.getLabelList(),o=0;o<e.length;o++)e[o].itemDisabled||(this.itemDisabledArray[o]=t,t?(this.addClass(i[o],"w2checkbox_disabled"),e[o].setAttribute("disabled","disabled")):(this.removeClass(i[o],"w2checkbox_disabled"),e[o].removeAttribute("disabled")));return this.options.disabled=t,!0!==s.q.dataPrefix&&(t?this.render.setAttribute("disabled","disabled"):this.render.removeAttribute("disabled")),t}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setReadOnly=function(t){try{!0===s.q.dataPrefix?(t=a.Z.getBoolean(t),this.options.readOnly=t,this.onPropertyChange("readOnly",t)):l.q.prototype.setReadOnly.call(this,t)}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setItemDisabled=function(t,e){try{if((t=parseInt(t))<0||t>=this.getItemCount())return;e=a.Z.getBoolean(e);var i=this.getCheckboxList(),s=this.getLabelList();i[t].disabled=e,i[t].itemDisabled=e,this.itemDisabledArray[t]=e,1==e?(this.addClass(s[t],"w2checkbox_disabled"),i[t].setAttribute("disabled","disabled")):(this.removeClass(s[t],"w2checkbox_disabled"),i[t].removeAttribute("disabled")),this.itemDisabledArray.indexOf(!1)>-1?(this.options.disabled=!1,this.render.removeAttribute("disabled")):(this.options.disabled=!0,this.render.setAttribute("disabled","disabled"))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.getItemDisabled=function(t){try{if((t=parseInt(t))<0||t>=this.getItemCount())return;return this.getCheckboxList()[t].disabled}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setInitValue=function(t){try{var e=this.getValue();this.checkAll(!1),this.setValueNM(this.options.initValue),this.modelControl.setData(this.options.initValue),t.fireEvent&&e!=this.getValue()&&n.f.fireEvent(this,"onchange",{oldValue:e,newValue:this.getValue()})}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){r.Y.printStackTrace(t)}},c.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){r.Y.printStackTrace(t)}},c.prototype.handleClickEvent=function(t){try{this.setRefPosition();for(var e=this.event.getTargetIterator(t,this.render),i=a.Z.getDataPrefix("index");e.next();){var s
;if(e.match("w2"+this.inputType+"_input")){var l=e.getElement().getAttribute(i);a.Z.isIEAllVersion()&&parseInt(o.I.browserVersion(),10)>8||this.setInstanceValue(l),s=1,this.fireOnclick({type:"1",index:l})}else if(e.match("w2"+this.inputType+"_label")&&!e.match("w2"+this.inputType+"_disabled")){l=e.getElement().getAttribute(i);n.f.preventDefault(t),s=2,a.Z.isIEAllVersion()&&parseInt(o.I.browserVersion(),10)>8?this.setSelectedIndex(l,s):this.setSelectedIndex(l),this.fireOnclick({type:"2",index:l})}}e=null}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.handleMouseoverEvent=function(t){try{for(var e=n.f.getTarget(t),i=a.Z.getDataPrefix("index");e&&(!e.firstChild||"LABEL"!=e.firstChild.tagName)&&!("checkboxgroup"===this.options.renderType&&e&&"DIV"===e.tagName&&e.className.indexOf("w2checkbox_item")>=0);)e=e.parentNode;if(e){var s;s="checkboxgroup"===this.options.renderType?e.getElementsByClassName("w2checkbox_label")[0]:e.firstChild;e.offsetWidth,e.offsetHeight;var o=WebSquare.style.getStyle(e,"text-overflow"),l=s.innerHTML;if(this.options.tooltipFormatter&&"function"!=typeof this.tooltipFormatter&&(this.tooltipFormatter=a.Z.getGlobalFunction(this.options.tooltipFormatter,this.scope_id)),!0===this.options.tooltipShowAlways){var h=WebSquare.style.getAbsoluteLeft(s),p=WebSquare.style.getAbsoluteTop(s);if("function"==typeof this.tooltipFormatter){var c=parseInt(s.getAttribute(i),10);l=this.tooltipFormatter(l,c)}this.showTooltip(h,p,l)}else if("ellipsis"==o){this.toolTipRuler||(this.toolTipRuler=document.createElement("span"),this.toolTipRuler.style.position="absolute",this.toolTipRuler.style.visibility="hidden",this.toolTipRuler.style.left="0px",this.toolTipRuler.style.top="0px"),document.body.appendChild(this.toolTipRuler),this.toolTipRuler.className=e.className,this.toolTipRuler.innerHTML=e.innerHTML,this.toolTipRuler.style.fontSize=WebSquare.style.getStyle(e,"font-size"),this.toolTipRuler.style.fontFamily=WebSquare.style.getStyle(e,"font-family"),this.toolTipRuler.style.fontWeight=WebSquare.style.getStyle(e,"font-weight");var d=this.toolTipRuler.firstChild.offsetWidth,u=e.clientWidth;if(s.nodeType!=WebSquare.Elem.type.text){var b=WebSquare.style.getStyle(this.toolTipRuler.firstChild,"padding-left"),y=WebSquare.style.getStyle(this.toolTipRuler.firstChild,"padding-right");d-=parseInt(b||"0",10),d-=parseInt(y||"0",10),u-=parseInt(WebSquare.style.getStyle(s,"padding-left"),10),u-=parseInt(WebSquare.style.getStyle(s,"padding-right"),10),u-=parseInt(WebSquare.style.getStyle(e,"padding-left"),10),u-=parseInt(WebSquare.style.getStyle(e,"padding-right"),10)}if(u<d){h=WebSquare.style.getAbsoluteLeft(s),p=WebSquare.style.getAbsoluteTop(s);if(document.body.removeChild(this.toolTipRuler),this.options.tooltipItemLabel)l=this.options.tooltipItemLabel;else if("function"==typeof this.tooltipFormatter){c=parseInt(s.getAttribute(i),10);l=this.tooltipFormatter(l,c)}this.showTooltip(h,p,l)}else document.body.removeChild(this.toolTipRuler)}}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.handleMouseoutEvent=function(t){try{n.f.stopEvent(t),!0!==this.options.tooltipDisplay&&!0!==this.options.tooltipShowAlways||this.hideTooltip()}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.hideTooltip=function(){try{this.timeHideTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){this.tooltip&&this.tooltip.setStyle("display","none")})),1e3*this.options.tooltipTime)}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.showTooltip=function(t,e,i){try{null!=this.timeShowTooltip&&(clearTimeout(this.timeShowTooltip),this.timeShowTooltip=null),null!=this.timeHideTooltip&&(clearTimeout(this.timeHideTooltip),this.timeHideTooltip=null);var s=this;this.timeShowTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){try{var n=o.I.getConfiguration("/WebSquare/tooltipShowHideHandler/@value");if(n){var l=a.Z.getGlobalFunction(n,s.scope_id),h=!0;if("function"==typeof l&&(h=l(s)),!h)return}}catch(t){r.Y.printStackTrace(t)}
var p=document.body.scrollWidth;this.tooltip||(this.tooltip=new WebSquare.uiplugin.group(this.id+"_tooltip",{className:"w2checkbox_tooltip "+this.options.tooltipClass,style:"position:absolute;z-index:10000;"+this.options.tooltipStyle}),this.tooltip.writeTo(WebSquare.getBody(),null,this.parentFrame),this.tooltip.activate(),this.tooltip.removeClass("w2group")),this.tooltip.setStyle("display","block"),i=this.options.escape?WebSquare.xml._encode(i):i.wq_replaceAll("&amp;nbsp;","&nbsp;").wq_replaceAll("&amp;nbsp","&nbsp;"),this.tooltip.render.innerHTML=i;var c=Math.max(e-(this.tooltip.render.offsetHeight+3),0);if(this.tooltip.setStyle("left",t+"px"),this.tooltip.setStyle("top",c+"px"),document.body.scrollWidth>p){var d=t-(document.body.scrollWidth-p);d<0&&(d=0),this.tooltip.setStyle("left",d+"px")}})),100*this.options.tooltipTime)}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.handleKeydownEvent=function(t){try{if(9==(t.charCode?t.charCode:t.keyCode)){this.tabOrderMoveStart=!1;var e=this.getCheckboxList();if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID){if(document.activeElement!=e[0])return;this.tabOrderMoveStart=!0,n.f.preventDefault(t)}}else if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID){if(document.activeElement!=e[e.length-1])return;this.tabOrderMoveStart=!0,n.f.preventDefault(t)}}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.handleKeyupEvent=function(t){try{var e;if(9==(t.charCode?t.charCode:t.keyCode))if(null!=WebSquare.tabOrder[this.id])if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id].preTabID)(e=a.Z.getPreTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}else if(null!=WebSquare.tabOrder[this.id].nextTabID)(e=a.Z.getNextTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.fireOnchange=function(){try{n.f.fireEvent(this,"onchange")}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.fireOnclick=function(t){try{if(!t)return;var e=t.type||"1",i=t.index,s=this.getCheckboxList(),l=s[i].checked,h=this.itemArr[i].value,p=!1;a.Z.isIEAllVersion()&&parseInt(o.I.browserVersion(),10)>8&&(null==this.oldValueForIE[i]?(this.oldValueForIE[i]=l,"1"===e&&this.setInstanceValue(i)):l==this.oldValueForIE[i]?p=!0:(this.oldValueForIE[i]=l,"1"===e&&this.setInstanceValue(i))),s[i].disabled||("1"===e?n.f.fireEvent(this,"oncheckboxclick",i,l,h):"2"===e&&n.f.fireEvent(this,"onlabelclick",i,l,h),0==p&&n.f.fireEvent(this,"onviewchange",{index:i,checked:l,value:h}))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.serialize=function(){return{selectedIndex:this.getSelectedIndex()}},c.prototype.restore=function(t){try{this.checkAll(!1);for(var e=t.selectedIndex.split(this.options.separator),i=0,s=e.length;i<s;i++)this.setSelectedIndex(parseInt(e[i],10));return!0}catch(t){return r.Y.printStackTrace(t,null,this),!1}},c.prototype.refreshVisible=function(){try{if(!this.render)return;this._refreshVisible(this.render.getElementsByTagName("input")),"checkboxgroup"!==this.options.renderType.toLowerCase()&&this._refreshVisible(this.render.getElementsByTagName("label"))}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype._refreshVisible=function(t){try{for(var e=0;e<t.length;e++){var i=parseInt(t[e].getAttribute("index"),10);this.itemArr[i]&&!0===this.itemArr[i]._hidden?t[i].parentNode.style.display="none":t[i].parentNode.style.display=""}}catch(t){r.Y.printStackTrace(t,null,this)}},c.prototype.refreshEnable=function(){try{for(var t=this.getItemCount(),e=0;e<t;e++)this.itemArr[e]&&!0===this.itemArr[e]._disabled?this.setItemDisabled(e,!0):this.setItemDisabled(e,!1)}catch(t){r.Y.printStackTrace(t,null,this)}}}}]);
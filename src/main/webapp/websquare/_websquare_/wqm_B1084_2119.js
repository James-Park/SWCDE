"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[2119],{2119:(t,e,i)=>{i.r(e),i.d(e,{searchbox:()=>p});var s=i(1570),n=i(8548),o=i(866),r=i(2847),a=i(6323),h=i(3885),l=i(2725),p=function(t,e,i){h.q.call(this,t,e,i)};s.q.extend(p.prototype,h.q.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.searchbox",pluginName:"searchbox",paddingRight:20,resetButtonDisplay:"",ariaLabel:"",resetAriaLabel:"",accessibility:!1},p.prototype.initialize=function(t){if(!this.options.resetButtonDisplay||""==this.options.resetButtonDisplay){var e=n.I.getConfiguration("WebSquare/searchbox/resetButtonDisplay/@value");this.options.resetButtonDisplay=e||"show"}var i=this.options.style;this.options.style="position:relative;width:100%;height:100%;",this.options.parentEvent=this;var h=s.q.extend({},this.options),l=this.id+"___input";for(var p in h.id=l,delete h._scope_obj_org_id,delete h._scope_obj_uuid,delete h._scope_obj_runtime_id,this.input=new WebSquare.uiplugin.input(l,h,t),this.options.parentEvent="",this._eventTarget=this.input.uuid,this.input.options.userEvents=this.input.defaultOptions.userEvents,this.input.options.systemEvents=this.input.defaultOptions.systemEvents,this.input._childFlag=!0,this.options)"ev:"==p.slice(0,3)&&"_base_"!==this.options.g_index&&delete this.options[p];this.options.xmlEvents=null,this.options.style=i,this.addControl(this.input),this.modelControl.ref=this.options.ref,this.input.modelControl.id=this.id,this.input.modelControl.scope_uuid=this.options._scope_obj_uuid,this.input.handleBlurEventBasic=function(t){try{if(this.getReadOnly()&&!this.options.readOnlyFocusEvent)return;r.f.fireEvent(this,"oneditend"),this.setFocusSize(!1),this.parentControl.setLayout(),this.removeClass(this.render,this.options.onFocusClass);var e=this._getValue(),i=!0;"all"===this.options.applyFormat&&0===Math.abs(e)&&"-"===e.charAt(0)&&(e=e.slice(1),i=!1),this._editFormat&&(i=!1),this._setValue(e,{skipNM:i});var s=WebSquare.historyManager.get(this.options.pluginName,this.id);void 0===s.value&&(s.value=this.originalValue),s.value!=this._getValue()&&(r.f.fireEvent(this,"onchange",{oldValue:s.value,newValue:this._getValue()}),r.f.fireEvent(this,"onviewchange",{oldValue:s.value,newValue:this._getValue()})),r.f.fireEvent(this,"onblur",t),r.f.fireEvent(this,"onafteredit"),this.options.placeholder&&!this.supportPlaceholder&&0==this.realValue.length&&(this.render.value=this.options.placeholder,this.addClass("w2input_placeholder")),a.Z.isIEAllVersion()||a.Z.isOpera()||r.f.fireEvent(this,"onfocusout",t)}catch(t){o.Y.printStackTrace(t,null,this)}}},p.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'",s=""==this.options.ariaLabel?l.B.getMessage("Searchbox_ariaLabel")||"search form":this.options.ariaLabel,n=""==this.options.resetAriaLabel?l.B.getMessage("Searchbox_resetButton_ariaLabel")||"clear input field":this.options.resetAriaLabel;if(t.push("<div id='"+this.id+"' "+e+" role='search' class='w2searchbox "+this.options.className+"' aria-label='"+s+"' "+i+">"),t.push(this.getChild(this.id+"___input").toHTML()),"hide"!==this.options.resetButtonDisplay){var o="div";1==this.options.accessibility&&(o="button"),t.push("<"+o+" id='"+this.id+"___reset' class='w2searchbox_reset' aria-label='"+n+"' "+i+"></"+o+">")}return t.push("</div>"),t.join("")},p.prototype.setPreAction=function(){try{"hide"!==this.options.resetButtonDisplay&&(this.dom.reset=this.getElementById(this.id+"___reset"))}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.event.addUserEvents(this,this.input.userEventList),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedown)),
this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleMousedown)),this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseover)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onfocusin",this.event.bindAsEventListener(this,this.handleFocusInEvent)),this.event.addListener(this.input.render,"onkeyup",this.event.bindAsEventListener(this,this.setLayout));var t,e=parseInt(this.options.paddingRight,10),i=parseInt(this.input.getStyle("border-right-width"),10)+parseInt(this.input.getStyle("border-left-width"),10)||0,s=this.getStyle("width"),r=this.getStyle("height"),h=(s.lastIndexOf("px")>-1?parseInt(s,10):parseInt(this.render.getBoundingClientRect().right-this.render.getBoundingClientRect().left))-(e+parseInt(this.input.getStyle("padding-right"),10))-i;t=r.lastIndexOf("px")>-1?parseInt(r,10):this.render.getBoundingClientRect().bottom-this.render.getBoundingClientRect().top,this.input.setSize(h,t),this.input.setStyle("padding-right",e+"px"),this.input.setVerticalAlign(),this.setLayout();var l=this.input.getSize("outerheight")-this.input.getSize("innerheight");this.setStyle("height",t+l+"px"),(a.Z.isSpartan()||a.Z.isIEAllVersion()&&parseInt(n.I.browserVersion(),10)>9)&&this.addClass(this.input.render,"w2searchbox_reset_remove"),this.options.mandatory&&this.onPropertyChange("mandatory",a.Z.getBoolean(this.options.mandatory))}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.setLayout=function(){try{if(!this.input.render)return;if("show"===this.options.resetButtonDisplay)if(""==this.input.render.value)this.dom.reset.style.display="none";else{this.dom.reset.style.display="block";var t=this.dom.reset.offsetHeight,e=this.getSize("height");this.dom.reset.style.top=parseInt((e-t)/2,10)+"px"}else if("toggle"===this.options.resetButtonDisplay)if(document.activeElement===this.input.render)if(""==this.input.render.value)this.dom.reset.style.display="none";else{this.dom.reset.style.display="block";t=this.dom.reset.offsetHeight,e=this.getSize("height");this.dom.reset.style.top=parseInt((e-t)/2,10)+"px"}else this.dom.reset.style.display="none";else"hide"===this.options.resetButtonDisplay&&this.dom.reset&&(this.dom.reset.style.display="none")}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.focus=function(){try{this.input.render&&this.input.render.focus()}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.setRef=function(t){try{this.input.setRef.call(this.input,t),this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.refresh=function(){this.input.refresh.call(this),this.setLayout()},p.prototype.onPropertyChange=function(t,e){try{switch(t){case"mandatory":1==e?this.addClass(this.render,"w2searchbox_mandatory"):this.removeClass(this.render,"w2searchbox_mandatory");break;case"disabled":1==e?(this.input.render.setAttribute("disabled","disabled"),this.input.addClass(this.input.render,"w2searchbox_disabled")):(this.input.render.removeAttribute("disabled"),this.input.removeClass(this.input.render,"w2searchbox_disabled"));break;case"readOnly":1==e?(this.input.render.setAttribute("readonly","readonly"),this.addClass(this.input.render,this.input.options.readOnlyClass)):(this.input.render.removeAttribute("readonly"),this.removeClass(this.input.render,this.input.options.readOnlyClass))}}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.handleMousedown=function(t){for(var e=this.event.getTargetIterator(t,this.render);e.next();)if(e.match("w2searchbox_reset")){r.f.fireEvent(this,"onresetclick",t),r.f.stopEvent(t),this.dom.reset.style.display="none";var i=this._getValue();if(this.setValue(""),""!=i&&r.f.fireEvent(this,"onviewchange",{oldValue:i,newValue:""}),document.activeElement==this.input.render){var s=this,n={}
;a.Z.isIEAllVersion("11")?(n.onRestore=function(t){document.execCommand("undo",!1,null)},n.stopEvent=!0):n.onRestore=function(t){s.render.value=t.value},WebSquare.historyManager.set(this.options.pluginName,this.input.id,{value:this._getValue()},n)}this.focus()}e=null},p.prototype.handleMouseover=function(t){var e=r.f.getRelatedTarget(t);if(e&&this.hasClass(e,"w2searchbox_reset"))this.removeClass(this.dom.reset,"w2searchbox_reset_on");else{for(var i=this.event.getTargetIterator(t,this.render);i.next();)i.match("w2searchbox_reset")&&this.addClass(this.dom.reset,"w2searchbox_reset_on");i=null}},p.prototype.handleKeydownEvent=function(t){try{var e,i=t.charCode?t.charCode:t.keyCode;if(9==i){if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID)if(r.f.preventDefault(t),e=a.Z.getPreTabbableComp(this.id))return void e.focus(t)}else if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID)if(r.f.preventDefault(t),e=a.Z.getNextTabbableComp(this.id))return void e.focus(t)}else if(13==i||32==i)for(var s=this.event.getTargetIterator(t,this.render);s.next();)if(s.match("w2searchbox_reset"))return r.f.preventDefault(t),void this.handleMousedown(t)}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.handleFocusInEvent=function(t){try{if(t.target==this.input.render){this.input.render.focus(),this.setLayout();var e=this,i={};a.Z.isIEAllVersion("11")?(i.onRestore=function(t){document.execCommand("undo",!1,null)},i.stopEvent=!0):i.onRestore=function(t){e.render.value=t.value},WebSquare.historyManager.set(this.options.pluginName,this.input.id,{value:this._getValue()},i)}}catch(t){o.Y.printStackTrace(t,null,this)}},p.apiExtend=function(){var t=WebSquare.uiplugin.input.prototype,e=WebSquare.uiplugin.searchbox.prototype;for(var i in t)e[i]||(e[i]=function(t){return function(){return this.input[t].apply(this.input,arguments)}}(i))},p.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){o.Y.printStackTrace(t)}},p.prototype.finalize=function(){try{for(var t=this.childControlList.length-1;t>=0;t--)this.childControlList[t].remove()}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.setValue=function(t){try{this.input.setValue(t),this.setLayout()}catch(t){o.Y.printStackTrace(t,null,this)}},p.prototype.setReadOnly=function(t){try{t=a.Z.getBoolean(t),this.options.readOnly=t,this.input.setReadOnly(t),h.q.prototype.setReadOnly.call(this,t)}catch(t){o.Y.printStackTrace(t)}},p.prototype.setDisabled=function(t){try{t=a.Z.getBoolean(t),this.options.disabled=t,this.input.setDisabled(t),h.q.prototype.setDisabled.call(this,t)}catch(t){o.Y.printStackTrace(t)}},p._initImport=function(){p.apiExtend()},s.q._initImportList.push("uiplugin.searchbox")}}]);
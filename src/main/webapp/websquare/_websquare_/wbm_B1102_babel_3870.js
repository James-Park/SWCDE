"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[3870],{3870:function(t,i,e){e.r(i),e.d(i,{textbox:function(){return h}});var o=e(5461),s=e(5375),n=e(8971),r=e(2338),a=e(1204),l=e(2256),p=e(2406),h=function(t,i,e){if(p.q.call(this,t,i,e),e){var o=WebSquare.Elem.api.getLocalName(e);"textbox"!=o&&(this.options.tagname=o)}""!=this.options.for&&(this.options.tagname="label")};o.q.extend(h.prototype,p.q.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.textbox",pluginName:"textbox",serializable:!0,parseAttributes:!0,userEvents:["ontooltipshow","ontooltiphide"],systemEvents:["onclick","ondblclick","onmouseover","onmouseout"],useConfig:!0,label:"",escape:!0,escapeFormatter:"",for:"",tagname:"div",localeRef:"",useLocale:!1,ioFormat:"",displayFormat:"",displayFormatter:null,dataType:"text",dateMask:"",timeMask:"",numberMask:"",euroMask:"",rupeeMask:"",tengeMask:"",delimeter:"",decimalDelimeter:"",delimiter:"",decimalDelimiter:"",initStyle:!1,tooltipClass:"",tooltipTime:1,tooltipDisplay:!1,tooltipPositionX:"",tooltipPositionY:"",tooltipShowAlways:!1},h.prototype.htmlStr=["<",""," id='","","' ",""," class='w2textbox ","","' ","",">","","</","",">"],h.prototype.htmlClosingStr=["<",""," id='","","' ",""," class='w2textbox ","","'",""," />"],h.prototype.initialize=function(t){if(this.options.delimiter=this.options.delimiter?this.options.delimiter:this.options.delimeter,this.options.decimalDelimiter=this.options.decimalDelimiter?this.options.decimalDelimiter:this.options.decimalDelimeter,this.options.delimeter=this.options.delimiter,this.options.decimalDelimeter=this.options.decimalDelimiter,""==this.options.displayFormat)switch(this.options.dataType){case"date":this.options.displayFormat=this.options.dateMask;break;case"time":this.options.displayFormat=this.options.timeMask;break;case"number":this.options.displayFormat=this.options.numberMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"euro":this.options.displayFormat=this.options.euroMask,this.options.delimiter||(this.options.delimiter="."),this.options.decimalDelimiter||(this.options.decimalDelimiter=",");break;case"rupee":this.options.displayFormat=this.options.rupeeMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"tenge":this.options.displayFormat=this.options.tengeMask,this.options.delimiter||(this.options.delimiter=" "),this.options.decimalDelimiter||(this.options.decimalDelimiter="-")}this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,this.options.delimiter,this.options.decimalDelimiter,this.scope_id,this.id),this.useEscapeFormatter=!1,this.tooltipPositionParse=!1},h.prototype.toHTML=function(){s.I._scopeOption(this,"for");var t=s.I.getEmptyTag(),i="",e="";if(""!=this.options.for&&(e=" for='"+this.options["_for".slice(1)]+"'"),t[this.options.tagname.toLowerCase()])(i=this.htmlClosingStr)[1]=this.options.tagname,i[3]=this.id,i[5]=""==this.options.style?"":" style='"+this.options.style+"'",i[5]+=this.options.tabIndex?" tabIndex='"+this.options.tabIndex+"'":"",i[7]=this.options.className,i[9]=("label"==this.options.tagname?e:"")+this.getAttributesString();else{(i=this.htmlStr)[1]=this.options.tagname,i[3]=this.id,i[5]=""==this.options.style?"":"style='"+this.options.style+"'",i[5]+=this.options.tabIndex?" tabIndex='"+this.options.tabIndex+"'":"",i[7]=this.options.className,i[9]=("label"==this.options.tagname?e:"")+this.getAttributesString();var o="";o=1==this.options.useLocale&&""!=this.options.localeRef?this.getLocaleValue(this.options.localeRef):this.options.escapeFormatter?this.setEscapeFormatter():this.options.escape?this.formatter.format(WebSquare.xml._encode(this.options.label)):this.formatter.format(this.options.label),i[11]=o,i[13]=this.options.tagname}
return i.join("")},h.prototype.setEscapeFormatter=function(){try{if(this.options.escapeFormatter){try{if("function"==typeof this.options.escapeFormatter)this.useEscapeFormatter=!0;else{var t=a.Z.getGlobalFunction(this.options.escapeFormatter,this.scope_id);this.options.escapeFormatter=t,"function"==typeof t&&(this.useEscapeFormatter=!0)}}catch(t){l.v.printLog("cannot find function : "+this.options.escapeFormatter+"["+this.id+"]")}var i=this.options.label;return this.useEscapeFormatter&&(i=this.options.escapeFormatter.call(this,i)),this.options.escape?this.formatter.format(WebSquare.xml._encode(i+"")):this.formatter.format(i)}}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.onComplete=function(){this.options.escapeFormatter&&!this.useEscapeFormatter&&(this.render.innerHTML=this.setEscapeFormatter()),p.q.prototype.onComplete.call(this)},h.prototype.setAction=function(){try{if(this.options.initStyle){var t=document.getElementById(this.id).style.cssText,i=document.getElementById(this.id).getAttribute("class");WebSquare.initStyle[this.id]={style:t,className:i}}if(this.refresh(),this.options.tooltipDisplay&&(this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent))),"label"!=this.options.tagname||""==this.options.for)return;s.I._scopeOptionApply(this,"for")}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.setLocaleRef=function(t){try{this.options.localeRef=t,this.displayLocaleValue()}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.options.label=t,this.useEscapeFormatter&&(t=this.options.escapeFormatter.call(this,t)),this.render.innerHTML=this.options.escape?this.formatter.format(WebSquare.xml._encode(t+"")):this.formatter.format(t),this.options.label=t}}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.setLabel=function(t){try{this.setValue(t)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.getLabel=function(){try{return this.getValue()}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.setValue=function(t){try{this.options.label=t;var i=this.options.label;this.useEscapeFormatter&&(i=this.options.escapeFormatter.call(this,i)),this.render.innerHTML=this.options.escape?this.formatter.format(WebSquare.xml._encode(i+"")):this.formatter.format(i),this.modelControl.setData(t)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.getValue=function(){try{return this.options.escape?WebSquare.xml._decode(this.options.label+""):this.options.label}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.getFormatValue=function(){try{return this.options.escape?this.formatter.format(WebSquare.xml._decode(this.options.label+"")):this.formatter.format(this.options.label)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.setDisplayFormat=function(t){try{this.options.displayFormat=t,this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,null,null,this.scope_id,this.id),this.setValue(this.options.label)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.setDisplayFormatter=function(t){try{this.options.displayFormatter=t,this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,null,null,this.scope_id,this.id),this.setValue(this.options.label)}catch(t){n.Y.printStackTrace(t)}},h.prototype.getDataType=function(){try{return this.options.dataType}catch(t){n.Y.printStackTrace(t)}},h.prototype.addClass=function(){try{p.q.prototype.addClass.apply(this,arguments)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.removeClass=function(){try{p.q.prototype.removeClass.apply(this,arguments)}catch(t){n.Y.printStackTrace(t,null,this)}},
h.prototype.changeClass=function(){try{p.q.prototype.changeClass.apply(this,arguments)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.toggleClass=function(){try{p.q.prototype.toggleClass.apply(this,arguments)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.getAttributeNode=function(t){try{return p.q.attributes.getAttributeNode.call(this,t)}catch(t){n.Y.printStackTrace(t)}},h.prototype.setAttributeNode=function(t,i){try{p.q.attributes.setAttributeNode.call(this,t,i)}catch(t){n.Y.printStackTrace(t)}},h.prototype.removeAttributeNode=function(t){try{p.q.attributes.removeAttributeNode.call(this,t)}catch(t){n.Y.printStackTrace(t)}},h.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){n.Y.printStackTrace(t)}},h.prototype.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){n.Y.printStackTrace(t)}},h.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){n.Y.printStackTrace(t)}},h.prototype.showTooltip=function(t,i,e){try{null!=this.timeShowTooltip&&(clearTimeout(this.timeShowTooltip),this.timeShowTooltip=null),null!=this.timeHideTooltip&&(clearTimeout(this.timeHideTooltip),this.timeHideTooltip=null);var o=this;this.timeShowTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){try{var r=s.I.getConfiguration("/WebSquare/tooltipShowHideHandler/@value");if(r){var l=a.Z.getGlobalFunction(r,o.scope_id),p=!0;if("function"==typeof l&&(p=l(o)),!p)return}}catch(t){n.Y.printStackTrace(t)}this.tooltip||(this.tooltip=new WebSquare.uiplugin.group(this.id+"_tooltip",{className:"w2textbox_tooltip "+this.options.tooltipClass,style:"position:absolute;z-index:10000;"+this.options.tooltipStyle}),this.tooltip.writeTo(WebSquare.getBody(),null,this.parentFrame),this.tooltip.activate(),this.tooltip.removeClass("w2group")),this.tooltip.setStyle("display","block"),this.tooltip.setStyle("left",t+"px"),this.tooltip.setStyle("top",i+"px"),e=this.options.escape?WebSquare.xml._encode(e):e.wq_replaceAll("&amp;nbsp;","&nbsp;").wq_replaceAll("&amp;nbsp","&nbsp;"),this.tooltip.render.innerHTML=e})),100*this.options.tooltipTime)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.hideTooltip=function(){try{this.timeHideTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){this.tooltip&&this.tooltip.setStyle("display","none")})),1e3*this.options.tooltipTime)}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.serialize=function(){return{value:this.getValue()}},h.prototype.restore=function(t){try{this.setValue(t.value)}catch(t){return n.Y.printStackTrace(t,null,this),!1}return!0},h.prototype.handleMouseoverEvent=function(t){try{var i=r.f.getTarget(t);if(i){var e=i,o=WebSquare.style.getStyle(i,"text-overflow"),s=i.offsetWidth,p=i.offsetHeight,h=20,c=p+3;try{this.options.tooltipPositionX&&(h=this.options.tooltipPositionX.indexOf("cellWidth")>-1||this.options.tooltipPositionX.indexOf("cellHeight")>-1?new Function("cellWidth","cellHeight","return "+this.options.tooltipPositionX)(s,p):new Function("width","height","return "+this.options.tooltipPositionX)(s,p)),this.options.tooltipPositionY&&(c=this.options.tooltipPositionY.indexOf("cellWidth")>-1||this.options.tooltipPositionY.indexOf("cellHeight")>-1?new Function("cellWidth","cellHeight","return "+this.options.tooltipPositionY)(s,p):new Function("width","height","return "+this.options.tooltipPositionY)(s,p))}catch(t){l.v.printLog("An error occurred while applying the tooltipPosistion option. Ignore the options and apply the default value. ["+this.id+"]"),n.Y.printStackTrace(t,null,this)}var u=WebSquare.style.getAbsoluteLeft(i)+h,m=WebSquare.style.getAbsoluteTop(i)+c,d=e.innerText.wq_trim();if(this.options.tooltipFormatter)try{
var y=a.Z.getGlobalFunction(this.options.tooltipFormatter,this.scope_id);"function"==typeof y&&(d=y(this.id,d))}catch(t){n.Y.printStackTrace(t,null,this)}if(this.options.tooltipItemLabel&&(d=this.options.tooltipItemLabel),!0===this.options.tooltipShowAlways)this.showTooltip(u,m,d);else if("ellipsis"==o){this.toolTipRuler||(this.toolTipRuler=document.createElement("span"),this.toolTipRuler.style.position="absolute",this.toolTipRuler.style.visibility="hidden",this.toolTipRuler.style.left="0px",this.toolTipRuler.style.top="0px"),document.body.appendChild(this.toolTipRuler),this.toolTipRuler.className=e.className,this.toolTipRuler.innerHTML=e.innerHTML,this.toolTipRuler.style.fontSize=WebSquare.style.getStyle(e,"font-size"),this.toolTipRuler.style.fontFamily=WebSquare.style.getStyle(e,"font-family"),this.toolTipRuler.style.fontWeight=WebSquare.style.getStyle(e,"font-weight");var f=this.toolTipRuler.offsetWidth,b=i.clientWidth;if(3!=e.nodeType){var T=WebSquare.style.getStyle(this.toolTipRuler,"padding-left"),g=WebSquare.style.getStyle(this.toolTipRuler,"padding-right");f-=parseInt(T||"0",10),f-=parseInt(g||"0",10),b-=parseInt(WebSquare.style.getStyle(i,"padding-left"),10),b-=parseInt(WebSquare.style.getStyle(i,"padding-right"),10)}document.body.removeChild(this.toolTipRuler),b<f&&this.showTooltip(u,m,d)}}}catch(t){n.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseoutEvent=function(t){try{r.f.stopEvent(t),this.hideTooltip()}catch(t){n.Y.printStackTrace(t,null,this)}}}}]);
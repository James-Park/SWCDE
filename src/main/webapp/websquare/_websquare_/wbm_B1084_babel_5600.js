"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5600],{5600:function(t,i,e){e.r(i),e.d(i,{span:function(){return l}});var o=e(5461),s=e(5375),a=e(8971),r=e(1204),n=e(2256),p=e(2406),l=function(t,i,e){p.q.call(this,t,i,e),this.options.tagname="span"};o.q.extend(l.prototype,p.q.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.span",pluginName:"span",parseAttributes:!0,userEvents:["ontooltipshow","ontooltiphide"],systemEvents:["onclick","ondblclick","onmouseover","onmouseout"],useConfig:!0,label:"",escape:!0,escapeFormatter:"",tagname:"span",localeRef:"",useLocale:!1,ioFormat:"",displayFormat:"",displayFormatter:null,dataType:"text",dateMask:"",timeMask:"",numberMask:"",euroMask:"",rupeeMask:"",tengeMask:"",delimeter:"",decimalDelimeter:"",delimiter:"",decimalDelimiter:""},l.prototype.htmlStr=["<",""," id='","","' ",""," class='w2span ","","' ","",">","","</","",">"],l.prototype.htmlClosingStr=["<",""," id='","","' ",""," class='w2span ","","'",""," />"],l.prototype.initialize=function(t){if(this.options.delimiter=this.options.delimiter?this.options.delimiter:this.options.delimeter,this.options.decimalDelimiter=this.options.decimalDelimiter?this.options.decimalDelimiter:this.options.decimalDelimeter,this.options.delimeter=this.options.delimiter,this.options.decimalDelimeter=this.options.decimalDelimiter,""==this.options.displayFormat)switch(this.options.dataType){case"date":this.options.displayFormat=this.options.dateMask;break;case"time":this.options.displayFormat=this.options.timeMask;break;case"number":this.options.displayFormat=this.options.numberMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"euro":this.options.displayFormat=this.options.euroMask,this.options.delimiter||(this.options.delimiter="."),this.options.decimalDelimiter||(this.options.decimalDelimiter=",");break;case"rupee":this.options.displayFormat=this.options.rupeeMask,this.options.delimiter||(this.options.delimiter=","),this.options.decimalDelimiter||(this.options.decimalDelimiter=".");break;case"tenge":this.options.displayFormat=this.options.tengeMask,this.options.delimiter||(this.options.delimiter=" "),this.options.decimalDelimiter||(this.options.decimalDelimiter=",")}t&&t.getAttribute("escape");this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,this.options.delimiter,this.options.decimalDelimiter,this.scope_id,this.id),this.useEscapeFormatter=!1},l.prototype.toHTML=function(){if(null!=this.scope_obj&&this.scope_obj.id&&this.options.for){var t=r.Z.getComponentById(this.options.for,this.scope_obj.id);null!=t&&(this.options.for=t.id)}var i="";if(s.I.getEmptyTag()[this.options.tagname.toLowerCase()])(i=this.htmlClosingStr)[1]=this.options.tagname,i[3]=this.id,i[5]=""==this.options.style?"":" style='"+this.options.style+"'",i[5]+=""==this.options.tabIndex?"":" tabIndex='"+this.options.tabIndex+"'",i[7]=this.options.className,i[9]=("label"==this.options.tagname?" for='"+this.options.for+"'":"")+this.getAttributesString();else{(i=this.htmlStr)[1]=this.options.tagname,i[3]=this.id,i[5]=""==this.options.style?"":"style='"+this.options.style+"'",i[5]+=""==this.options.tabIndex?"":" tabIndex='"+this.options.tabIndex+"'",i[7]=this.options.className,i[9]=("label"==this.options.tagname?" for='"+this.options.for+"'":"")+this.getAttributesString();var e="";e=this.options.escapeFormatter?this.setEscapeFormatter():this.options.escape?this.formatter.format(WebSquare.xml._encode(this.options.label+"")):this.formatter.format(this.options.label),i[11]=e,i[13]=this.options.tagname}return i.join("")},l.prototype.setEscapeFormatter=function(){try{if(this.options.escapeFormatter){try{if("function"==typeof this.options.escapeFormatter)this.useEscapeFormatter=!0;else{var t=r.Z.getGlobalFunction(this.options.escapeFormatter,this.scope_id)
;"function"==typeof t&&(this.options.escapeFormatter=t,this.useEscapeFormatter=!0)}}catch(t){n.v.printLog("cannot find function : "+this.options.escapeFormatter+"["+this.id+"]")}var i=this.options.label;return this.useEscapeFormatter&&(i=this.options.escapeFormatter.call(this,i)),this.options.escape?this.formatter.format(WebSquare.xml._encode(i+"")):this.formatter.format(i)}}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.onComplete=function(){this.options.escapeFormatter&&!this.useEscapeFormatter&&(this.render.innerHTML=this.setEscapeFormatter()),p.q.prototype.onComplete.call(this)},l.prototype.setAction=function(){try{if(this.refresh(),this.displayLocaleValue(),"label"!=this.options.tagname||""==this.options.for)return;var t=r.Z.getComponentById(this.options.for)||null;if(null==t)return;var i="function"==typeof t.getAccessibiltyId?t.getAccessibiltyId():this.options.for;this.render.setAttribute("for",i)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.setLocaleRef=function(t){try{this.options.localeRef=t,this.displayLocaleValue()}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.options.label=t,this.useEscapeFormatter&&(t=this.options.escapeFormatter.call(this,t)),this.render.innerHTML=this.options.escape?this.formatter.format(WebSquare.xml._encode(t+"")):this.formatter.format(t),this.options.label=t}}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.setLabel=function(t){try{this.setValue(t)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.getLabel=function(){try{return this.getValue()}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.setValue=function(t){try{this.options.label=t;var i=this.options.label;this.useEscapeFormatter&&(i=this.options.escapeFormatter.call(this,i)),this.render.innerHTML=this.options.escape?this.formatter.format(WebSquare.xml._encode(i+"")):this.formatter.format(i),this.modelControl.setData(t)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.getValue=function(){try{return this.options.escape?WebSquare.xml._decode(this.options.label+""):this.options.label}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.getFormatValue=function(){try{return this.options.escape?this.formatter.format(WebSquare.xml._decode(this.options.label+"")):this.formatter.format(this.options.label)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.setDisplayFormat=function(t){try{this.options.displayFormat=t,this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,null,null,this.scope_id,this.id),this.setValue(this.options.label)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.setDisplayFormatter=function(t){try{this.options.displayFormatter=t,this.formatter=WebSquare.format.createFormatter(this.options.dataType,this.options.displayFormat,this.options.displayFormatter,this.options.ioFormat,null,null,this.scope_id,this.id),this.setValue(this.options.label)}catch(t){a.Y.printStackTrace(t)}},l.prototype.getDataType=function(){try{return this.options.dataType}catch(t){a.Y.printStackTrace(t)}},l.prototype.addClass=function(){try{p.q.prototype.addClass.apply(this,arguments)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.removeClass=function(){try{p.q.prototype.removeClass.apply(this,arguments)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.changeClass=function(){try{p.q.prototype.changeClass.apply(this,arguments)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.toggleClass=function(){try{p.q.prototype.toggleClass.apply(this,arguments)}catch(t){a.Y.printStackTrace(t,null,this)}},l.prototype.getAttributeNode=function(t){try{return p.q.attributes.getAttributeNode.call(this,t)}catch(t){a.Y.printStackTrace(t)}},l.prototype.setAttributeNode=function(t,i){try{p.q.attributes.setAttributeNode.call(this,t,i)}catch(t){a.Y.printStackTrace(t)}},
l.prototype.removeAttributeNode=function(t){try{p.q.attributes.removeAttributeNode.call(this,t)}catch(t){a.Y.printStackTrace(t)}},l.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){a.Y.printStackTrace(t)}},l.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){a.Y.printStackTrace(t)}},l.prototype.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){a.Y.printStackTrace(t)}}}}]);
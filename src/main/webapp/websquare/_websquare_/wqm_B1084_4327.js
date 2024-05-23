"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[4327],{4327:(e,t,i)=>{i.r(t),i.d(t,{generator:()=>h});var r=i(1570),n=i(8548),a=i(866),s=i(6323),o=i(3885),h=function(e,t,i){o.q.call(this,e,t,i)};h.prototype.initAsync=async function(){await this._parse()},r.q.extend(h.prototype,o.q.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.generator",pluginName:"generator",tagname:"div"},h.prototype.initialize=function(e){this.idCounter=0,this.dynamicCreateHash=s.Z.isIE()&&parseInt(n.I.browserVersion(),10)<10?{tbody:!0,thead:!0,tfoot:!0,tr:!0}:{},this.passHash={script:!0,label:!0,value:!0,choices:!0,item:!0,itemset:!0,attributes:!0},e&&1==e.nodeType&&!this.id&&(this.id=e.getAttribute("id")),this.tagName=this.options.tagname,this.itemCnt=0,this.insertItemCnt=0,this.generatedIndexSet=[],this.generatedElementSet=[]},h.prototype.toHTML=function(){try{var e=[],t=WebSquare.Parser.parseAttribute(this.element);for(var i in e.push("<"+this.options.tagname),t)if("id"==i){var r=this.id?" id='"+this.id+"'":" id='"+t[i]+"'";e.push(r)}else if("tagname"!=i){"className"==i&&(t[i="class"]=t.className,delete t.className);r=t[i]?" "+i+"='"+t[i]+"'":"";e.push(r)}return e.push(">"),e.push("</"+this.options.tagname+">"),e.join("")}catch(e){a.Y.printStackTrace(e,null,this)}},h.prototype.setAction=function(){},h.prototype.setChildElement=function(e,t){try{if(1==e.nodeType){var i=e.getLocalName();if(!this.passHash[i]){var r="",n=s.Z.getDataPrefix("g_index"),o=s.Z.getDataPrefix("original_id");r=this.scope_obj&&null!=this.org_id?this.org_id+"_"+t+"_":this.id+"_"+t+"_";var h=e.getAttribute("id")||"",l=e.getAttribute("label"),c=e.getTagName();if(e._element.A||(e._element.A={}),e.setAttribute(n,t),"w2:tag"==c&&""==h&&(h="w2generator_"+this.idCounter++),h&&(e.setAttribute(o,h),"w2:listColumn"!=c&&e.setAttribute("id",r+h)),l&&"w2:textbox"!==c&&"w2:span"!==c&&(e.setAttribute("org_label",l),e.setAttribute("label",WebSquare.xml.encode(l))),"w2:generator"!=c)for(var d=e.getChildNodes(),p=0;p<d.length;p++)this.setChildElement(d[p],t)}}}catch(e){a.Y.printStackTrace(e)}},h.prototype.restoreChildElement=function(e){try{if(1==e.nodeType){var t=e.getLocalName();if(!this.passHash[t]){var i=s.Z.getDataPrefix("g_index"),r=s.Z.getDataPrefix("original_id"),n=s.Z.getDataPrefix("original_ref"),o=s.Z.getDataPrefix("original_nodeset"),h=s.Z.getDataPrefix("nodeset"),l=e.getAttribute(r),c=e.getAttribute(n),d=e.getAttribute("org_label");if(e.removeAttribute(i),l&&(e.setAttribute("id",l),e.removeAttribute(r)),c&&(e.setAttribute("ref",c),e.removeAttribute(n)),d&&(e.setAttribute("label",d),e.removeAttribute("original_label")),"w2:generator"==e.getTagName()){var p=e.getAttribute(o);p&&(e.setAttribute(h,p),e.removeAttribute(o))}else for(var u=e.getChildNodes(),m=0;m<u.length;m++)this.restoreChildElement(u[m])}}}catch(e){a.Y.printStackTrace(e)}},h.prototype.getLength=function(){return this.generatedIndexSet.length},h.prototype.getChild=function(e,t){var i=this.generatedIndexSet[e],r=this.id+"_"+i+"_"+t;return s.Z.getComponentById(r)||document.getElementById(r)},h.prototype.insertChild=function(e){return this.insert(e)},h.prototype.insertChildAsync=async function(e){return this.insert(e,{async:!0})},h.prototype.insert=function(e,t){try{if("number"==typeof e&&null!=this.generatedElementSet[e]){for(var i=0,r=0;r<e;r++)i+=this.generatedElementSet[r].length;this.targetNode=this.render.childNodes[i]}var s=[],o=[],h=[],l=this.dynamicCreateHash[this.options.tagname],c=this.element.cloneNode(!0),d=0,p=c.getChildNodes();for(r=0;r<p.length;r++){var u=p[r];this.setChildElement(u,this.insertItemCnt);var m=null;1===u.nodeType?(m=this._compHash[d]._cloneRecursive(u),d++):(3!==u.nodeType||l)&&(m=WebSquare.controlFactory.createByJSON(null,null,u._element,this.scope_obj,this.parentFrame)),m&&(this.addControl(m),l?this.dynamicAppend(this.render,m,e):3==u.nodeType?o.push(u.nodeValue):(o.push(m.toHTML()),h.push(m))),l&&this.restoreChildElement(u),m&&s.push(m)}
var g=WebSquare.controlFactory.initAsync(),y=WebSquare.controlFactory._asyncList.length>0||WebSquare.controlFactory._awaitObj.key.length>0;if(!l){var f=o.join(""),b=document.createElement(this.options.tagname);for(b.innerHTML=f;b.childNodes.length>0;)this.targetNode?this.targetNode=this.render.insertBefore(b.childNodes[b.childNodes.length-1],this.targetNode):this.render.appendChild(b.childNodes[0]);if(y){for(var v=this.uuid,C=[],_=0;_<h.length;_++)C.push(h[_].uuid);g=g.then((function(e,t){n.I.executePointScript(4);for(var i=WebSquare.idCache[v],r=[],a=0;a<C.length;a++)r.push(WebSquare.idCache[C[a]]);i._insertAfter(r)}))}else this._insertAfter(h)}var S=this.itemCnt;"number"==typeof e?(this.generatedIndexSet.splice(e,0,this.insertItemCnt),this.generatedElementSet.splice(e,0,s),S=e):(this.generatedIndexSet.push(this.insertItemCnt),this.generatedElementSet.push(s)),this.targetNode=null,this.itemCnt++,this.insertItemCnt++;var A=S;return t&&!0===t.async&&(A=g=g.then((function(e,t){return S}))),A}catch(e){a.Y.printStackTrace(e,null,this)}},h.prototype._insertAfter=function(e){try{for(;e.length>0;){var t=e.shift();t.activate(),t.onComplete()}}catch(e){a.Y.printStackTrace(e,null,this)}},h.prototype.dynamicAppend=function(e,t,i){try{var r=t.toHTML(),n=r.match(/(<)([^ >\/]*)/),s=n&&n[2]?n[2]:null;if(s){var h=document.createElement(s),l=WebSquare.xml.parse(r),c=WebSquare.WebSquareparser.parseAttribute(l.documentElement);try{for(var d in c)"style"==d?h.style.cssText=c[d]:"className"==d?h.className=c[d]:h.setAttribute(d,c[d])}catch(e){a.Y.printStackTrace(e,null,this)}if("number"==typeof i&&this.targetNode?(e.insertBefore(h,this.targetNode),t.activate(),t.onComplete()):(e.appendChild(h),t.activate(),t.onComplete()),0==t.childControlList.length)for(var p=0;p<l.documentElement.childNodes.length;p++){var u=l.documentElement.childNodes[p];(m=WebSquare.controlFactory.create(null,null,u))&&t.addControl(m)}for(p=0;p<t.childControlList.length;p++){var m;3==(m=t.childControlList[p]).element.nodeType?h.appendChild(document.createTextNode(m.element.data)):this.dynamicCreateHash[s]?this.dynamicAppend(h,m):(o.q.prototype.writeTo.call(m,h),m.activate(),m.onComplete())}}}catch(e){a.Y.printStackTrace(e,null,this)}},h.prototype._clone=function(e){try{var t=o.q.prototype._clone.call(this,e);return t._compHash=this._compHash.slice(0),t}catch(e){a.Y.printStackTrace(e,null,this)}},h.prototype.removeChild=function(e){return null==e&&(e=this.generatedElementSet.length-1),this.remove(e)},h.prototype.remove=function(e){if(null!=e){if("number"==typeof e&&this.generatedElementSet[e]){for(var t=0;t<this.generatedElementSet[e].length;t++){var i=this.generatedElementSet[e][t];i.remove&&i.remove()}var r=this.generatedIndexSet.splice(e,1);return this.generatedElementSet.splice(e,1),this.itemCnt--,r}}else o.q.prototype.remove.call(this)},h.prototype.removeAll=function(){for(var e=this.childControlList.length-1;e>=0;e--)this.childControlList[e].remove&&this.childControlList[e].remove();WebSquare.removeChildren(this.render),this.generatedIndexSet=[],this.generatedElementSet=[],this.itemCnt=0,this.insertItemCnt=0},h.prototype.getIndexArray=function(){return this.generatedIndexSet.slice(0)},h.prototype.setStyle=function(e,t){try{if(!this.render)return;if(WebSquare.style.setStyle(this.render,e,t),"width"==e||"height"==e)for(var i=this.getChildren(),r=this.getChildrenCount(),n=0;n<r;n++)i[n].render.style[e]=t}catch(e){a.Y.printStackTrace(e)}},h.prototype.finalize=function(){try{if(o.q.prototype.finalize.call(this),this._compHash)for(var e=0;e<this._compHash.length;e++)this._compHash[e].remove();this.removeAll()}catch(e){a.Y.printStackTrace(e)}},h.prototype._parse=async function(){try{this._compHash=[];for(var e=this.dynamicCreateHash[this.options.tagname],t=this.element.cloneNode(!0).getChildNodes(),i=0;i<t.length;i++){var r=t[i];this.setChildElement(r,"_base_");var n=null
;if((3!==r.nodeType||e)&&(n=WebSquare.controlFactory.createByJSON(null,null,r._element,this.scope_obj,this.parentFrame)),n)if(!0===n._wqAsync){var s=this.uuid,o=this._compHash.length;n.then((function(e,t){var i=WebSquare.idCache[s];e.scope_obj=i.scope_obj,i._compHash.splice(o,0,e)}))}else n.scope_obj=this.scope_obj,this._compHash.push(n)}}catch(e){a.Y.printStackTrace(e,null,this)}}}}]);
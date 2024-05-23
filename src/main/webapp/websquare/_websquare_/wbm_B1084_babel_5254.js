"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5254],{5254:function(e,t,r){r.r(t),r.d(t,{generator:function(){return p}});var i=r(467),n=r(4756),s=r.n(n),a=r(5461),o=r(5375),h=r(8971),l=r(1204),c=r(2406),p=function(e,t,r){c.q.call(this,e,t,r)};p.prototype.initAsync=(0,i.A)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._parse();case 2:case"end":return e.stop()}}),e,this)}))),a.q.extend(p.prototype,c.q.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.generator",pluginName:"generator",tagname:"div"},p.prototype.initialize=function(e){this.idCounter=0,this.dynamicCreateHash=l.Z.isIE()&&parseInt(o.I.browserVersion(),10)<10?{tbody:!0,thead:!0,tfoot:!0,tr:!0}:{},this.passHash={script:!0,label:!0,value:!0,choices:!0,item:!0,itemset:!0,attributes:!0},e&&1==e.nodeType&&!this.id&&(this.id=e.getAttribute("id")),this.tagName=this.options.tagname,this.itemCnt=0,this.insertItemCnt=0,this.generatedIndexSet=[],this.generatedElementSet=[]},p.prototype.toHTML=function(){try{var e=[],t=WebSquare.Parser.parseAttribute(this.element);for(var r in e.push("<"+this.options.tagname),t)if("id"==r){var i=this.id?" id='"+this.id+"'":" id='"+t[r]+"'";e.push(i)}else if("tagname"!=r){"className"==r&&(t[r="class"]=t.className,delete t.className);i=t[r]?" "+r+"='"+t[r]+"'":"";e.push(i)}return e.push(">"),e.push("</"+this.options.tagname+">"),e.join("")}catch(e){h.Y.printStackTrace(e,null,this)}},p.prototype.setAction=function(){},p.prototype.setChildElement=function(e,t){try{if(1==e.nodeType){var r=e.getLocalName();if(!this.passHash[r]){var i="",n=l.Z.getDataPrefix("g_index"),s=l.Z.getDataPrefix("original_id");i=this.scope_obj&&null!=this.org_id?this.org_id+"_"+t+"_":this.id+"_"+t+"_";var a=e.getAttribute("id")||"",o=e.getAttribute("label"),c=e.getTagName();if(e._element.A||(e._element.A={}),e.setAttribute(n,t),"w2:tag"==c&&""==a&&(a="w2generator_"+this.idCounter++),a&&(e.setAttribute(s,a),"w2:listColumn"!=c&&e.setAttribute("id",i+a)),o&&"w2:textbox"!==c&&"w2:span"!==c&&(e.setAttribute("org_label",o),e.setAttribute("label",WebSquare.xml.encode(o))),"w2:generator"!=c)for(var p=e.getChildNodes(),d=0;d<p.length;d++)this.setChildElement(p[d],t)}}}catch(e){h.Y.printStackTrace(e)}},p.prototype.restoreChildElement=function(e){try{if(1==e.nodeType){var t=e.getLocalName();if(!this.passHash[t]){var r=l.Z.getDataPrefix("g_index"),i=l.Z.getDataPrefix("original_id"),n=l.Z.getDataPrefix("original_ref"),s=l.Z.getDataPrefix("original_nodeset"),a=l.Z.getDataPrefix("nodeset"),o=e.getAttribute(i),c=e.getAttribute(n),p=e.getAttribute("org_label");if(e.removeAttribute(r),o&&(e.setAttribute("id",o),e.removeAttribute(i)),c&&(e.setAttribute("ref",c),e.removeAttribute(n)),p&&(e.setAttribute("label",p),e.removeAttribute("original_label")),"w2:generator"==e.getTagName()){var d=e.getAttribute(s);d&&(e.setAttribute(a,d),e.removeAttribute(s))}else for(var u=e.getChildNodes(),m=0;m<u.length;m++)this.restoreChildElement(u[m])}}}catch(e){h.Y.printStackTrace(e)}},p.prototype.getLength=function(){return this.generatedIndexSet.length},p.prototype.getChild=function(e,t){var r=this.generatedIndexSet[e],i=this.id+"_"+r+"_"+t;return l.Z.getComponentById(i)||document.getElementById(i)},p.prototype.insertChild=function(e){return this.insert(e)},p.prototype.insertChildAsync=function(){var e=(0,i.A)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.insert(t,{async:!0}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),p.prototype.insert=function(e,t){try{if("number"==typeof e&&null!=this.generatedElementSet[e]){for(var r=0,i=0;i<e;i++)r+=this.generatedElementSet[i].length;this.targetNode=this.render.childNodes[r]}var n=[],s=[],a=[],l=this.dynamicCreateHash[this.options.tagname],c=this.element.cloneNode(!0),p=0,d=c.getChildNodes();for(i=0;i<d.length;i++){var u=d[i]
;this.setChildElement(u,this.insertItemCnt);var m=null;1===u.nodeType?(m=this._compHash[p]._cloneRecursive(u),p++):(3!==u.nodeType||l)&&(m=WebSquare.controlFactory.createByJSON(null,null,u._element,this.scope_obj,this.parentFrame)),m&&(this.addControl(m),l?this.dynamicAppend(this.render,m,e):3==u.nodeType?s.push(u.nodeValue):(s.push(m.toHTML()),a.push(m))),l&&this.restoreChildElement(u),m&&n.push(m)}var g=WebSquare.controlFactory.initAsync(),f=WebSquare.controlFactory._asyncList.length>0||WebSquare.controlFactory._awaitObj.key.length>0;if(!l){var y=s.join(""),b=document.createElement(this.options.tagname);for(b.innerHTML=y;b.childNodes.length>0;)this.targetNode?this.targetNode=this.render.insertBefore(b.childNodes[b.childNodes.length-1],this.targetNode):this.render.appendChild(b.childNodes[0]);if(f){for(var v=this.uuid,C=[],_=0;_<a.length;_++)C.push(a[_].uuid);g=g.then((function(e,t){o.I.executePointScript(4);for(var r=WebSquare.idCache[v],i=[],n=0;n<C.length;n++)i.push(WebSquare.idCache[C[n]]);r._insertAfter(i)}))}else this._insertAfter(a)}var S=this.itemCnt;"number"==typeof e?(this.generatedIndexSet.splice(e,0,this.insertItemCnt),this.generatedElementSet.splice(e,0,n),S=e):(this.generatedIndexSet.push(this.insertItemCnt),this.generatedElementSet.push(n)),this.targetNode=null,this.itemCnt++,this.insertItemCnt++;var A=S;return t&&!0===t.async&&(A=g=g.then((function(e,t){return S}))),A}catch(e){h.Y.printStackTrace(e,null,this)}},p.prototype._insertAfter=function(e){try{for(;e.length>0;){var t=e.shift();t.activate(),t.onComplete()}}catch(e){h.Y.printStackTrace(e,null,this)}},p.prototype.dynamicAppend=function(e,t,r){try{var i=t.toHTML(),n=i.match(/(<)([^ >\/]*)/),s=n&&n[2]?n[2]:null;if(s){var a=document.createElement(s),o=WebSquare.xml.parse(i),l=WebSquare.WebSquareparser.parseAttribute(o.documentElement);try{for(var p in l)"style"==p?a.style.cssText=l[p]:"className"==p?a.className=l[p]:a.setAttribute(p,l[p])}catch(e){h.Y.printStackTrace(e,null,this)}if("number"==typeof r&&this.targetNode?(e.insertBefore(a,this.targetNode),t.activate(),t.onComplete()):(e.appendChild(a),t.activate(),t.onComplete()),0==t.childControlList.length)for(var d=0;d<o.documentElement.childNodes.length;d++){var u=o.documentElement.childNodes[d];(m=WebSquare.controlFactory.create(null,null,u))&&t.addControl(m)}for(d=0;d<t.childControlList.length;d++){var m;3==(m=t.childControlList[d]).element.nodeType?a.appendChild(document.createTextNode(m.element.data)):this.dynamicCreateHash[s]?this.dynamicAppend(a,m):(c.q.prototype.writeTo.call(m,a),m.activate(),m.onComplete())}}}catch(e){h.Y.printStackTrace(e,null,this)}},p.prototype._clone=function(e){try{var t=c.q.prototype._clone.call(this,e);return t._compHash=this._compHash.slice(0),t}catch(e){h.Y.printStackTrace(e,null,this)}},p.prototype.removeChild=function(e){return null==e&&(e=this.generatedElementSet.length-1),this.remove(e)},p.prototype.remove=function(e){if(null!=e){if("number"==typeof e&&this.generatedElementSet[e]){for(var t=0;t<this.generatedElementSet[e].length;t++){var r=this.generatedElementSet[e][t];r.remove&&r.remove()}var i=this.generatedIndexSet.splice(e,1);return this.generatedElementSet.splice(e,1),this.itemCnt--,i}}else c.q.prototype.remove.call(this)},p.prototype.removeAll=function(){for(var e=this.childControlList.length-1;e>=0;e--)this.childControlList[e].remove&&this.childControlList[e].remove();WebSquare.removeChildren(this.render),this.generatedIndexSet=[],this.generatedElementSet=[],this.itemCnt=0,this.insertItemCnt=0},p.prototype.getIndexArray=function(){return this.generatedIndexSet.slice(0)},p.prototype.setStyle=function(e,t){try{if(!this.render)return;if(WebSquare.style.setStyle(this.render,e,t),"width"==e||"height"==e)for(var r=this.getChildren(),i=this.getChildrenCount(),n=0;n<i;n++)r[n].render.style[e]=t}catch(e){h.Y.printStackTrace(e)}},p.prototype.finalize=function(){try{if(c.q.prototype.finalize.call(this),
this._compHash)for(var e=0;e<this._compHash.length;e++)this._compHash[e].remove();this.removeAll()}catch(e){h.Y.printStackTrace(e)}},p.prototype._parse=(0,i.A)(s().mark((function e(){var t,r,i,n,a,o,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{for(this._compHash=[],t=this.dynamicCreateHash[this.options.tagname],r=this.element.cloneNode(!0),i=r.getChildNodes(),n=0;n<i.length;n++)a=i[n],this.setChildElement(a,"_base_"),o=null,(3!==a.nodeType||t)&&(o=WebSquare.controlFactory.createByJSON(null,null,a._element,this.scope_obj,this.parentFrame)),o&&(!0===o._wqAsync?(l=this.uuid,c=this._compHash.length,o.then((function(e,t){var r=WebSquare.idCache[l];e.scope_obj=r.scope_obj,r._compHash.splice(c,0,e)}))):(o.scope_obj=this.scope_obj,this._compHash.push(o)))}catch(e){h.Y.printStackTrace(e,null,this)}case 2:case"end":return e.stop()}}),e,this)})))}}]);
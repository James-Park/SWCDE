"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[839],{4839:(t,e,i)=>{i.r(e),i.d(e,{fwFunnelChart:()=>h});var o=i(1570),s=i(8548),a=i(866),r=i(6323),n=i(4171),l=i(3885),h=function(t,e,i){l.q.call(this,t,e,i)};o.q.extend(h.prototype,l.q.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.fwFunnelChart",pluginName:"fwFunnelChart",useConfig:!0,accessibility:!1,displayData:!1,title:"",seriesType:"advanced",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",version:"3.7"},h.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.plotColorObj=null,!t.getAttribute("version")&&s.I.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=s.I.getConfiguration("/WebSquare/fusionchart/version/@value"))},h.prototype.initAsync=async function(){"undefined"==typeof FusionCharts&&("3.23"===this.options.version||!this.options.version&&"3.23"===s.I.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.23",await inquires("externalJS/FusionCharts3.23/FusionCharts_all.js")):"3.19"===this.options.version||!this.options.version&&"3.19"==s.I.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.19",await inquires("externalJS/FusionCharts3.19/FusionCharts_all.js")):"3.15"===this.options.version||!this.options.version&&"3.15"==s.I.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.15",await inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js")):"3.13"===this.options.version||!this.options.version&&"3.13"==s.I.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.13",await inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js")):"3.11"==this.options.version||!this.options.version&&"3.11"==s.I.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.11",await inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js")):await inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"))},h.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwFunnelChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},h.prototype.setAction=function(){try{if(("3.19"===this.options.version||"3.23"===this.options.version)&&"function"==typeof FusionCharts.options._setActivate){var t,e=WebSquare.core.getConfiguration("/WebSquare/fusionchart/license/@value");e&&(t={key:e,creditLabel:!1}),FusionCharts.options._setActivate(t)}if(this.fcObj=new FusionCharts("funnel","fw_funnel_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var i,o=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase()){if(o.getRowCount()>0)(i=o.getFusionChartSimpleData("funnel",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(i):n.v.printLog(this.id+" : Simple seriesType does not support")}else if(o.getRowCount()>0)(i=o.getFusionChartData("funnel",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(i)}}catch(t){a.Y.printStackTrace(t)}},h.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase())(t=e.getFusionChartSimpleData("funnel",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):n.v.printLog(this.id+" : Simple seriesType does not support");else(t=e.getFusionChartData("funnel",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){a.Y.printStackTrace(t)}},h.prototype.setJSONData=function(t){try{this.chartObj=t;var e=this.options.plotColor.split(",");this.setPlotDefaultColor(e),this.draw()}catch(t){a.Y.printStackTrace(t)}},
h.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){a.Y.printStackTrace(t)}},h.prototype.fc=function(){try{return FusionCharts.items["fw_funnel_"+this.id]}catch(t){a.Y.printStackTrace(t)}},h.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.plotColorObj&&this._setPlotColor(this.plotColorObj),null!=this.attributeObj&&(this.chartObj.chart=this.attributeObj);var t=this.fc();if(t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility){var e=document.getElementById("fw_funnel_"+this.id);e&&e.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){a.Y.printStackTrace(t)}},h.prototype.setDefaultOption=function(){try{var t={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0",caption:this.options.title};for(var e in t)this.attributeObj&&void 0!==this.attributeObj[e]&&(t[e]=this.attributeObj[e]);this.setChartAttribute(t)}catch(t){a.Y.printStackTrace(t)}},h.prototype.setPlotDefaultColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(var o=0;o<e.data.length&&!(o>=t.length);o++)e.data[o].color=t[o]}catch(t){a.Y.printStackTrace(t)}},h.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){a.Y.printStackTrace(t)}},h.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){a.Y.printStackTrace(t)}},h.prototype.setPlotColor=function(t){try{this.plotColorObj=t}catch(t){a.Y.printStackTrace(t)}},h.prototype._setPlotColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(i=0;i<e.data.length&&!(i>=t.length);i++)e.data[i].color=t[i]}catch(t){a.Y.printStackTrace(t)}},h.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_funnel_"+this.id].getChartAttribute(t)}catch(t){a.Y.printStackTrace(t)}},h.prototype.setChartColumnRef=function(t,e,i){try{if(t=r.Z.isNull(t)?this.options.ref:t,e=r.Z.isNull(e)?this.options.labelNode:e,i=r.Z.isNull(i)?this.options.seriesColumns:i,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var o=t.replace("data:","");WebSquare.DataCollection.comp[o].addChild(r.Z.getComponentById(this.id,this.scope_id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesColumns=i,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){a.Y.printStackTrace(t)}},h.prototype.setChartColumnSimpleRef=function(t,e,i,o){try{if(t=r.Z.isNull(t)?this.options.ref:t,e=r.Z.isNull(e)?this.options.labelNode:e,i=r.Z.isNull(i)?this.options.seriesNode:i,o=r.Z.isNull(o)?this.options.valueNode:o,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var s=t.replace("data:","");WebSquare.DataCollection.comp[s].addChild(r.Z.getComponentById(this.id,this.scope_id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesNode=i,this.options.valueNode=o,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){a.Y.printStackTrace(t)}},h.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var r=encodeURI(i+"ExportType="+t+"ExportFileName="+e),n=o.q._resourceURI+"engine/servlet/exportFusionChart.jsp";s.I.download(n,r,"post")}}catch(t){a.Y.printStackTrace(t)}},h.prototype.getSVGString=function(){try{var t=this.fc().getSVGString()
;if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');n.v.printLog("not found svg object")}catch(t){a.Y.printStackTrace(t)}},h.prototype.setAccessibility=function(t){try{var e=document.getElementById("accessibility_"+this.id);if(0==t)return void(e&&e.remove());var i="",o="";if(null==e){var s=document.createElement("table");s.id="accessibility_"+this.id,WebSquare.style.addClass(s,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(s,"w2fusionchart_accessibility"),WebSquare.style.addClass(s,"w2tb"),WebSquare.style.addClass(s,"w2fusionchart_accessibility_table")),this.render.appendChild(s,this.render.lastChild),e=document.getElementById("accessibility_"+this.id)}e.innerHTML="";var r="",n=this.chartObj,l=this.attributeObj.caption;l&&(r="<caption>"+l+"</caption>"),r+="<thead><tr>",n.dataName&&(r+="<th scope='col' class='w2tb_th'>"+n.dataName.labelName+"</th>",r+="<th scope='col' class='w2tb_th'>"+n.dataName.valueName+"</th>"),r+="</tr></thead>",r+="<tbody>";for(var h=0;h<n.data.length;h++)r+="<tr>",n.data[h]?(i=n.data[h].label?n.data[h].label:n.data[h].LABEL,o=n.data[h].value?n.data[h].value:n.data[h].VALUE):(i="",o=""),r+="<td class='w2tb_td'>"+i+"</td>",r+="<td class='w2tb_td'>"+o+"</td>",r+="</tr>";r+="</tbody>",e.innerHTML=r}catch(t){a.Y.printStackTrace(t)}},h.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var e=this.options.ref.replace("data:","");return t.id=e.slice(0),"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){a.Y.printStackTrace(t)}}}}]);
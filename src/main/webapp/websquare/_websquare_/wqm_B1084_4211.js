"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[4211],{4211:(t,e,i)=>{i.r(e),i.d(e,{fusionchart:()=>c});var s=i(1570),a=i(8548),o=i(866),r=i(6323),n=i(4171),l=i(3885),c=function(t,e,i){l.q.call(this,t,e,i)};c.prototype.initAsync=async function(){"undefined"==typeof FusionCharts&&("3.7"==this.options.version?await inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"):"3.11"==this.options.version?await inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js"):"3.13"==this.options.version?await inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js"):"3.15"==this.options.version?await inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js"):"3.19"==this.options.version?(await inquires("externalJS/FusionCharts3.19/FusionCharts_all.js"),this.options.theme&&await inquires("externalJS/FusionCharts3.19/themes/fusioncharts.theme."+this.options.theme+".js")):"3.23"==this.options.version?(await inquires("externalJS/FusionCharts3.23/FusionCharts_all.js"),this.options.theme&&await inquires("externalJS/FusionCharts3.23/themes/fusioncharts.theme."+this.options.theme+".js")):(this.options.version="",await inquires("externalJS/FusionCharts_XT/Charts/FusionCharts_all.js")))},s.q.extend(c.prototype,l.q.prototype),c.prototype.defaultOptions={pluginType:"uiplugin.fusionchart",pluginName:"fusionchart",useConfig:!0,chartType:"",drawType:"mixed",seriesType:"advanced",theme:"",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",accessibility:!1,displayData:!1,title:"",svgStringFormatter:"",version:"",runflashAt:"IE6,IE7,IE8",axisnameInsert:!1,actionURI:"engine/servlet/exportFusionChart.jsp",dataTypeFormatter:""},c.prototype.initialize=function(t){try{this.chartObj={},this.attributeObj=null,this.trendLineArr=[],this.vtrendLineArr=[],this.styleArr=[],this.plotColorObj=null,this.plotLinkObj=null,this.plotColorOption=null,this.drawFlag=!0,this.chartData=null,this._firstPlotColor=this.options.plotColor.split(",")[0]||"2ec6c8"}catch(t){o.Y.printStackTrace(t)}},c.prototype.toHTML=function(){var t=[],e=r.Z.getDataPrefix("type"),i=r.Z.getDataPrefix("drawType"),s=""==this.options.style?"":"style='"+this.options.style+"'",a=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t.push("<div id='"+this.id+"' "+s+" "+e+"='"+this.options.chartType),t.push("' "+i+"='"+this.options.drawType+"' "+a+">"),t.push("</div>"),t.join("")},c.prototype.setAction=function(){try{if(("3.19"===this.options.version||"3.23"===this.options.version)&&"function"==typeof FusionCharts.options._setActivate){var t,e=WebSquare.core.getConfiguration("/WebSquare/fusionchart/license/@value");e&&(t={key:e,creditLabel:!1}),FusionCharts.options._setActivate(t)}if("3.7"==this.options.version||"3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version)new FusionCharts(this.options.chartType,"fc_"+this.id,"100%","100%");else if("flash"==this.options.drawType.toLowerCase())new FusionCharts("externalJS/FusionCharts_XT/Charts/"+this.options.chartType+".swf","fc_"+this.id);else if("javascript"==this.options.drawType.toLowerCase())new FusionCharts(this.options.chartType,"fc_"+this.id);else if("mixed"==this.options.drawType.toLowerCase()){for(var i=this.options.runflashAt.split(","),s=0;s<i.length;s++){var a=i[s];if(-1!=(a=a.toUpperCase()).indexOf("IE")&&(a=a.wq_replaceAll("IE",""),a*=1,r.Z.isIEAllVersion(a))){new FusionCharts("externalJS/FusionCharts_XT/Charts/"+this.options.chartType+".swf","fc_"+this.id);break}}FusionCharts.items["fc_"+this.id]||new FusionCharts(this.options.chartType,"fc_"+this.id)}else new FusionCharts(this.options.chartType,"fc_"+this.id);if(this.modelControl.isDataCollectionRefBinded){var l=this.modelControl.dataCollectionRefInfo.dataComp
;"simple"==this.options.seriesType.toLowerCase()?l.getRowCount()>0&&(this.chartData=l.getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode,this.options.colorNode),this.options.dataList&&this.refreshItemset(),this.chartData?this.setJSONData(this.chartData):n.v.printLog(this.id+" : This chartType does not support Simple seriesType.")):l.getRowCount()>0&&(this.chartData=l.getFusionChartData(this.options.chartType,this.options.labelNode,this.options.seriesColumns,this.options.colorNode),this.setJSONData(this.chartData))}}catch(t){o.Y.printStackTrace(t)}},c.prototype.setLayout=function(){},c.prototype.refreshItemset=function(){try{var t,e=WebSquare.DataCollection.comp[this.options.dataList];if(null==this._dataList&&null!=e){if(this._dataList=e,this._dataList.addChild(this),this.modelControl.isDataCollectionItemsetBinded=!0,this.modelControl.useItemset=!0,this._dataList.getRowCount()>0)(t=e.getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode,this.options.colorNode)).categories?(this.chartData.categories=this.chartData.categories.concat(t.categories),this.chartData.dataset=this.chartData.dataset.concat(t.dataset)):this.chartData.data=this.chartData.data.concat(t.dataset)}else(t=e.getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode,this.options.colorNode)).categories?(this.chartData.categories=this.chartData.categories.concat(t.categories),this.chartData.dataset=this.chartData.dataset.concat(t.dataset)):this.chartData.data=this.chartData.data.concat(t.data)}catch(t){o.Y.printStackTrace(t,null,this)}},c.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t=this.options.ref.replace("data:","");"simple"==this.options.seriesType.toLowerCase()?(this.chartData=r.Z.getComponentById(t,this.scope_id).getFusionChartSimpleData(this.options.chartType,this.options.labelNode,this.options.seriesNode,this.options.valueNode,this.options.colorNode),this.options.dataList&&this.refreshItemset(),this.chartData?this.setJSONData(this.chartData):n.v.printLog(this.id+" : This chartType does not support Simple seriesType.")):this.setJSONData(r.Z.getComponentById(t,this.scope_id).getFusionChartData(this.options.chartType,this.options.labelNode,this.options.seriesColumns))}}catch(t){o.Y.printStackTrace(t)}},c.prototype.fc=function(){try{return FusionCharts.items["fc_"+this.id]}catch(t){o.Y.printStackTrace(t)}},c.prototype.setJSONData=function(t){try{if(this.chartObj=t,"3.19"==this.options.version||"3.23"===this.options.version){var e=this.fc();if(!(e.getJSONData().data&&e.getJSONData().data.length>0||e.getJSONData().dataset&&e.getJSONData().dataset.length>0)&&this.chartData&&(e.dispose(),e.disposed)){var i={type:this.options.chartType,id:"fc_"+this.id,width:"100%",height:"100%",dataFormat:"json"};i.dataSource=this.chartData,e=new FusionCharts(i)}}var s=this.options.plotColor;s=s.split(","),"line"!=this.options.chartType.toLowerCase()&&"area2d"!=this.options.chartType.toLowerCase()&&(this.options.colorNode||this.setPlotDefaultColor(s)),this.setDefaultOption(),this.draw()}catch(t){o.Y.printStackTrace(t)}},c.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.plotColorObj&&this._setPlotColor(this.plotColorObj),null!=this.plotLinkObj&&this._setPlotLink(this.plotLinkObj.linkArr,this.plotLinkObj.linkdata),this.trendLineArr.length>0&&this._addTrendLine(this.trendLineArr),this.vtrendLineArr.length>0&&this._addVTrendLine(this.vtrendLineArr),"3.7"!=this.options.version&&this.options.version||this.styleArr.length>0&&this._applyStyle(this.styleArr);var t,e=this.fc()
;if(this.options.dataTypeFormatter&&("function"==typeof this.options.dataTypeFormatter?t=this.options.dataTypeFormatter:"function"==typeof(t=r.Z.getGlobalFunction(this.options.dataTypeFormatter,this.scope_id))&&(this.options.dataTypeFormatter=t),"function"==typeof t&&(this.chartObj=t.call(this,this.chartObj,this.options.chartType,this.options.id))),e.setJSONData(this.chartObj),("3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version||!e.isActive()&&this.drawFlag)&&(e.render(this.id),this.drawFlag=!1),1==this.options.accessibility){var i=document.getElementById("fc_"+this.id);i&&i.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){o.Y.printStackTrace(t)}},c.prototype.setAccessibility=function(t){try{if(this._singleSeriesAccessibility=function(){var e="",i="",s=document.getElementById("accessibility_"+this.id);if(0!=t){if(null==s){var a=document.createElement("table");a.id="accessibility_"+this.id,WebSquare.style.addClass(a,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(a,"w2fusionchart_accessibility"),WebSquare.style.addClass(a,"w2tb"),WebSquare.style.addClass(a,"w2fusionchart_accessibility_table")),this.render.appendChild(a,this.render.lastChild),s=document.getElementById("accessibility_"+this.id)}s.innerHTML="";var o="",r=this.chartObj,n=this.attributeObj.caption;n&&(o="<caption>"+n+"</caption>"),o+="<thead><tr>",r.dataName&&(o+="<th scope='col' class='w2tb_th'>"+r.dataName.labelName+"</th>",o+="<th scope='col' class='w2tb_th'>"+r.dataName.valueName+"</th>"),o+="</tr></thead>",o+="<tbody>";for(var l=0;l<r.data.length;l++)o+="<tr>",r.data[l]?(e=r.data[l].label?r.data[l].label:r.data[l].LABEL,i=r.data[l].value?r.data[l].value:r.data[l].VALUE):(e="",i=""),o+="<td class='w2tb_td'>"+e+"</td>",o+="<td class='w2tb_td'>"+i+"</td>",o+="</tr>";o+="</tbody>",s.innerHTML=o}else s&&s.remove()},this._multiSeriesAccessibility=function(){var e="",i="",s=document.getElementById("accessibility_"+this.id);if(0!=t){null==s&&((s=document.createElement("table")).id="accessibility_"+this.id,WebSquare.style.addClass(s,"w2fusionchart_accessibility"),this.render.insertBefore(s,this.render.lastChild)),s.innerHTML="";var a=this.chartObj,o=a.chart.axaxisname,r=a.chart.ayaxisname,n=this.attributeObj.caption,l=document.createElement("li");n&&(l.innerHTML="title : "+n,s.appendChild(l));for(var c=0;c<a.dataset.length;c++){var h=document.createElement("li");h.innerHTML=a.dataset[c].seriesname;var d=a.dataset[c].sayaxisname;r=d||a.chart.ayaxisname;for(var p=document.createElement("ul"),u=0;u<a.categories[0].category.length;u++){var m=document.createElement("li");e=a.categories[0].category[u]?a.categories[0].category[u].label?a.categories[0].category[u].label:a.categories[0].category[u].LABEL:"",i=a.dataset[c].data[u]?a.dataset[c].data[u].value?a.dataset[c].data[u].value:a.dataset[c].data[u].VALUE:"",this.options.axisnameInsert&&o&&r?m.innerHTML=o+" : "+e+", "+r+" : "+i:m.innerHTML="label : "+e+", value : "+i,p.appendChild(m)}h.appendChild(p),s.appendChild(h)}}else s&&s.remove()},this._msStackedAccessibility=function(){var e=document.getElementById("accessibility_"+this.id);if(0!=t){null==e&&((e=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(e,"w2fusionchart_accessibility"),this.render.insertBefore(e,this.render.lastChild)),e.innerHTML="";var i="",s="",a="",o=this.chartObj,r=o.chart.axaxisname,n=o.chart.ayaxisname,l=this.attributeObj.caption,c=document.createElement("li");l&&(c.innerHTML="Title : "+l,e.appendChild(c));for(var h=0;h<o.dataset.length;h++){var d=[];d.push(document.createElement("ul"));for(var p=document.createElement("ul"),u=0;u<o.dataset[h].dataset.length;u++){var m=document.createElement("li"),y=o.dataset[h].sayaxisname;n=y||o.chart.ayaxisname,
i=o.dataset[h].dataset[u]?o.dataset[h].dataset[u].seriesname?o.dataset[h].dataset[u].seriesname:o.dataset[h].dataset[u].SERIESNAME:"",m.innerHTML=i;for(var f=document.createElement("ul"),b=0;b<o.categories[0].category.length;b++){var C=document.createElement("li");s=o.categories[0].category[b]?o.categories[0].category[b].label?o.categories[0].category[b].label:o.categories[0].category[b].LABEL:"",a=o.dataset[h].dataset[u]?o.dataset[h].dataset[u].data[b].value?o.dataset[h].dataset[u].data[b].value:o.dataset[h].dataset[u].data[b].VALUE:"",this.options.axisnameInsert&&r&&n?C.innerHTML=r+" : "+s+", "+n+" : "+a:C.innerHTML="label : "+s+", value : "+a,f.appendChild(C)}m.appendChild(f),p.appendChild(m),d[0].appendChild(p)}e.appendChild(d[0])}}else e&&e.remove()},this._msStackedColumn2DLineDYAccessibility=function(){var e=document.getElementById("accessibility_"+this.id);if(0!=t){null==e&&((e=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(e,"w2fusionchart_accessibility"),this.render.insertBefore(e,this.render.lastChild)),e.innerHTML="";var i="",s="",a="",o="",r=this.chartObj,n=r.chart.axaxisname,l=r.chart.ayaxisname,c=this.attributeObj.caption,h=document.createElement("li");c&&(h.innerHTML="Title : "+c,e.appendChild(h));for(var d=0;d<r.dataset.length;d++){var p=[];p.push(document.createElement("ul"));for(var u=document.createElement("ul"),m=0;m<r.dataset[d].dataset.length;m++){var y=document.createElement("li");l=r.dataset[d].sayaxisname||r.chart.ayaxisname,i=r.dataset[d].dataset[m]?r.dataset[d].dataset[m].seriesname?r.dataset[d].dataset[m].seriesname:r.dataset[d].dataset[m].SERIESNAME:"",y.innerHTML=i;for(var f=document.createElement("ul"),b=0;b<r.categories[0].category.length;b++){var C=document.createElement("li");s=r.categories[0].category[b]?r.categories[0].category[b].label?r.categories[0].category[b].label:r.categories[0].category[b].LABEL:"",a=r.dataset[d].dataset[m]?r.dataset[d].dataset[m].data[b].value?r.dataset[d].dataset[m].data[b].value:r.dataset[d].dataset[m].data[b].VALUE:"",this.options.axisnameInsert&&n&&l?C.innerHTML=n+" : "+s+", "+l+" : "+a:C.innerHTML="label : "+s+", value : "+a,f.appendChild(C)}y.appendChild(f),u.appendChild(y),p[0].appendChild(u)}e.appendChild(p[0])}for(var v=document.createElement("ul"),g=0;g<r.lineset.length;g++){var S=document.createElement("li");l=r.lineset[g].sayaxisname||r.chart.ayaxisname,o=r.lineset[g]?r.lineset[g].seriesname?r.lineset[g].seriesname:r.lineset[g].SERIESNAME:"",S.innerHTML=o;for(var T=document.createElement("ul"),L=0;L<r.categories[0].category.length;L++){var w=document.createElement("li");s=r.categories[0].category[L]?r.categories[0].category[L].label?r.categories[0].category[L].label:r.categories[0].category[L].LABEL:"",a=r.lineset[g]?r.lineset[g].data[L].value?r.lineset[g].data[L].value:r.lineset[g].data[L].VALUE:"",this.options.axisnameInsert&&n&&l?w.innerHTML=n+" : "+s+", "+l+" : "+a:w.innerHTML="label : "+s+", value : "+a,T.appendChild(w)}T.appendChild(w),S.appendChild(T),v.appendChild(S)}e.appendChild(v)}else e&&e.remove()},this._scatterAccessibility=function(){var e=document.getElementById("accessibility_"+this.id);if(0!=t){null==e&&((e=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(e,"w2fusionchart_accessibility"),this.render.insertBefore(e,this.render.lastChild)),e.innerHTML="";var i="",s="",a="",o=this.chartObj,r=o.chart.axaxisname,n=o.chart.ayaxisname,l=this.attributeObj.caption,c=document.createElement("li");l&&(c.innerHTML="Title : "+l,e.appendChild(c));for(var h=0;h<o.dataset.length;h++){var d=document.createElement("li");i=o.dataset[h]?o.dataset[h].seriesname?o.dataset[h].seriesname:o.dataset[h].SERIESNAME:"",d.innerHTML=i;for(var p=document.createElement("ul"),u=0;u<o.dataset[h].data.length;u++){var m=document.createElement("li"),y=o.dataset[h].sayaxisname;n=y||o.chart.ayaxisname,
o.dataset[h]?s=o.dataset[h].data[u].x?o.dataset[h].data[u].x:o.dataset[h].data[u].X:a=o.dataset[h].data[u].y?o.dataset[h].data[u].y:o.dataset[h].data[u].Y,this.options.axisnameInsert&&r&&n?m.innerHTML=r+" : "+s+", "+n+" : "+a:m.innerHTML="x : "+s+", y : "+a,p.appendChild(m)}d.appendChild(p),e.appendChild(d)}}else e&&e.remove()},this._zoomLineAccessibility=function(){var e=document.getElementById("accessibility_"+this.id);if(0!=t){null==e&&((e=document.createElement("ul")).id="accessibility_"+this.id,WebSquare.style.addClass(e,"w2fusionchart_accessibility"),this.render.insertBefore(e,this.render.lastChild)),e.innerHTML="";var i="",s=this.chartObj,a=s.chart.axaxisname,o=s.chart.ayaxisname,r=this.attributeObj.caption,n=document.createElement("li");r&&(n.innerHTML="Title : "+r,e.appendChild(n));for(var l=s.categories[0].category.split("|"),c=0;c<s.dataset.length;c++){var h=document.createElement("li"),d=s.dataset[c].sayaxisname;o=d||s.chart.ayaxisname,i=s.dataset[c]?s.dataset[c].seriesname?s.dataset[c].seriesname:s.dataset[c].SERIESNAME:"",h.innerHTML=i;for(var p=document.createElement("ul"),u=s.dataset[c].data.split("|"),m=0;m<l.length;m++){var y=document.createElement("li");this.options.axisnameInsert&&a&&o?y.innerHTML=a+" : "+l[m]+", "+o+" : "+u[m]:y.innerHTML="label : "+l[m]+", value : "+u[m],p.appendChild(y)}h.appendChild(p),e.appendChild(h)}}else e&&e.remove()},1==t){switch(this.options.chartType.toLowerCase()){case"column2d":case"column3d":case"bar2d":case"bar3d":case"pie2d":case"pie3d":case"doughnut2d":case"doughnut3d":case"pareto2d":case"pareto3d":case"line":case"area2d":case"ssgrid":this._singleSeriesAccessibility();break;case"mscolumn2d":case"mscolumn3d":case"msline":case"msarea":case"msbar2d":case"msbar3d":case"marimekko":case"stackedcolumn2d":case"stackedcolumn3d":case"stackedarea2d":case"stackedarea2dlinedy":case"stackedbar2d":case"stackedbar3d":case"mscombi3d":case"mscombi2d":case"mscolumnline3d":case"stackedcolumn2dline":case"stackedcolumn2dlinedy":case"stackedcolumn3dline":case"mscombidy2d":case"mscombidy3d":case"mscolumn3dlinedy":case"overlappedcolumn2d":case"overlappedbar2d":case"scrollcolumn2d":case"scrollline2d":case"scrollArea2d":case"scrollbar2d":case"scrollstackedcolumn2d":case"scrollstackedbar2d":case"scrollcombi2d":case"scrollcombidy2d":case"stackedcolumn3dlinedy":this._multiSeriesAccessibility();break;case"scatter":case"bubble":case"zoomscatter":this._scatterAccessibility();break;case"zoomline":this._zoomLineAccessibility();break;case"msstackedcolumn2d":case"scrollmsstackedcolumn2d":case"msstackedbar2d":this._msStackedAccessibility();break;case"msstackedcolumn2dlinedy":case"scrollmsstackedcolumn2dlinedy":this._msStackedColumn2DLineDYAccessibility()}}else{var e=this.render,i=e.getElementsByClassName("w2fusionchart_accessibility");null!=i&&0!=i.length&&(i=i[0],e.removeChild(i)),e=null,i=null}}catch(t){o.Y.printStackTrace(t)}},c.prototype.getJSONData=function(){try{return FusionCharts("fc_"+this.id).getJSONData()}catch(t){o.Y.printStackTrace(t)}},c.prototype.getDataAsCSV=function(){try{var t=FusionCharts("fc_"+this.id);return t.options&&"javascript"===t.options.renderer?t.getDataAsCSV():(t.options&&t.options.renderer,t.getCSVData())}catch(t){o.Y.printStackTrace(t)}},c.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){o.Y.printStackTrace(t)}},c.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){o.Y.printStackTrace(t)}},c.prototype.getChartAttribute=function(t){try{return FusionCharts("fc_"+this.id).getChartAttribute(t)}catch(t){o.Y.printStackTrace(t)}},c.prototype.setDefaultOption=function(){try{var t=this.options.chartType,e={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",
divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0",adjustDiv:"0",theme:this.options.theme,caption:this.options.title};for(var i in"line"==t.toLowerCase()?this.getChartAttribute("lineColor")||this.attributeObj&&this.attributeObj["lineColor".toLowerCase()]||(e.lineColor=this._firstPlotColor):"area2d"==t.toLowerCase()?e.plotFillColor=this._firstPlotColor:"pareto2d"==t.toLowerCase()||"pareto3d"==t.toLowerCase()?this.getChartAttribute("lineColor")||(e.lineColor="757a85"):"pie3d"!=t.toLowerCase()&&"doughnut3d"!=t.toLowerCase()||(e.showPlotBorder="1",e.plotFillAlpha="100"),e)this.attributeObj&&void 0!==this.attributeObj[i]&&(e[i]=this.attributeObj[i]);this.setChartAttribute(e)}catch(t){o.Y.printStackTrace(t)}},c.prototype.setPlotDefaultColor=function(t){try{var e=["2ec6c8","b5a1dd","5ab0ee","f4984e","d77a80","90bddc","fe5d55","b5dc59","9ea7b3","00ba84","878bb6","757a85"];this.options.plotColor&&(e=this.options.plotColor.split(","));var i=t;if(i.length<e.length)for(var s=i.length;s<e.length;s++)i[s]=e[s];var a=this.chartObj,r=this.options.chartType;if("msstackedcolumn2dlinedy"==r.toLowerCase()||"scrollmsstackedcolumn2dlinedy"==r.toLowerCase()||"msstackedcolumn2d"==r.toLowerCase()||"scrollmsstackedcolumn2d"==r.toLowerCase()||"msstackedbar2d"==r.toLowerCase()){var n=0;for(s=0;s<a.dataset.length;s++)for(var l=0;l<a.dataset[s].dataset.length&&!(l>=i.length);l++,n++)a.dataset[s].dataset[l].color=i[n]}if(null!=a.dataset)for(l=0;l<a.dataset.length;l++)l>=i.length?a.dataset[l].color="":a.dataset[l].color=i[l];else if(null!=a.data)for(l=0;l<a.data.length;l++)l>=i.length?a.data[l].color="":a.data[l].color=i[l]}catch(t){o.Y.printStackTrace(t)}},c.prototype.setPlotColor=function(t,e){try{this.options.plotColor=t.join(","),this.plotColorObj=t,this.plotColorOption=e,this._firstPlotColor=t[0]||"#2ec6c8"}catch(t){o.Y.printStackTrace(t)}},c.prototype._setPlotColor=function(t){try{var e=this.chartObj,i=this.options.chartType;if("msstackedcolumn2dlinedy"==i.toLowerCase()||"scrollmsstackedcolumn2dlinedy"==i.toLowerCase()||"msstackedcolumn2d"==i.toLowerCase()||"scrollmsstackedcolumn2d"==i.toLowerCase()||"msstackedbar2d"==i.toLowerCase())for(var s=0,a=0;a<e.dataset.length;a++)for(var r=0;r<e.dataset[a].dataset.length&&!(r>=t.length);r++,s++)e.dataset[a].dataset[r].color=t[s];if(this.plotColorOption){var n=this.plotColorOption;if(null!=e.dataset)for(r=0;r<e.dataset.length&&!(r>=t.length);r++)e.dataset[r].color=t[r];else if(null!=e.data){if("line"==this.options.chartType.toLowerCase())return this.getChartAttribute("lineColor")||this.setChartAttribute({lineColor:this._firstPlotColor}),e;for(r=0;r<e.data.length;r++)for(a=0;a<n.length;a++){if(1*e.data[r].value<1*n[a]){e.data[r].color=t[a];break}if(n.length-1==a){e.data[r].color=t[a];break}}}}else if(null!=e.dataset)for(r=0;r<e.dataset.length&&!(r>=t.length);r++)e.dataset[r].color=t[r];else if(null!=e.data){if("line"==this.options.chartType.toLowerCase())return this.getChartAttribute("lineColor")||this.setChartAttribute({lineColor:this._firstPlotColor}),e;for(r=0;r<e.data.length&&!(r>=t.length);r++)e.data[r].color=t[r]}}catch(t){o.Y.printStackTrace(t)}},c.prototype.setPlotLink=function(t,e){try{this.plotLinkObj=new Object,this.plotLinkObj.linkArr=t,this.plotLinkObj.linkdata=e}catch(t){o.Y.printStackTrace(t)}},c.prototype._setPlotLink=function(t,e){try{var i=this.chartObj;if(i.data)for(var s=0;s<i.data.length;s++)i.data[s].link=t[s];i.linkeddata=e;for(var a={animation:"1",bgColor:"FFFFFF",canvasBgColor:"FFFFFF",showPlotBorder:"0",divLineThickness:"1",canvasBorderColor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotGradientColor:"",showalternatevgridcolor:"0",divLineColor:"b3b3b3",borderColor:"b3b3b3",showBorder:"1",use3DLighting:"0",showShadow:"0"},r=this.options.plotColor.split(","),n=0;n<i.linkeddata.length;n++){for(var s in a)i.linkeddata[n].linkedchart.chart[s]=a[s]
;for(var l=0;l<i.linkeddata[n].linkedchart.data.length;l++)i.linkeddata[n].linkedchart.data[l].color=r[l]}}catch(t){o.Y.printStackTrace(t)}},c.prototype.addTrendLine=function(t){try{("3.7"==this.options.version||"3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version)&&null!=t.length?this.trendLineArr=this.trendLineArr.concat(t):this.trendLineArr.push(t)}catch(t){o.Y.printStackTrace(t)}},c.prototype._addTrendLine=function(t){try{if("3.7"==this.options.version||"3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version){if(void 0===this.chartObj.trendlines){this.chartObj.trendlines=[];var e={line:[]};this.chartObj.trendlines.push(e)}this.chartObj.trendlines[0].line=this.chartObj.trendlines[0].line.concat(t)}else{var i=this.chartObj;void 0===i.trendlines?(i.trendlines={},i.trendlines.line=[],i.trendlines.line.push(t)):i.trendlines.line.push(t)}}catch(t){o.Y.printStackTrace(t)}},c.prototype.addVTrendLine=function(t){try{("3.7"==this.options.version||"3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version)&&null!=t.length?this.vtrendLineArr=this.vtrendLineArr.concat(t):this.vtrendLineArr.push(t)}catch(t){o.Y.printStackTrace(t)}},c.prototype._addVTrendLine=function(t){try{if("3.7"==this.options.version||"3.11"==this.options.version||"3.13"==this.options.version||"3.15"==this.options.version||"3.19"==this.options.version||"3.23"===this.options.version){if(void 0===this.chartObj.vtrendlines){this.chartObj.vtrendlines=[];var e={line:[]};this.chartObj.vtrendlines.push(e)}this.chartObj.vtrendlines[0].line=this.chartObj.vtrendlines[0].line.concat(t)}else{var i=this.chartObj;void 0===i.vtrendlines?(i.vtrendlines={},i.vtrendlines.line=[],i.vtrendlines.line.push(t)):i.vtrendlines.line.push(t)}}catch(t){o.Y.printStackTrace(t)}},c.prototype.applyStyle=function(t,e,i,s){try{if("3.7"!=this.options.version&&this.options.version)n.v.printLog("applyStyle is only supported in version 3.7 or lower.["+this.id+"]");else{var a={};a.styleType=t,a.styleName=e,a.options=i,a.objectNameArr=s,this.styleArr.push(a)}}catch(t){o.Y.printStackTrace(t)}},c.prototype._applyStyle=function(t){try{for(var e=this.chartObj,i=0;i<t.length;i++){var s=new Object;for(var a in s.type=t[i].styleType,s.name=t[i].styleName,t[i].options)t[i].options.hasOwnProperty(a)&&(s[a]=t[i].options[a]);void 0===e.styles&&(e.styles={}),void 0===e.styles.definition&&(e.styles.definition=[]),e.styles.definition.push(s),void 0===e.styles.application&&(e.styles.application=[]);for(var r=0;r<t[i].objectNameArr.length;r++){var n=new Object;n.toobject=t[i].objectNameArr[r],n.styles=t[i].styleName,e.styles.application.push(n)}}}catch(t){o.Y.printStackTrace(t)}},c.prototype.configure=function(t){try{FusionCharts("fc_"+this.id).configure(t),FusionCharts("fc_"+this.id).setXMLData("<chart></chart>"),this.draw()}catch(t){o.Y.printStackTrace(t)}},c.prototype.setChartColumnRef=function(t,e,i){try{if(t=r.Z.isNull(t)?this.options.ref:t,e=r.Z.isNull(e)?this.options.labelNode:e,i=r.Z.isNull(i)?this.options.seriesColumns:i,this.options.ref!=t){if(""!=this.options.ref){var s=this.options.ref.replace("data:","");r.Z.getComponentById(s,this.scope_id).removeChild(this.id)}var a=t.replace("data:","");r.Z.getComponentById(a,this.scope_id).addChild(this)}this.options.ref=t,this.options.labelNode=e,this.options.seriesColumns=i,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){o.Y.printStackTrace(t)}},c.prototype.setChartColumnSimpleRef=function(t,e,i,s,a){try{if(t=r.Z.isNull(t)?this.options.ref:t,e=r.Z.isNull(e)?this.options.labelNode:e,i=r.Z.isNull(i)?this.options.seriesNode:i,s=r.Z.isNull(s)?this.options.valueNode:s,a=r.Z.isNull(a)?this.options.colorNode:a,this.options.ref!=t){if(""!=this.options.ref){
var n=this.options.ref.replace("data:","");r.Z.getComponentById(n,this.scope_id).removeChild(this.id)}var l=t.replace("data:","");r.Z.getComponentById(l,this.scope_id).addChild(r.Z.getComponentById(this.id,this.scope_id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesNode=i,this.options.valueNode=s,this.options.colorNode=a,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){o.Y.printStackTrace(t)}},c.prototype.finalize=function(){try{var t=this.fc();t&&!t.disposed&&t.dispose()}catch(t){o.Y.printStackTrace(t)}},c.prototype.changeType=function(t,e){try{if(!t||this.options.chartType===t)return;this.options.chartType=t;var i=this.fc();if(e&&(e.seriesColumns?this.setChartColumnRef(e.ref,e.labelNode,e.seriesColumns):this.setChartColumnSimpleRef(e.ref,e.labelNode,e.seriesNode,e.valueNode,e.colorNode)),"javascript"==this.options.drawType){if("line"==this.options.chartType.toLowerCase())for(var s=0;s<this.chartObj.data.length;s++)this.options.colorNode||(this.chartObj.data[s].color=this._firstPlotColor);else"area2d"==this.options.chartType.toLowerCase()?"area2d"==this.options.chartType.toLowerCase()&&(this.chartObj.chart.plotFillColor=this._firstPlotColor,this.options.colorNode&&this.chartObj.data[0].color&&(this.chartObj.chart.plotFillColor=this.chartObj.data[0].color)):this.options.colorNode||this.setPlotDefaultColor([]);this.draw(),i.chartType(t),1==this.options.accessibility&&this.setAccessibility(!0)}else if("flash"==this.options.drawType){i.dispose(),(n=new FusionCharts("externalJS/FusionCharts_XT/Charts/"+this.getType(t)+".swf","fc_"+this.id)).setJSONData(this.chartObj),n.render(this.id),1==this.options.accessibility&&this.setAccessibility(!0)}else{for(var a=this.options.runflashAt.split(","),n=null,l=0;l<a.length;l++){var c=a[l];if(-1!=(c=c.toUpperCase()).indexOf("IE")&&(c=c.wq_replaceAll("IE",""),c*=1,r.Z.isIEAllVersion(c))){i.dispose(),(n=new FusionCharts("externalJS/FusionCharts_XT/Charts/"+this.getType(t)+".swf","fc_"+this.id)).setJSONData(this.chartObj),n.render(this.id),1==this.options.accessibility&&this.setAccessibility(!0);break}}if(null==n){if("line"==this.options.chartType.toLowerCase())for(s=0;s<this.chartObj.data.length;s++)this.options.colorNode||(this.chartObj.data[s].color=this._firstPlotColor);else"area2d"==this.options.chartType.toLowerCase()?"area2d"==this.options.chartType.toLowerCase()&&(this.chartObj.chart.plotFillColor=this._firstPlotColor,this.options.colorNode&&this.chartObj.data[0].color&&(this.chartObj.chart.plotFillColor=this.chartObj.data[0].color)):this.options.colorNode||this.setPlotDefaultColor([]);this.draw(),i.chartType(t),1==this.options.accessibility&&this.setAccessibility(!0)}}}catch(t){o.Y.printStackTrace(t)}},c.prototype.getActionURI=function(){return this.options.actionURI},c.prototype.setActionURI=function(t){return!!t&&(this.options.actionURI=t.wq_trim(),!0)},c.prototype.exportJSChart=function(t,e){try{var i=this.getSVGString(),n=function(t){switch(t.nodeType){case 1:var e=t.style||t.getAttribute("style");e&&("none"===e.display||"string"==typeof e&&"none"===WebSquare.style.toJSON(e).display)&&t.parentNode&&t.parentNode.removeChild(t);case 9:if(t.hasChildNodes())for(var i=t.childNodes,s=0,a=i.length;s<a;s++){var o=i.item(s);o&&n(o)}break;case 3:t.nodeValue=WebSquare.xml.encode(t.nodeValue)}};if(this.options.svgStringFormatter&&(i=this.setSVGStringFormatter(i)),i&&("javascript"==this.options.drawType||"mixed"==this.options.drawType)){t||(t="jpg"),"jpg"!=t&&"png"!=t||(i=this.getSVGString1(i));var l=WebSquare.xml.parse(i);n(l),i=WebSquare.xml.serialize(l),r.Z.isSpartan()&&(i=i.wq_replaceAll("1e-006","0.000001"));var c=(e?e.fileName:this.options.id)||"fusionChart",h=encodeURI(i+"ExportType="+t+"ExportFileName="+c),d=s.q._resourceURI+this.options.actionURI;a.I.download(d,h,"post")}}catch(t){o.Y.printStackTrace(t)}},c.prototype.getSVGString=function(){try{
if("mixed"==this.options.drawType.toLowerCase())for(var t=this.options.runflashAt.split(","),e=0;e<t.length;e++){var i=t[e];if(-1!=(i=i.toUpperCase()).indexOf("IE")&&(i=i.wq_replaceAll("IE",""),i*=1,r.Z.isIEAllVersion(i)))return void n.v.printLog("not support flash fusionChart")}if("javascript"==this.options.drawType||"mixed"==this.options.drawType){var s=this.fc().getSVGString();if(s){if(s=(s=(s=(s=s.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001"),r.Z.isIEAllVersion(11)||r.Z.isSpartan()){var a=location.href;s=s.wq_replaceAll("&quot;",""),a=a.replaceAll("&","&amp;").replaceAll('"',""),s=s.wq_replaceAll(a,"")}return"zoomline"==this.options.chartType.toLowerCase()&&(s=(s=s.wq_replaceAll('stroke-dasharray="-','stroke-dasharray="')).wq_replaceAll("cursor: ew-resize;","cursor: default;")),"msline"!=this.options.chartType.toLowerCase()&&"zoomline"!=this.options.chartType.toLowerCase()&&"msarea"!=this.options.chartType.toLowerCase()&&"stackedarea2d"!=this.options.chartType.toLowerCase()||(s=s.wq_replaceAll('clip-path=""',"")),"pie3d"!=this.options.chartType.toLowerCase()&&"doughnut3d"!=this.options.chartType.toLowerCase()||(s=s.wq_replaceAll('font-family="15"','font-family="Verdana"')),this.options.svgStringFormatter&&(s=this.setSVGStringFormatter(s)),s&&(s=s.replace(/<style.*<\/style>/i,"")),s}n.v.printLog("not found svg object")}else n.v.printLog("not support flash fusionchart")}catch(t){o.Y.printStackTrace(t)}},c.prototype.getSVGString1=function(t){try{for(var e=t,i=0,s=[];i>-1;)if((i=e.indexOf("<text"))>-1){var a=e.indexOf("</text>");if(a>-1){a+=7;var r=e.substring(i,a);s.push(e.substring(0,i)),e=e.substring(a),r.indexOf("text-rendering")<0&&(r=r.substring(0,5)+' text-rendering="geometricPrecision"'+r.substring(5)),s.push(r),i=a+1}}return s.push(e),t=s.join("")}catch(t){o.Y.printStackTrace(t)}},c.prototype.modifySeriesName=function(t){if("advanced"==t.seriesType)if(this.options.ref){var e=this.options.ref.replace("data:","");t.colId&&t.newName&&this.modelControl.getDataComp(e).setColumnName(t.colId,t.newName)}else n.v.printLog("There is no dataList bind to fusionChart. ["+this.id+"]");else if("simple"==t.seriesType)if(this.options.ref){e=this.options.ref.replace("data:","");var i=this.modelControl.getDataComp(e);if(t.oldName&&t.newName){for(var s=i.getAllData(),a=0;a<s.length;a++)s[a]==t.oldName&&(s[a]=t.newName);i.setData(s)}}else n.v.printLog("There is no dataList bind to fusionChart. ["+this.id+"]");else n.v.printLog("options requires seriesType.["+this.id+"]")},c.prototype.getType=function(t){t=t.toLowerCase()
;for(var e="",i=["Column2D","Column3D","Line","Area2D","Bar2D","Bar3D","Pie2D","Pie3D","Doughnut2D","Doughnut3D","Pareto2D","Pareto3D","MSColumn2D","MSColumn3D","MSLine","MSBar2D","MSBar3D","MSArea","Marimekko","ZoomLine","ZoomLineDY","StackedColumn3D","StackedColumn2D","StackedBar2D","StackedBar3D","StackedArea2D","StackedArea2DLineDY","MSStackedColumn2D","ScrollMSStackedColumn2D","MSStackedBar2D","MSCombi3D","MSCombi2D","MSColumnLine3D","StackedColumn2DLine","StackedColumn2DLineDY","StackedColumn3DLine","MSCombiDY2D","MSCombiDY3D","MSColumn3DLineDY","StackedColumn3DLineDY","MSStackedColumn2DLineDY","ScrollMSStackedColumn2DLineDY","Scatter",",ZoomScatter","Bubble","ScrollColumn2D","ScrollLine2D","ScrollArea2D","ScrollBar2D","ScrollStackedColumn2D","ScrollStackedBar2D","ScrollCombi2D","ScrollCombiDY2D","OverlappedColumn2D","OverlappedBar2D"],s=["column2d","column3d","line","area2d","bar2d","bar3d","pie2d","pie3d","doughnut2d","doughnut3d","pareto2d","pareto3d","mscolumn2d","mscolumn3d","msline","msbar2d","msbar3d","msarea","marimekko","zoomline","zoomlinedy","stackedcolumn3d","stackedcolumn2d","stackedbar2d","stackedbar3d","stackedarea2d","stackedarea2dlinedy","msstackedcolumn2d","scrollmsstackedcolumn2d","msstackedbar2d","mscombi3d","mscombi2d","mscolumnline3d","stackedcolumn2dline","stackedcolumn2dlinedy","stackedcolumn3dline","mscombidy2d","mscombidy3d","mscolumn3dlinedy","stackedcolumn3dlinedy","msstackedcolumn2dlinedy","scrollmsstackedcolumn2dlinedy","scatter",",zoomscatter","bubble","scrollcolumn2d","scrollline2d","scrollarea2d","scrollbar2d","scrollstackedcolumn2d","scrollstackedbar2d","scrollcombi2d","scrollcombidy2d","overlappedcolumn2d","OverlappedBar2D"],a=0;a<s.length;a++)if(t==s[a]){e=i[a];break}return e},c.prototype.addEventListener=function(t,e){var i=this.fc();"string"==typeof t&&"function"==typeof e&&i.addEventListener(t,e)},c.prototype.setSVGStringFormatter=function(t){try{if(this.options.svgStringFormatter){try{if("function"!=typeof this.options.svgStringFormatter){var e=r.Z.getGlobalFunction(this.options.svgStringFormatter,this.scope_id);this.options.svgStringFormatter=e}}catch(t){n.v.printLog("cannot find function : "+this.options.svgStringFormatter)}if("function"==typeof this.options.svgStringFormatter)return this.options.svgStringFormatter.call(this,t)}}catch(t){o.Y.printStackTrace(t,null,this)}},c.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var e=this.options.ref.replace("data:","");return t.id=e,"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode,this.options.colorNode&&(t.colorNode=this.options.colorNode)):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){o.Y.printStackTrace(t)}}}}]);
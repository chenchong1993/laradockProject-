// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/DissolveBoundaries.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_dissolveBoundariesToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3cdiv class\x3d"dissolveBoundariesIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.dissolveBoundaries}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e               \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_dissolveBoundariesTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_dissolveBoundariesDescription"\x3e${i18n.dissolveBoundariesDefine}\x3c/td\x3e           \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e           \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e    \r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseDissolveLabel}\x3c/label\x3e\t\t\t\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" width\x3d"1%"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"DissolveFields"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n          \t\x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_overlappingAreasCheck" data-dojo-props\x3d"checked:true"\x3e\x3c/div\x3e\r\n               ${i18n.overlappingAreasLabel}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n          \t\x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_sameAttributeAreasCheck" data-dojo-props\x3d"checked:false" data-dojo-attach-event\x3d"onChange:_handleAreasChange"\x3e\x3c/div\x3e\r\n               ${i18n.sameAttributeAreasLabel}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e  \r\n             \x3cselect class\x3d"esriLeadingMargin1  longInput"  multiple\x3d"true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_dissolveFieldsSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e        \t\r\n        \x3c/tr\x3e    \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.summarizeLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"SummaryFields"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e             \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/DissolveBoundaries","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojox/form/CheckedMultiSelect dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/RadioButton dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/DissolveBoundaries.html".split(" "),
function(t,l,e,f,m,d,u,I,n,k,v,g,w,x,J,y,z,A,B,C,q,K,L,M,N,r,O,P,Q,R,D,p,E,F,S,h,G,H){l=l([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.DissolveBoundaries",templateString:H,widgetsInTemplate:!0,inputLayer:null,dissolveFields:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"DissolveBoundaries",helpFileName:"DissolveBoundaries",resultParameter:"DissolvedLayer",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);
f.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,G.dissolveBoundaries)},postCreate:function(){this.inherited(arguments);x.add(this._form.domNode,"esriSimpleForm");k.set(this._dissolveFieldsSelect.selectNode,"width","75%");this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",
{save:a})},_handleAreasChange:function(){this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked"))},_handleBrowseItemsSelect:function(a){a&&a.selection&&h.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:this._browsedlg,widget:this}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&(a={},a.InputLayer=d.toJson(h.constructAnalysisInputLyrObj(this.inputLayer)),
a.SummaryFields=d.toJson(this.get("summaryFields")),this.returnFeatureCollection||(a.OutputName=d.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),!0===this._sameAttributeAreasCheck.get("checked")&&(a.DissolveFields=d.toJson(this.get("dissolveFields"))),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=d.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);
this._usageDialog.show()})))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c;a.InputLayer=d.toJson(h.constructAnalysisInputLyrObj(this.inputLayer));a.SummaryFields=d.toJson(this.get("summaryFields"));this.returnFeatureCollection||(a.OutputName=d.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));!0===this._sameAttributeAreasCheck.get("checked")&&(a.DissolveFields=d.toJson(this.get("dissolveFields")));this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(a.context=d.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=d.toJson(c));b.jobParams=a;b.itemParams={description:this.i18n.itemDescription,tags:n.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=
this.get("folderId"));this.execute(b)}},_handleAttrSelectChange:function(a){var b;"0"!==a&&(a=this.get("statisticSelect"),"0"!==a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),k.set(b,"display","block"),b=a.get("referenceWidget"),e.hitch(b,b._createStatsRow()),a.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),k.set(c,"display",
"block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow()),this.set("isnewRowAdded",!0)))},_save:function(){},_buildUI:function(){var a=!0;this._loadConnections();h.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),h.populateAnalysisLayers(this,"inputLayer","inputLayers"));h.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",
this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);k.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;h.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));k.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?
"inline-block":"none");k.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_updateAnalysisLayerUI:function(a){if(this.inputLayer){v.set(this._dissolveBoundariesDescription,"innerHTML",n.substitute(this.i18n.dissolveBoundariesDefine,{layername:this.inputLayer.name}));if(!this.outputLayerName||a)this.outputLayerName=n.substitute(this.i18n.outputLayerName,
{layername:this.inputLayer.name});a=this.inputLayer.fields;var b=[],c=!1;this._dissolveFieldsSelect.removeOption(this._dissolveFieldsSelect.getOptions());f.forEach(a,function(a,e){-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],a.type)&&(null!==this.dissolveFields&&(c=-1!==this.dissolveFields.indexOf(a.name)),b.push({value:a.name,label:p.isDefined(a.alias)&&""!==a.alias?a.alias:a.name,selected:c}))},this);this._dissolveFieldsSelect.addOption(b);
this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked"))}this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);this._createStatsRow();f.forEach(this.summaryFields,function(a){a=a.split(" ");this._currentAttrSelect.set("value",a[0]);e.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a[0])();this._currentStatsSelect.set("value",a[1]);e.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",a[1])()},this)},_handleAnalysisLayerChange:function(a){"browse"===
a?(a=this._browsedlg.browseItems.get("query"),a.custom=['tags:"polygon"'],this._browsedlg.browseItems.set("query",a),this._isAnalysisSelect=!1,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"],this._isAnalysisSelect=!1,this._browseLyrsdlg.show()):(this.inputLayer=
this.inputLayers[a],this._dissolveFields=null,this._removeStatsRows(),this._updateAnalysisLayerUI(!0))},_createStatsRow:function(){var a,b,c,s,d;a=g.create("tr",null,this._afterStatsRow,"before");c=g.create("td",{style:{width:"45%",maxWidth:"100px"}},a);b=g.create("td",{style:{width:"55%",maxWidth:"104px"}},a);c=new r({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},g.create("select",null,c));this.set("attributes",
{selectWidget:c,inputLayer:this.inputLayer});b=new r({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},g.create("select",null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);m.connect(c,"onChange",this._handleAttrSelectChange);d=g.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);s=g.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+t.toUrl("./images/close.gif")+
"' border\x3d'0''/\x3e"},d);m.connect(s,"onclick",e.hitch(this,this._removeStatsRow,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",d);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},_removeStatsRow:function(a){f.forEach(q.findWidgets(a),function(a){a.destroyRecursive()});g.destroy(a)},_removeStatsRows:function(){f.forEach(this._statsRows,this._removeStatsRow,
this);this._statsRows=[]},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){p.isDefined(a)&&"esriGeometryPolygon"===a.geometryType&&(this.inputLayer=a)},_setInputLayersAttr:function(a){this.inputLayers=f.filter(a,function(a){return"esriGeometryPolygon"===a.geometryType})},_setAttributesAttr:function(a){if(a.inputLayer){var b,c;b=a.inputLayer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",
label:this.i18n.attribute});f.forEach(a,function(a){-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&a.name!==b.objectIdField&&c.addOption({value:a.name,label:p.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",
label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setDissolveFieldsAttr:function(a){this.dissolveFields=a},_getDissolveFieldsAttr:function(){var a=[];this._dissolveFieldsSelect.getOptions().forEach(function(b){!0===b.selected&&"0"!==b.value&&a.push(b.value)});return a},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a="",b=[],c,d;w(".statsSelect",this.domNode).forEach(function(e){c=
q.byNode(e);d=c.get("attributeSelect");"0"!==d.get("value")&&"0"!==c.get("value")&&(a+=d.get("value")+" "+c.get("value")+";",b.push(d.get("value")+" "+c.get("value")))});return b},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return h.validateServiceName(a,{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});u("extend-esri")&&e.setObject("dijit.analysis.DissolveBoundaries",l,D);return l});
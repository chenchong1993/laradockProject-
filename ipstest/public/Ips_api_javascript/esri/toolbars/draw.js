// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/toolbars/draw","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/window dojo/has dojo/sniff dojo/keys dojo/dom-construct dojo/dom-style dojo/dom-geometry ../kernel ../sniff ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../graphic ../geometry/jsonUtils ../geometry/webMercatorUtils ../geometry/Polyline ../geometry/Polygon ../geometry/Multipoint ../geometry/Rect dojo/i18n!../nls/jsapi".split(" "),
function(H,n,z,q,x,y,r,B,I,C,D,J,K,O,L,E,w,F,t,M,N,u,s,A,G,v){var h=H(L,{declaredClass:"esri.toolbars.Draw",_eventMap:{"draw-complete":!0,"draw-end":["geometry"]},constructor:function(c,a){this.markerSymbol=new E(E.STYLE_SOLID,10,new w(w.STYLE_SOLID,new x([255,0,0]),2),new x([0,0,0,0.25]));this.lineSymbol=new w(w.STYLE_SOLID,new x([255,0,0]),2);this.fillSymbol=new F(F.STYLE_SOLID,new w(w.STYLE_SOLID,new x([255,0,0]),2),new x([0,0,0,0.25]));this._points=[];this._mouse=!r("esri-touch")&&!r("esri-pointer");
this._defaultOptions={showTooltips:!0,drawTime:75,tolerance:8,tooltipOffset:15};this._options=n.mixin(n.mixin({},this._defaultOptions),a||{});if(B("ios")||B("android"))this._options.showTooltips=!1;this._onKeyDownHandler=n.hitch(this,this._onKeyDownHandler);this._onMouseDownHandler=n.hitch(this,this._onMouseDownHandler);this._onMouseUpHandler=n.hitch(this,this._onMouseUpHandler);this._onClickHandler=n.hitch(this,this._onClickHandler);this._onMouseMoveHandler=n.hitch(this,this._onMouseMoveHandler);
this._onMouseDragHandler=n.hitch(this,this._onMouseDragHandler);this._onDblClickHandler=n.hitch(this,this._onDblClickHandler);this._updateTooltip=n.hitch(this,this._updateTooltip);this._hideTooltip=n.hitch(this,this._hideTooltip);this._redrawGraphic=n.hitch(this,this._redrawGraphic)},_geometryType:null,respectDrawingVertexOrder:!1,setRespectDrawingVertexOrder:function(c){this.respectDrawingVertexOrder=c},setMarkerSymbol:function(c){this.markerSymbol=c},setLineSymbol:function(c){this.lineSymbol=c},
setFillSymbol:function(c){this.fillSymbol=c},activate:function(c,a){this._geometryType&&this.deactivate();var b=this.map,d=q.connect,g=h;this._options=n.mixin(n.mixin({},this._options),a||{});b.navigationManager.setImmediateClick(!1);switch(c){case g.ARROW:case g.LEFT_ARROW:case g.RIGHT_ARROW:case g.UP_ARROW:case g.DOWN_ARROW:case g.TRIANGLE:case g.CIRCLE:case g.ELLIPSE:case g.RECTANGLE:this._deactivateMapTools(!0,!1,!1,!0);this._onClickHandler_connect=d(b,"onClick",this._onClickHandler);this._mouse?
(this._onMouseDownHandler_connect=d(b,"onMouseDown",this._onMouseDownHandler),this._onMouseDragHandler_connect=d(b,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=d(b,"onMouseUp",this._onMouseUpHandler)):(this._onMouseDownHandler2_connect=d(b,"onMouseDragStart",this._onMouseDownHandler),this._onMouseDragHandler2_connect=d(b,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler2_connect=d(b,"onMouseDragEnd",this._onMouseUpHandler));r("esri-touch")&&!r("esri-pointer")&&
(this._onMouseDownHandler2_connect=d(b,"onSwipeStart",this._onMouseDownHandler),this._onMouseDragHandler2_connect=d(b,"onSwipeMove",this._onMouseDragHandler),this._onMouseUpHandler2_connect=d(b,"onSwipeEnd",this._onMouseUpHandler));break;case g.POINT:this._onClickHandler_connect=d(b,"onClick",this._onClickHandler);break;case g.LINE:case g.EXTENT:case g.FREEHAND_POLYLINE:case g.FREEHAND_POLYGON:this._deactivateMapTools(!0,!1,!1,!0);this._mouse?(this._onMouseDownHandler_connect=d(b,"onMouseDown",this._onMouseDownHandler),
this._onMouseDragHandler_connect=d(b,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=d(b,"onMouseUp",this._onMouseUpHandler)):(this._onMouseDownHandler_connect=d(b,"onMouseDragStart",this._onMouseDownHandler),this._onMouseDragHandler_connect=d(b,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=d(b,"onMouseDragEnd",this._onMouseUpHandler));r("esri-touch")&&!r("esri-pointer")&&(this._onMouseDownHandler2_connect=d(b,"onSwipeStart",this._onMouseDownHandler),
this._onMouseDragHandler2_connect=d(b,"onSwipeMove",this._onMouseDragHandler),this._onMouseUpHandler2_connect=d(b,"onSwipeEnd",this._onMouseUpHandler));break;case g.POLYLINE:case g.POLYGON:case g.MULTI_POINT:b.navigationManager.setImmediateClick(!0);this._onClickHandler_connect=d(b,"onClick",this._onClickHandler);this._onDblClickHandler_connect=d(b,"onDblClick",this._onDblClickHandler);this._dblClickZoom=b.isDoubleClickZoom;b.disableDoubleClickZoom();break;default:console.error("Unsupported geometry type: "+
c);return}this._onKeyDown_connect=d(b,"onKeyDown",this._onKeyDownHandler);this._redrawConnect=d(b,"onExtentChange",this._redrawGraphic);this._geometryType=c;this._toggleTooltip(!0);b.snappingManager&&("freehandpolyline"!==this._geometryType&&"freehandpolygon"!==this._geometryType)&&(b.snappingManager._startSelectionLayerQuery(),b.snappingManager._setUpSnapping());this.onActivate(this._geometryType)},deactivate:function(){var c=this.map;this._clear();var a=q.disconnect;a(this._onMouseMoveHandler_connect);
a(this._onMouseDownHandler_connect);a(this._onMouseDragHandler_connect);a(this._onMouseUpHandler_connect);a(this._onMouseDownHandler2_connect);a(this._onMouseDragHandler2_connect);a(this._onMouseUpHandler2_connect);a(this._onClickHandler_connect);a(this._onDblClickHandler_connect);a(this._onKeyDown_connect);a(this._redrawConnect);this._onMouseDownHandler_connect=this._onMouseMoveHandler_connect=this._onMouseDragHandler_connect=this._onMouseUpHandler_connect=this._onMouseDownHandler2_connect=this._onMouseDragHandler2_connect=
this._onMouseUpHandler2_connect=this._onClickHandler_connect=this._onDblClickHandler_connect=this._onKeyDown_connect=this._redrawConnect=null;c.snappingManager&&(c.snappingManager._stopSelectionLayerQuery(),c.snappingManager._killOffSnapping());switch(this._geometryType){case h.CIRCLE:case h.ELLIPSE:case h.TRIANGLE:case h.ARROW:case h.LEFT_ARROW:case h.RIGHT_ARROW:case h.UP_ARROW:case h.DOWN_ARROW:case h.RECTANGLE:case h.LINE:case h.EXTENT:case h.FREEHAND_POLYLINE:case h.FREEHAND_POLYGON:this._activateMapTools(!0,
!1,!1,!0);break;case h.POLYLINE:case h.POLYGON:case h.MULTI_POINT:this._dblClickZoom&&c.enableDoubleClickZoom()}a=this._geometryType;this._geometryType=null;c.navigationManager.setImmediateClick(!1);this._toggleTooltip(!1);this.onDeactivate(a)},_clear:function(){this._graphic&&this.map.graphics.remove(this._graphic,!0);this._tGraphic&&this.map.graphics.remove(this._tGraphic,!0);this._graphic=this._tGraphic=null;this.map.snappingManager&&this.map.snappingManager._setGraphic(null);this._points=[]},
finishDrawing:function(){var c,a=this._points,b=this.map.spatialReference,d=h,a=a.slice(0,a.length);switch(this._geometryType){case d.POLYLINE:if(!this._graphic||2>a.length)return;c=new u(b);c.addPath([].concat(a));break;case d.POLYGON:if(!this._graphic||3>a.length)return;c=new s(b);a=[].concat(a,[a[0].offset(0,0)]);!s.prototype.isClockwise(a)&&!this.respectDrawingVertexOrder&&(console.debug(this.declaredClass+" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),a.reverse());
c.addRing(a);break;case d.MULTI_POINT:c=new A(b),z.forEach(a,function(a){c.addPoint(a)})}q.disconnect(this._onMouseMoveHandler_connect);this._clear();this._setTooltipMessage(0);this._drawEnd(c)},_drawEnd:function(c){if(c){var a=this.map.spatialReference,b;this.onDrawEnd(c);a&&(a.isWebMercator()?b=N.webMercatorToGeographic(c,!0):4326===a.wkid&&(b=M.fromJson(c.toJson())));this.onDrawComplete({geometry:c,geographicGeometry:b})}},_normalizeRect:function(c,a,b){var d=c.x;c=c.y;var g=a.x;a=a.y;var h=Math.abs(d-
g),l=Math.abs(c-a);return{x:Math.min(d,g),y:Math.max(c,a),width:h,height:l,spatialReference:b}},_onMouseDownHandler:function(c){this._dragged=!1;var a;this.map.snappingManager&&(a=this.map.snappingManager._snappingPoint);var b=a||c.mapPoint,d=h;a=this.map;var g=a.spatialReference;this._points.push(b.offset(0,0));switch(this._geometryType){case d.LINE:this._graphic=a.graphics.add(new t(new u({paths:[[[b.x,b.y],[b.x,b.y]]],spatialReference:g}),this.lineSymbol),!0);a.snappingManager&&a.snappingManager._setGraphic(this._graphic);
break;case d.FREEHAND_POLYLINE:this._oldPoint=c.screenPoint;b=new u(g);b.addPath(this._points);this._graphic=a.graphics.add(new t(b,this.lineSymbol),!0);a.snappingManager&&a.snappingManager._setGraphic(this._graphic);break;case d.CIRCLE:case d.ELLIPSE:case d.TRIANGLE:case d.ARROW:case d.LEFT_ARROW:case d.RIGHT_ARROW:case d.UP_ARROW:case d.DOWN_ARROW:case d.RECTANGLE:case d.FREEHAND_POLYGON:this._oldPoint=c.screenPoint,b=new s(g),b.addRing(this._points),this._graphic=a.graphics.add(new t(b,this.fillSymbol),
!0),a.snappingManager&&a.snappingManager._setGraphic(this._graphic)}r("esri-touch")&&c.preventDefault()},_onMouseMoveHandler:function(c){var a;this.map.snappingManager&&(a=this.map.snappingManager._snappingPoint);var b=this._points[this._points.length-1];c=a||c.mapPoint;a=this._tGraphic;var d=a.geometry;switch(this._geometryType){case h.POLYLINE:case h.POLYGON:d.setPoint(0,0,{x:b.x,y:b.y}),d.setPoint(0,1,{x:c.x,y:c.y}),a.setGeometry(d)}},_onMouseDragHandler:function(c){if(this._graphic||this._points.length)if(r("esri-touch")&&
!this._points.length)c.preventDefault();else{this._dragged=!0;var a;this.map.snappingManager&&(a=this.map.snappingManager._snappingPoint);var b=this._points[0],d=a||c.mapPoint,g=this.map,k=g.spatialReference;a=this._graphic;var l=h,m=g.toScreen(b),f=g.toScreen(d),e=[],e=f.x-m.x,f=f.y-m.y,p=Math.sqrt(e*e+f*f);switch(this._geometryType){case l.CIRCLE:this._hideTooltip();a.geometry=s.createCircle({center:m,r:p,numberOfPoints:60,map:g});a.setGeometry(a.geometry);break;case l.ELLIPSE:this._hideTooltip();
a.geometry=s.createEllipse({center:m,longAxis:e,shortAxis:f,numberOfPoints:60,map:g});a.setGeometry(a.geometry);break;case l.TRIANGLE:this._hideTooltip();e=[[0,-p],[0.8660254037844386*p,0.5*p],[-0.8660254037844386*p,0.5*p],[0,-p]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.ARROW:this._hideTooltip();b=f/p;g=e/p;d=0.25*g*p;k=0.25*p/(f/e);p*=0.25*b;e=[[e,f],[e-d*(1+24/k),f+24*g-p],[e-d*(1+12/k),f+12*g-p],[-12*b,12*g],[12*b,-12*g],[e-d*(1-12/k),f-12*g-p],[e-d*(1-24/k),
f-24*g-p],[e,f]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.LEFT_ARROW:this._hideTooltip();e=0>=e?[[e,0],[0.75*e,f],[0.75*e,0.5*f],[0,0.5*f],[0,-0.5*f],[0.75*e,-0.5*f],[0.75*e,-f],[e,0]]:[[0,0],[0.25*e,f],[0.25*e,0.5*f],[e,0.5*f],[e,-0.5*f],[0.25*e,-0.5*f],[0.25*e,-f],[0,0]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.RIGHT_ARROW:this._hideTooltip();e=0<=e?[[e,0],[0.75*e,f],[0.75*e,0.5*f],[0,0.5*f],[0,-0.5*f],[0.75*e,-0.5*f],[0.75*
e,-f],[e,0]]:[[0,0],[0.25*e,f],[0.25*e,0.5*f],[e,0.5*f],[e,-0.5*f],[0.25*e,-0.5*f],[0.25*e,-f],[0,0]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.UP_ARROW:this._hideTooltip();e=0>=f?[[0,f],[-e,0.75*f],[-0.5*e,0.75*f],[-0.5*e,0],[0.5*e,0],[0.5*e,0.75*f],[e,0.75*f],[0,f]]:[[0,0],[-e,0.25*f],[-0.5*e,0.25*f],[-0.5*e,f],[0.5*e,f],[0.5*e,0.25*f],[e,0.25*f],[0,0]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.DOWN_ARROW:this._hideTooltip();
e=0<=f?[[0,f],[-e,0.75*f],[-0.5*e,0.75*f],[-0.5*e,0],[0.5*e,0],[0.5*e,0.75*f],[e,0.75*f],[0,f]]:[[0,0],[-e,0.25*f],[-0.5*e,0.25*f],[-0.5*e,f],[0.5*e,f],[0.5*e,0.25*f],[e,0.25*f],[0,0]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.RECTANGLE:this._hideTooltip();e=[[0,0],[e,0],[e,f],[0,f],[0,0]];a.geometry=this._toPolygon(e,m.x,m.y);a.setGeometry(a.geometry);break;case l.LINE:a.setGeometry(n.mixin(a.geometry,{paths:[[[b.x,b.y],[d.x,d.y]]]}));break;case l.EXTENT:a&&g.graphics.remove(a,
!0);a=new G(this._normalizeRect(b,d,k));a._originOnly=!0;this._graphic=g.graphics.add(new t(a,this.fillSymbol),!0);g.snappingManager&&g.snappingManager._setGraphic(this._graphic);break;case l.FREEHAND_POLYLINE:this._hideTooltip();if(!1===this._canDrawFreehandPoint(c)){r("esri-touch")&&c.preventDefault();return}this._points.push(c.mapPoint.offset(0,0));a.geometry._insertPoints([d.offset(0,0)],0);a.setGeometry(a.geometry);break;case l.FREEHAND_POLYGON:this._hideTooltip();if(!1===this._canDrawFreehandPoint(c)){r("esri-touch")&&
c.preventDefault();return}this._points.push(c.mapPoint.offset(0,0));a.geometry._insertPoints([d.offset(0,0)],0);a.setGeometry(a.geometry)}r("esri-touch")&&c.preventDefault()}},_canDrawFreehandPoint:function(c){if(!this._oldPoint)return!1;var a=this._oldPoint.x-c.screenPoint.x,b=this._oldPoint.y-c.screenPoint.y,d=this._options.tolerance;if((0>a?-1*a:a)<d&&(0>b?-1*b:b)<d)return!1;a=new Date;if(a-this._startTime<this._options.drawTime)return!1;this._startTime=a;this._oldPoint=c.screenPoint;return!0},
_onMouseUpHandler:function(c){if(!this._dragged||!this._graphic)this._clear();else{0===this._points.length&&this._points.push(c.mapPoint.offset(0,0));var a;this.map.snappingManager&&(a=this.map.snappingManager._snappingPoint);var b=this._points[0];a=a||c.mapPoint;var d=this.map.spatialReference,g=h,k;switch(this._geometryType){case g.CIRCLE:case g.ELLIPSE:case g.TRIANGLE:case g.ARROW:case g.LEFT_ARROW:case g.RIGHT_ARROW:case g.UP_ARROW:case g.DOWN_ARROW:case g.RECTANGLE:k=this._graphic.geometry;break;
case g.LINE:k=new u({paths:[[[b.x,b.y],[a.x,a.y]]],spatialReference:d});break;case g.EXTENT:k=(new G(this._normalizeRect(b,a,d))).getExtent();break;case g.FREEHAND_POLYLINE:k=new u(d);k.addPath([].concat(this._points,[a.offset(0,0)]));break;case g.FREEHAND_POLYGON:k=new s(d),b=[].concat(this._points,[a.offset(0,0),this._points[0].offset(0,0)]),!s.prototype.isClockwise(b)&&!this.respectDrawingVertexOrder&&(console.debug(this.declaredClass+" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),
b.reverse()),k.addRing(b)}r("esri-touch")&&c.preventDefault();this._clear();this._drawEnd(k)}},_onClickHandler:function(c){var a;this.map.snappingManager&&(a=this.map.snappingManager._snappingPoint);c=a||c.mapPoint;a=this.map;var b=a.toScreen(c),d=h;this._points.push(c.offset(0,0));switch(this._geometryType){case d.POINT:this._drawEnd(c.offset(0,0));this._setTooltipMessage(0);break;case d.POLYLINE:1===this._points.length?(b=new u(a.spatialReference),b.addPath(this._points),this._graphic=a.graphics.add(new t(b,
this.lineSymbol),!0),a.snappingManager&&a.snappingManager._setGraphic(this._graphic),this._onMouseMoveHandler_connect=q.connect(a,"onMouseMove",this._onMouseMoveHandler),this._tGraphic=a.graphics.add(new t(new u({paths:[[[c.x,c.y],[c.x,c.y]]],spatialReference:a.spatialReference}),this.lineSymbol),!0)):(this._graphic.geometry._insertPoints([c.offset(0,0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.lineSymbol),a=this._tGraphic,b=a.geometry,b.setPoint(0,0,c.offset(0,0)),b.setPoint(0,
1,c.offset(0,0)),a.setGeometry(b));break;case d.POLYGON:1===this._points.length?(b=new s(a.spatialReference),b.addRing(this._points),this._graphic=a.graphics.add(new t(b,this.fillSymbol),!0),a.snappingManager&&a.snappingManager._setGraphic(this._graphic),this._onMouseMoveHandler_connect=q.connect(a,"onMouseMove",this._onMouseMoveHandler),this._tGraphic=a.graphics.add(new t(new u({paths:[[[c.x,c.y],[c.x,c.y]]],spatialReference:a.spatialReference}),this.fillSymbol),!0)):(this._graphic.geometry._insertPoints([c.offset(0,
0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.fillSymbol),a=this._tGraphic,b=a.geometry,b.setPoint(0,0,c.offset(0,0)),b.setPoint(0,1,c.offset(0,0)),a.setGeometry(b));break;case d.MULTI_POINT:c=this._points;1===c.length?(b=new A(a.spatialReference),b.addPoint(c[c.length-1]),this._graphic=a.graphics.add(new t(b,this.markerSymbol),!0),a.snappingManager&&a.snappingManager._setGraphic(this._graphic)):(this._graphic.geometry.addPoint(c[c.length-1]),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.markerSymbol));
break;case d.ARROW:this._addShape([[0,0],[-24,24],[-24,12],[-96,12],[-96,-12],[-24,-12],[-24,-24],[0,0]],b.x,b.y);break;case d.LEFT_ARROW:this._addShape([[0,0],[24,24],[24,12],[96,12],[96,-12],[24,-12],[24,-24],[0,0]],b.x,b.y);break;case d.RIGHT_ARROW:this._addShape([[0,0],[-24,24],[-24,12],[-96,12],[-96,-12],[-24,-12],[-24,-24],[0,0]],b.x,b.y);break;case d.UP_ARROW:this._addShape([[0,0],[-24,24],[-12,24],[-12,96],[12,96],[12,24],[24,24],[0,0]],b.x,b.y);break;case d.DOWN_ARROW:this._addShape([[0,
0],[-24,-24],[-12,-24],[-12,-96],[12,-96],[12,-24],[24,-24],[0,0]],b.x,b.y);break;case d.TRIANGLE:this._addShape([[0,-48],[41.56921938165306,24],[-41.56921938165306,24],[0,-48]],b.x,b.y);break;case d.RECTANGLE:this._addShape([[0,-96],[96,-96],[96,0],[0,0],[0,-96]],b.x-48,b.y+48);break;case d.CIRCLE:this._clear();this._drawEnd(s.createCircle({center:b,r:48,numberOfPoints:60,map:a}));break;case d.ELLIPSE:this._clear(),this._drawEnd(s.createEllipse({center:b,longAxis:48,shortAxis:24,numberOfPoints:60,
map:a}))}this._setTooltipMessage(this._points.length)},_addShape:function(c,a,b){this._setTooltipMessage(0);this._clear();this._drawEnd(this._toPolygon(c,a,b))},_toPolygon:function(c,a,b){var d=this.map,g=new s(d.spatialReference);g.addRing(z.map(c,function(c){return d.toMap({x:c[0]+a,y:c[1]+b})}));return g},_onDblClickHandler:function(c){var a,b=this._points,d=this.map.spatialReference,g=h;r("esri-touch")&&b.push(c.mapPoint);var k=b[b.length-1],l=b[b.length-2],b=k&&l&&k.x===l.x&&k.y===l.y?b.slice(0,
b.length-1):b.slice(0,b.length);switch(this._geometryType){case g.POLYLINE:if(!this._graphic||2>b.length){q.disconnect(this._onMouseMoveHandler_connect);this._clear();this._onClickHandler(c);return}a=new u(d);a.addPath([].concat(b));break;case g.POLYGON:if(!this._graphic||2>b.length){q.disconnect(this._onMouseMoveHandler_connect);this._clear();this._onClickHandler(c);return}a=new s(d);c=[].concat(b,[b[0].offset(0,0)]);!s.prototype.isClockwise(c)&&!this.respectDrawingVertexOrder&&(console.debug(this.declaredClass+
" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),c.reverse());a.addRing(c);break;case g.MULTI_POINT:a=new A(d),z.forEach(b,function(b){a.addPoint(b)})}q.disconnect(this._onMouseMoveHandler_connect);this._clear();this._setTooltipMessage(0);this._drawEnd(a)},_onKeyDownHandler:function(c){c.keyCode===I.ESCAPE&&(q.disconnect(this._onMouseMoveHandler_connect),this._clear(),this._setTooltipMessage(0))},_toggleTooltip:function(c){this._options.showTooltips&&(c?this._tooltip||
(this._tooltip=C.create("div",{"class":"tooltip"},this.map.container),J.isBodyLtr()||D.set(this._tooltip,"direction","rtl"),this._tooltip.style.display="none",this._tooltip.style.position="fixed",this._setTooltipMessage(0),this._onTooltipMouseEnterHandler_connect=q.connect(this.map,"onMouseOver",this._updateTooltip),this._onTooltipMouseLeaveHandler_connect=q.connect(this.map,"onMouseOut",this._hideTooltip),this._onTooltipMouseMoveHandler_connect=q.connect(this.map,"onMouseMove",this._updateTooltip)):
this._tooltip&&(q.disconnect(this._onTooltipMouseEnterHandler_connect),q.disconnect(this._onTooltipMouseLeaveHandler_connect),q.disconnect(this._onTooltipMouseMoveHandler_connect),C.destroy(this._tooltip),this._tooltip=null))},_hideTooltip:function(){var c=this._tooltip;c&&(c.style.display="none")},_setTooltipMessage:function(c){var a=this._tooltip;if(a){var b="";switch(this._geometryType){case h.POINT:b=v.toolbars.draw.addPoint;break;case h.ARROW:case h.LEFT_ARROW:case h.RIGHT_ARROW:case h.UP_ARROW:case h.DOWN_ARROW:case h.TRIANGLE:case h.RECTANGLE:case h.CIRCLE:case h.ELLIPSE:b=
v.toolbars.draw.addShape;break;case h.LINE:case h.EXTENT:case h.FREEHAND_POLYLINE:case h.FREEHAND_POLYGON:b=v.toolbars.draw.freehand;break;case h.POLYLINE:case h.POLYGON:b=v.toolbars.draw.start;1===c?b=v.toolbars.draw.resume:2<=c&&(b=v.toolbars.draw.complete);break;case h.MULTI_POINT:b=v.toolbars.draw.addMultipoint,1<=c&&(b=v.toolbars.draw.finish)}a.innerHTML=b}},_updateTooltip:function(c){var a=this._tooltip;if(a){var b;c.clientX||c.pageY?(b=c.clientX,c=c.clientY):(b=c.clientX+y.body().scrollLeft-
y.body().clientLeft,c=c.clientY+y.body().scrollTop-y.body().clientTop);a.style.display="none";D.set(a,{left:b+this._options.tooltipOffset+"px",top:c+"px"});a.style.display=""}},_redrawGraphic:function(c,a,b,d){if(b||this.map.wrapAround180)(c=this._graphic)&&c.setGeometry(c.geometry),(c=this._tGraphic)&&c.setGeometry(c.geometry)},onActivate:function(){},onDeactivate:function(){},onDrawComplete:function(){},onDrawEnd:function(){}});n.mixin(h,{POINT:"point",MULTI_POINT:"multipoint",LINE:"line",EXTENT:"extent",
POLYLINE:"polyline",POLYGON:"polygon",FREEHAND_POLYLINE:"freehandpolyline",FREEHAND_POLYGON:"freehandpolygon",ARROW:"arrow",LEFT_ARROW:"leftarrow",RIGHT_ARROW:"rightarrow",UP_ARROW:"uparrow",DOWN_ARROW:"downarrow",TRIANGLE:"triangle",CIRCLE:"circle",ELLIPSE:"ellipse",RECTANGLE:"rectangle"});r("extend-esri")&&n.setObject("toolbars.Draw",h,K);return h});
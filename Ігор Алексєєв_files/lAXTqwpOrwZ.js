/*!CK:3729187545!*//*1434942864,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["aODsv"]); }

__d("MessengerScrollableArea.react",["React","ScrollableArea.react","Style","UserAgent","clearImmediate","setImmediate","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=g,o=n.PropTypes,p=20,q=g.createClass({displayName:"MessengerScrollableArea",propTypes:{onScroll:o.func,width:o.number},render:function(){return (g.createElement(h,{className:this.props.className,onScroll:this.props.onScroll?m(this.props.onScroll,50):null,ref:"scrollable",shadow:false,style:this.props.style,width:this.props.width},this.props.children));},componentDidMount:function(){this._resizeCallback=l(this._resize);},componentWillUnmount:function(){k(this._resizeCallback);},_resize:function(){if(!j.isBrowser('IE'))return;var r=this.refs.scrollable.refs.wrap,s=this.refs.scrollable.refs.body;if(!s||!r)return;s=g.findDOMNode(s);r=g.findDOMNode(r);var t=r.offsetWidth-r.clientWidth;if(t>0)i.set(s,'margin-right',(-t)+'px');},getArea:function(){return this.refs.scrollable.getArea();},scrollToBottom:function(){var r=this.getArea();if(r)this.scrollToPosition(r.getScrollHeight());},scrollToTop:function(){var r=this.getArea();if(r)this.scrollToPosition(0);},scrollToPosition:function(r){var s=this.getArea();if(!s)return;s.setScrollTop(r,false);},isScrolledToBottom:function(){var r=this.getArea();if(!r)return false;return r.getScrollTop()+r.getClientHeight()>=r.getScrollHeight()-p;},isScrolledToTop:function(){var r=this.getArea();if(!r)return true;return r.getScrollTop()<=p;},getScrollTop:function(){var r=this.getArea();if(!r)return 0;return r.getScrollTop();}});e.exports=q;},null);
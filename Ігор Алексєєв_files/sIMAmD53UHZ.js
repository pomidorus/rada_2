/*!CK:3914117867!*//*1434942864,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["o2Ngh"]); }

__d("ChatMiniSidebarThread.react",["AvailableListConstants","ChatOpenTab","ChatSidebarConstants","ChatSidebarSections","Image.react","Link.react","WebMessengerPermalinkConstants","React","SplitImage.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();'use strict';var r=n,s=r.PropTypes,t=n.createClass({displayName:"ChatMiniSidebarThread",propTypes:{context:s.string,id:s.string.isRequired,isHighlighted:s.bool,threadName:s.string,onOpenTab:s.func.isRequired,onScrollIntoView:s.func,participants:s.arrayOf(s.object).isRequired,status:s.number.isRequired,thumbSrc:s.string.isRequired},componentDidUpdate:function(u){if(this.props.isHighlighted&&!u.isHighlighted){var v=n.findDOMNode(this);this.props.onScrollIntoView&&this.props.onScrollIntoView(v);}},_openTab:function(u){h.openThread(this.props.id,j.TYPEAHEAD);this.props.onOpenTab();u.preventDefault();},_renderImage:function(){var u;if(this.props.thumbSrc){u=n.createElement(k,{src:this.props.thumbSrc});}else{var v=this.props.participants.map(function(w){return w.image_src;});u=n.createElement(o,{size:i.LITESTAND_CLASSIC_SIZE,srcs:v});}return (n.createElement("div",{className:"_2sb5"},u));},_renderName:function(){var u=this.props.threadName?this.props.threadName:this.props.context;return (n.createElement("div",{className:"_4rqx"},u));},_renderContext:function(){return (n.createElement("div",{className:"_4rqx _1hml"},this.props.threadName?this.props.context:null));},_renderStatus:function(){var u=null;if(this.props.status==g.ACTIVE){u=q('/images/litestand_classic/sidebar/online.png');}else if(this.props.status==g.MOBILE)u=q('/images/litestand_classic/sidebar/pushable.png');return (n.createElement("div",{className:"_2sb6"},u?n.createElement(k,{src:u}):null));},_getHref:function(){return m.getURIPathForThreadID(this.props.id);},render:function(){return (n.createElement("li",{className:(("_2sb2")+(this.props.isHighlighted?' '+"_5aw":''))},n.createElement(l,{className:"_2sb3",href:{url:this._getHref()},onClick:this._openTab,rel:"ignore"},n.createElement("div",{"aria-label":this.props.name,className:(("_2sb4")+(this.props.threadName?' '+"_1hmm":'')),"data-hover":"tooltip","data-tooltip-position":"left"},this._renderImage(),this._renderName(),this._renderContext(),this._renderStatus()))));}});e.exports=t;},null);
/*!CK:601239983!*//*1438812069,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["jndCB"]); }

__d("XAdPreferencesCategoryInfoController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/category_info\/",{ad_id:{type:"Int",required:true},category_fbid:{type:"Int",required:true}});},null);
__d("AdsPreferencesInterestListItem.react",["AdPreferencesDesktopStrings","AsyncRequest","Image.react","Layout.react","xuiglyph","React","ReactLayeredComponentMixin","XAdPreferencesCategoryInfoController","XUIContextualDialog.react","XUIContextualDialogTitle.react","XUIContextualDialogBody.react","XUIText.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=j.Column,v=j.FillColumn,w=l,x=w.PropTypes,y=l.createClass({displayName:"AdsPreferencesInterestListItem",mixins:[m],propTypes:{adID:x.number.isRequired,interest:x.object.isRequired,isListItem:x.bool.isRequired,onInterestClick:x.func.isRequired,removed:x.bool.isRequired,setDialog:x.func,setReportDialog:x.func},getInitialState:function(){return {xHover:false,iHover:false,interestHover:false,enterTimeout:-1,suggestions:{}};},_xHover:function(event){this.setState({xHover:!this.state.xHover});},_xOver:function(event){this.setState({xHover:true});},_iHover:function(event){this.setState({iHover:!this.state.iHover});},_interestHover:function(z){this.setState({interestHover:z});},_interestEnter:function(event,z,aa){if(aa){this._interestHover(true);}else{var ba=setTimeout(this._interestEnter.bind(this,true,true,true),250);this.setState({enterTimeout:ba});}},_interestLeave:function(event){this._interestHover(false);clearTimeout(this.state.enterTimeout);},_handleInterestClick:function(event){var z=this.refs['toggle_'+this.props.interest.id];this.props.onInterestClick(this.props.interest,this.props.removed,z);},_onInterestTextClick:function(event){if(this.state.suggestions>0&&this.props.setDialog){this.props.setDialog(this.props.interest,this.state.suggestions);}else{var z=n.getURIBuilder().setInt('ad_id',this.props.adID).setInt('category_fbid',this.props.interest.id).getURI();new h(z).setHandler(function(aa){var ba=aa.payload,ca=ba.suggestions,da=this.props.interest;if(!da.description)da.description=t._("\u042d\u0442\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432\u0430\u043c\u0438.");this.setState({suggestions:ca});if(this.props.setDialog)this.props.setDialog(da,ba.suggestions);}.bind(this)).send();}},_onReportPreferenceClick:function(event){if(this.props.setReportDialog)this.props.setReportDialog(this.props.interest);},render:function(){var z=((this.state.iHover?"hidden_elem":'')),aa=((!this.state.iHover?"hidden_elem":'')),ba=((this.state.interestHover&&this.props.isListItem?"_2imp":'')+(!this.state.interestHover&&this.props.isListItem?' '+"_2imq":'')+(this.props.removed?' '+"hidden_elem":'')),ca=!this.props.isListItem?null:l.createElement("span",{className:ba,ref:this.props.interest.name,onMouseEnter:this._iHover,onMouseLeave:this._iHover},l.createElement(i,{className:z,src:k({name:'info-solid',shade:'light',size:'medium'})}),l.createElement(i,{className:aa,src:k({name:'info-solid',shade:'dark',size:'medium'})})),da=l.createElement("span",{className:ba,onMouseEnter:this._xHover,onMouseLeave:this._xHover,onMouseMove:this._xOver},l.createElement(i,{className:((this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'dark'})}),l.createElement(i,{className:((!this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'accent'})})),ea=l.createElement("div",{className:"_2imr"},l.createElement("a",{href:"#"},t._("\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))),fa=l.createElement(r,{className:((this.props.removed?"_2ims":'')),size:"small",weight:"bold","data-fbid":this.props.interest.id},this.props.interest.name),ga=(!this.props.isListItem||this.props.removed)?fa:l.createElement("a",{onClick:this._onInterestTextClick},fa),ha=(("_2imt")+(!this.props.isListItem?' '+"_2imu":'')),ia=l.createElement(v,null,l.createElement("a",{onClick:this._onReportPreferenceClick,className:ba},l.createElement(r,{size:"small",weight:"bold"},"[FB-Only] Report"))),ja=(this.props.isListItem&&this.props.setReportDialog)?ia:null,ka=null;if(this.props.interest.disambiguation_category)ka=l.createElement("span",{className:"_1env"},this.props.interest.disambiguation_category);return (l.createElement("li",{className:ha,onMouseEnter:this._interestEnter,onMouseLeave:this._interestLeave},l.createElement(j,null,l.createElement(v,null,ga,ka,l.createElement("span",{className:"_2imv"},ca)),ja,l.createElement(u,{className:"mlm"},l.createElement("div",{onClick:this._handleInterestClick,className:"_2imw",ref:'toggle_'+this.props.interest.id},!this.props.removed?da:ea)))));},renderLayers:function(){var z=this.props.interest.description?this.props.interest.description:t._("\u042d\u0442\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432\u0430\u043c\u0438.");return {contextualDialog:l.createElement(o,{contextRef:function(){return this.refs[this.props.interest.name];}.bind(this),shown:this.state.iHover,position:"above",focusContextOnHide:false,width:o.WIDTH.NORMAL},l.createElement(p,null,g.about_this_ads_preference),l.createElement(q,null,z))};}});e.exports=y;},null);
__d("XAdPreferencesInterestsWriteController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/edit_interests\/",{ad_id:{type:"Int",required:true},action:{type:"Enum",required:true,enumType:1},type:{type:"Enum",required:true,enumType:1},fbids:{type:"IntVector",required:true}});},null);
__d("XAdPreferencesNUXController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/nux\/",{type:{type:"String",required:true}});},null);
__d("XAdsPreferencesFeedbackController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/feeedback\/",{ad_id:{type:"Int",required:true},favorite:{type:"Enum",required:true,enumType:1}});},null);
__d("AdsPrefs",["AdsPreferencesInterestListItem.react","AsyncRequest","CSS","DOM","Event","React","XAdPreferencesInterestsWriteController","XAdPreferencesNUXController","XAdsPreferencesFeedbackController","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();function s(w,x){i.toggleClass(w,"hidden_elem");var y=i.hasClass(w,"hidden_elem")?'ad_useful':'ad_neutral',z=o.getURIBuilder().setInt('ad_id',x).setEnum('favorite',y).getURI(),aa=new h(z);aa.send();}function t(){var w=n.getURIBuilder().setString('type','interest_nux_ts').getURI();new h(w).send();}function u(w,x,y){var z=x?'add':'del',aa=m.getURIBuilder().setInt('ad_id',w.adID).setEnum('action',z).setEnum('type','interest').setIntVector('fbids',[w.id]).getURI();new h(aa).send();l.render(l.createElement(g,{className:"_589n",adID:w.adID,interest:w,isListItem:false,onInterestClick:u,removed:!x}),document.getElementById(w.rootID));if(w.dialog&&y!=null){t();w.dialog.setContext(y);w.dialog.show();}}var v={initRHCFeedback:function(w,x,y){r(k.listen(x,'click',function(z){s(y,w);z.kill();}));},createListElement:function(w,x,y,z,aa,ba){var ca={id:x,name:y,adID:w,rootID:z,dialog:ba};l.render(l.createElement(g,{className:"_589n",adID:w,interest:ca,isListItem:false,onInterestClick:u,removed:false}),document.getElementById(z));},initExpandable:function(w){r(k.listen(w,'click',function(x){var y=j.scry(w,"div._2fdq")[0],z=j.scry(w,"._4r43")[0],aa=j.scry(w,"._1uhj")[0];i.toggleClass(z,'hidden_elem');i.toggleClass(aa,'hidden_elem');i.toggleClass(y,'hidden_elem');}));},toggleFavorite:function(w){var x=j.find(w.getRoot(),'.img');s(x,w.getLabel());},surveyClickable:function(w,x,y){w.forEach(function(z){return r(k.listen(z,'click',function(aa){i.hide(x);i.show(y);}));});}};e.exports=v;},null);
__d("PixelNumConverter",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={pixelValue:function(h){return h!==null?Number(h)+'px':'auto';},numValue:function(h){return Number(h.replace("px",""));}};e.exports=g;},null);
__d("DesktopHscrollUnit",["Arbiter","BanzaiLogger","BanzaiODS","CSS","DesktopHscrollUnitEventConstants","DOM","DOMQuery","Locale","Parent","PixelNumConverter","Style","csx","cx","getStyleProperty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v="_2_tg",w=300,x="_2_th",y="_2_ti",z="_2_tj",aa="_hy9",ba="_1kf5",ca="_20yh",da="_i6m",ea="_1mrv",fa="_5pat",ga="div._3938",ha="._nxj",ia="div._20yh",ja;function ka(la,ma,na,oa,pa,qa,ra,sa,ta,ua){"use strict";this.$DesktopHscrollUnit0=la;this.$DesktopHscrollUnit1=ma;this.$DesktopHscrollUnit2=na;this.$DesktopHscrollUnit3=oa;this.$DesktopHscrollUnit4=qa;this.$DesktopHscrollUnit5=0;this.$DesktopHscrollUnit6=1+qa.length;this.$DesktopHscrollUnit7=[pa];this.$DesktopHscrollUnit8=ra;this.$DesktopHscrollUnit9=new g();this.$DesktopHscrollUnita=0;this.$DesktopHscrollUnitb=ta;this.$DesktopHscrollUnitc=[];this.$DesktopHscrollUnitd=-1;this.$DesktopHscrollUnite=ua;ja=ua;this.$DesktopHscrollUnitf=m.find(la,"^div._5jmm");this.$DesktopHscrollUnitg=this.$DesktopHscrollUnitf.getAttribute('data-ft');this.$DesktopHscrollUnit2.initPager(this,this.$DesktopHscrollUnit3);sa.forEach(function(va){va.init(this);},this);j.addClass(pa.ad,x);j.addClass(pa.ad,ca);if(pa.subheader)this.$DesktopHscrollUnith(pa.subheader);this.$DesktopHscrollUniti(this.$DesktopHscrollUnit5);j.addClass(this.$DesktopHscrollUnitf,"_sf6");j.conditionClass(this.$DesktopHscrollUnitf,"_2_tl",this.$DesktopHscrollUnit8);this.$DesktopHscrollUnitj();g.subscribe(k.HSCROLL_ITEM_HIDE_EVENT,this.hideItem.bind(this));g.subscribe(k.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,this.scrollItemBeforeXout.bind(this));g.subscribe(k.HSCROLL_ITEM_UNHIDE_EVENT,this.unhideItem.bind(this));g.subscribe(k.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,this.logLastAdXoutEvent.bind(this));}ka.getFirstAdsHscrollElement=function(la){"use strict";var ma=m.scry(la,ga);return ma[0];};ka.hideAdsHscroll=function(la){"use strict";var ma=ka.getFirstAdsHscrollElement(la),na=j.hasClass(la,da);if(ma&&!na){g.inform(k.HSCROLL_ITEM_HIDE_EVENT,ma.id);return true;}return false;};ka.removeHeaderMargin=function(la){"use strict";var ma=m.find(la,ha);j.removeClass(ma,ea);};ka.handleOptimisticHideInUnit=function(la){"use strict";var ma=ka.getFirstAdsHscrollElement(la);if(ma&&ja){g.inform(k.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,ma.id);var na=l.scry(ma,ia);if(na.length!=1)return true;g.inform(k.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:ma.id,action:'Hide'});}return false;};ka.handleOptimisticUnhideInUnit=function(la){"use strict";var ma=o.byClass(la,fa),na=ka.getFirstAdsHscrollElement(ma),oa=j.hasClass(ma,"_i6m");if(na&&oa)g.inform(k.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:na.id,action:'Unhide'});return na&&!oa;};ka.prototype.scrollItemBeforeXout=function(la,ma){"use strict";if(this.$DesktopHscrollUnit0.id!=ma||!this.$DesktopHscrollUnite)return;this.$DesktopHscrollUnitd=this.$DesktopHscrollUnit5;if(this.$DesktopHscrollUnit5+1==this.getNumVisibleAds()){this.scrollPrevious();}else this.scrollNext();};ka.prototype.hideItem=function(la,ma){"use strict";if(this.$DesktopHscrollUnit0.id!=ma||!this.$DesktopHscrollUnite)return;var na={item:this.$DesktopHscrollUnit7.splice(this.$DesktopHscrollUnitd,1)[0],index:this.$DesktopHscrollUnitd};this.$DesktopHscrollUnitc.push(na);j.removeClass(na.item.ad,ca);if(this.$DesktopHscrollUnitd!=this.getNumVisibleAds())this.$DesktopHscrollUnit5=this.$DesktopHscrollUnitd;this.$DesktopHscrollUnit9.inform(k.HSCROLL_PAGER_ITEM_HIDE_EVENT,this.$DesktopHscrollUnit5,g.BEHAVIOR_EVENT);this.logIndividualXout(ma,'Hide');};ka.prototype.unhideItem=function(la,ma){"use strict";if(this.$DesktopHscrollUnit0.id!=ma||!this.$DesktopHscrollUnite)return;var na=this.$DesktopHscrollUnitc.pop();this.$DesktopHscrollUnit7.splice(na.index,0,na.item);j.addClass(na.item.ad,ca);this.$DesktopHscrollUnitk(na.index);this.logIndividualXout(ma,'Unhide');};ka.prototype.logLastAdXoutEvent=function(la,ma){"use strict";if(this.$DesktopHscrollUnit0.id!=ma.id)return;this.logIndividualXout(ma.id,ma.action);};ka.prototype.logIndividualXout=function(la,ma){"use strict";var na=document.getElementById(la),oa=o.byClass(na,fa).getAttribute('id'),pa;if(ma=='Hide'){pa=1;}else pa=-1;h.log('FeedAdsHscrollIndividualXoutLoggerConfig',{ads_hscroll_unit_id:oa,number_of_total_ads:this.$DesktopHscrollUnit6,number_of_hidden_ads:pa,action:ma});};ka.prototype.getArbiter=function(){"use strict";return this.$DesktopHscrollUnit9;};ka.prototype.getAdContainer=function(){"use strict";return this.$DesktopHscrollUnit0;};ka.prototype.getPager=function(){"use strict";return this.$DesktopHscrollUnit2;};ka.prototype.getSelectedItem=function(){"use strict";return this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5];};ka.prototype.getSelectedIndex=function(){"use strict";return this.$DesktopHscrollUnit5;};ka.prototype.getNumItems=function(){"use strict";return this.$DesktopHscrollUnit6;};ka.prototype.getID=function(){"use strict";return this.$DesktopHscrollUnitf.id;};ka.prototype.getNumOfHiddenItems=function(){"use strict";return this.$DesktopHscrollUnitc.length;};ka.prototype.getNumVisibleAds=function(){"use strict";return this.$DesktopHscrollUnit6-this.$DesktopHscrollUnitc.length;};ka.prototype.scrollNext=function(){"use strict";if(this.$DesktopHscrollUnit5+1<this.getNumVisibleAds()){this.$DesktopHscrollUnitk(this.$DesktopHscrollUnit5+1);if(this.$DesktopHscrollUnit5===1)i.bumpEntityKey('feed_ads',this.$DesktopHscrollUnitl());}};ka.prototype.scrollPrevious=function(){"use strict";if(this.$DesktopHscrollUnit5-1>=0)this.$DesktopHscrollUnitk(this.$DesktopHscrollUnit5-1);};ka.prototype.addOffscreenItems=function(la){"use strict";this.$DesktopHscrollUnit4.push.apply(this.$DesktopHscrollUnit4,la);this.$DesktopHscrollUnit6+=la.length;this.$DesktopHscrollUnit9.inform('onAdditionalItemsAdded',{});};ka.prototype.$DesktopHscrollUniti=function(la){"use strict";var ma=this.$DesktopHscrollUnit7[la];if(this.$DesktopHscrollUnit8&&ma.subheader){l.remove(ma.subheader);l.appendContent(this.$DesktopHscrollUnit1,ma.subheader);this.$DesktopHscrollUnit1.offsetHeight;}this.$DesktopHscrollUnit7.forEach(function(na,oa){var pa=oa==la;j.conditionClass(na.ad,z,pa);j.conditionClass(na.ad,aa,!pa);if(na.subheader)j.conditionClass(na.subheader,z,pa);});this.$DesktopHscrollUnit9.inform('onShow',{item:ma,index:la},g.BEHAVIOR_EVENT);g.inform(k.HSCROLL_ITEM_SHOWN_EVENT);};ka.prototype.$DesktopHscrollUnitk=function(la){"use strict";this.$DesktopHscrollUnit9.inform('onBeforeTransition',{item:this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5]},g.BEHAVIOR_EVENT);while(this.$DesktopHscrollUnit4.length>0&&la>=this.$DesktopHscrollUnit7.length)this.$DesktopHscrollUnitm(this.$DesktopHscrollUnit4.shift());this.$DesktopHscrollUniti(la);if(this.$DesktopHscrollUnit8){this.$DesktopHscrollUnita++;j.addClass(this.$DesktopHscrollUnit0,v);setTimeout(function(){if(--this.$DesktopHscrollUnita===0)j.removeClass(this.$DesktopHscrollUnit0,v);}.bind(this),w);this.$DesktopHscrollUnit9.inform('onAnimate',{item:this.$DesktopHscrollUnit7[la]},g.BEHAVIOR_EVENT);var ma,na;u(function(){ma=p.numValue(t(this.$DesktopHscrollUnit0,'padding-bottom'));na=this.$DesktopHscrollUnit0.offsetHeight;}.bind(this),function(){q.set(this.$DesktopHscrollUnit0,'min-height',j.hasClass(this.$DesktopHscrollUnit7[la].ad,ba)?'0px':p.pixelValue(na-ma));q.set(this.$DesktopHscrollUnit7[0].ad,n.isRTL()?'margin-right':'margin-left',(la*-100)+'%');}.bind(this));}this.$DesktopHscrollUnit5=la;this.$DesktopHscrollUnitj();};ka.prototype.$DesktopHscrollUnitm=function(la){"use strict";j.addClass(la.ad,x);j.addClass(la.ad,ca);l.appendContent(this.$DesktopHscrollUnit0,la.ad);g.inform(k.HSCROLL_ITEM_INSERTED_EVENT);if(la.subheader){this.$DesktopHscrollUnith(la.subheader);l.appendContent(this.$DesktopHscrollUnit1,la.subheader);}this.$DesktopHscrollUnit7.push(la);};ka.prototype.$DesktopHscrollUnitj=function(){"use strict";var la=JSON.parse(this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5].ad.getAttribute('data-ft')),ma=JSON.parse(this.$DesktopHscrollUnitg);for(var na in la)ma[na]=la[na];this.$DesktopHscrollUnitf.setAttribute('data-ft',JSON.stringify(ma));g.inform('FeedAdsClickLogger/refreshTrackingData',{});};ka.prototype.$DesktopHscrollUnith=function(la){"use strict";j.addClass(la,y);if(this.$DesktopHscrollUnit8){var ma=l.create('div');j.addClass(ma,"_2_tm");l.appendContent(la,ma);}};ka.prototype.$DesktopHscrollUnitl=function(){"use strict";var la='old_desktop_hscroll_first_next_pos_';return la.concat(this.$DesktopHscrollUnitb);};e.exports=ka;e.exports.getFirstAdsHscrollElement=ka.getFirstAdsHscrollElement;e.exports.hideAdsHscroll=ka.hideAdsHscroll;e.exports.removeHeaderMargin=ka.removeHeaderMargin;e.exports.handleOptimisticHideInUnit=ka.handleOptimisticHideInUnit;e.exports.handleOptimisticUnhideInUnit=ka.handleOptimisticUnhideInUnit;},null);
__d("EntstreamFeedObject",["CSS","Parent","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={getRoot:function(k){return h.byClass(k,"_5jmm");},getHscrollOuterRootIfAvailable:function(k){var l=k;if(g.hasClass(l,"_170y"))l=j.getRoot(l.parentNode);return l;}};e.exports=j;},null);
__d("EntstreamFeedObjectFollowup",["CSS","DOM","EntstreamFeedObject","Event","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={getFollowup:function(o){var p=h.scry(o,"._5lum");if(!p.length)p=h.scry(o.parentNode,"._5lum");return p?p[0]:null;},initCloseButton:function(o){var p=h.find(o,"._5xsl"),q=j.listen(p,'click',function(){q.remove();h.remove(o);});o.listener=q;},stopListenCloseButton:function(o){if(o.listener)o.listener.remove();},addFollowup:function(o,p,q){var r=g.hasClass(o,"_5pat"),s=h.create('div',{className:"_5lum"});if(r){g.addClass(s,"_5pau");}else g.addClass(s,"_1f84");if(q)if(typeof q==='string'){g.addClass(s,q);}else if(q instanceof Array)for(var t=0;t<q.length;t++)g.addClass(s,q[t]);var u=h.scry(o,"._5v3q")[0];if(u)o=u;var v=n.getFollowup(o);if(v)this.removeFollowup(v);if(p){h.appendContent(s,p);this.initCloseButton(s);if(g.hasClass(s,"_4-u3")){h.prependContent(o,s);}else h.insertBefore(o,s);}else h.prependContent(o,s);return s;},removeFollowup:function(o){var p=n.getFollowup(o);this.stopListenCloseButton(p);h.remove(p);},appendToFollowup:function(o,p){var q=i.getRoot(m(o)),r=n.getFollowup(q);h.appendContent(r,p);}};e.exports=n;},null);
__d("EntstreamFeedObjectDigest",["EntstreamFeedObject","EntstreamFeedObjectFollowup","cx","ge"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={toggleDigest:function(l,m,n){var o=l.getValue()==='digest_on'?n.digest_off:n.digest_on,p=g.getRoot(j(m));h.addFollowup(p,o,"_521o");}};e.exports=k;},null);
__d("PostsByOtherPreviewObject",["Parent","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={getRoot:function(j){return g.byClass(j,"_5kjo");}};e.exports=i;},null);
__d("EntstreamFeedObjectFollow",["EntstreamFeedObject","PostsByOtherPreviewObject","EntstreamFeedObjectFollowup","Event","Parent","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={toggleFollow:function(o,p,q){var r=o.getValue()=='follow_post'?q.follow_post:q.unfollow_post,s=g.getRoot(m(p));if(s===null)s=h.getRoot(m(p));var t=i.addFollowup(s,r,"_521o")||i.getFollowup(s);j.listen(t,'click',function(event){var u=event.getTarget(),v="_1f89";if(k.byClass(u,v)){n.toggleFollow(o,p,q);o.toggleMenuItem();}});}};e.exports=n;},null);
__d("EntstreamFeedObjectHide",["Event","CSS","DesktopHscrollUnit","EntstreamFeedObject","EntstreamFeedObjectFollowup","Focus","TabbableElements","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={hide:function(q,r){var s=j.getRoot(o(q));s=j.getHscrollOuterRootIfAvailable(s);k.addFollowup(s,r);var t=i.hideAdsHscroll(s);if(!t)h.addClass(s,"_i6m");p.setFocus(s);},registerUnhide:function(q,r){g.listen(q,'click',function(){if(r)r.send();var s=j.getRoot(q);s=j.getHscrollOuterRootIfAvailable(s);p.unhide(s);});},setFocus:function(q){var r=m.find(q);if(r&&r[0])l.setWithoutOutline(r[0]);},unhide:function(q){k.removeFollowup(q);h.removeClass(q,"_i6m");p.setFocus(q);}};e.exports=p;},null);
__d("EntstreamFeedObjectSeeFirstOff",["DOM","CSS","EntstreamFeedObject","ge","cx","Event","csx","Parent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={turnOffSeeFirst:function(p,q,r){var s=i.getRoot(j(q));if(!s)return;h.hide(p.getRoot());var t=p.getRoot().getAttribute('data-see-first-off-id'),u='see_first_off_'+t;this.showTombstone(s,p,t,r[u]);this.adjustIndicator(s,p);},adjustIndicator:function(p,q){var r=g.scry(p,"._zwz");if(!r||r.length===0)return;r=r[0];var s=n.byClass(q.getRoot(),"_5pbk"),t=g.scry(s,"._3bb4"),u=true;t.forEach(function(v){u=u&&!h.shown(v);});if(u){h.hide(r);}else h.show(r);},showTombstone:function(p,q,r,s){var t=this.getTombstone(p);if(t!==null){this.updateTombstone(p,t,q,s);return;}t=g.create('div',{className:"_4ua_"},s);g.insertBefore(p,t);this.listenOnUndo(p,t,q);},getTombstone:function(p){var q=null;while(p.previousSibling!==null){var r=p.previousSibling;if(h.hasClass(r,"_4ua_")){q=r;break;}else if(h.hasClass(r,"_5jmm"))break;p=p.previousSibling;}return q;},updateTombstone:function(p,q,r,s){g.setContent(q,s);this.listenOnUndo(p,q,r);},listenOnUndo:function(p,q,r){var s=g.scry(q,"._4ub0");if(s.length===0){return;}else s=s[0];q.listener&&q.listener.remove();var t=l.listen(s,'click',function(){t.remove();g.remove(q);h.show(r.getRoot());this.adjustIndicator(p,r);}.bind(this));q.listener=t;}};e.exports=o;},null);
__d("YouTube",["CSS","DOM","DOMQuery","Event","Keys","LitestandStoryInsertionStatus","SubscriptionsHandler","UserAgent_DEPRECATED","Focus","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(r,s,t){"use strict";var u=new m();u.addSubscriptions(j.listen(r,'load',this.listening.bind(this)),l.registerBlocker(function(){return this.playerState===q.STATE_PLAYING;}.bind(this)));Object.assign(this,{iframe:r,autofocus:s,autoplay:t,playerState:q.STATE_UNSTARTED,muted:false,volume:100,currentTime:0,timer:null,handler:u});if(s)o.set(r);}q.prototype.id=function(){"use strict";return this.iframe.id;};q.prototype.post=function(r){"use strict";r.id=this.id();this.iframe.contentWindow.postMessage(JSON.stringify(r),'*');};q.prototype.listening=function(){"use strict";this.post({event:'listening'});clearTimeout(this.timer);this.timer=setTimeout(this.listening.bind(this),100);};q.prototype.update=function(r){"use strict";if(r.event=='initialDelivery'){clearTimeout(this.timer);if((n.webkit()||n.firefox())&&r.info&&r.info.debugText.match(/flashVersion/)){this.addAccessibleButtons();if(n.firefox())this.iframe.tabIndex=-1;}}if(r.info)['playerState','muted','volume','currentTime'].forEach(function(s){if(r.info.hasOwnProperty(s))this[s]=r.info[s];}.bind(this));};q.prototype.togglePlay=function(){"use strict";this.post({event:'command',func:(this.playerState==q.STATE_PLAYING)?'pauseVideo':'playVideo'});};q.prototype.toggleMute=function(){"use strict";this.post({event:'command',func:this.muted?'unMute':'mute'});};q.prototype.addAccessibleButtons=function(){"use strict";this.addAccessibleButton('Mute',"_505m",this.toggleMute.bind(this));this.addAccessibleButton('Play',"_505n",this.togglePlay.bind(this));};q.prototype.addAccessibleButton=function(r,s,t){"use strict";var u=h.create('button',{'class':s,tabindex:0},r);h.insertAfter(this.iframe,u);this.handler.addSubscriptions(j.listen(u,'click',t),j.listen(u,'mouseover',g.hide.bind(null,u)),j.listen(this.iframe,'mouseout',g.show.bind(null,u)),j.listen(u,'focus',function(){if(!this.autoplay&&this.playerState==q.STATE_UNSTARTED){this.post({event:'command',func:'playVideo'});this.post({event:'command',func:'pauseVideo'});}}.bind(this)),j.listen(u,'keydown',function(v){switch(v.keyCode){case k.UP:case k.DOWN:this.post({event:'command',func:'setVolume',args:[this.volume+((v.keyCode==k.UP)?10:-10)]});v.prevent();break;case k.RIGHT:case k.LEFT:this.post({event:'command',func:'seekTo',args:[this.currentTime+((v.keyCode==k.RIGHT)?10:-10)]});v.prevent();break;}}.bind(this)));return u;};q.prototype.destroy=function(){"use strict";this.handler.release();delete q.instances[this.id()];if(!Object.keys(q.instances).length)q.handler.remove();};q.register=function(r,s,t){"use strict";if(!window.postMessage)return;if(!Object.keys(q.instances).length)q.handler=j.listen(window,'message',function(v){try{var w=JSON.parse(v.data);if(q.instances[w.id])q.instances[w.id].update(w);}catch(v){}});var u=new q(i.find(r,'iframe'),s,t);q.instances[u.id()]=u;};Object.assign(q,{STATE_UNSTARTED:-1,STATE_PLAYING:1,instances:{},handler:null});e.exports=q;},null);
__d("EntstreamHomeFeedObjectHide",["AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHide","Event","TrackingNodes","YouTube","csx","cx","ge","fbt","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t={stopVideo:function(u){var v=s(u),w=i.find(v,"^._5jmm"),x=i.scry(w,'iframe');for(var y=0;y<x.length;y++){var z=n.instances[i.getID(x[y])];if(z&&(z.playerState===n.STATE_PLAYING))z.togglePlay();}var aa=i.scry(w,'video');for(var ba=0;ba<aa.length;ba++)if(('paused' in aa[ba])&&!aa[ba].paused)if(typeof aa[ba].pause==='function')aa[ba].pause();},hide:function(u,v,w,x){t.stopVideo(u);var y=j.getRoot(q(u)),z=h.hasClass(y,"_5pat"),aa;if(z&&w=='afrostart'){aa='';}else{var ba=w=='hide'||w=='afrostart'?r._("\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0441\u043a\u0440\u044b\u0442\u0430 \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u041b\u0435\u043d\u0442\u044b."):r._("\u042d\u0442\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u044c \u0431\u044b\u043b\u0430 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u043a\u0430\u043a \u0441\u043f\u0430\u043c."),ca=w=='hide'||w=='afrostart'?r._("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"):r._("\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),da=m.getTrackingInfo(m.types.UNHIDE_LINK),ea=i.create('a',{href:'#','data-ft':da},ca),fa={};if(v)fa.token=v;if(x)fa.hideable_token=x;var ga=new g().setURI('/ajax/entstream/home/story/unhide').setMethod('POST').setData(fa).setRelativeTo(ea);k.registerUnhide(ea,ga);aa=i.create('div',{'class':"_1f86"},[ba,' ',ea]);}k.hide(u,aa);},registerHide:function(u,v,w,x){l.listen(u,'click',function(){t.hide(u.getAttribute('id'),v,w,x);});}};e.exports=t;},null);
__d("MenuTogglingItem",["DOM","MenuItem"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.handleClick=function(){"use strict";this.toggleMenuItem();return j.handleClick.call(this);};k.prototype.toggleMenuItem=function(){"use strict";this._data=Object.assign({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup});this._rerender();};k.prototype.setValue=function(l){"use strict";this._data=Object.assign({},this._data,{value:l});};k.prototype._rerender=function(){"use strict";var l=this._anchor;g.replace(l,this._renderItemContent());};e.exports=k;},null);
__d("EntstreamHomeFeedObjectOptionsMenu",["AdsPrefs","BanzaiLogger","CSS","DesktopHscrollUnit","DOM","EntstreamFeedObject","EntstreamFeedObjectDigest","EntstreamFeedObjectSeeFirstOff","EntstreamFeedObjectFollow","EntstreamFeedObjectFollowup","EntstreamHomeFeedObjectHide","MenuTogglingItem","UFICentralUpdates","UFIConstants","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();function w(x,y,z,aa,ba,ca,da,ea,fa,ga,ha){x.subscribe('itemclick',function(ja,ka){var la=ka.item.getRoot(),ma=la.getAttribute('data-feed-option-name'),na=i.hasClass(la,"_50o2")||i.hasClass(la,"_50o0");if(ma)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:ma,is_secondary:na?1:0,event_type:'clk',feed_location:da,session_id:ea,is_sponsored:fa,is_self_story:ga});if(typeof ka.item.getValue!=='function')return;switch(ka.item.getValue()){case 'hide':case 'markspam':case 'afrostart':q.hide(y,z,ka.item.getValue(),ba);break;case 'afro_direct_action':var oa=l.getRoot(v(y));oa=l.getHscrollOuterRootIfAvailable(oa);var pa=ka.item.getRoot().getAttribute('data-optimistic-hide');if(pa){if(p.getFollowup(oa))p.removeFollowup(oa);var qa=k.create('div',{className:"_5lum"});k.appendContent(qa,ka.item.getRoot().getAttribute('data-action-in-progress-string'));k.insertBefore(oa.firstChild,qa);var ra=j.handleOptimisticHideInUnit(oa);if(!ra)i.addClass(oa,"_i6m");}break;case 'follow_post':case 'unfollow_post':o.toggleFollow(ka.item,y,aa);break;case 'ad_useful':case 'ad_neutral':g.toggleFavorite(ka.item);ja.kill();break;case 'digest_on':case 'digest_off':m.toggleDigest(ka.item,y,aa);break;case 'see_first_off':n.turnOffSeeFirst(ka.item,y,aa);break;}}.bind(this));var ia=false;x.subscribe('show',function(){h.log('FeedStoryOptionMenuLoggerConfig',{option_name:'root',event_type:'clk',feed_location:da,session_id:ea,is_sponsored:fa,is_self_story:ga});if(!!ha&&Object.getOwnPropertyNames(ha).length&&ia===false){ia=true;h.log('AdsPreferencesLoggerConfig',ha);}var ja=i.hasClass(x.getRoot(),"_50o1"),ka=i.hasClass(x.getRoot(),"_50n_");x.forEachItem(function(la){var ma=la.getRoot(),na=ma.getAttribute('data-feed-option-name'),oa=i.hasClass(ma,"_50o2"),pa=i.hasClass(ma,"_50o0"),qa=i.hasClass(ma,"_50nd"),ra=i.hasClass(ma,"_50ne"),sa=(ja&&oa)||(ka&&pa)||(!ja&&qa)||(!ka&&ra),ta=oa||pa;if(na&&!sa)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:na,is_secondary:ta?1:0,event_type:'imp',feed_location:da,session_id:ea,is_sponsored:fa,is_self_story:ga});la.onShow();});});s.subscribe('update-actions',function(ja,ka){if(ka.payloadsource===t.UFIPayloadSourceType.USER_ACTION){var la=ka.actions||[];for(var ma=0;ma<la.length;ma++)if(la[ma].actiontype===t.UFIActionType.ADD_COMMENT_ACTION){if(la[ma].feedbackfbid!=ca)return;x.getRoot();x.forEachItem(function(na){if(na instanceof r&&na.getValue()==='unfollow_post')na.handleClick();});}}});}e.exports=w;},null);
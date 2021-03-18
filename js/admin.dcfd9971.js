(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"159b":function(e,t,i){var s=i("da84"),n=i("fdbc"),l=i("17c2"),a=i("9112");for(var r in n){var o=s[r],c=o&&o.prototype;if(c&&c.forEach!==l)try{a(c,"forEach",l)}catch(d){c.forEach=l}}},"17c2":function(e,t,i){"use strict";var s=i("b727").forEach,n=i("a640"),l=n("forEach");e.exports=l?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"1a44":function(e,t,i){"use strict";i("5bca")},"1dde":function(e,t,i){var s=i("d039"),n=i("b622"),l=i("2d00"),a=n("species");e.exports=function(e){return l>=51||!s((function(){var t=[],i=t.constructor={};return i[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2b98":function(e,t,i){"use strict";i("f09b")},3530:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"keep"}},[i("router-link",{staticClass:"goback",attrs:{to:"/"}},[i("p",[e._v("🚪")]),i("span",[e._v("Go to slides")])]),i("v-toolbar",{staticClass:"test",attrs:{color:"amber",app:"",absolute:""}},[i("v-spacer"),i("span",{staticClass:"title ml-3 mr-5"},[e._v("🎤 📺 Conference Toolkit Settings")]),i("v-spacer")],1),i("v-content",[i("v-tabs",{attrs:{color:"dark",dark:"","slider-color":"yellow"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("v-tab",{key:"setting",attrs:{ripple:""}},[e._v(" 🎛 Settings ")]),i("v-tab",{key:"howtouse",attrs:{ripple:""}},[e._v(" 🤷‍ How to use ")]),i("v-tab",{key:"help",attrs:{ripple:""}},[e._v(" 🙏 Help ")]),i("v-tab-item",{key:"setting"},[i("c-settings")],1),i("v-tab-item",{key:"howtouse"},[i("c-howtouse")],1),i("v-tab-item",{key:"help"},[i("c-help")],1)],1)],1),i("v-footer",{staticClass:"pa-3",attrs:{color:"amber"}},[i("v-spacer"),i("div",[e._v(" </> with ❤️by "),i("a",{attrs:{target:"_blank",href:"https://twitter.com/AurelienLoyer"}},[e._v("Aurélien Loyer")])]),i("v-spacer")],1)],1)},n=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"howtouse"},[i("h1",{attrs:{title:"How to use ?"}},[e._v(" 🤷‍ ")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("div",{staticClass:"keys"},e._l(e.keys,(function(t,s){return i("div",{key:"key-"+s,staticClass:"item"},[i("div",{staticClass:"key"},[e._v(" "+e._s(t.value)+" ")]),i("label",[e._v(e._s(t.label))])])})),0)])],1)},a=[],r={data:function(){return{keys:[{value:"␠ Space",label:"Play / Pause slider"},{value:"␛ Escape",label:"Go to settings"},{value:"👉 Right",label:"Next slide"},{value:"👈 Left",label:"Previous slide"},{value:"👆 Up",label:"Next slide content"},{value:"👇 Down",label:"Previous slide content"}]}}},o=r,c=(i("bd0b"),i("2877")),d=Object(c["a"])(o,l,a,!1,null,"2a04a0b4",null),u=d.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"settings"},[i("v-alert",{staticClass:"mt-5",attrs:{value:!0,type:"info"}},[e._v(" First time on Conference Toolkit ? Take time to configure slides 📺, app settings 🎛 and look controls 🤷‍♂️ ")]),i("h1",{attrs:{title:"Slides"}},[e._v(" 📺 ")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Slides ")])]),e.isEditing?e._e():i("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.slides,(function(t,s){return i("v-slide",{key:"slide-"+s,attrs:{slide:t,index:s},on:{edit:function(t){return e.activeEdition(s)}}})})),i("v-btn",{staticClass:"add-slide",attrs:{absolute:"",fab:"",top:"",right:"",small:"",color:"amber"},on:{click:e.addNewSlide}},[i("v-icon",{attrs:{dark:""}},[e._v(" add ")])],1)],2),e.isEditing?i("v-slide-form",{attrs:{isnew:e.isNew,slide:e.editingSlide},on:{cancel:e.cancel,delete:e.deleteSlide,validate:e.validate}}):e._e()],1),i("h1",{attrs:{title:"Settings"}},[e._v(" 🎛 ")]),i("v-card",{staticClass:"pa-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Global settings ")])]),i("v-form",{ref:"form"},[i("v-text-field",{attrs:{type:"number",name:"currentSlide",label:"Default start slide (start at 0)"},on:{change:function(t){return e.save()}},model:{value:e.currentSlide,callback:function(t){e.currentSlide=t},expression:"currentSlide"}}),i("v-text-field",{attrs:{type:"number",name:"timer",label:"Default slide timer (seconde)"},on:{change:function(t){return e.save()}},model:{value:e.timer,callback:function(t){e.timer=t},expression:"timer"}}),i("v-checkbox",{attrs:{type:"checkbox",name:"isPlaying",label:"Slider is playing "},on:{change:function(t){return e.save()}},model:{value:e.isPlaying,callback:function(t){e.isPlaying=t},expression:"isPlaying"}})],1)],1),i("c-import-save",{on:{onSlidesImport:e.loadSlides}})],1)},p=[],v=(i("a434"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-flex",{attrs:{xs12:"",sm6:"",lg4:""}},[i("v-card",{staticClass:"ma-3 slide"},[e.slide.isDisabled?i("div",{staticClass:"disabled"}):e._e(),i("v-img",{staticClass:"white--text image",attrs:{height:"200px",src:e.slide.bgImg}},[i("v-container",{attrs:{"fill-height":"",fluid:""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineFirstLine))]),i("br"),i("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineSecondLine))]),i("br")])],1)],1)],1),i("v-card-title",[i("div",[i("span",{staticClass:"grey--text"},[e._v("# "+e._s(e.slide.content))]),e._v(" - "),i("span",[e._v(e._s(e.slide.sublineFirstLine)+" / "+e._s(e.slide.sublineSecondLine))])])]),i("strong",[e._v("Configuration")]),i("pre",{staticClass:"config"},[e._v(e._s(e.slide.props))]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"blue"},on:{click:function(t){return e.edit()}}},[e._v(" EDIT ")])],1)],1)],1)}),b=[],m=(i("a9e3"),{props:{slide:{type:Object,required:!0},index:{type:Number,required:!0}},methods:{edit:function(){this.$emit("edit",this.index)}}}),h=m,g=(i("2b98"),Object(c["a"])(h,v,b,!1,null,null,null)),x=g.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-layout",{attrs:{wrap:"","justify-space-between":""}},[i("v-flex",{attrs:{xs10:"",md4:""}},[i("v-text-field",{attrs:{type:"text",label:"Headline First Line"},model:{value:e.slide.headlineFirstLine,callback:function(t){e.$set(e.slide,"headlineFirstLine",t)},expression:"slide.headlineFirstLine"}})],1),i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{type:"text",label:"Headline Second Line"},model:{value:e.slide.headlineSecondLine,callback:function(t){e.$set(e.slide,"headlineSecondLine",t)},expression:"slide.headlineSecondLine"}})],1),i("v-flex",{attrs:{xs12:"",md3:""}},[i("v-checkbox",{attrs:{type:"checkbox",label:"Headline Visible ?"},model:{value:e.slide.isHeadlineVisible,callback:function(t){e.$set(e.slide,"isHeadlineVisible",t)},expression:"slide.isHeadlineVisible"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Subline First Line"},model:{value:e.slide.sublineFirstLine,callback:function(t){e.$set(e.slide,"sublineFirstLine",t)},expression:"slide.sublineFirstLine"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Subline Second Line"},model:{value:e.slide.sublineSecondLine,callback:function(t){e.$set(e.slide,"sublineSecondLine",t)},expression:"slide.sublineSecondLine"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Background Image"},model:{value:e.slide.bgImg,callback:function(t){e.$set(e.slide,"bgImg",t)},expression:"slide.bgImg"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Rect Image"},model:{value:e.slide.rectImg,callback:function(t){e.$set(e.slide,"rectImg",t)},expression:"slide.rectImg"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Logo Image"},model:{value:e.slide.logoImg,callback:function(t){e.$set(e.slide,"logoImg",t)},expression:"slide.logoImg"}})],1),i("v-flex",{attrs:{xs12:"",md3:""}},[i("v-checkbox",{attrs:{type:"checkbox",label:"Disable Slide ?"},model:{value:e.slide.isDisabled,callback:function(t){e.$set(e.slide,"isDisabled",t)},expression:"slide.isDisabled"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),i("v-flex",{attrs:{xs12:"",md12:""}},[i("v-select",{attrs:{clearable:!0,items:e.contents,label:"Content type"},on:{change:e.loadProps},model:{value:e.slide.content,callback:function(t){e.$set(e.slide,"content",t)},expression:"slide.content"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),e._l(e.props,(function(t,s){return i("v-flex",{key:"prop-"+s,attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"prop.type",label:"("+t.label+")"},model:{value:e.slide.props[t.key],callback:function(i){e.$set(e.slide.props,t.key,i)},expression:"slide.props[prop.key]"}})],1)}))],2),e.isnew?e._e():i("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.$emit("delete")}}},[i("v-icon",[e._v("delete")])],1),i("v-btn",{attrs:{color:"amber"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" Cancel ")]),i("v-btn",{attrs:{disabled:!e.valid,color:"blue"},on:{click:e.validate}},[e._v(" Validate ")])],1)},k=[],w=(i("b64b"),i("159b"),i("99af"),i("b0c0"),i("2b72")),S=i("54d6"),_=i("1949"),C=i("de17"),I=i("fd9b"),E=i("b5ea"),j={props:{isnew:{type:Boolean,required:!0},slide:{type:Object,required:!0}},data:function(){return{valid:!1,contents:["image","iframe","contest","speaker","twitter","youtube"],propsByContent:{image:w["a"].props,iframe:S["a"].props,contest:_["a"].props,speaker:C["a"].props,twitter:I["a"].props,youtube:E["a"].props},props:[]}},mounted:function(){this.loadProps()},methods:{validate:function(){this.$emit("validate",this.slide)},loadProps:function(){var e=this;this.props=[],Object.keys(this.propsByContent[this.slide.content])&&(Object.keys(this.propsByContent[this.slide.content]).forEach((function(t){e.props.push({key:t,label:"Key : ".concat(t," /  : ").concat(e.propsByContent[e.slide.content][t].default),type:e.propsByContent[e.slide.content][t].type.name.toLowerCase(),value:e.propsByContent[e.slide.content][t].default})})),console.log(this.props))}}},N=j,L=Object(c["a"])(N,y,k,!1,null,"0e068708",null),O=L.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{attrs:{title:"Import / Save"}},[e._v(" 🚜 / 💾 ")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Import ")])]),i("v-text-field",{attrs:{id:"file",type:"file",accept:".json",label:"Import json configuration from file"}}),i("v-btn",{attrs:{color:"info",disabled:!e.json},on:{click:e.importFromFile}},[e._v(" Import from file ")]),i("v-text-field",{attrs:{type:"text",label:"Import json configuration from url"},model:{value:e.slideUrl,callback:function(t){e.slideUrl=t},expression:"slideUrl"}}),i("v-btn",{attrs:{color:"info",disabled:!e.slideUrl},on:{click:e.importFromUrl}},[e._v(" Import from url ")]),i("v-card-title",{staticClass:"mt-4 pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Export ")])]),i("v-text-field",{attrs:{type:"text",label:"Configuration name"},model:{value:e.saveName,callback:function(t){e.saveName=t},expression:"saveName"}}),i("v-btn",{attrs:{disabled:!e.saveName,color:"info"},on:{click:e.exportConf}},[e._v(" Export ")])],1)],1)},F=[],P=(i("d3b7"),{data:function(){return{slideUrl:null,json:null,saveName:null,slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[]}},mounted:function(){document.getElementById("file").addEventListener("change",this.onChange)},methods:{onChange:function(e){var t=new FileReader;t.onload=this.onReaderLoad,e.target.files[0]&&t.readAsText(e.target.files[0])},onReaderLoad:function(e){this.json=JSON.parse(e.target.result)},importFromFile:function(){this.json&&(localStorage.setItem("slides",JSON.stringify(this.json)),console.log("💾 save json"),this.$emit("onSlidesImport"),this.json=null)},importFromUrl:function(){var e=this;this.slideUrl&&fetch(this.slideUrl).then((function(e){return e.json()})).then((function(t){e.slides=t,localStorage.setItem("slides",JSON.stringify(t)),e.$emit("onSlidesImport"),e.slideUrl=null}))},exportConf:function(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[],this.saveName&&this.slides.length&&this.downloadObjectAsJson(this.slides,this.saveName)},downloadObjectAsJson:function(e,t){var i="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",t+".json"),document.body.appendChild(s),s.click(),s.remove()}}}),U=P,A=(i("3982"),Object(c["a"])(U,$,F,!1,null,"ebcb2ee0",null)),J=A.exports,B={components:{"v-slide":x,"v-slide-form":O,"c-import-save":J},data:function(){return{timer:window.localStorage.getItem("timer"),slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[],configUrl:window.localStorage.getItem("configUrl"),currentSlide:window.localStorage.getItem("currentSlide"),isPlaying:JSON.parse(window.localStorage.getItem("isPlaying")),isEditing:!1,isNew:!1,editingSlide:{},editingSlideIndex:null}},mounted:function(){},methods:{save:function(){this.timer&&window.localStorage.setItem("timer",this.timer),this.configUrl&&window.localStorage.setItem("configUrl",this.configUrl),this.currentSlide&&window.localStorage.setItem("currentSlide",this.currentSlide),this.isPlaying&&window.localStorage.setItem("isPlaying",this.isPlaying),console.log("💾")},loadSlides:function(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[]},addNewSlide:function(){this.editingSlide={props:{}},this.isEditing=!0,this.isNew=!0},activeEdition:function(e){this.editingSlideIndex=e,this.editingSlide=Object.assign({},this.slides[e]),this.isEditing=!0},cancel:function(){this.isEditing=!1,this.isNew=!1},deleteSlide:function(){this.slides.splice(this.editingSlideIndex,1),this.isEditing=!1,this.isNew=!1},validate:function(e){this.isNew?this.slides.push(e):this.slides[this.editingSlideIndex]=Object.assign({},e),this.isEditing=!1,this.isNew=!1,window.localStorage.setItem("slides",JSON.stringify(this.slides))}}},T=B,D=(i("377d"),Object(c["a"])(T,f,p,!1,null,null,null)),H=D.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"help"},[i("h1",{attrs:{title:"Credits"}},[e._v(" 👏 ")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("a",{attrs:{target:"_blank",href:"https://github.com/T3kstiil3/conference-toolkit/issues"}},[e._v("Problem ? 🛠")]),i("br"),i("a",{attrs:{target:"_blank",href:"https://github.com/T3kstiil3/conference-toolkit/"}},[e._v("Contribute 🐙")])])],1)},q=[],V=(i("1a44"),{}),M=Object(c["a"])(V,R,q,!1,null,"76501b80",null),G=M.exports,z={components:{"c-howtouse":u,"c-settings":H,"c-help":G},props:{source:{type:String,required:!0}},data:function(){return{active:""}}},K=z,Q=(i("4a9a"),Object(c["a"])(K,s,n,!1,null,null,null));t["default"]=Q.exports},"377d":function(e,t,i){"use strict";i("9edd")},3982:function(e,t,i){"use strict";i("f425")},"4a9a":function(e,t,i){"use strict";i("dea9")},"5bca":function(e,t,i){},"65f0":function(e,t,i){var s=i("861d"),n=i("e8b5"),l=i("b622"),a=l("species");e.exports=function(e,t){var i;return n(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?s(i)&&(i=i[a],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},8418:function(e,t,i){"use strict";var s=i("c04e"),n=i("9bf2"),l=i("5c6c");e.exports=function(e,t,i){var a=s(t);a in e?n.f(e,a,l(0,i)):e[a]=i}},"99af":function(e,t,i){"use strict";var s=i("23e7"),n=i("d039"),l=i("e8b5"),a=i("861d"),r=i("7b0b"),o=i("50c4"),c=i("8418"),d=i("65f0"),u=i("1dde"),f=i("b622"),p=i("2d00"),v=f("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",h=p>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=u("concat"),x=function(e){if(!a(e))return!1;var t=e[v];return void 0!==t?!!t:l(e)},y=!h||!g;s({target:"Array",proto:!0,forced:y},{concat:function(e){var t,i,s,n,l,a=r(this),u=d(a,0),f=0;for(t=-1,s=arguments.length;t<s;t++)if(l=-1===t?a:arguments[t],x(l)){if(n=o(l.length),f+n>b)throw TypeError(m);for(i=0;i<n;i++,f++)i in l&&c(u,f,l[i])}else{if(f>=b)throw TypeError(m);c(u,f++,l)}return u.length=f,u}})},"9edd":function(e,t,i){},a175:function(e,t,i){},a434:function(e,t,i){"use strict";var s=i("23e7"),n=i("23cb"),l=i("a691"),a=i("50c4"),r=i("7b0b"),o=i("65f0"),c=i("8418"),d=i("1dde"),u=d("splice"),f=Math.max,p=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var i,s,d,u,m,h,g=r(this),x=a(g.length),y=n(e,x),k=arguments.length;if(0===k?i=s=0:1===k?(i=0,s=x-y):(i=k-2,s=p(f(l(t),0),x-y)),x+i-s>v)throw TypeError(b);for(d=o(g,s),u=0;u<s;u++)m=y+u,m in g&&c(d,u,g[m]);if(d.length=s,i<s){for(u=y;u<x-s;u++)m=u+s,h=u+i,m in g?g[h]=g[m]:delete g[h];for(u=x;u>x-s+i;u--)delete g[u-1]}else if(i>s)for(u=x-s;u>y;u--)m=u+s-1,h=u+i-1,m in g?g[h]=g[m]:delete g[h];for(u=0;u<i;u++)g[u+y]=arguments[u+2];return g.length=x-s+i,d}})},a640:function(e,t,i){"use strict";var s=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&s((function(){i.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,i){var s=i("83ab"),n=i("9bf2").f,l=Function.prototype,a=l.toString,r=/^\s*function ([^ (]*)/,o="name";s&&!(o in l)&&n(l,o,{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(e){return""}}})},b64b:function(e,t,i){var s=i("23e7"),n=i("7b0b"),l=i("df75"),a=i("d039"),r=a((function(){l(1)}));s({target:"Object",stat:!0,forced:r},{keys:function(e){return l(n(e))}})},b727:function(e,t,i){var s=i("0366"),n=i("44ad"),l=i("7b0b"),a=i("50c4"),r=i("65f0"),o=[].push,c=function(e){var t=1==e,i=2==e,c=3==e,d=4==e,u=6==e,f=7==e,p=5==e||u;return function(v,b,m,h){for(var g,x,y=l(v),k=n(y),w=s(b,m,3),S=a(k.length),_=0,C=h||r,I=t?C(v,S):i||f?C(v,0):void 0;S>_;_++)if((p||_ in k)&&(g=k[_],x=w(g,_,y),e))if(t)I[_]=x;else if(x)switch(e){case 3:return!0;case 5:return g;case 6:return _;case 2:o.call(I,g)}else switch(e){case 4:return!1;case 7:o.call(I,g)}return u?-1:c||d?d:I}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},bd0b:function(e,t,i){"use strict";i("a175")},dea9:function(e,t,i){},e8b5:function(e,t,i){var s=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}},f09b:function(e,t,i){},f425:function(e,t,i){}}]);
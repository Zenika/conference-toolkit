"use strict";(self["webpackChunkconference_toolkit"]=self["webpackChunkconference_toolkit"]||[]).push([[328],{1744:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var i=function(){var e=this,t=e._self._c;return t("v-app",{attrs:{id:"keep"}},[t("router-link",{staticClass:"goback",attrs:{to:"/"}},[t("p",[e._v("🚪")]),t("span",[e._v("Go to slides")])]),t("v-app-bar",{staticClass:"test",attrs:{color:"amber",app:"",absolute:""}},[t("v-spacer"),t("span",{staticClass:"title ml-3 mr-5"},[e._v("🎤 📺 Conference Toolkit Settings")]),t("v-spacer")],1),t("v-main",[t("v-tabs",{attrs:{color:"dark",dark:"","slider-color":"yellow"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("v-tab",{key:"setting",attrs:{ripple:""}},[e._v(" 🎛 Settings ")]),t("v-tab",{key:"howtouse",attrs:{ripple:""}},[e._v(" 🤷‍ How to use ")]),t("v-tab",{key:"help",attrs:{ripple:""}},[e._v(" 🙏 Help ")]),t("v-tab-item",{key:"setting"},[t("c-settings")],1),t("v-tab-item",{key:"howtouse"},[t("c-howtouse")],1),t("v-tab-item",{key:"help"},[t("c-help")],1)],1)],1),t("v-footer",{staticClass:"pa-3",attrs:{color:"amber"}},[t("v-spacer"),t("div",[e._v(" </> with ❤️by  "),t("a",{attrs:{target:"_blank",href:"https://twitter.com/AurelienLoyer"}},[e._v("Aurélien Loyer")])]),t("v-spacer")],1)],1)},l=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"howtouse"},[t("h1",{attrs:{title:"How to use ?"}},[e._v(" 🤷‍ ")]),t("v-card",{staticClass:"pa-4 mt-4"},[t("div",{staticClass:"keys"},e._l(e.keys,(function(s,i){return t("div",{key:`key-${i}`,staticClass:"item"},[t("div",{staticClass:"key"},[e._v(" "+e._s(s.value)+" ")]),t("label",[e._v(e._s(s.label))])])})),0)])],1)},n=[],r={data(){return{keys:[{value:"␠ Space",label:"Play / Pause slider"},{value:"␛ Escape",label:"Go to settings"},{value:"👉 Right",label:"Next slide"},{value:"👈 Left",label:"Previous slide"},{value:"👆 Up",label:"Next slide content"},{value:"👇 Down",label:"Previous slide content"}]}}},o=r,d=s(1001),c=(0,d.Z)(o,a,n,!1,null,"2a04a0b4",null),p=c.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"settings"},[t("v-alert",{staticClass:"mt-5",attrs:{value:!0,type:"info"}},[e._v(" First time on Conference Toolkit ? Take time to configure slides 📺, app settings 🎛 and look controls 🤷‍♂️ ")]),t("h1",{attrs:{title:"Slides"}},[e._v(" 📺 ")]),t("v-card",{staticClass:"pa-4 mt-4"},[t("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[t("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Slides ")])]),e.isEditing?e._e():t("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.slides,(function(s,i){return t("v-slide",{key:`slide-${i}`,attrs:{slide:s,index:i},on:{edit:function(t){return e.activeEdition(i)}}})})),t("v-btn",{staticClass:"add-slide",attrs:{absolute:"",fab:"",top:"",right:"",small:"",color:"amber"},on:{click:e.addNewSlide}},[t("v-icon",{attrs:{dark:""}},[e._v(" add ")])],1)],2),e.isEditing?t("v-slide-form",{attrs:{isnew:e.isNew,slide:e.editingSlide},on:{cancel:e.cancel,delete:e.deleteSlide,validate:e.validate}}):e._e()],1),t("h1",{attrs:{title:"Settings"}},[e._v(" 🎛 ")]),t("v-card",{staticClass:"pa-4"},[t("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[t("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Global settings ")])]),t("v-form",{ref:"form"},[t("v-text-field",{attrs:{type:"number",name:"currentSlide",label:"Default start slide (start at 0)"},on:{change:function(t){return e.save()}},model:{value:e.currentSlide,callback:function(t){e.currentSlide=t},expression:"currentSlide"}}),t("v-text-field",{attrs:{type:"number",name:"timer",label:"Default slide timer (seconde)"},on:{change:function(t){return e.save()}},model:{value:e.timer,callback:function(t){e.timer=t},expression:"timer"}}),t("v-checkbox",{attrs:{type:"checkbox",name:"isPlaying",label:"Slider is playing "},on:{change:function(t){return e.save()}},model:{value:e.isPlaying,callback:function(t){e.isPlaying=t},expression:"isPlaying"}})],1)],1),t("c-import-save",{on:{onSlidesImport:e.loadSlides}})],1)},u=[],m=(s(7658),function(){var e=this,t=e._self._c;return t("v-flex",{attrs:{xs12:"",sm6:"",lg4:""}},[t("v-card",{staticClass:"ma-3 slide"},[e.slide.isDisabled?t("div",{staticClass:"disabled"}):e._e(),t("v-img",{staticClass:"white--text image",attrs:{height:"200px",src:`${e.prependPublicPathIfNecessary(e.slide.bgImg)}`}},[t("v-container",{attrs:{"fill-height":"",fluid:""}},[t("v-layout",{attrs:{"fill-height":""}},[t("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[t("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineFirstLine))]),t("br"),t("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineSecondLine))]),t("br")])],1)],1)],1),t("v-card-title",[t("div",[t("span",{staticClass:"grey--text"},[e._v("# "+e._s(e.slide.content))]),e._v(" - "),t("span",[e._v(e._s(e.slide.sublineFirstLine)+" / "+e._s(e.slide.sublineSecondLine))])])]),t("strong",[e._v("Configuration")]),t("pre",{staticClass:"config"},[e._v(e._s(e.slide.props))]),t("v-card-actions",[t("v-btn",{attrs:{text:"",color:"blue"},on:{click:function(t){return e.edit()}}},[e._v(" EDIT ")])],1)],1)],1)}),h=[],b=s(2520),f={props:{slide:{type:Object,required:!0},index:{type:Number,required:!0}},methods:{edit(){this.$emit("edit",this.index)},prependPublicPathIfNecessary(e){return b.Z.prependPublicPathIfNecessary(e)}}},g=f,x=(0,d.Z)(g,m,h,!1,null,null,null),y=x.exports,k=function(){var e=this,t=e._self._c;return t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-layout",{attrs:{wrap:"","justify-space-between":""}},[t("v-flex",{attrs:{xs10:"",md4:""}},[t("v-text-field",{attrs:{type:"text",label:"Headline First Line"},model:{value:e.slide.headlineFirstLine,callback:function(t){e.$set(e.slide,"headlineFirstLine",t)},expression:"slide.headlineFirstLine"}})],1),t("v-flex",{attrs:{xs12:"",md4:""}},[t("v-text-field",{attrs:{type:"text",label:"Headline Second Line"},model:{value:e.slide.headlineSecondLine,callback:function(t){e.$set(e.slide,"headlineSecondLine",t)},expression:"slide.headlineSecondLine"}})],1),t("v-flex",{attrs:{xs12:"",md3:""}},[t("v-checkbox",{attrs:{type:"checkbox",label:"Headline Visible ?"},model:{value:e.slide.isHeadlineVisible,callback:function(t){e.$set(e.slide,"isHeadlineVisible",t)},expression:"slide.isHeadlineVisible"}})],1),t("v-flex",{attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{type:"text",label:"Subline First Line"},model:{value:e.slide.sublineFirstLine,callback:function(t){e.$set(e.slide,"sublineFirstLine",t)},expression:"slide.sublineFirstLine"}})],1),t("v-flex",{attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{type:"text",label:"Subline Second Line"},model:{value:e.slide.sublineSecondLine,callback:function(t){e.$set(e.slide,"sublineSecondLine",t)},expression:"slide.sublineSecondLine"}})],1),t("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),t("v-flex",{attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{"v-model":`${e.prependPublicPathIfNecessary(e.slide.bgImg)}`,type:"text",label:"Background Image"}})],1),t("v-flex",{attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{"v-model":`${e.prependPublicPathIfNecessary(e.slide.rectImg)}`,type:"text",label:"Rect Image"}})],1),t("v-flex",{attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{"v-model":`${e.prependPublicPathIfNecessary(e.slide.logoImg)}`,type:"text",label:"Logo Image"}})],1),t("v-flex",{attrs:{xs12:"",md3:""}},[t("v-checkbox",{attrs:{type:"checkbox",label:"Disable Slide ?"},model:{value:e.slide.isDisabled,callback:function(t){e.$set(e.slide,"isDisabled",t)},expression:"slide.isDisabled"}})],1),t("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),t("v-flex",{attrs:{xs12:"",md12:""}},[t("v-select",{attrs:{clearable:!0,items:e.contents,label:"Content type"},on:{change:e.loadProps},model:{value:e.slide.content,callback:function(t){e.$set(e.slide,"content",t)},expression:"slide.content"}})],1),t("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),e._l(e.props,(function(s,i){return t("v-flex",{key:`prop-${i}`,attrs:{xs12:"",md5:""}},[t("v-text-field",{attrs:{type:"prop.type",label:`(${s.label})`},model:{value:e.slide.props[s.key],callback:function(t){e.$set(e.slide.props,s.key,t)},expression:"slide.props[prop.key]"}})],1)}))],2),e.isnew?e._e():t("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.$emit("delete")}}},[t("v-icon",[e._v("delete")])],1),t("v-btn",{attrs:{color:"amber"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" Cancel ")]),t("v-btn",{attrs:{disabled:!e.valid,color:"blue"},on:{click:e.validate}},[e._v(" Validate ")])],1)},S=[],_=s(2532),w=s(1362),C=s(2790),I=s(640),N=s(388),P=s(804),L={props:{isnew:{type:Boolean,required:!0},slide:{type:Object,required:!0}},data(){return{valid:!1,contents:["image","iframe","contest","speaker","twitter","youtube"],propsByContent:{image:_.Z.props,iframe:w.Z.props,contest:C.Z.props,speaker:I.Z.props,twitter:N.Z.props,youtube:P.Z.props},props:[]}},mounted(){this.loadProps()},methods:{validate(){this.$emit("validate",this.slide)},loadProps(){this.props=[],Object.keys(this.propsByContent[this.slide.content])&&(Object.keys(this.propsByContent[this.slide.content]).forEach((e=>{this.props.push({key:e,label:`Key : ${e} /  : ${this.propsByContent[this.slide.content][e].default}`,type:this.propsByContent[this.slide.content][e].type.name.toLowerCase(),value:this.propsByContent[this.slide.content][e].default})})),console.log(this.props))},prependPublicPathIfNecessary(e){return b.Z.prependPublicPathIfNecessary(e)}}},$=L,j=(0,d.Z)($,k,S,!1,null,"24373208",null),E=j.exports,F=function(){var e=this,t=e._self._c;return t("div",[t("h1",{attrs:{title:"Import / Save"}},[e._v(" 🚜 / 💾 ")]),t("v-card",{staticClass:"pa-4 mt-4"},[t("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[t("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Import ")])]),t("v-text-field",{attrs:{id:"file",type:"file",accept:".json",label:"Import json configuration from file"}}),t("v-btn",{attrs:{color:"info",disabled:!e.json},on:{click:e.importFromFile}},[e._v(" Import from file ")]),t("v-text-field",{attrs:{type:"text",label:"Import json configuration from url"},model:{value:e.slideUrl,callback:function(t){e.slideUrl=t},expression:"slideUrl"}}),t("v-btn",{attrs:{color:"info",disabled:!e.slideUrl},on:{click:e.importFromUrl}},[e._v(" Import from url ")]),t("v-card-title",{staticClass:"mt-4 pa-0",attrs:{"primary-title":""}},[t("h4",{staticClass:"bolder mb-4 pa-0"},[e._v(" Export ")])]),t("v-text-field",{attrs:{type:"text",label:"Configuration name"},model:{value:e.saveName,callback:function(t){e.saveName=t},expression:"saveName"}}),t("v-btn",{attrs:{disabled:!e.saveName,color:"info"},on:{click:e.exportConf}},[e._v(" Export ")])],1)],1)},O=[],U={data(){return{slideUrl:null,json:null,saveName:null,slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[]}},mounted(){document.getElementById("file").addEventListener("change",this.onChange)},methods:{onChange(e){var t=new FileReader;t.onload=this.onReaderLoad,e.target.files[0]&&t.readAsText(e.target.files[0])},onReaderLoad(e){this.json=JSON.parse(e.target.result)},importFromFile(){this.json&&(localStorage.setItem("slides",JSON.stringify(this.json)),console.log("💾 save json"),this.$emit("onSlidesImport"),this.json=null)},importFromUrl(){this.slideUrl&&fetch(this.slideUrl).then((e=>e.json())).then((e=>{this.slides=e,localStorage.setItem("slides",JSON.stringify(e)),this.$emit("onSlidesImport"),this.slideUrl=null}))},exportConf(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[],this.saveName&&this.slides.length&&this.downloadObjectAsJson(this.slides,this.saveName)},downloadObjectAsJson(e,t){var s="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),i=document.createElement("a");i.setAttribute("href",s),i.setAttribute("download",t+".json"),document.body.appendChild(i),i.click(),i.remove()}}},Z=U,J=(0,d.Z)(Z,F,O,!1,null,"ebcb2ee0",null),B=J.exports,D={components:{"v-slide":y,"v-slide-form":E,"c-import-save":B},data(){return{timer:window.localStorage.getItem("timer"),slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[],configUrl:window.localStorage.getItem("configUrl"),currentSlide:window.localStorage.getItem("currentSlide"),isPlaying:JSON.parse(window.localStorage.getItem("isPlaying")),isEditing:!1,isNew:!1,editingSlide:{},editingSlideIndex:null}},mounted(){},methods:{save(){this.timer&&window.localStorage.setItem("timer",this.timer),this.configUrl&&window.localStorage.setItem("configUrl",this.configUrl),this.currentSlide&&window.localStorage.setItem("currentSlide",this.currentSlide),this.isPlaying&&window.localStorage.setItem("isPlaying",this.isPlaying),console.log("💾")},loadSlides(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[]},addNewSlide(){this.editingSlide={props:{}},this.isEditing=!0,this.isNew=!0},activeEdition(e){this.editingSlideIndex=e,this.editingSlide=Object.assign({},this.slides[e]),this.isEditing=!0},cancel(){this.isEditing=!1,this.isNew=!1},deleteSlide(){this.slides.splice(this.editingSlideIndex,1),this.isEditing=!1,this.isNew=!1},validate(e){this.isNew?this.slides.push(e):this.slides[this.editingSlideIndex]=Object.assign({},e),this.isEditing=!1,this.isNew=!1,window.localStorage.setItem("slides",JSON.stringify(this.slides))}}},H=D,A=(0,d.Z)(H,v,u,!1,null,null,null),R=A.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"help"},[t("h1",{attrs:{title:"Credits"}},[e._v(" 👏 ")]),t("v-card",{staticClass:"pa-4 mt-4"},[t("a",{attrs:{target:"_blank",href:"https://github.com/Zenika/conference-toolkit/issues"}},[e._v("Problem ? 🛠")]),t("br"),t("a",{attrs:{target:"_blank",href:"https://github.com/Zenika/conference-toolkit/"}},[e._v("Contribute 🐙")])])],1)},V=[],q={},G=(0,d.Z)(q,T,V,!1,null,"28866650",null),z=G.exports,K={components:{"c-howtouse":p,"c-settings":R,"c-help":z},data:()=>({active:""})},M=K,Q=(0,d.Z)(M,i,l,!1,null,null,null),W=Q.exports}}]);
//# sourceMappingURL=admin.c913ea37.js.map
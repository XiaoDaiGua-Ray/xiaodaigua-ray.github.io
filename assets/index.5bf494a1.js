import{s as T}from"./pinia.04532b5d.js";import{c as R}from"./lodash-es.16993470.js";import{u as L}from"./index.f740875e.js";import{v as w}from"./hook.59b2f646.js";import{u as f,i as $,a as D,b as V,c as U,d as j,e as z,f as I,g as M,h as N,j as P,k as _,l as W,m as q,n as G,o as K,p as X,q as H}from"./echarts.bdfdf659.js";import{e as x,r as m,l as J,w as F,h as Q,o as Y,n as Z,f as ee,ao as t,c as te}from"./@vue.6f9b3ecc.js";import{K as u,r as S}from"./naive-ui.df1bccd0.js";import"./vue-demi.b3a9cad9.js";import"./pinia-plugin-persistedstate.c449c8e7.js";import"./vue-i18n.715a0b35.js";import"./@intlify.c1495d3a.js";import"./vue-router.e6f2912b.js";import"./@vueuse.a0b06385.js";import"./screenfull.c1f291d3.js";import"./date-fns.03faffa8.js";import"./vueuc.feb70412.js";import"./evtd.9eee5233.js";import"./seemly.786de437.js";import"./@css-render.66179467.js";import"./vooks.d8957d1b.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./treemate.80cdf2c2.js";import"./date-fns-tz.974adeb4.js";import"./async-validator.fb49d0f5.js";import"./zrender.a83c43bd.js";const ae=(e,s,a,r=!1)=>{e&&s&&a&&e.addEventListener(s,a,r)},se=(e,s,a,r=!1)=>{e&&s&&a&&e.removeEventListener(s,a,r)},k=(e,s)=>{e&&(w(s,"Object")?Object.keys(s).forEach(a=>{e.style[a]=s[a]}):w(s,"String")&&s.split(";").forEach(r=>{const[l,n]=r.split(":");l&&n&&(e.style[l.trim()]=n.trim())}))},h=x({name:"RayChart",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},autoResize:{type:[Boolean,Object],default:!0},canvasRender:{type:Boolean,default:!0},showAria:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},success:{type:Function,default:()=>({})},error:{type:Function,default:()=>({})},theme:{type:[String,Object],default:""},autoChangeTheme:{type:Boolean,default:!1},use:{type:Array,default:()=>[]}},setup(e){const s=L(),{themeValue:a}=T(s),r=m(),l=m();let n;const g=J(()=>({"--ray-chart-width":e.width,"--ray-chart-height":e.height})),E=async()=>{f([D,V,U,j,z,I,M,N]),f([P,_,W,q,G]),f([K,X]),f([H]);try{f(e.use)}catch{console.error("Error: wrong property and method passed in extend attribute")}},b=()=>{let o=R(e.options);const c=p=>Object.assign({},o,p);return e.showAria&&(o=c({aria:{enabled:!0,decal:{show:!0}}})),o},i=o=>{var v,A;const c=r.value,p=b(),{height:B,width:O}=c.getBoundingClientRect();B===0&&k(c,{height:"200px"}),O===0&&k(c,{width:"200px"});try{n=$(c,o),l.value=n,p&&n.setOption(p),(v=e.success)==null||v.call(e,n)}catch{(A=e.error)==null||A.call(e)}},d=o=>{if(e.autoChangeTheme){i(o?"dark":"");return}e.theme||i("")},y=()=>{n&&(n.clear(),n.dispose())},C=()=>{n&&n.resize()};return F(()=>[a.value],([o])=>{e.autoChangeTheme&&(y(),d(o))}),F(()=>e.showAria,()=>{y(),(e.autoChangeTheme||e.theme)&&a.value?i("dark"):i("")}),Q(async()=>{await E()}),Y(()=>{Z(()=>{e.autoChangeTheme?d(a.value):e.theme?i("dark"):i(""),e.autoResize&&ae(window,"resize",C)})}),ee(()=>{y(),se(window,"resize",C)}),{rayChartRef:r,cssVarsRef:g,echartInstance:l}},render(){return t("div",{class:"ray-chart",style:[this.cssVarsRef],ref:"rayChartRef"},null)}}),$e=x({name:"Echart",setup(){const e=m(),s=m(!1),a=m(!1);return{baseOptions:{legend:{},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"\u65E5\u671F",data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},baseChartRef:e,chartLoading:s,handleLoadingShow:i=>{if(e.value){const{echartInstance:d}=e.value;i?d.showLoading():d.hideLoading()}},chartAria:a,handleAriaShow:i=>{a.value=i},handleChartRenderSuccess:i=>{window.$notification.info({title:"\u53EF\u89C6\u5316\u56FE\u6E32\u67D3\u6210\u529F\u56DE\u8C03\u51FD\u6570",content:"\u53EF\u89C6\u5316\u56FE\u6E32\u67D3\u6210\u529F, \u5E76\u4E14\u8FD4\u56DE\u4E86\u5F53\u524D\u53EF\u89C6\u5316\u56FE\u5B9E\u4F8B",duration:5*1e3}),console.log(i)},basePieOptions:{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},baseLineOptions:{title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}}},render(){return t("div",{class:"echart"},[t(u,{title:"RayChart\u7EC4\u4EF6\u4F7F\u7528"},{default:()=>[te("\u5728\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u65F6, \u4E00\u5B9A\u8981\u6CE8\u610F\u6839\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u521D\u59CB\u5316\u95EE\u9898, \u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4F59\u7684\u56FE\u4F8B, \u53EA\u9700\u8981\u4ECE echarts \u4E2D\u5BFC\u5165\u5BF9\u5E94\u7EC4\u4EF6, \u5E76\u4E14\u4F7F\u7528 use \u65B9\u6CD5\u6CE8\u518C. \u8BE5\u7EC4\u4EF6\u5B9E\u73B0\u4E86\u81EA\u52A8\u8DDF\u968F\u6A21\u677F\u4E3B\u9898\u5207\u6362\u529F\u80FD, \u4F46\u662F\u52A8\u6001\u5207\u6362\u635F\u8017\u8F83\u5927, \u6240\u4EE5\u9ED8\u8BA4\u4E0D\u542F\u7528")]}),t(u,{title:"\u57FA\u7840\u4F7F\u7528"},{default:()=>[t("div",{class:"chart--container"},[t(h,{options:this.baseOptions},null)])]}),t(u,{title:"\u6E32\u67D3\u6210\u529F\u540E\u8FD0\u884C\u56DE\u8C03\u51FD\u6570"},{default:()=>[t("div",{class:"chart--container"},[t(h,{options:this.basePieOptions,success:this.handleChartRenderSuccess.bind(this)},null)])]}),t(u,{title:"\u80FD\u8DDF\u968F\u4E3B\u9898\u5207\u6362\u7684\u53EF\u89C6\u5316\u56FE"},{default:()=>[t("div",{class:"chart--container"},[t(h,{autoChangeTheme:!0,options:this.baseLineOptions,showAria:this.chartAria},null)])]}),t(u,{title:"\u4E0D\u8DDF\u968F\u4E3B\u9898\u5207\u6362\u7684\u6697\u8272\u4E3B\u9898\u53EF\u89C6\u5316\u56FE"},{default:()=>[t("div",{class:"chart--container"},[t(h,{theme:"dark",options:this.baseOptions},null)])]}),t(u,{title:"\u52A0\u8F7D\u52A8\u753B"},{default:()=>[t(S,{value:this.chartLoading,"onUpdate:value":e=>this.chartLoading=e,onUpdateValue:this.handleLoadingShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"\u9690\u85CF\u52A0\u8F7D\u52A8\u753B",unchecked:()=>"\u663E\u793A\u52A0\u8F7D\u52A8\u753B"}),t("div",{class:"chart--container"},[t(h,{ref:"baseChartRef",options:this.baseOptions},null)])]}),t(u,{title:"\u8D34\u753B\u53EF\u89C6\u5316\u56FE"},{default:()=>[t(S,{value:this.chartAria,"onUpdate:value":e=>this.chartAria=e,onUpdateValue:this.handleAriaShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"\u9690\u85CF\u8D34\u82B1",unchecked:()=>"\u663E\u793A\u8D34\u82B1"}),t("div",{class:"chart--container"},[t(h,{options:this.baseOptions,showAria:this.chartAria},null)])]})])}});export{$e as default};

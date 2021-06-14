(this.webpackJsonpmaterial_ui_app=this.webpackJsonpmaterial_ui_app||[]).push([[0],{101:function(e,t,a){e.exports={container:"Chart_container__1vKlh"}},102:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1BhzZ"}},103:function(e,t,a){e.exports={container:"App_container__1pmkm"}},20:function(e,t,a){e.exports={container:"Cards_container__10ZSL",card:"Cards_card__2UEUL",infected:"Cards_infected__CoyOz",recovered:"Cards_recovered__3vn-s",deaths:"Cards_deaths__zN12y"}},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),o=a.n(c),s=a(10),i=a.n(s),u=a(16),d=a(3),l=a(4),j=a(7),p=a(6),f=a(259),h=a(263),b=a(260),v=a(261),x=a(20),O=a.n(x),m=a(44),y=a.n(m),C=a(45),g=a.n(C),_=a(2),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:O.a.container,children:Object(_.jsxs)(f.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:g()(O.a.card,O.a.infected),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:a.value,duration:2.5,seperator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number Of Active Cases Of COVID-19"})]})}),Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:g()(O.a.card,O.a.recovered),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:n.value,duration:2.5,seperator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number Of Recovered Cases Of COVID-19"})]})}),Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:g()(O.a.card,O.a.deaths),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:r.value,duration:2.5,seperator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number Of Deaths Caused By COVID-19"})]})})]})}):"Loading"},D=a(28),k=a(46),S=a.n(k),N="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),console.log(n.confirmed),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=a(63),U=a(101),V=a.n(U),A=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,o=e.country,s=Object(n.useState)([]),d=Object(D.a)(s,2),l=d[0],j=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(l),e()}),[]);var p=l.length?Object(_.jsx)(R.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;console.log(a,c,r);var f=a?Object(_.jsx)(R.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(_.jsx)("div",{className:V.a.container,children:o?f:p})},z=a(264),L=a(262),J=a(102),K=a.n(J),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(D.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(_.jsx)(z.a,{className:K.a.formcontrol,children:Object(_.jsxs)(L.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},Z=a(103),G=a.n(Z),M=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:G.a.container,children:[Object(_.jsx)(v.a,{children:"COVID TRACKER"}),Object(_.jsx)(w,{data:t}),Object(_.jsx)(P,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(A,{data:t,country:a})]})}}]),a}(r.a.Component);o.a.render(Object(_.jsx)(M,{}),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.80384042.chunk.js.map
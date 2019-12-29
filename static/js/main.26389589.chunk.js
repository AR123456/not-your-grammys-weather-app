(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,n,t){e.exports=t(63)},63:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(29),l=t.n(c),i=(t(42),t(13)),o=t(34),u=t(14),m=t.n(u),d=t(74),s=t(71),p=t(9),h=t(10),f=t(64),g=t(65),E=t(66);function w(){var e=Object(p.a)(["\n    border: ",";\n    margin: 1em 0;\n    text-align: center;\n    h3 {\n        font-size: 2.5rem;\n        font-weight: 500;\n        margin-top: .5em;\n    }\n    h4 {\n        padding-bottom: 1em;\n    }\n"]);return w=function(){return e},e}function b(){var e=Object(p.a)(["\n    cursor: pointer;\n    .card {\n        border-width: 2px;\n    }\n    &:hover {\n        .card {\n            border: ",";\n        }\n    }\n    .card {\n        border: ",";\n        text-align: center;\n    }\n    .card-header {\n        background: ",";\n        border-bottom: ",";\n        border-bottom-width: 2px;\n        color: ",";\n        font-weight: ",";\n        padding: .75rem 1rem;\n    }\n    img {\n        width: 75px;\n    }\n"]);return b=function(){return e},e}function y(){var e=Object(p.a)(["\n    justify-content: flex-end;\n    margin-top: 1em;\n    input.form-control {\n        border-radius: .25rem 0 0 .25rem;\n        width: 325px;\n    }\n    button {\n        border-radius: 0 .25rem .25rem 0;\n    }\n"]);return y=function(){return e},e}function v(){var e=Object(p.a)(["\n    .row:first-child {\n        margin: 1.5em -15px;\n    }\n    .col > h2 {\n        margin-top: 1em;\n    }\n"]);return v=function(){return e},e}var x="2px solid ".concat("#17a2b8"),D=Object(h.a)(f.a)(v()),j=Object(h.a)(g.a)(y()),O=h.a.div(b(),x,function(e){return e.isActive?x:null},function(e){return e.isActive?"#17a2b8":null},function(e){return e.isActive?x:null},function(e){return e.isActive?"white":null},function(e){return e.isActive?700:null}),_=Object(h.a)(E.a)(w(),x),F=t(33),k=t.n(F),S=function(e){return k.a.get("https://api.weatherbit.io/v2.0/forecast/daily?&days=7&units=I&key=".concat("f38e57c68eec4d57a87f101e2f5ced8f","&city=").concat(e))},Y=t(67),A=t(68),M=t(69),T=t(70),C=function(e){return r.a.createElement(j,{inline:!0,onSubmit:e.handleFormSubmit},r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"search",hidden:!0},"Search by Location"),r.a.createElement(M.a,{type:"text",name:"search",id:"search",placeholder:"Search by address, city/state, or zip code",value:e.searchTerm,onChange:e.handleInputChange})),r.a.createElement(T.a,{color:"info",onClick:e.handleFormSubmit},"Search"))},L=t(72),W=t(73),H=function(e){return r.a.createElement(s.a,{onClick:e.selectDay},r.a.createElement(O,{isActive:e.isActive},r.a.createElement(E.a,null,r.a.createElement(L.a,null,e.day),r.a.createElement(W.a,null,r.a.createElement("h3",null,r.a.createElement("strong",null,e.current.toFixed(1),"\xb0")),r.a.createElement("img",{src:"".concat("/not-your-grammys-weather-app","/icons/").concat(e.icon,".png"),alt:e.description}),r.a.createElement("p",null,r.a.createElement("strong",null,"High:")," ",e.high.toFixed(1),"\xb0"),r.a.createElement("p",null,r.a.createElement("strong",null,"Low:")," ",e.low.toFixed(1),"\xb0")))))},I=function(e){return r.a.createElement(_,null,r.a.createElement(W.a,null,r.a.createElement("h2",null,"Weather Details for ",e.date," in ",e.location),r.a.createElement("h3",null,r.a.createElement("strong",null,e.current.toFixed(1),"\xb0")),r.a.createElement("p",null,r.a.createElement("img",{src:"".concat("/not-your-grammys-weather-app","/icons/").concat(e.icon,".png"),alt:e.description})),r.a.createElement("h4",null,e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"High:")," ",e.high.toFixed(1),"\xb0 / ",r.a.createElement("strong",null,"Feels Like:")," ",e.apparentHigh.toFixed(1),"\xb0"),r.a.createElement("p",null,r.a.createElement("strong",null,"Low:")," ",e.low.toFixed(1),"\xb0 / ",r.a.createElement("strong",null,"Feels Like:")," ",e.apparentLow.toFixed(1),"\xb0"),r.a.createElement("p",null,r.a.createElement("strong",null,"Precipitation:")," ",e.precip,"% chance"),r.a.createElement("p",null,r.a.createElement("strong",null,"Wind Speed:")," ",e.windSpeed),r.a.createElement("p",null,r.a.createElement("strong",null,"Wind Direction:")," ",e.windDirection[0].toUpperCase()+e.windDirection.substring(1))))},z=function(){var e=Object(a.useState)({searchTerm:"",selectedDay:null,location:"",days:[]}),n=Object(o.a)(e,2),t=n[0],c=n[1],l=t.searchTerm,u=t.selectedDay,p=t.location,h=t.days;Object(a.useEffect)(function(){f("Aurora, CO")},[]),Object(a.useEffect)(function(){document.title="This week's weather ".concat(p?"for "+p:"")},[p]);var f=function(e){e?S(e).then(function(e){c(e?{searchTerm:"",selectedDay:null,location:"".concat(e.data.city_name,", ").concat(e.data.state_code),days:e.data.data}:Object(i.a)({},t,{searchTerm:"",selectedDay:null}))}).catch(function(e){return console.log(e)}):alert("Search a location to get this week's weather data!")};return r.a.createElement(D,null,h.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(s.a,{md:7},r.a.createElement("h1",null,"Weather for ",p)),r.a.createElement(s.a,{md:5},r.a.createElement(C,{searchTerm:l,handleInputChange:function(e){c(Object(i.a)({},t,{searchTerm:e.target.value}))},handleFormSubmit:function(e){e.preventDefault(),f(l)}}))),r.a.createElement(d.a,null,h.map(function(e){return r.a.createElement(H,{key:e.ts,day:m()(e.valid_date,"YYYY-MM-DD").format("dddd"),current:e.temp,high:e.max_temp,low:e.min_temp,precip:e.pop,icon:e.weather.icon,description:e.weather.description,selectDay:function(){return c(Object(i.a)({},t,{selectedDay:e}))},isActive:e===u})})),r.a.createElement(d.a,null,r.a.createElement(s.a,null,u?r.a.createElement(I,{date:m()(u.valid_date,"YYYY-MM-DD").format("dddd, MMMM Do, YYYY"),location:p,current:u.temp,high:u.max_temp,apparentHigh:u.app_max_temp,low:u.min_temp,apparentLow:u.app_min_temp,precip:u.pop,icon:u.weather.icon,windSpeed:u.wind_spd,windDirection:u.wind_cdir_full,description:u.weather.description}):r.a.createElement("h2",null,"Select a day above to get details!")))):r.a.createElement("div",{style:{padding:"20% 50%",margin:-8,width:16,height:16}},r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-3x","aria-hidden":"true"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.26389589.chunk.js.map
(this["webpackJsonpcat-notifier"]=this["webpackJsonpcat-notifier"]||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),c=(n(25),n(16)),s=n(9),l=n(10),h=n(17),d=n(15),m=n(41),u=(n(26),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={cats:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/oauth2/token",{headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials&client_id=j9SG77uYmyVfsQpmxrXiMYzIRWBEVdOYmwuSty7EzssWEd491h&client_secret=I8yVLtk6QuGVbGH5727WFQdo0958GZtbnEEItuuI",method:"POST"}).then((function(e){return e.json()})).then((function(t){var n={headers:{"Content-Type":"application/x-www-form-urlencoded",AUTHORIZATION:"Bearer ".concat(t.access_token)},method:"GET"},a="https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type=Cat&",o={location:"10002",distance:250,sort:"distance",limit:100};a+=Object.keys(o).map((function(e){return e+"="+o[e]})).join("&"),fetch(a,n).then((function(e){return e.json()})).then((function(t){var n,a=[],o=Object(c.a)(t.animals);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(0!==i.photos.length){var r={loaded:!1,image:i.photos[0].small,link:i.url};a.push(r)}}}catch(s){o.e(s)}finally{o.f()}e.setState({cats:a})}))}))}},{key:"className",value:function(e){return e.loaded?"load-in":"hidden"}},{key:"render",value:function(){var e=this,t=this.state.cats,n=!!t.length,a=Math.floor(document.documentElement.clientWidth/99)*Math.floor(document.documentElement.clientHeight/99)-1;return o.a.createElement("div",{className:"frame",style:{height:document.documentElement.clientHeight}},t.map((function(i,r){return n=n&&i.loaded,o.a.createElement(o.a.Fragment,null,r<=a&&o.a.createElement("div",{className:e.className(i)},o.a.createElement("a",{href:i.link},o.a.createElement("img",{style:"imgCSS",alt:"kitty",loading:"lazy",src:i.image,onLoad:function(){i.loaded=!0,e.setState({cats:t})}}))))})),o.a.createElement(m.a,{className:"box"},o.a.createElement("h1",{style:{marginBottom:"0px"}},"Petfinder Instant Notifier"),o.a.createElement("p",{style:{margin:"16px"}},"I have always wanted a cat, but my mom is allergic. Now that I am moving out, I can have a kitty of my own! However, this unfortunately coincided with the COVID-19 pandemic. Cats and dogs are being scooped up within 30 minutes of their profiles being posted on Petfinder. My 21 years of waiting cannot be prolonged any longer, and I knew a solution. With the help of the Petfinder API 2.0 and my friend with a personal server (long story), I was able to create a script to notify me through email within 150 seconds of a cat's posting. The cats you see here are cats in the NYC area that are available for adoption right now. Feel free to click on them and it will redirect you to their Petfinder page.")))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ddf254e7.chunk.js.map
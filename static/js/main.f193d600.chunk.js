(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(9),r=t.n(i),o=(t(15),t(4)),s=(t(16),t(17),function(e){return l.a.createElement("div",{id:"lightbox",className:null===e.visible?"":e.visible?"show-lightbox":"hide-lightbox",onClick:e.hideLightboxCallback},e.video?l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:e.video}):l.a.createElement("img",{src:e.image,alt:""}))}),c=t(2),m=t(7),h=t(3),d=(t(23),function(e){return l.a.createElement("div",{className:"row profile"},l.a.createElement("div",{className:"col-sm-4 col-xs-12"},l.a.createElement("img",{className:"img-responsive profile-pic",alt:"",src:e.image})),l.a.createElement("div",{className:"col-sm-8 col-xs-12"},l.a.createElement("h2",null,e.name,l.a.createElement("small",null,l.a.createElement("br",null),e.title)),l.a.createElement("a",{href:"mailto:".concat(e.email)},l.a.createElement(c.a,{icon:m.a}),"\xa0alexanderdouglasbrown@gmail.com"),l.a.createElement("br",null),l.a.createElement("a",{href:e.resume},l.a.createElement(c.a,{icon:m.b}),"\xa0Resume"),l.a.createElement("span",{className:"smallGap"}),l.a.createElement("a",{href:e.github},l.a.createElement(c.a,{icon:h.a}),"\xa0GitHub"),l.a.createElement("span",{className:"smallGap"}),l.a.createElement("a",{href:e.linkedin},l.a.createElement(c.a,{icon:h.c}),"\xa0LinkedIn"),l.a.createElement("span",{className:"smallGap"}),l.a.createElement("a",{href:e.instagram},l.a.createElement(c.a,{icon:h.b}),"\xa0Instagram"),l.a.createElement("br",null),l.a.createElement("div",{className:"profile-text"},e.children)))}),g=function(e){return l.a.createElement("a",{href:e.url}," ",l.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))},u=(t(24),function(e){return l.a.createElement("div",{className:"row project"},l.a.createElement("div",{className:"col-sm-4 col-xs-12"},l.a.createElement("img",{className:"img-thumbnail img-responsive project-image",alt:"",src:e.image,onClick:function(){e.video?e.showLightboxCallback(e.image,e.video):e.showLightboxCallback(e.image,null)},style:{cursor:"pointer"}})),l.a.createElement("div",{className:"col-sm-8 col-xs-12"},l.a.createElement("h3",null,null!=e.url?l.a.createElement("a",{href:e.url},e.title):l.a.createElement("span",null,e.title),null!=e.giturl?l.a.createElement(g,{url:e.giturl}):null,l.a.createElement("small",null,l.a.createElement("br",null),e.description)),e.children))}),p=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),i=t[0],r=t[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),h=m[0],g=m[1],p=Object(n.useState)(null),b=Object(o.a)(p,2),w=b[0],f=b[1],v=function(e,a){r(e),g(a),f(!0)};return l.a.createElement("div",null,l.a.createElement(s,{image:i,video:h,visible:w,hideLightboxCallback:function(){f(!1)}}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"content col-xs-12 col-sm-10 col-sm-offset-1"},l.a.createElement(d,{image:"images/profile-pic.jpg",name:"Alexander D. Brown",title:"B.S. Computer Science",email:"alexanderdouglasbrown@gmail.com",resume:"https://drive.google.com/open?id=0B30hQOEKn_sUWFViRXkzY0tUb2s",github:"https://github.com/alexanderdouglasbrown",linkedin:"https://www.linkedin.com/in/alexanderdouglasbrown/",instagram:"https://www.instagram.com/glacialtruffle/"},"Hi, my name is Alex. I'm passionate about computers and technology, and have been programming, building, and repairing computers for as long as I can remember. I have a Bachelor of Science in Computer Science from San Francisco State University, and an Associate in Science in CIS Desktop Networking from College of Marin. Below are some of my programming projects."),l.a.createElement(u,{showLightboxCallback:v,image:"images/image-splash.png",video:"videos/image-splash.mp4",title:"Image Splash",description:"An image sharing website",url:"http://www.imagesplash.cool/",giturl:"https://github.com/alexanderdouglasbrown/ImageSplash"},"A personal project website for sharing images and leaving comments. Built with Node.js, Express, and MongoDB."),l.a.createElement(u,{showLightboxCallback:v,image:"images/frend-chat.png",video:"videos/frend-chat.mp4",title:"Frend Chat",description:'A chat room to connect you and your "frends"',url:"https://github.com/alexanderdouglasbrown/FrendChat/releases",giturl:"https://github.com/alexanderdouglasbrown/FrendChat"},"A chat app made in Java and JavaFX, and a personal project of mine. It connects to a server, ",l.a.createElement("a",{href:"https://github.com/alexanderdouglasbrown/FrendServer"},"Frend Server"),", which is written in C++. Frend Server uses SQLite to store user credentials, while passwords are salted and hashed with SHA256."),l.a.createElement(u,{showLightboxCallback:v,image:"images/fruit-valley.png",video:"videos/fruit-valley.mp4",title:"Fruit Valley",description:"A match-3 puzzle game made in Javascript",url:"https://alexanderdouglasbrown.github.io/Fruit-Valley/",giturl:"https://github.com/alexanderdouglasbrown/Fruit-Valley"},"A personal project of mine. Built with another of my projects, ",l.a.createElement("a",{href:"https://github.com/alexanderdouglasbrown/JSGamework"},"JSGamework"),", which handles the game loop and scales the screen to fit the browser window."),l.a.createElement(u,{showLightboxCallback:v,image:"images/where-weather.jpg",video:"videos/where-weather.mp4",title:"Where Weather",description:"An iOS app that lets you see the weather anywhere in the world",giturl:"https://github.com/alexanderdouglasbrown/Where-Weather"},"A personal project built in Swift. The user presses and holds a spot on the world map and, using Apple's MapKit and data from OpenWeatherMap.org, Where Weather displays temperature and weather conditions anywhere in the world."),l.a.createElement(u,{showLightboxCallback:v,image:"images/sketchy.png",video:"videos/sketchy.mp4",title:"Sketchy",description:"An online multiplayer Javascript Pictionary game",url:"http://csc667.herokuapp.com/",giturl:"https://github.com/alexanderdouglasbrown/Sketchy"},"Built in my Internet Application Design and Development class using Node.js with Socket.IO. I worked on building the drawing pad, which keeps packet sizes small by sending the artist's mouse movements to other players. I also worked on the client and server game logic, including assigning the host player, scanning the chat room for correct guesses, etc."),l.a.createElement(u,{showLightboxCallback:v,image:"images/capone.jpg",video:"videos/capone.mp4",title:"Capone Behind Bars at Alcatraz",description:"An iOS detailing Al Capone's time spent in Alcatraz",giturl:"https://github.com/alexanderdouglasbrown/Capone-Behind-Bars-at-Alcatraz"},"An iOS app I made for my family's business before entering my Computer Science degree program.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f193d600.chunk.js.map
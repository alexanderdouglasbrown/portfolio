(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(2),r=t.n(o),l=(t(14),t(3)),s=t(4),c=t(6),h=t(5),m=t(7),d=(t(15),t(16),function(e){return n.a.createElement("div",{id:"lightbox",className:null===e.showLightbox?"":e.showLightbox?"show-lightbox":"hide-lightbox",onClick:e.hideLightboxCallback},e.video?n.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:e.video}):n.a.createElement("img",{src:e.image,alt:""}))}),g=(t(17),function(e){return n.a.createElement("div",{className:"row profile"},n.a.createElement("div",{className:"col-sm-4 col-xs-12"},n.a.createElement("img",{className:"img-responsive profile-pic",alt:"",src:e.image})),n.a.createElement("div",{className:"col-sm-8 col-xs-12"},n.a.createElement("h2",null,e.name,n.a.createElement("small",null,n.a.createElement("br",null),e.title)),n.a.createElement("a",{href:"mailto:".concat(e.email)},n.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})," alexanderdouglasbrown@gmail.com"),n.a.createElement("br",null),n.a.createElement("a",{href:e.resume},n.a.createElement("i",{className:"fa fa-file","aria-hidden":"true"})," Resume"),n.a.createElement("span",{className:"smallGap"}),n.a.createElement("a",{href:e.github},n.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})," GitHub"),n.a.createElement("span",{className:"smallGap"}),n.a.createElement("a",{href:e.linkedin},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})," LinkedIn"),n.a.createElement("br",null),n.a.createElement("div",{className:"profile-text"},e.children)))}),u=function(e){return n.a.createElement("a",{href:e.url}," ",n.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))},p=(t(18),function(e){return n.a.createElement("div",{className:"row project"},n.a.createElement("div",{className:"col-sm-4 col-xs-12"},n.a.createElement("img",{className:"img-thumbnail img-responsive project-image",alt:"",src:e.image,onClick:function(){e.video?e.showLightboxCallback(e.image,e.video):e.showLightboxCallback(e.image,null)},style:{cursor:"pointer"}})),n.a.createElement("div",{className:"col-sm-8 col-xs-12"},n.a.createElement("h3",null,null!=e.url?n.a.createElement("a",{href:e.url},e.title):n.a.createElement("span",null,e.title),null!=e.giturl?n.a.createElement(u,{url:e.giturl}):null,n.a.createElement("small",null,n.a.createElement("br",null),e.description)),e.children))}),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={lightboxImageSource:"",lightboxVideoSource:"",showLightbox:null},t.hideLightbox=function(){t.setState(function(){return{showLightbox:!1}})},t.showLightbox=function(e,a){t.setState(function(){return{lightboxImageSource:e,lightboxVideoSource:a,showLightbox:!0}})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,{image:this.state.lightboxImageSource,video:this.state.lightboxVideoSource,showLightbox:this.state.showLightbox,hideLightboxCallback:this.hideLightbox}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"content col-xs-12 col-sm-10 col-sm-offset-1"},n.a.createElement(g,{image:"images/profile-pic.jpg",name:"Alexander D. Brown",title:"B.S. Computer Science",email:"alexanderdouglasbrown@gmail.com",resume:"https://drive.google.com/open?id=0B30hQOEKn_sUWFViRXkzY0tUb2s",github:"https://github.com/alexanderdouglasbrown",linkedin:"https://www.linkedin.com/in/alexanderdouglasbrown/"},"Hi, my name is Alex. I'm passionate about computers and technology, and have been programming, building, and repairing computers for as long as I can remember. I have a Bachelor of Science in Computer Science from San Francisco State University, and an Associate in Science in CIS Desktop Networking from College of Marin. Below are some of my programming projects."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/image-splash.png",video:"videos/image-splash.mp4",title:"Image Splash",description:"An image sharing website",url:"http://www.imagesplash.cool/",giturl:"https://github.com/alexanderdouglasbrown/ImageSplash"},"A personal project website for sharing images and leaving comments. Built with Node.js, Express, and MongoDB."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/frend-chat.png",video:"videos/frend-chat.mp4",title:"Frend Chat",description:'A chat room to connect you and your "frends"',url:"https://github.com/alexanderdouglasbrown/FrendChat/releases",giturl:"https://github.com/alexanderdouglasbrown/FrendChat"},"A chat app made in Java and JavaFX, and a personal project of mine. It connects to a server, ",n.a.createElement("a",{href:"https://github.com/alexanderdouglasbrown/FrendServer"},"Frend Server"),", which is written in C++. Frend Server uses SQLite to store user credentials, while passwords are salted and hashed with SHA256."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/fruit-valley.png",video:"videos/fruit-valley.mp4",title:"Fruit Valley",description:"A match-3 puzzle game made in Javascript",url:"https://alexanderdouglasbrown.github.io/Fruit-Valley/",giturl:"https://github.com/alexanderdouglasbrown/Fruit-Valley"},"A personal project of mine. Built with another of my projects, ",n.a.createElement("a",{href:"https://github.com/alexanderdouglasbrown/JSGamework"},"JSGamework"),", which handles the game loop and scales the screen to fit the browser window."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/where-weather.jpg",video:"videos/where-weather.mp4",title:"Where Weather",description:"An iOS app that lets you see the weather anywhere in the world",giturl:"https://github.com/alexanderdouglasbrown/Where-Weather"},"A personal project built in Swift. The user presses and holds a spot on the world map and, using Apple's MapKit and data from OpenWeatherMap.org, Where Weather displays temperature and weather conditions anywhere in the world."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/sketchy.png",video:"videos/sketchy.mp4",title:"Sketchy",description:"An online multiplayer Javascript Pictionary game",url:"http://csc667.herokuapp.com/",giturl:"https://github.com/alexanderdouglasbrown/Sketchy"},"Built in my Internet Application Design and Development class using Node.js with Socket.IO. I worked on building the drawing pad, which keeps packet sizes small by sending the artist's mouse movements to other players. I also worked on the client and server game logic, including assigning the host player, scanning the chat room for correct guesses, etc."),n.a.createElement(p,{showLightboxCallback:this.showLightbox,image:"images/capone.jpg",video:"videos/capone.mp4",title:"Capone Behind Bars at Alcatraz",description:"An iOS detailing Al Capone's time spent in Alcatraz",giturl:"https://github.com/alexanderdouglasbrown/Capone-Behind-Bars-at-Alcatraz"},"An iOS app I made for my family's business before entering my Computer Science degree program.")))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.913dd09c.chunk.js.map
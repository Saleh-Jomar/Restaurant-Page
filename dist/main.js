(()=>{"use strict";(new class{website=new class{createHeader(){const e=document.createElement("header"),t=document.createElement("h1");return t.classList.add("Restaurant-Name"),t.textContent="Try",e.append(t,this.createNav()),e}createNav(){const e=document.createElement("nav"),t=this.createButton("home"),n=this.createButton("menu"),a=this.createButton("contact");return t.classList.add("active"),e.append(t,n,a),e.addEventListener("click",(t=>{if("BUTTON"==t.target.tagName){for(let t=0;t<3;t++)e.children[t].classList.contains("active")&&e.children[t].classList.remove("active");t.target.classList.add("active")}})),e}createButton(e){const t=document.createElement("button");return t.textContent=e[0].toUpperCase()+e.slice(1),t.id=e,t}createMain(){return document.createElement("main")}createFooter(){return document.createElement("footer")}render(){document.getElementById("content").append(this.createHeader(),this.createMain(),this.createFooter())}};home=new class{createHome(){const e=document.createElement("div");e.classList.add("homepage");const t=document.createElement("img");return t.src="Images/frontpage.jpg",t.alt="Random Image",e.append(this.createParagraph("This is the first line"),this.createParagraph("This is the second line"),t,this.createParagraph("This is the third line")),e}createParagraph(e){const t=document.createElement("p");return t.textContent=e,t}render(){const e=document.querySelector("main");e.textContent="",e.appendChild(this.createHome())}};contact=new class{createContact(){const e=document.createElement("div");e.classList.add("contactpage");const t=document.createElement("img");return t.src="Images/map.jpeg",t.alt="Location",e.append(this.createParagraph("Phone: 012 345 6789"),this.createParagraph("Address: National Capital Region, Philippines"),t),e}createParagraph(e){const t=document.createElement("p");return t.textContent=e,t}render(){const e=document.querySelector("main");e.textContent="",e.appendChild(this.createContact())}};menu=new class{menu=["Try1","Try2","Try3","Try4","Try5","Try6"];createMenu(){const e=document.createElement("div");e.classList.add("menupage");for(let t=0;t<this.menu.length;t++)e.appendChild(this.createItem(this.menu[t]));return e}createItem(e){const t=document.createElement("div");t.classList.add("menuItem");const n=document.createElement("h2");n.textContent=e;const a=document.createElement("img");return a.src="Images/try1.jpg",t.append(n,a),t}render(){const e=document.querySelector("main");e.textContent="",e.appendChild(this.createMenu())}};Initialize(){this.website.render(),this.home.render(),document.querySelector("nav").addEventListener("click",(e=>{"BUTTON"==e.target.tagName&&this[e.target.id].render()}))}}).Initialize()})();
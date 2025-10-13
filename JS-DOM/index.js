const image=document.getElementById("img");
image.src="";
image.width=150;
image.height=150;
const h4=document.createElement("h4");


h4.innerText="Price:125/-";
const child=document.createElement("div");
child.className="card";

child.appendChild(image);
child.appendChild(h4);
const parent=document.getElementById("root");
parent.appendChild(child);

function abrir(sec){
document.querySelectorAll("section").forEach(s=>s.style.display="none");
document.getElementById(sec).style.display="block";
}

function preview(input){
let preview=input.parentElement.querySelector(".preview");
for(let file of input.files){
let img=document.createElement("img");
img.src=URL.createObjectURL(file);
preview.appendChild(img);
}
}

function criar(nome,container){
let card=document.createElement("div");
card.className="card";
card.innerHTML=`
<h3>${nome}</h3>
<label>📷 Tirar foto</label>
<input type="file" accept="image/*" capture="environment" multiple onchange="preview(this)">
<label>📂 Importar arquivo</label>
<input type="file" multiple onchange="preview(this)">
<div class="preview"></div>
`;
document.getElementById(container).appendChild(card);
}

async function carregarRoteiro(){
const resp = await fetch('assets/roteiro.txt');
const txt = await resp.text();
const linhas = txt.split(/\n/).map(l=>l.trim()).filter(l=>l);
const grid = document.getElementById("grid-geral");
linhas.forEach(l=>criar(l,"grid-geral"));
}

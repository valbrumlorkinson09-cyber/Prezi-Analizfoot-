// ===========================
// ANALIZFOOT - SCRIPT.JS
// ===========================

// Baz done ekip yo
const ekip = {
  "real madrid": {
    non: "⚪ Real Madrid",
    atak: "88%",
    defans: "82%",
    fom: "Bon"
  },

  "barcelona": {
    non: "🔵 Barcelona",
    atak: "84%",
    defans: "80%",
    fom: "Bon"
  },

  "psg": {
    non: "🔴 PSG",
    atak: "86%",
    defans: "78%",
    fom: "Bon"
  },

  "manchester city": {
    non: "🔵 Manchester City",
    atak: "90%",
    defans: "85%",
    fom: "Ekselan"
  },

  "liverpool": {
    non: "🔴 Liverpool",
    atak: "87%",
    defans: "83%",
    fom: "Bon"
  },

  "bayern munich": {
    non: "🔴 Bayern Munich",
    atak: "89%",
    defans: "84%",
    fom: "Ekselan"
  },

  "dortmund": {
    non: "🟡 Dortmund",
    atak: "83%",
    defans: "80%",
    fom: "Bon"
  },

  "arsenal": {
    non: "🔴 Arsenal",
    atak: "85%",
    defans: "82%",
    fom: "Bon"
  },

  "chelsea": {
    non: "🔵 Chelsea",
    atak: "80%",
    defans: "81%",
    fom: "Mwayen"
  },

  "inter milan": {
    non: "⚫🔵 Inter Milan",
    atak: "84%",
    defans: "85%",
    fom: "Bon"
  },

  "ac milan": {
    non: "🔴⚫ AC Milan",
    atak: "82%",
    defans: "81%",
    fom: "Bon"
  }
};

// Fonksyon rechèch
function rechache() {

  let rech = document.getElementById("recherche").value.toLowerCase().trim();

  if (rech === "madrid") rech = "real madrid";
  if (rech === "barca" || rech === "barça") rech = "barcelona";
  if (rech === "city" || rech === "man city") rech = "manchester city";
  if (rech === "inter") rech = "inter milan";
  if (rech === "milan") rech = "ac milan";

  const rezilta = document.getElementById("rezilta");

  if (ekip[rech]) {

    rezilta.innerHTML = `
      <h3>${ekip[rech].non}</h3>
      <p>🔥 Atak: ${ekip[rech].atak}</p>
      <p>🛡 Defans: ${ekip[rech].defans}</p>
      <p>⚡ Fòm: ${ekip[rech].fom}</p>
    `;

  } else {

    rezilta.innerHTML = `
      <h3>❌ Ekip la pa jwenn.</h3>
    `;
  }
}

// Nouvo analiz AI
function nouvoAnaliz() {

  const ai = document.getElementById("ai-rezilta");

  if (!ai) return;

  ai.innerHTML = `
    <h3>🤖 AI NOUVO ANALIZ</h3>

    <p>⚪ Real Madrid : 55%</p>

    <p>🤝 Match nul : 25%</p>

    <p>🔵 Barcelona : 20%</p>
  `;
}

// Non itilizatè
const nonUser = document.getElementById("non-user");

if (nonUser) {

  const non = localStorage.getItem("utilizate");

  if (non) {
    nonUser.textContent = non;
  }

}
function analizeMatch(){

let rezilta = document.getElementById("analiz-rezilta");

rezilta.innerHTML = `

<h3>🤖 ANALIZFOOT AI</h3>

<p>⚔️ Atak Real Madrid: 88%</p>

<p>🛡 Defans Real Madrid: 82%</p>

<p>⚔️ Atak Barcelona: 85%</p>

<p>🛡 Defans Barcelona: 80%</p>

<hr>

<p>🔥 Prediksyon:</p>

<p>⚪ Real Madrid: 55%</p>

<p>🤝 Match nul: 25%</p>

<p>🔵 Barcelona: 20%</p>

`;

}
function AIAnaliz(){

let rezilta = document.getElementById("ai-result");


let realMadrid = 88 + 82 + 90;
let barcelona = 85 + 80 + 85;


let total = realMadrid + barcelona;


let madridPercent = Math.round((realMadrid / total) * 100);
let barcaPercent = Math.round((barcelona / total) * 100);


rezilta.innerHTML = `

<h3>🤖 ANALIZFOOT AI</h3>

<p>⚪ Real Madrid</p>
<p>⚔️ Atak: 88%</p>
<p>🛡 Defans: 82%</p>
<p>🔥 Fòm: 90%</p>


<hr>


<p>🔵 Barcelona</p>
<p>⚔️ Atak: 85%</p>
<p>🛡 Defans: 80%</p>
<p>🔥 Fòm: 85%</p>


<hr>


<h3>🔥 Prediksyon AI</h3>

<p>
⚪ Real Madrid: ${madridPercent}%
</p>

<p>
🔵 Barcelona: ${barcaPercent}%
</p>

<p>
🤝 Match nul: 20%
</p>

`;

}

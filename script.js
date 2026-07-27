// ===============================
// FOOTPREDICT HT
// SCRIPT PRINCIPAL
// ===============================

const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

const HEADERS = {
  "Content-Type": "application/json",
  "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
  "x-rapidapi-key": API_KEY
};


// ===============================
// MATCH JODI A
// ===============================

async function loadMatches(){

const box = document.getElementById("matches");

if(!box) return;

box.innerHTML = "⏳ Chajman match yo...";


try{

const date = new Date()
.toISOString()
.substring(0,10)
.replaceAll("-","");


const response = await fetch(
`https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${date}`,
{
method:"GET",
headers:HEADERS
}
);


const data = await response.json();

console.log(data);


box.innerHTML="";


const matches = data.response?.matches || [];


if(matches.length === 0){

box.innerHTML="⚽ Pa gen match disponib jodi a.";

return;

}


matches.slice(0,10).forEach(match=>{


box.innerHTML += `

<div class="match">

<div class="teams">

<div>
<img src="${match.home.logo || ''}" class="team-logo">
<p>${match.home.name}</p>
</div>

<h2>VS</h2>

<div>
<img src="${match.away.logo || ''}" class="team-logo">
<p>${match.away.name}</p>
</div>

</div>


<div class="score">
${match.home.score ?? 0} - ${match.away.score ?? 0}
</div>


<p class="time">
📅 ${match.time}
</p>


<button class="analyze-btn">
📊 Analize Match
</button>


</div>

`;

});


}

catch(error){

console.log(error);

box.innerHTML="❌ Erè koneksyon API";

}

}


// DEMARE
loadMatches();
// ===============================
// MATCH LIVE
// ===============================

async function loadLive(){

const box = document.getElementById("liveMatch");

if(!box) return;

box.innerHTML = "⏳ Chajman match live...";


try{

const response = await fetch(
"https://free-api-live-football-data.p.rapidapi.com/football-get-live-all-matches",
{
method:"GET",
headers:HEADERS
}
);


const data = await response.json();

console.log("LIVE:", data);


const live = 
data.response?.live || 
data.response?.matches || 
[];
console.log("LIVE:", data);

if(live.length === 0){

box.innerHTML = "⚽ Pa gen match live kounye a.";

return;

}


const match = live[0];


box.innerHTML = `

<h3>
🔴 ${match.home.name} 🆚 ${match.away.name}
</h3>

<div class="score">
${match.home.score ?? 0} - ${match.away.score ?? 0}
</div>

<p>
⏱ ${match.status?.liveTime?.short || "--"}
</p>

`;



}

catch(error){

console.log(error);

box.innerHTML = "❌ Erè Match Live";

}

}


loadLive();
console.log("⚽ FootPredict HT API aktif");

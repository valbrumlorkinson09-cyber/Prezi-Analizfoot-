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

console.log("⚽ FootPredict HT demare...");
// ===============================
// MATCH LIVE
// ===============================

async function loadLive() {

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

const live = data.response?.live || [];

if(live.length === 0){

box.innerHTML = "⚽ Pa gen match live kounye a.";

return;

}

const match = live[0];

box.innerHTML = `
<div class="match">

<h3>${match.home.name} 🆚 ${match.away.name}</h3>

<div class="score">
${match.home.score ?? 0} - ${match.away.score ?? 0}
</div>

<p class="time">
⏱ ${match.status.liveTime.short}
</p>

</div>
`;

}catch(error){

console.log(error);

box.innerHTML = "❌ Erè Match Live";

}

}

loadLive();
// ===============================
// TOP JWÈ
// ===============================

async function loadPlayers(){

const box = document.getElementById("players");

if(!box) return;

box.innerHTML="⏳ Chajman jwè yo...";

try{

const response = await fetch(
"https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
{
method:"GET",
headers:HEADERS
}
);

const data = await response.json();

const players = data.response?.suggestions || [];


box.innerHTML="";


players.slice(0,10).forEach(player=>{

box.innerHTML += `

<div class="player-card">

<h3>⭐ ${player.name}</h3>

<p>🏟️ ${player.teamName || "San ekip"}</p>

</div>

`;

});


}catch(error){

console.log(error);

box.innerHTML="❌ Erè jwè yo";

}

}


loadPlayers();

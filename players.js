const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

async function loadPlayers(){

const box = document.getElementById("players");

try{

const response = await fetch(
"https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
{
method:"GET",
headers:{
"Content-Type":"application/json",
"x-rapidapi-host":"free-api-live-football-data.p.rapidapi.com",
"x-rapidapi-key":API_KEY
}
});

const data = await response.json();

box.innerHTML="";

let players = data.response.suggestions || [];

players.slice(0,5).forEach(player=>{

box.innerHTML += `
<div class="match">
⭐ ${player.name}
<br>
🏟️ ${player.teamName || "San ekip"}
</div>
`;

});


}catch(error){

box.innerHTML="Erè jwè API ❌";

}

}

loadPlayers();

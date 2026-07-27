async function loadPlayers() {

const box = document.getElementById("players");
if (!box) return;

try {

const response = await fetch(
"https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
{
method: "GET",
headers: {
"Content-Type": "application/json",
"x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
"x-rapidapi-key": API_KEY
}
});

const data = await response.json();

box.innerHTML = "";

const players = data.response.suggestions;

players.slice(0, 10).forEach(player => {

box.innerHTML += `
<div class="player-card">
<h3>${player.name}</h3>
<p>🏟️ ${player.teamName || "San ekip"}</p>
</div>
`;

});

} catch (e) {

box.innerHTML = "❌ Erè chaje jwè yo";

}

}

loadPlayers();

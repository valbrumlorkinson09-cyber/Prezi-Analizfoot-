// ===============================
// FOOTPREDICT HT
// API PRINCIPAL
// ===============================

const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

const HEADERS = {
  "Content-Type": "application/json",
  "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
  "x-rapidapi-key": API_KEY
};

// ===============================
// CHARGE MATCH YO
// ===============================

async function loadMatches() {

  const matchBox = document.getElementById("matches");
  const liveBox = document.getElementById("liveMatch");

  const today = new Date()
    .toISOString()
    .substring(0, 10)
    .replace(/-/g, "");

  try {

    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${today}`,
      {
        method: "GET",
        headers: HEADERS
      }
    );

    const data = await response.json();

    console.log(data);

    const matches =
      data.response?.matches ||
      data.response?.live ||
      [];

    // =========================
    // MATCH JODI A
    // =========================

    if (matchBox) {

      matchBox.innerHTML = "";

      if (matches.length === 0) {

        matchBox.innerHTML =
          "⚽ Pa gen match jodi a.";

      } else {

        matches.slice(0,10).forEach(match => {

          matchBox.innerHTML += `

<div class="match">

<h3>${match.home.name} 🆚 ${match.away.name}</h3>

<div class="score">
${match.home.score ?? 0} - ${match.away.score ?? 0}
</div>

<p class="time">
📅 ${match.time}
</p>

<button class="analyse-btn"
onclick="analyseMatch(
'${match.home.name}',
'${match.away.name}',
'${match.home.score ?? 0} - ${match.away.score ?? 0}',
'${match.time}',
'${match.status?.liveTime?.short ?? "--"}'
)">
📊 Analize Match
</button>

</div>

`;

        });

      }

    }

    // =========================
    // MATCH LIVE
    // =========================

    if (liveBox) {

      const liveMatches = matches.filter(match =>
        match.status?.ongoing === true ||
        match.status?.liveTime
      );

      if (liveMatches.length === 0) {

        liveBox.innerHTML =
          "⚽ Pa gen match live kounye a.";

      } else {

        const live = liveMatches[0];

        liveBox.innerHTML = `

<div class="match">

<h3>
🔴 ${live.home.name} 🆚 ${live.away.name}
</h3>

<div class="score">
${live.home.score ?? 0} - ${live.away.score ?? 0}
</div>

<p class="time">
⏱ ${live.status.liveTime?.short ?? "LIVE"}
</p>

</div>

`;

      }

    }

  } catch (error) {

    console.log(error);

    if (matchBox)
      matchBox.innerHTML = "❌ Erè Match API";

    if (liveBox)
      liveBox.innerHTML = "❌ Erè Live API";

  }

}

// ===============================
// TOP JWÈ
// ===============================

async function loadPlayers() {

  const box = document.getElementById("players");

  if (!box) return;

  box.innerHTML = "⏳ Chajman jwè yo...";

  try {

    const response = await fetch(
      "https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
      {
        method: "GET",
        headers: HEADERS
      }
    );

    const data = await response.json();

    const players =
      data.response?.suggestions || [];

    box.innerHTML = "";

    if (players.length === 0) {

      box.innerHTML = "Pa gen jwè.";

      return;

    }

    players.slice(0,10).forEach(player => {

      box.innerHTML += `

<div class="player-card">

<h3>⭐ ${player.name}</h3>

<p>${player.teamName || "San ekip"}</p>

</div>

`;

    });

  } catch (error) {

    console.log(error);

    box.innerHTML = "❌ Erè jwè.";

  }

}

// ===============================
// ANALIZ MATCH
// ===============================

function analyseMatch(home, away, score, date, minute){

localStorage.setItem("homeTeam", home);

localStorage.setItem("awayTeam", away);

localStorage.setItem("matchScore", score);

localStorage.setItem("matchDate", date);

localStorage.setItem("minute", minute);

window.location.href = "match-details.html";

}

// ===============================
// DEMARE APP
// ===============================

loadMatches();
loadPlayers();

console.log("⚽ FootPredict HT API Aktif");

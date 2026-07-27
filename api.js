const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

const headers = {
  "Content-Type": "application/json",
  "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
  "x-rapidapi-key": API_KEY
};

// Match jodi a
async function loadMatches() {
  const box = document.getElementById("matches");
  box.innerHTML = "⏳ Chajman match yo...";

  try {
    const today = new Date().toISOString().split("T")[0].replace(/-/g, "");

    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${today}`,
      { headers }
    );

    const data = await response.json();

    const matches = data.response?.matches || [];

    if (matches.length === 0) {
      box.innerHTML = "⚽ Pa gen match jodi a.";
      return;
    }

    box.innerHTML = "";

    matches.slice(0, 10).forEach(match => {
      box.innerHTML += `
        <div class="match">
          <h3>${match.home.name} 🆚 ${match.away.name}</h3>
          <div class="score">${match.home.score ?? 0} - ${match.away.score ?? 0}</div>
          <p class="time">📅 ${match.time}</p>
        </div>
      `;
    });

  } catch (e) {
    console.log(e);
    box.innerHTML = "❌ Erè koneksyon API";
  }
}

// Match live
async function loadLive() {
  const box = document.getElementById("liveMatch");

  try {
    const response = await fetch(
      "https://free-api-live-football-data.p.rapidapi.com/football-get-live-all-matches",
      { headers }
    );

    const data = await response.json();

    const live = data.response?.live || [];

    if (live.length === 0) {
      box.innerHTML = "⚽ Pa gen match live kounye a.";
      return;
    }

    const match = live[0];

    box.innerHTML = `
      <h3>${match.home.name} 🆚 ${match.away.name}</h3>
      <div class="score">${match.home.score} - ${match.away.score}</div>
      <p class="time">⏱ ${match.status.liveTime.short}</p>
    `;

  } catch (e) {
    console.log(e);
    box.innerHTML = "❌ Erè Match Live";
  }
}

loadMatches();
loadLive();

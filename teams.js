const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

async function loadTeams(){

const box = document.getElementById("teams");

try{

const response = await fetch(
"https://free-api-live-football-data.p.rapidapi.com/football-search-teams?search=real",
{
method:"GET",
headers:{
"Content-Type":"application/json",
"x-rapidapi-host":"free-api-live-football-data.p.rapidapi.com",
"x-rapidapi-key":API_KEY
}
});

const data = await response.json();

console.log(data);

box.innerHTML="";

let teams = data.response?.suggestions || [];

teams.slice(0,5).forEach(team=>{

box.innerHTML += `
<div class="match">
🏟️ ${team.name}
</div>
`;

});

}catch(error){

box.innerHTML="Erè ekip API ❌";

}

}

loadTeams();

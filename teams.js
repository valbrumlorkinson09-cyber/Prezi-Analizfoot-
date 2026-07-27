// ===============================
// FOOTPREDICT HT
// TEAMS API
// ===============================

const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";


const HEADERS = {

"Content-Type":"application/json",

"x-rapidapi-host":"free-api-live-football-data.p.rapidapi.com",

"x-rapidapi-key":API_KEY

};



// ===============================
// CHÈCHE EKIP
// ===============================

async function loadTeams(){


const box = document.getElementById("teams");


if(!box) return;



box.innerHTML = "⏳ Chajman ekip yo...";



try{


const response = await fetch(

"https://free-api-live-football-data.p.rapidapi.com/football-search-teams?search=real",

{

method:"GET",

headers:HEADERS

}

);



const data = await response.json();


console.log("TEAMS:", data);



const teams =
data.response?.suggestions || [];



box.innerHTML="";



if(teams.length === 0){

box.innerHTML =
"⚽ Pa gen ekip jwenn";

return;

}



teams.slice(0,10).forEach(team=>{


box.innerHTML += `

<div class="match-item">

<h3>
🏟️ ${team.name}
</h3>


<p>
Football Team
</p>


</div>

`;



});



}

catch(error){


console.log(error);


box.innerHTML =
"❌ Erè ekip API";


}



}



loadTeams();

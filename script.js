const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

const url = "https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=20260727";

async function loadMatches(){

const box = document.getElementById("matches");

try{

const response = await fetch(url,{
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


let matches = data.response.matches || data.response.live;


if(!matches || matches.length === 0){

box.innerHTML="Pa gen match disponib jodi a ⚽";

return;

}


matches.slice(0,10).forEach(match=>{

box.innerHTML += `

<div class="match">

<h3>${match.home.name} 🆚 ${match.away.name}</h3>

<div class="score">
${match.home.score ?? 0} - ${match.away.score ?? 0}
</div>

<p class="time">
📅 ${match.time}
</p>

</div>

`;

});


}catch(error){

console.log(error);

box.innerHTML="Erè koneksyon API ❌";

}

}


loadMatches();

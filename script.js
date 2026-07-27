const API_KEY = "fe08bb1ed4mshd1a647c90e2c802p172617jsn1f453b26a050";

const matchBox = document.getElementById("match-api");

async function loadMatches(){

if(!matchBox){
return;
}

matchBox.innerHTML = "Chajman match yo... ⚽";

const today = new Date();
const date = today.getFullYear() +
String(today.getMonth()+1).padStart(2,"0") +
String(today.getDate()).padStart(2,"0");


try{

const response = await fetch(
`https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${date}`,
{
method:"GET",
headers:{
"Content-Type":"application/json",
"x-rapidapi-host":"free-api-live-football-data.p.rapidapi.com",
"x-rapidapi-key":API_KEY
}
}
);


const data = await response.json();

console.log(data);


if(!data.response){
matchBox.innerHTML="Pa gen match disponib jodi a ❌";
return;
}


let matches = data.response;


matchBox.innerHTML="";


matches.forEach(match=>{

matchBox.innerHTML += `

<div class="match-card">

<h3>
${match.home?.name || "Home"} 
vs 
${match.away?.name || "Away"}
</h3>

<p>
⚽ Score:
${match.home?.score ?? 0}
-
${match.away?.score ?? 0}
</p>

<p>
⏰ ${match.time || "N/A"}
</p>

</div>

`;

});


}

catch(error){

console.log(error);

matchBox.innerHTML=
"Erè koneksyon API ❌";

}

}


loadMatches();

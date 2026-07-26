// ===============================
// PREZI SCORE API FINAL
// ===============================

const API_KEY = "17bb4ac5d7787d60de3ff0301ce0554b";

console.log("PREZI SCORE API KEY CHARGED");


const API_URL = "https://v3.football.api-sports.io/fixtures";



// ===============================
// LOAD MATCH JODI A
// ===============================

async function loadMatches(){

    const box = document.getElementById("match-api");

    if(!box){
        return;
    }


    try{

        const today = new Date()
        .toISOString()
        .split("T")[0];


        const response = await fetch(
            `${API_URL}?date=${today}`,
            {

                method:"GET",

                headers:{
                    "x-apisports-key":API_KEY
                }

            }
        );


        const data = await response.json();
console.log(data);

        box.innerHTML="";


        if(!data.response || data.response.length===0){

            box.innerHTML =
            "⚽ Pa gen match disponib";

            return;

        }



        data.response.slice(0,10)
        .forEach(match=>{


            const home =
            match.teams.home.name;


            const away =
            match.teams.away.name;


            const homeLogo =
            match.teams.home.logo;


            const awayLogo =
            match.teams.away.logo;



            const score =
            `${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;


            const minute =
            match.fixture.status.elapsed 
            ? match.fixture.status.elapsed+"'"
            : "--";



            const league =
            match.league.name;



            box.innerHTML += `


            <div class="match-item">


            <h4>
            🏆 ${league}
            </h4>


            <p>
            ⚪ ${home}
            </p>


            <strong>
            ${score}
            </strong>


            <p>
            🔵 ${away}
            </p>


            <p>
            ⏱️ ${minute}
            </p>



            <button onclick="openMatch(
            '${home}',
            '${away}',
            '${score}',
            '${league}',
            '${minute}'
            )">

            📊 Analize Match

            </button>


            </div>


            `;


        });


    }

    catch(error){

    console.log("API ERROR:", error);

    box.innerHTML =
    "❌ API pa konekte";

    }


}




// ===============================
// OPEN MATCH DETAILS
// ===============================


function openMatch(
home,
away,
score,
league,
minute
){


localStorage.setItem(
"homeTeam",
home
);


localStorage.setItem(
"awayTeam",
away
);


localStorage.setItem(
"matchScore",
score
);


localStorage.setItem(
"league",
league
);


localStorage.setItem(
"minute",
minute
);



window.location.href =
"match-details.html";


}




// ===============================
// LIVE MATCH
// ===============================


async function loadLive(){


const home =
document.getElementById("liveHome");


if(!home){

return;

}



try{


const response =
await fetch(
`${API_URL}?live=all`,
{

headers:{
"x-apisports-key":API_KEY
}

}
);



const data =
await response.json();



if(data.response.length > 0){


const match =
data.response[0];



document.getElementById("liveHome")
.innerHTML =
"⚪ "+
match.teams.home.name;



document.getElementById("liveAway")
.innerHTML =
"🔵 "+
match.teams.away.name;



document.getElementById("liveScore")
.innerHTML =
`${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;



document.getElementById("liveMinute")
.innerHTML =
"⏱️ "+
(match.fixture.status.elapsed ?? 0)
+"'";



document.getElementById("liveStatus")
.innerHTML =
"🔴 LIVE";


}



}

catch(error){

console.log(error);

}


}



// START

loadMatches();

loadLive();

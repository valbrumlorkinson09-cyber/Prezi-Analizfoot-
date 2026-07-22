<h3>${ekip[rech].non}</h3>
🔥 Atak: ${ekip[rech].atak}<br>
🛡 Defans: ${ekip[rech].defans}<br>
⚡ Fòm: ${ekip[rech].fom}
`;

}else{

rezilta.innerHTML = `
<h3>❌ Pa jwenn ekip la</h3>
<p>Eseye ekri non ekip la ankò.</p>
`;

}

}

function nouvoAnaliz(){

document.getElementById("ai-rezilta").innerHTML=`
<h3>🤖 AI NOUVO ANALIZ</h3>
<p>⚪ Real Madrid: 55%</p>
<p>🤝 Match nul: 25%</p>
<p>🔵 Barcelona: 20%</p>
`;

}

let non = localStorage.getItem("utilizate");

if(non){

document.getElementById("non-user").textContent = non;

}

</script>


/* Snack 3
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare!!! ) i dati relativi alle squadre evidenziando in giallo la riga corrispondente alla squadra con più falli subiti. */
 
const tableHTML = document.querySelector(".table-container");




/* Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti */
let teams=[
    {
        nome : "inter",
        score : 10,
        fouls: 1
    },
    {
        nome : "inter",
        score : 5,
        fouls: 7
    },
    {
        nome : "inter",
        score : 7,
        fouls: 12
    }

];


/* stampare in html (in forma tabellare!!! ) i dati relativi alle squadre evidenziando
 in giallo la riga corrispondente alla squadra con più falli subiti. */ 


let lastHigherFouls = 0;

let lastHigherFoulsTeam;

for(let x = 0; x<teams.length;x++){
    if(teams[x].fouls>lastHigherFouls){
        lastHigherFouls = teams[x].fouls;
        lastHigherFoulsTeam = teams[x] ;
    }
}




for(let x = 0; x<teams.length;x++){

    const{ nome, score, fouls} = teams[x];

    let customClass = "";

    if(teams[x] === lastHigherFoulsTeam ){
        customClass = "fallisubiti";
    }

    tableHTML.innerHTML +=`
    <ul class="${customClass}">
        <li>${nome}</li>
        <li>${score}</li>
        <li>${fouls}</li>
    </ul>
    `
}





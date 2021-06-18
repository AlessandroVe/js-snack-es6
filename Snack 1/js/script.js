/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. */

//Risolvetelo prima in versione ES5,
/* Creare un array di oggetti: */
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
/* var arrayBike=[
    {
        nome : "bici1",
        peso :  25
    },
    {
        nome : "bici2",
        peso :  20
    },
    {
        nome : "bici3",
        peso :  30
    }
]

var lastBikeDisplayed; 

var lastBikeDisplayedWeight = 0;

for (var x = 0; x < arrayBike.length; x++) {

    var thisWeight = arrayBike[x].peso;

    if (thisWeight > lastBikeDisplayedWeight) {

        lastBikeDisplayed = arrayBike[x];
        lastBikeDisplayedWeight = thisWeight;

    }
} */
/* // Stampare a schermo la bici 
console.log(lastBikeDisplayed);    

 */

//la versione in ES6.
const arrayBike = [
    {
        nome: "bici1",
        peso: 40
    },
    {
        nome: "bici2",
        peso: 18
    },
    {
        nome: "bici13",
        peso: 80
    }
];

let lastBikeDisplayed;  
let lastBikeDisplayedWeight = 0;

for (let x = 0; x < arrayBike.length; x++) {

    const { peso } = arrayBike[x];
    
    if (peso > lastBikeDisplayedWeight) {
        lastBikeDisplayed = arrayBike[x];
        lastBikeDisplayedWeight = peso;
    }

}


const {nome} = lastBikeDisplayed;

console.log(`Lo bici più pesante è ${nome} `)
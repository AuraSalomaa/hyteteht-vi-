'use strict'
let lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;

let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;


let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;



const form = document.querySelector("form")
const tiedot = document.getElementById("target")
form.addEventListener('submit',  function(evt){
    evt.preventDefault();

    const paivakirjamerkinta = (document.querySelector("input[name=merkinta]").value)
    const paino = Number(document.querySelector("input[name=bmi]").value)
    console.log(paino, paivakirjamerkinta)
    console.log(typeof paino)
    const tiedot = document.getElementById("target")
    tiedot.innerText = `${paino}, ${paivakirjamerkinta}`
    
    


    
});


 let bmi = (weight / ((height * height) / 10000)).toFixed(1);
console.log(bmi)









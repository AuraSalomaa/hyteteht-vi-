'use strict'


const form = document.querySelector("form")

form.addEventListener('submit',  function(evt){
    evt.preventDefault();

    const paivakirjamerkinta = (document.querySelector("input[name=merkinta]").value)
    const paino = Number(document.querySelector("input[name=bmi]").value)
    console.log(paino, paivakirjamerkinta)
    console.log(typeof paino)
    const tiedot = document.getElementById("target")
    tiedot.innerText = `${paino}, ${paivakirjamerkinta}`
    
    


    
});









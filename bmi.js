'user strict'

let low_bmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`
let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;


let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;
const analyysi = document.querySelector(".analysis")


const button = document.querySelector(".calculate")
const tulokset = document.querySelector(".bmi-score")
button.addEventListener("click", function(evt){
    const weight = Number(document.querySelector("input").value)
    const height = Number(document.getElementById("height").value)
    let bmi = (weight / ((height * height) / 10000)).toFixed(1);
    const bmi_num = Number(bmi)
    console.log(bmi)
    tulokset.innerText = bmi_num

    if (bmi_num<= 18.5){
        analyysi.innerText = low_bmi
        document.querySelector('.bmi0-19').classList.add('lowBmi')
        
        

    }
    else if( bmi_num >= 18.6, bmi_num <= 25 ) {
        
        analyysi.innerText = normalBmi
        document.querySelector('.bmi19-25').classList.add('normalBmi');
        
    }else {
         analyysi.innerText = highBmi
         document.querySelector('.bmi25-40').classList.add('highBmi');
    }
        
    
    
    
    
    
});


const reset= document.querySelector("input")
reset.addEventListener("click", function(evt){
        document.querySelector(".bmi0-19", ".bmi25-30").classList.remove("lowBmi", "normalBmi","highBmi" )
        document.querySelector(".bmi19-25").classList.remove("normalBmi")
        document.querySelector(".bmi25-40").classList.remove("highBmi")
});







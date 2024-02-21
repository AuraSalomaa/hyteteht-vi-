const nappi = document.getElementById("paivanappi")

nappi.addEventListener("click",  async function(evt){
    try {
    const response = await fetch('mockdata.json');   
    if (!response.ok) throw new Error('huono haku!')           // starts the download.
    const images = await response.json(); 
    
    console.log(images)    
    images.forEach(element => {
        console.log(`Nimi: ${element.day}`)
        const card = document.querySelector(".card")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figcaption = document.createElement("figcaption")
        card.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        
        img.src = element.address
        const node = document.createTextNode(element.description)
        figcaption.appendChild(node)
        
        
        
        
    });                // convert the loaded text JSON into a JavaScript object / array
        card.innerHTML = '';
    
    // 'address' property of the second object object in the 'images' array

    // document.querySelector('img').src = address;
    // document.querySelector('img').alt = name;
    // document.querySelector('figcaption').innerText = description;
} catch(error){
    console.log(error)
}

});


export{nappi};
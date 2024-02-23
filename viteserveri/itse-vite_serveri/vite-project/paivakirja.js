const nappi = document.getElementById("paivanappi")

nappi.addEventListener("click",  async function(evt){
    try {
    const response = await fetch('mockdata.json');   
    if (!response.ok) throw new Error('huono haku!')           // starts the download.
    const entries = await response.json(); 
    
    console.log(entries)    
    entries.forEach(element => {
        const section = document.querySelector(".card-area")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const date = document.createElement("h4")
        const figcaption = document.createElement("figcaption")
        section.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        figure.appendChild(date)
        img.src = element.address
        const node3 = document.createTextNode(element.day)
        const node = document.createTextNode(element.description)
        
        date.appendChild(node3)
        figcaption.appendChild(date)
        figcaption.appendChild(node)
        
        
        
        
    });                // convert the loaded text JSON into a JavaScript object / array
        section.innerHTML = '';
    
    // 'address' property of the second object object in the 'images' array

    // document.querySelector('img').src = address;
    // document.querySelector('img').alt = name;
    // document.querySelector('figcaption').innerText = description;
} catch(error){
    console.log(error)
}

});


export{nappi};
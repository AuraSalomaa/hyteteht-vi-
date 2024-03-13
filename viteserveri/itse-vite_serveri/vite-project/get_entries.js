import './tyylit.css';
import { fetchData } from './fetch';

const getEntries = document.querySelector('.get_entry');
getEntries.addEventListener('click',async (evt) => {
    evt.preventDefault()
    console.log(evt)
    const url = "https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries"
    const token  = localStorage.getItem('token')
    const options = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
    Authorization: 'Bearer: ' + token,
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}
    fetchData(url,options).then((data) =>{
        console.log(data)
    
    
    
        data.forEach((element) => {
            const section = document.querySelector(".card-area")
            const figure = document.createElement("figure")
            const p1= document.createElement("p")
            const p2 = document.createElement("p")
            const date = document.createElement("p")
            const p3 = document.createElement("p")
            const figcaption = document.createElement("figcaption")

            section.appendChild(figure)
            figure.appendChild(p1)
            figure.appendChild(p2)
            figure.appendChild(p3)
            figure.appendChild(date)
            const node = document.createTextNode(element[0].mood)
            const node1 = document.createTextNode(element[0].notes)
            const Date = document.createTextNode(element[0].entry_date)
            const node3 = document.createTextNode(element[0].entry_id)
            
            p1.appendChild(node)
            p2.appendChild(node1)
            date.append(Date)
            p3.appendChild(node3)
            

        
            
            
        })   
    }   
    )});                // convert the loaded text JSON into a JavaScript object / array
          
    

        
        // 'address' property of the second object object in the 'images' array
    
        // document.querySelector('img').src = address;
        // document.querySelector('img').alt = name;
        // document.querySelector('figcaption').innerText = description
       
        // Käsitellään fetchData fynktiosta ullut JSON 


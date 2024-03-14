import './tyylit.css';
import { fetchData } from './fetch';

const entries = document.querySelector('.get_entry');
entries.addEventListener('click', GetEntries);

async function GetEntries(){
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
        createTable(data);
    });
}
function createTable(data){
const card = document.querySelector(".card-area");
    card.innerHTML = ''
  data.forEach((rivi)=>{
    console.log(rivi[0].entry_date, rivi[0].entry_id)
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td')
    const td4  = document.createElement('td')
    const td5 = document.createElement('td')
    td1.innerText = [rivi][0].entry_date;
    td2.innerText = rivi[1].entry_id;
    td5.innerText = rivi[1].notes
    // td3.innerHTML = `<button class="check" data-id="${rivi.user_id}">Info</button>`

    const button2 = document.createElement('button')
    button2.className = 'del';
    button2.setAttribute('data-id', [0][0].entry_id);
    button2.innerText = 'Delete';
    td4.appendChild(button2);
    button2.addEventListener('click', deleteEntry)
    
    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td4)
    tr.appendChild(td5)
    card.appendChild(tr)
    
    
  
  })
}
    
function deleteEntry(evt){
    console.log("poistettu");
  console.log(evt);
  //tapa 1: haetaan arvo tutkimalla eventtiä
  const id = evt.target.attributes['data-id'].value
  console.log(id)
  //tapa 2: heaetaan "viereinen elementti
  const id2 = evt.target.parentElement.nextElementSibling.textContent;
  console.log("tapa 2: ", id2)
  const url = `https://hyte-server-aura.northeurope.cloudapp.azure.coms/api/entries/${id}`
  const token  = localStorage.getItem('token')
  const options = {
   method: "DELETE", // *GET, POST, PUT, DELETE, etc.
   headers: {
     Authorization: 'Bearer: ' + token,
     // 'Content-Type': 'application/x-www-form-urlencoded',
   },
 }
 const answer  = confirm(`Oletko varma, että haluat poistaa käyttäjän ${id}`)
 if (answer){
  fetchData(url, options).then((data)=>{
    console.log(data)
  })
 }
 
}
    



   // convert the loaded text JSON into a JavaScript object / array
          
    

        
        // 'address' property of the second object object in the 'images' array
    
        // document.querySelector('img').src = address;
        // document.querySelector('img').alt = name;
        // document.querySelector('figcaption').innerText = description
       
        // Käsitellään fetchData fynktiosta ullut JSON

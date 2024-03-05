import './tyylit.css';
import { fetchData } from './fetch.js';

const bt1 = document.querySelector('.get_entry');
bt1.addEventListener('click',async () => {
    const url = "http://3000/api/entries/1"
    fetchData(url).then((data) =>{
        // Käsitellään fetchData fynktiosta ullut JSON
    
    });
});

const allButton = document.querySelector('.get_users');
allButton.addEventListener('click', getUsers);
async function getUsers(){
 const url = "http://127.0.0.1:3000/api/users"
 const token  = localStorage.getItem('token')
 const options = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  headers: {
    Authorization: 'Bearer: ' + token,
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}
fetchData(url, options).then((data)=>{
  createTable(data);
})

}
function createTable(data){
  console.log(data);
const tbody = document.querySelector(".tbody");
tbody.innerHTML = ''
  data.forEach((rivi)=>{
    console.log(rivi.username, rivi.user_id, rivi.user_level)
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td')
    const td3  = document.createElement('td')
    const td4  = document.createElement('td')
    const td5 = document.createElement('td')
    td1.innerText = rivi.username;
    td2.innerText = rivi.user_level;
    td5.innerText = rivi.user_id
    // td3.innerHTML = `<button class="check" data-id="${rivi.user_id}">Info</button>`
    const button1 = document.createElement('button')
    button1.className = 'check';
    button1.setAttribute('data-id', rivi.user_id);
    button1.innerText = 'Info';
    td3.appendChild(button1);
    button1.addEventListener('click',  getUsers);

    const button2 = document.createElement('button')
    button2.className = 'del';
    button2.setAttribute('data-id', rivi.user_id);
    button2.innerText = 'Delete';
    td4.appendChild(button2);
    button2.addEventListener('click', deleteUser)
    
    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tbody.appendChild(tr)
    
    

  });
}
async function showUserName () {
  // let name = localStorage.getItem('name')
  // console.log("käyttäjän nimi tähän")
  // document.getElementById('name').innerText = name;
  const url = 'http://127.0.0.1:3000/api/auth/me';
  let token = localStorage.getItem('token')
  const options = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: 'Bearer: ' + token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  
  fetchData(url, options).then((data)=>{
    document.getElementById('name').innerText = data.user.username;
  })

}
showUserName();



function deleteUser(evt){
  console.log("poistettu");
  console.log(evt);
  //tapa 1: haetaan arvo tutkimalla eventtiä
  const id = evt.target.attributes['data-id'].value
  console.log(id)
  //tapa 2: heaetaan "viereinen elementti
  const id2 = evt.target.parentElement.nextElementSibling.textContent;
  console.log("tapa 2: ", id2)
  const url = `http://127.0.0.1:3000/api/users/${id}`
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

// 1. testataan ensin YKSI endpoint joka ei vaadi tokenia
// 2. uudelleen strukturoidaan koodi jotta se on modulaarisempi

// tämä toimi ennen autentikaatiota, nyt tarvitsee tokenin, siistitään pian!
// sivuille on nyt myös lisätty navigaatio html sivuun, sekä siihen sopiva CSS koodi, hae siis uusi HTML ja UUSI CSS ennen kun aloitat

async function getAllUsers() {
  console.log('toimii!');

  try {
    const response = await fetch('http://127.0.0.1:3000/api/users');
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.forEach((element) => {
      console.log(element.username);
    });


    // tänne tiedot
    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';

    data.forEach((element) => {
      console.log(element.username);

      // Create table row element
      var tr = document.createElement('tr');

      // td1 Username
      var td1 = document.createElement('td');
      td1.innerText = element.username;

      // td2
      var td2 = document.createElement('td');
      td2.innerText = element.user_level;

      // td3
      var td3 = document.createElement('td');
      var button1 = document.createElement('button');
      button1.className = 'check';
      button1.setAttribute('data-id', '1');
      button1.innerText = 'Info';
      td3.appendChild(button1);

      // td4
      var td4 = document.createElement('td');
      var button2 = document.createElement('button');
      button2.className = 'del';
      button2.setAttribute('data-id', '1');
      button2.innerText = 'Delete';
      td4.appendChild(button2);

      // td5
      var td5 = document.createElement('td');
      td5.innerText = element.user_id;

      // Append table data elements to the table row element
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      // Append the table row element to the table (assuming you have a table with the id 'myTable')
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
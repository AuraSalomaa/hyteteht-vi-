import './tyylit.css';
import { fetchData } from './fetch.js';



// const allButton = document.querySelector('.get_users');
// allButton.addEventListener('click', getUsers);
// async function getUsers(){
//  const url = "https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users"
//  const token  = localStorage.getItem('token')
//  const options = {
//   method: "GET", // *GET, POST, PUT, DELETE, etc.
//   headers: {
//     Authorization: 'Bearer: ' + token,
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
// }
// fetchData(url, options).then((data)=>{
//   createTable(data);
// })

// }
// function createTable(data){
//   console.log(data);
// const tbody = document.querySelector(".tbody");
// tbody.innerHTML = ''
//   data.forEach((rivi)=>{
//     console.log(rivi.username, rivi.user_id, rivi.user_level)
//     const tr = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td')
//     const td3  = document.createElement('td')
//     const td4  = document.createElement('td')
//     const td5 = document.createElement('td')
//     td1.innerText = rivi.username;
//     td2.innerText = rivi.user_level;
//     td5.innerText = rivi.user_id
//     // td3.innerHTML = `<button class="check" data-id="${rivi.user_id}">Info</button>`
//     const button1 = document.createElement('button')
//     button1.className = 'check';
//     button1.setAttribute('data-id', rivi.user_id);
//     button1.innerText = 'Info';
//     td3.appendChild(button1);
//     button1.addEventListener('click',  getUsers);

//     const button2 = document.createElement('button')
//     button2.className = 'del';
//     button2.setAttribute('data-id', rivi.user_id);
//     button2.innerText = 'Delete';
//     td4.appendChild(button2);
//     button2.addEventListener('click', deleteUser)
    
    
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     tr.appendChild(td5)
//     tbody.appendChild(tr)
    
    

//   });
// }
async function showUserName () {
  // let name = localStorage.getItem('name')
  // console.log("käyttäjän nimi tähän")
  // document.getElementById('name').innerText = name;
  const url = 'https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/me';
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

async function getUserID() {
  const url = "https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/me";
  const token = localStorage.getItem("token");

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch user data. Status: " + response.status);
    }

    const data = await response.json();
    if (!data.user || !data.user.user_id) {
      throw new Error("Invalid response format. User ID not found.");
    }

    return data.user.user_id;
  } catch (error) {
    console.error("Error fetching user ID:", error.message);
    return null; // Return null if an error occurs
  }
}

console.log("testiiiii", await getUserID());

  








function UpdateData(){

const put= document.querySelector('.update')
put.addEventListener('click', async (evt) => {
  evt.preventDefault();

  console.log('nyt päivitetään tunnusta');
  // #update user info
  
  // {
  //   "username": "user",
  const form = document.querySelector('.addform');
  const token  = localStorage.getItem('token')
  //   "password": "secret"
  const id = getUserID()
  // }
  const url = `https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users/${id}`;
 
  
      // 
      const body =  {
        "username":form.querySelector('input[name=username]').value, 
        "password": form.querySelector('input[name=password]').value,
        "email": form.querySelector('input[name=email]').value

      };
      const options = {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer: ' + token,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      };
      fetchData(url,options).then((data)=>{
        // tee niin että tämä palauttaa BACKEND virheen

          alert(data.message)
          console.log(data)
          location.href = 'index.html'
        })
       
       
        
        
                
});

}
UpdateData();

async function deleteUser(){

  const deleteButton = document.querySelector(".del")
  deleteButton.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    console.log("poistettu");
    console.log(evt);
    
    let token  = localStorage.getItem('token')
    
    //tapa 1: haetaan arvo tutkimalla eventtiä
      //tapa 2: heaetaan "viereinen elementti
    const url = `https://hyte-server-aura.northeurope.cloudapp.azure.coms/api/users/${await getUserID()}`;
    
    const options = {
     method: "DELETE", // *GET, POST, PUT, DELETE, etc.
     headers: {
       Authorization: 'Bearer: ' + token,
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
   };
   const answer  = confirm(`Oletko varma, että haluat poistaa käyttäjän ${await getUserID()}`)
   if (answer){
    fetchData(url, options).then((data)=>{
      console.log(data)
      
    })
   }
   
  
  });
  }
  deleteUser();






const clear = document.querySelector('.clearButton')
clear.addEventListener('click', clearLocalStorage);
async function clearLocalStorage() {
  localStorage.removeItem('token');
  alert("You have logged out")
  location.href = 'index.html'
}


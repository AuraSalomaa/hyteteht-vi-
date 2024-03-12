import './tyylit.css';
import { fetchData } from './fetch';

// haetaan nappi josta lähetetään formi ja luodaan käyttäjä
const createUser = document.querySelector('.createuser');

createUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt luodaan käyttäjä');
  const url = 'https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users';
  const form = document.querySelector('.create_user_form');
  
      // 
      const body =  {
        "username":form.querySelector('input[name=username]').value, 
        "password": form.querySelector('input[name=password]').value,
        "email": form.querySelector('input[name=email]').value

      };
      const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      };
      fetchData(url,options).then((data)=>{
        console.log(data)
      location.href = 'startauth.html'
  });
});

// haetaan nappi josta haetaan formi ja logataan sisään
// tästä saadaan TOKEN
const loginUser = document.querySelector('.loginuser');

loginUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt logataan sisään');
  // # Login
  // POST http://localhost:3000/api/auth/login
  // content-type: application/json
  
  // {
  //   "username": "user",
  //   "password": "secret"
  // }
  const url = 'https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/login';
  const form = document.querySelector('.login_form');
  
      // 
      const body =  {
        "username":form.querySelector('input[name=username]').value, 
        "password": form.querySelector('input[name=password]').value

      };
      const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      };
      fetchData(url,options).then((data)=>{
        // tee niin että tämä palauttaa BACKEND virheen
        if (data.token == undefined){
          alert("Username or password is incorrect")

        }
        else{
          alert(data.message)
          location.href = 'api-harjoituspohja.html'
          const token = data.token
          localStorage.setItem('name', data.user.username)
          localStorage.setItem('token', token)
          document.getElementById('loginResponse').innerText = token
        }
       
        console.log(data)
        console.log(data.token)
        
        
        
  });
});

// Haetaan nappi josta testataan TOKENIN käyttöä, /auth/me
const meRequest = document.querySelector('#meRequest');
meRequest.addEventListener('click', async () => {
  console.log('Testataan TOKENIA ja haetaan käyttäjän tiedot');
  // # Get user info by token (requires token)
  // GET http://localhost:3000/api/auth/me
  // Authorization: Bearer (put-user-token-here)
  const url = 'https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/me';
  const token = localStorage.getItem('token')
  console.log(token)
  const options = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: 'Bearer: ' + token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  console.log(options);
  fetchData(url, options).then((data)=>{
    console.log(data)
    
  })

});

// Haetaan nappi josta tyhjennetään localStorage
const clear = document.querySelector('#clearButton');
clear.addEventListener('click', clearLocalStorage);

// Apufunktio, kirjoittaa halutin koodiblokin sisään halutun tekstin
function logResponse(codeblock, text) {
  document.getElementById(codeblock).innerText = text;
}

// Apufunktio, Tyhjennä local storage
function clearLocalStorage() {
  localStorage.removeItem('token');
  logResponse('clearResponse', 'localStorage cleared!');
}
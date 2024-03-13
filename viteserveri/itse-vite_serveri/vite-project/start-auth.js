import './tyylit.css';
import { fetchData } from './fetch';

// haetaan nappi josta lähetetään formi ja luodaan käyttäjä
const createUser = document.querySelector('.createuser');

createUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt luodaan käyttäjä');
  console.log(evt)
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
      if (data = undefined){
        alert("Username or email is already in use")
      }
      else
      
      alert("User created")
        location.href = 'template-html.html'
  });
});

// haetaan nappi josta haetaan formi ja logataan sisään
// tästä saadaan TOKEN


// Haetaan nappi josta testataan TOKENIN käyttöä, /auth/me


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
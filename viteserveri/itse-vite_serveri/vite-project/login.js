import './tyylit.css';
import { fetchData } from './fetch';
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
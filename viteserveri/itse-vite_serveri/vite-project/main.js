import './style.css';

// import { fetchData } from './fetch.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia'

const bt1 = document.querySelector(".get_users")
bt1.addEventListener("click", async function(evt){
    const response = await fetch(' http://127.0.0.1:3000/users')
    const jsonData = await response.json();
    console.log(jsonData)
})
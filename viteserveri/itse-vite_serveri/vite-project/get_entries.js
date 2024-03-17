import "./tyylit.css";
import { fetchData } from "./fetch";

const entries = document.querySelector(".get_entry");
entries.addEventListener("click", GetEntries);

async function GetEntries() {
  const url =
    "https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries";
  const token = localStorage.getItem("token");
  const options = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: "Bearer: " + token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetchData(url, options).then((data) => {

    createTable(data);
  });
}
function createTable(data) {
  console.log(data[0])
  const card = document.querySelector(".card-area");
  card.innerHTML = "";

  data[0].forEach((rivi) => {
    console.log(rivi.entry_date, rivi.entry_id);
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    td1.innerText = rivi.entry_date;
    td2.innerText = rivi.entry_id;
    td5.innerText = rivi.notes;
    // td3.innerHTML = `<button class="check" data-id="${rivi.user_id}">Info</button>`

    const button2 = document.createElement("button");
    button2.className = "del";
    button2.setAttribute("data-id", rivi.entry_id);
    button2.innerText = "Delete";
    td4.appendChild(button2);
    button2.addEventListener("click", deleteEntry);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td4);
    tr.appendChild(td5);
    card.appendChild(tr);
  });
}

function deleteEntry(evt) {
  console.log("poistettu");
  console.log(evt);
  //tapa 1: haetaan arvo tutkimalla eventtiä
  const id = evt.target.attributes["data-id"].value;
  console.log(id);
  //tapa 2: heaetaan "viereinen elementti
  const id2 = evt.target.parentElement.nextElementSibling.textContent;
  console.log("tapa 2: ", id2);
  const url = `https://hyte-server-aura.northeurope.cloudapp.azure.coms/api/entries/${id}`;
  const token = localStorage.getItem("token");
  const options = {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: "Bearer: " + token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const answer = confirm(`Oletko varma, että haluat poistaa käyttäjän ${id}`);
  if (answer) {
    fetchData(url, options).then((data) => {
      console.log(data);
    });
  }
}

function postEntry(evt) {
  const post = document.querySelector(".createEntry");
  post.addEventListener("click", async (evt) => {
    evt.preventDefault();

    console.log("lisätään Diary entry");
    // #update user info

    // {
    //   "username": "user",
    const form = document.querySelector(".create_entry_form");
    const token = localStorage.getItem("token");
    //   "password": "secret"
    // const id = form.querySelector('input[name=id]').value
    // }
    const url = `https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries`;

    //
    const body = {
      user_id: form.querySelector("input[name=ID]").value,
      entry_date: form.querySelector("input[name=entry_date]").value,
      mood: form.querySelector("input[name=mood]").value,
      weight: form.querySelector("input[name=weight]").value,
      sleep_hours: form.querySelector("input[name=sleep_hours]").value,
      notes: form.querySelector("input[name=notes]").value,
      //    <!-- "user_id":"11",
      //    "entry_date":"2024-03-13",
      //    "mood": "sad",
      //    "weight":"90.2",
      //    "sleep_hours":"8",
      //    "notes": "notes" -->
    };
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer: " + token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    };
    fetchData(url, options).then((data) => {
      // tee niin että tämä palauttaa BACKEND virheen
      alert(data);
      console.log(data);
    });
  });
}

postEntry();

function UpdateEntry(evt) {
  const put = document.querySelector(".EntryUpdate");
  put.addEventListener("click", async (evt) => {
    evt.preventDefault();

    console.log("Päivitetään Diary entryä");
    // #update user info

    // {
    //   "username": "user",
    const form = document.querySelector(".updateEntry");
    const token = localStorage.getItem("token");
    //   "password": "secret"
    const id = form.querySelector("input[name=EntryID]").value;
    // }
    const url = `https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries/${id}`;

    //
    const body = {
      user_id: form.querySelector("input[name=ID]").value,
      entry_date: form.querySelector("input[name=entry_date]").value,
      mood: form.querySelector("input[name=mood]").value,
      weight: form.querySelector("input[name=weight]").value,
      sleep_hours: form.querySelector("input[name=sleep_hours]").value,
      notes: form.querySelector("input[name=notes]").value,
    };
    const options = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer: " + token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    };
    fetchData(url, options).then((data) => {
      // tee niin että tämä palauttaa BACKEND virheen

      alert(data.message);
      console.log(data);
    });
  });
}
UpdateEntry();

// convert the loaded text JSON into a JavaScript object / array

// 'address' property of the second object object in the 'images' array

// document.querySelector('img').src = address;
// document.querySelector('img').alt = name;
// document.querySelector('figcaption').innerText = description

// Käsitellään fetchData fynktiosta ullut JSON

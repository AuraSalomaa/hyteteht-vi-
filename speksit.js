

const language = navigator.language
const resolutionx = screen.availWidth
const resolutiony = screen.availHeight
const sivux = innerHeight
const sivuy = innerWidth
const now = new Date()
const tunnit = now.getHours()
const minuutit = now.getMinutes()
const paivamaara = new Date(Date.UTC(2023,12,26))
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

const suomipv = paivamaara.toLocaleDateString('fi-FI', options)


document.querySelector("#Kieli").innerText = `Järjestelmä kieli: ${language}`;
document.querySelector("#resolution").innerText = `Näytön koko: ${resolutionx} x ${resolutiony}`;
document.querySelector("#Reso").innerText = `Sivun koko: ${sivux} x ${sivuy}`
document.querySelector("#Aika").innerText = `Päivä ja aika: ${suomipv} ja Klo on: ${tunnit}:${minuutit}`
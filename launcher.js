import demarrer from "./qr-scanner.mjs";

const qr = document.getElementById('qr-data');

const texte = demarrer();

qr.appendChild(document.createTextNode(texte));
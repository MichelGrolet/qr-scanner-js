import QrScanner from './assets/js/qr-scanner.min.js';

const txtQr = document.getElementById('qr-data');
//const erreur = document.getElementById('erreur');
const video = document.getElementById('video');
const info = document.getElementById('info');

function afficherQr(resultat) {
	video.remove();
	txtQr.classList.add("qr-res");
	txtQr.innerHTML = resultat;
	info.innerHTML = "QR code déchiffré !\nContenu : ";
	console.log("Qr code : "+resultat);

}

export default function demarrer() {
	QrScanner.WORKER_PATH = 'assets/js/qr-scanner-worker.min.js';
	const qrScanner = new QrScanner(video, resultat => {
		afficherQr(resultat);
		qrScanner.stop();
	}, error => {
		//erreur.textContent = error;
	});
	qrScanner.start().then(() => {
		if (!QrScanner.hasCamera()) erreur.appendChild(document.createTextNode("Aucune caméra détectée."));
	});
	return qrScanner;
}
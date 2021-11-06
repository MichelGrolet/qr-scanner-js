import QrScanner from './assets/js/qr-scanner.min.js';

const resultat = document.getElementById('qr-data');
const erreur = document.getElementById('erreur');
const video = document.getElementById('video');

function afficherQr(resultat) {
	resultat.textContent = resultat;
}

export default function demarrer() {
	QrScanner.WORKER_PATH = 'assets/js/qr-scanner-worker.min.js';
	const qrScanner = new QrScanner(video, resultat => afficherQr(resultat), error => {
		erreur.textContent = error;
	});
	qrScanner.start().then(() => {
		if (!QrScanner.hasCamera()) erreur.appendChild(document.createTextNode("Aucune caméra détectée."));

	});
	return qrScanner;
}
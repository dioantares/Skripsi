<script src="static/src/js/qr-scanner.umd.min.js"></script>
<script>
	let videoElem = document.getElementById("video");
	const qrScanner = new QrScanner(
		videoElem,
		result => console.log('decoded qr code:', result),
		{  }
	);
	qrScanner.start();
</script>
// This is just used to debug the package while you develop things

var usbDetect = require('../');

/* */
console.log('startMonitoring');
usbDetect.startMonitoring();
/* */

/* */
usbDetect.find()
	.then(function(devices) {
		console.log('find', devices);
	});


usbDetect.on('add', function(device) {
	console.log('add', device);
});

usbDetect.on('remove', function(device) {
	console.log('remove', device);
});

usbDetect.on('change', function(device) {
	console.log('change', device);
});
/* */

/* */
setTimeout(() => {
	console.log('stopMonitoring');
	usbDetect.stopMonitoring();
}, 1000);
/* */

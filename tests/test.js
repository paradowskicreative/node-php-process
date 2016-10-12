

const NodePhpProcess = require('../NodePhpProcess');

new NodePhpProcess((data) => {
	if(data.some == 'data') {
		process.stdout.write('Passed');
	}
	else {
		process.stdout.write('Failed');
	}
});



const NodePhpProcess = require('../src/NodePhpProcess');

new NodePhpProcess((err, data) => {
	if(err) return;

	if(data.some == 'data') {
		process.stdout.write('Passed');
	}
	else {
		process.stdout.write('Failed');
	}
});

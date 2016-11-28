

const NodePhpProcess = require('../src/NodePhpProcess');

new NodePhpProcess((err, data) => {
	var obj = {
		x: '0' // purposely no comma to create syntax error
		y: '1'
	};
});

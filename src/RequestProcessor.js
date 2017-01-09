
//
// Request Processer
//

const Promise = require('bluebird')

let data = ''

function RequestProcesser() {
	return new Promise((resolve, reject) => {
		// console.log(process.stdin)
		process.stdin.on('data', chunk => {
			console.log(chunk)
			data += chunk
			console.log(data)
		})

		process.stdin.on('end', () => {
			console.log(data)
			// process.stdout.write(data)
			// process.stdout.write(JSON.stringify(data))
			data = JSON.parse(data)
			resolve(data)
		})
	})

// 	this.data = '';

// 	this.init = () => {
// 		if(handler) {
// 			this.handle = handler;
// 		}
// 		else {
// 			this.handle(new Error('No handler defined'));
// 			return;
// 		}

// 		process.stdin.on('data', this.onData);
// 		process.stdin.on('end', this.onEnd);
// 	};

// 	this.onData = (chunk) => {
// 		this.data += chunk;
// 	};

// 	this.onEnd = () => {
// 		this.data = JSON.parse(this.data);
// 		this.handle(null, this.data);
// 	};

// 	this.init();
}

module.exports = RequestProcesser


//
// Request Processer
//

const Promise = require('bluebird')

let data = ''

function RequestProcesser() {
	return new Promise((resolve, reject) => {
		process.stdin.on('data', chunk => {
			data += chunk
		})

		process.stdin.on('end', () => {
			let processedData = []
			try {
				processedData = JSON.parse(data)
			}
			catch(error) {
				processedData = data
			}
			resolve(processedData)
		})
	})
}

module.exports = RequestProcesser

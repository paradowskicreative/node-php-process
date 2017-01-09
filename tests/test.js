
const RequestProcessor = require('../src/RequestProcessor')

RequestProcessor()
.then((data) => {
	if(data.some == 'data') {
		process.stdout.write('Passed')
	}
	else {
		process.stdout.write('Failed')
	}
})
.catch((err) => {
	process.stderr.write(err)
})
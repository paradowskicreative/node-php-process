
const requestProcessor = require('../src/RequestProcessor')

requestProcessor()
.then(data => {
	// process.stdout.write('{"data":12439}')
})
.catch(err => {
	// process.stderr.write('omg wtf')
})

const requestProcessor = require('../src/RequestProcessor')

requestProcessor()
.then(data => {
	/\/\/\/\/\/\/
	// throw new Error('test')
	// process.stdout.write(JSON.stringify(data))
})
.catch(err => {
	process.stderr.write(err)
})

const requestProcessor = require('../src/RequestProcessor')

requestProcessor()
.then(data => {
	process.stdout.write(JSON.stringify(data))
})
.catch(err => {
	process.stderr.write(err)
})
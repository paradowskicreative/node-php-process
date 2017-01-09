
const Promise = require('bluebird')
const assert = require('assert')
const fs = require('fs-extra')
const childProcess = require('child_process')

const fsStat = Promise.promisify(fs.stat)
const exec = (...args) => {
	// sends stderr to reject instead of resolve
	return new Promise((resolve, reject) => {
		childProcess.exec(...args, (error, stdout, stderr) => {
			if(error) {
				reject(error, stderr)
			}
			else {
				resolve(stdout)
			}
		})
	})
}

describe('RequestProcessor', () => {
	// let requestProcessor

	// beforeEach(() => {s
	// 	// requestProcessor = require('../src/RequestProcessor')
	// })

	// it('is', () => {
	// 	fsStat('test/simple.php')
	// 	.then(stats => {
	// 		console.log('no error')
	// 	})
	// 	.catch(err => {
	// 		console.log('error')
	// 	})
	// 	assert(true)
	// })
	// it('is a function', () => {
	// 	assert(typeof requestProcessor === 'function')
	// })

	it('test', done => {
		exec('php -c test -f test/simple.php')
		.then(stdout => {
			// throw Error('test')
			// stdout.write('test')
			console.log(stdout)
			done()
		})
		.catch((err, stderr) => {
			done(err)
		})
	})
})
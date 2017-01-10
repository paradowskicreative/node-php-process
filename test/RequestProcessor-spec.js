
const Promise = require('bluebird')
const assert = require('assert')
const fs = require('fs-extra')
const childProcess = require('child_process')
const expect = require('chai').expect

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
	it('sends JSON from simple.php to simple.json, then back to simple.php', done => {
		exec(`php -c test -f test/simple.php`)
		.then(stdout => {
			let obj = JSON.parse(stdout)

			expect(obj)
				.to.have.property('test')
				.with.valueOf('json')

			done()

		})
		.catch((err, stderr) => {
			if(!stderr) stderr = ''
			done(`\n\r\t${err}\n\r\t${stderr}`)
		})
	})

	it('throws errors to errors.php when they happen in errors.js', done => {
		exec(`php -c test -f test/errors.php`)
		.then(stdout => {
			assert(false)
			done()

		})
		.catch((err, stderr) => {
			if(!stderr) stderr = ''

			expect(err+stderr).to.contain.string('\/\\/\\/\\/\\/\\/\\/')
			done()
		})
	})
})

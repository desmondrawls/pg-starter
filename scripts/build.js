const path = require('path')
const {spawnShell} = require('./spawnShell')

const buildPackage = (package) => {
  return spawnShell('yarn', ['build'], path.resolve(__dirname, package))
}

Promise.all([
  buildPackage('../lib/path-finder'),
])
.then(() => console.log('📚  Done building the libraries.'))

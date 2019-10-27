const execa = require('execa')
const fs = require('fs')

module.exports.spawnShell = (command, args, directory) => {
  const spawnedProcess = execa(command, args, {cwd: directory})
  spawnedProcess.stdout.pipe(process.stdout)
  spawnedProcess.stderr.pipe(process.stderr)
  return spawnedProcess  
};

module.exports.spawnToFile = (command, args, directory, file) => {
  const spawnedProcess = execa(command, args, {cwd: directory})
  const output = fs.createWriteStream(file);
  spawnedProcess.stdout.pipe(output);
  spawnedProcess.stderr.pipe(process.stderr)
  return spawnedProcess  
};
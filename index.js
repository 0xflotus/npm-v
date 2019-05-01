const execSync = require('child_process').execSync

module.exports = function npmVersion() {
  try {
    var semver = execSync('npm -v', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
    var [major, minor, patch] = semver.split('.').map(Number)
  }
  catch (err) {
    semver = ''
    [major, minor, patch] = [null, null, null]
  }
  return {
    version: semver,
    major,
    minor,
    patch
  }
}

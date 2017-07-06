var shell = require('child_process').execSync;

module.exports = function(args){
  /* need to add passed params to init as well using configs */
  shell("npm --skippostinstall=true i konnekt --save",{ stdio: 'inherit' });
}
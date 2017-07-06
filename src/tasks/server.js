var shell = require('child_process').execSync,
    filecheck = require('./../files/check');

module.exports = function(args){
  filecheck(function(){
    shell("node init --task server "+args.join(" "),{ stdio: 'inherit' });
  });
}
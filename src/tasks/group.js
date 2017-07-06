var shell = require('child_process').execSync,
    filecheck = require('./../files/check');

module.exports = function(args){
  filecheck(function(){
    shell("node init --task group "+args.join(" "),{ stdio: 'inherit' });
  });
}
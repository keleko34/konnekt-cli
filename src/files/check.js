var shell = require('child_process').execSync,
    fs = require('fs'),
    base = process.cwd().replace(/\\/,'/');

module.exports = function(cb){
  fs.stat(base+'/node_modules/konnekt/init.js',function(err){
    if(err && err.code === 'ENOENT')
    {
      console.error('\033[31mYou do not have a konnekt project in this directory, please create one first\033[37m');
      shell("npm --skippostinstall=true i konnekt --save",{ stdio: 'inherit' });
    }
    else
    {
      fs.stat(base+'/init.js',function(err){
        if(err && err.code === 'ENOENT')
        {
          console.log('\033[36mMissing init.js file, creating...\033[37m');
          var _stream = fs.createWriteStream(base+'/init.js','utf8');
          _stream.once('open',function(){
            _stream.write("require('konnekt');\n");
            _stream.end();
          });
          
          _stream.once('end',function(){
            cb();
          });
        }
        else
        {
          cb();
        }
      });
    }
  })
}
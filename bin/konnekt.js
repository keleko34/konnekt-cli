#!/usr/bin/env node

'use strict';

var expand = require('./../src/args/expand'),
    _args = expand(process.argv.slice(2,process.argv.length));

if([
  "init",
  "create",
  "build",
  "server",
  "group"
].indexOf(_args[0]) !== -1)
{
  require('./../src/tasks/'+_args[0])(_args.slice(1,_args.length));
}
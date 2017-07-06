function checkCommand(arg,to)
{
  if(arg.indexOf('--') !== 0)
  {
    return [to,arg];
  }
  return false;
}

module.exports = function(args)
{
  switch(args[0])
  {
    case "init":
      if(args[1])
      {
        var title = checkCommand(args[1],'--name');
        if(!title)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[1,1].concat(title));
        }
      }
      
      if(args[3])
      {
        var description = checkCommand(args[3],'--description');
        if(!description)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[3,1].concat(description));
        }
      }
      
      if(args[5] && ['no','yes','true','false'].indexOf(args[5]) !== -1)
      {
        var helpers = checkCommand((['no','false'].indexOf(args[5]) === -1).toString(),'--helpers');
        if(!helpers)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[5,1].concat(helpers));
        }
      }
      return args;
    case "create":
      if(args[1])
      {
        var name = checkCommand(args[1],'--name');
        if(!name)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[1,1].concat(name));
        }
      }
      
      if(args[3])
      {
        var description = checkCommand(args[3],'--description');
        if(!description)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[3,1].concat(description));
        }
      }
      
      if(args[5])
      {
        var author = checkCommand(args[5],'--author');
        if(!author)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[5,1].concat(author));
        }
      }
      return args;
    case "build":
      /* need to add list types to be passed for components */
      if(args[1])
      {
        var channel = checkCommand(args[1],'--channel');
        if(!channel)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[1,1].concat(channel));
        }
      }
      return args;
    case "server":
      if(args[1])
      {
        var port = checkCommand(args[1],'--port');
        if(!port)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[1,1].concat(port));
        }
      }
      return args;
    case "group":
      if(args[1])
      {
        var name = checkCommand(args[1],'--name');
        if(!name)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[1,1].concat(name));
        }
      }
      
      if(args[3] && args[3] === 'auto')
      {
        var auto = checkCommand('true','--auto');
        if(!auto)
        {
          return args;
        }
        else
        {
          args.splice.apply(args,[3,1].concat(auto));
        }
      }
      return args;
    default:
      return args;
  }
}
const Stack = require('./stack');

function hasParenth(str) {
  const stack = new Stack();
  for (let i=0; i<str.length; i++) {
    if (str[i]==='(')
        stack.push(str[i]);
    
    if (str[i]===')')
    {
        if (stack.pop()===null)
            return false;
    }
  }
  return(stack.top===null)
}


console.log(hasParenth('mathi(()s is a test ( )) dam'));

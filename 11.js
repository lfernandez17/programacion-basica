var limite=0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el ultimo numero  ', (limite) => {

  for (var i=1;  i<(((limite/10)*10)+1); i++){
    if (i%3==0){
      console.log(i);
    }
  }


  rl.close();
});

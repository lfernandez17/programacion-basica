var limite=0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el ultimo numero a imprimir ', (limite) => {

  for (var i=1;  i<(((limite/10)*10)+1); i++){
    console.log(i);
  }


  rl.close();
});

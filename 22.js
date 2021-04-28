var frase= "";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la frase ', (frase) => {

  console.log(frase);
  console.log('    '+(frase));
  console.log('        '+(frase));
  console.log('            '+(frase));
  console.log('                '+(frase));
  rl.close();
});

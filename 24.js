var numero=0;
const readline = require('readline');
function primo(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el numero a calcular ', (numero) => {
  var esPrimo=primo(numero);
  if(esPrimo==true){
    console.log('Es numero primo');
  }
  else if(esPrimo==false){
    console.log('No es numero primo');
  }



  rl.close();
});

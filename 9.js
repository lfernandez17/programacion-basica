var numero=0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el ultimo numero  ', (numero) => {

   if (numero>0){
      console.log("es positivo");

    }
    else{
      console.log("es negativo");
    }
  rl.close();
});

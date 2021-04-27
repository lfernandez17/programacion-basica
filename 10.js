var numero=0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el  numero  ', (numero) => {

   if (numero%2==0){
      console.log("es par");

    }
    else{
      console.log("es impar");
    }
  rl.close();
});

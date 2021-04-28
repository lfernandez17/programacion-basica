function factorial(number){
  var numfac = 1;
	for (i=1; i<=number; i++) {
		numfac = numfac * i;
	}
	return numfac;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el numero en el que calculara factorial ', (numero) => {

  console.log(factorial(numero));
  rl.close();
});

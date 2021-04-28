const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ingrese el numero ', (answer) => {
  rl.question('ingrese el numero ', (answer2)=> {
    var menor;
    var mayor;
    var contador=0;
    var suma=0;
    if (answer<answer2){
      menor=(answer)
      mayor=(answer2)
    }
    else if (answer2<answer){
      menor=(answer2)
      mayor=(answer)
    }
    for (var i=menor; i <=mayor; i++){
      if (i%2==0){
        console.log(i);
        contador++;
        suma=suma+i;
      }


    }
    console.log('La cantidad de pares es');
    console.log(contador);
    console.log('La suma de los numeros es');
    console.log(suma);
  rl.close();
  });
});

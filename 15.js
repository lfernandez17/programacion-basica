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
    var contadorpar=0;
    var sumaimpar=0;
    if (answer<answer2){
      menor=(answer/10)*10;
      mayor=(answer2/10)*10;
    }
    else if (answer2<answer){
      menor=(answer2/10)*10
      mayor=(answer/10)*10;
    }
    for (var i=menor; i <((mayor)+1); i++){
      console.log(i);
      contador++;

      if (i%2==0){
        contadorpar++;
      }
      else {
        sumaimpar=sumaimpar+i;
      }
    }
    console.log('La cantidad de pares es');
    console.log(contadorpar);
    console.log('La suma de los impares es');
    console.log(sumaimpar);
  rl.close();
  });
});

var sumapar=0;
var sumaimpar=0;
for (var i=0; i <101; i++){
    console.log(i);
   if (i%2==0){
      sumapar=sumapar+i;
    }
    else{
      sumaimpar=sumaimpar+i;
    }

}
console.log("La suma de los pares es:");
console.log(sumapar);
console.log("La suma de los pares es:");
console.log(sumaimpar);

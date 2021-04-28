var sumapar=0;
var sumaimpar=0;
for ( var i=0; i<=1000; i++){
  if(i%2==0){
    sumapar=sumapar+i;

  }
  else {
    sumaimpar=sumaimpar+i;
  }
}
console.log("la suma de los pares es");
console.log(sumapar);
console.log("la suma de los impares es");
console.log(sumaimpar);

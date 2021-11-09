let menores: number = 0;
let mayores: number = 0;
function aleatorio(menorValor: number, mayorValor: number): any {
  return Math.floor(Math.random() * (mayorValor - menorValor + 1)) + menorValor;
}
let cantidad: number[] = new Array(270);
for (let i: number = 0; i < cantidad.length; i++) {
  cantidad[i] = aleatorio(18, 40);
  if (cantidad[i] < 21) {
    menores++;
  } else if (cantidad[i] >= 21) {
    mayores++;
  }
}
console.log(cantidad);
console.log(" la cantidad de mayores es ", mayores);
console.log(" la cantidad de menores es ", menores);

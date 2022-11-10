const autonomia = 16;
let distanciapercorrida = 350;
let valorporlitro = 4.91;

let calculovalorgasto = (distanciapercorrida / autonomia) * valorporlitro;
console.log(calculovalorgasto.toFixed(2));

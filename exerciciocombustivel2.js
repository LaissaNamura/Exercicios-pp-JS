const autonomia = 16;
let distanciapercorrida = 350;
let valorcombustivelgasolina = 7;
let valorcombustiveletanol = 3;
let tipocombustivel = "etanol";

if (tipocombustivel == "etanol") {
  console.log("etanol");
  console.log(
    ((distanciapercorrida / autonomia) * valorcombustiveletanol).toFixed(2)
  );
} else {
  console.log("gasolina");
  console.log(
    ((distanciapercorrida / autonomia) * valorcombustivelgasolina).toFixed(2)
  );
}

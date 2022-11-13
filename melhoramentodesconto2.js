function aplicarjuros (valorproduto)
{
  return valorproduto*1.10;
}

function desconto1 (valorproduto){
  return valorproduto -(valorproduto * 0.1)
}

function desconto2 (valorproduto){
  return valorproduto -(valorproduto * 0.15)
}
function valorfinalproduto  (valorproduto,tipovenda){
  if (tipovenda ===1)
    return desconto1(valorproduto);
  else if (tipovenda===2)
    return desconto2(valorproduto);
  else if (tipovenda ===3)
    return valorproduto;
  else if (tipovenda=== 4)
    return aplicarjuros(valorproduto);
}
function vendaproduto (){
 // Debito = 1 ; dinheiro ou pix = 2; credito=3;  credito parcelado = 4 //
const tipodepagamento = 4; 
let valorproduto = 100.00;

console.log(valorfinalproduto (valorproduto,tipodepagamento).toFixed(2));
}

vendaproduto();

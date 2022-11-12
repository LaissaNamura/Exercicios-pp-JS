let precoproduto = 59.99;
const pagamentoavista = precoproduto - precoproduto * 0.1;
const avistanodinheirooupix = precoproduto - precoproduto * 0.15;
const emduasvezes = "não aplica desconto";
const acimadeduasvezes = precoproduto + precoproduto * 0.1;
let formadepagamento = "Em duas vezes";
formadepagamento = "Em duas vezes";
if (formadepagamento == "á vista") 
{
  console.log("á vista R$" + pagamentoavista);
} 
else if (formadepagamento == "Dinheiro ou pix") 
{
  console.log("Dinheiro ou pix R$" + avistanodinheirooupix);
} 
else if (formadepagamento == "Em duas vezes") 
{
  console.log("Em duas vezes R$" + precoproduto);
} 
else 
{
  formadepagamento == "Acima de duas vezes";
  console.log("Acima de duas vezes R$" + acimadeduasvezes);
}


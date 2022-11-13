let precoetiqueta = 200;

function formadepagamento (pagamento){
  
 if (pagamento===1)
 console.log(precoetiqueta-(precoetiqueta*0.1));
  else if (pagamento===2)
console.log (precoetiqueta - (precoetiqueta * 0.15));
  else if (pagamento ===3)
console.log(precoetiqueta)
  else if (pagamento === 4)
console.log (precoetiqueta + (precoetiqueta *0.1));
}

formadepagamento (3);



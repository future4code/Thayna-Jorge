```function calculaPrecoTotal(quantidade) {

    if (quantidade < 12){
      return("Você comprou", quantidade, "e vai pagar", quantidade*1.30)
    }else if (quantidade >= 12) {
      return("Você comprou", quantidade, "e vai pagar", quantidade*1)
    }else{
      return("Lamento não ter achado o que procurava")
    }
  } 

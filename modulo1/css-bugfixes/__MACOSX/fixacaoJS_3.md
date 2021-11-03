```function calcularnota (Ex , p1 , p2) {

  const Ex1 = Ex * 1
  const p11 = p1 * 2
  const p22 = p2 * 3
      
  
  const total = Ex1 + p11 + p22
  
  const media = total / 2 

  if (media >= 9){
    return "A"
  }else if (media < 9 && media >= 7.5){
    return "B"
  }else if (media < 7.5 && media >=6){
    return"C"
  }else if (media <6){
    return "D"
  }
}
calcularnota(10, 5,6)
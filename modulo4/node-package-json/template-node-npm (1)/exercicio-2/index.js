if(process.argv[2] === "add") {
    const soma = Number(process.argv[3]) +  Number(process.argv[4])
    console.log(soma)
}else if (process.argv[2] === "sub"){
    const sub = Number(process.argv[3]) -  Number(process.argv[4])
    console.log(sub)
}else if (process.argv[2] === "mult"){
    const mult = Number(process.argv[3]) *  Number(process.argv[4])
    console.log(mult)
}else if (process.argv[2] === "div") {
    const div = Number(process.argv[3]) /  Number(process.argv[4])
    console.log(div)
}else{
    console.log(`Algo deu errado, tente novamente`)
}
    
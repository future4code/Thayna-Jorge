const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeFut = idade + 7

console.log(`Olá, ${nome}, você tem ${idade} anos.`)

console.log(`Olá, ${nome}, você tem ${idade} anos. Em sete anos você terá ${idadeFut}`)
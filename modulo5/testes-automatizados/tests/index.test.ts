import { performPurchase, User } from "../src"


test("Teste saldo maior que valor de compra", () => {
    const user : User = {
        name : "Thayna",
        balance: 100
    }

    const resultado = performPurchase(user, 40)

    expect(resultado).toEqual({
        name: "Thayna",
        balance: 60
    })
})

test ("Saldo igual ao valor de compra", () => {
    const user:User = {
        name: "Gabriel",
        balance: 30
    }

    const resultado = performPurchase(user, 30)

    expect(resultado).toEqual({
        ...user,
        balance : 0
    })
})

test("Saldo menor que o valor de compra", () => {
    const user: User = {
		name: "Lara",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})
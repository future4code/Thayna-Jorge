import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
// import { mailTransporter } from "../services/mailTransporter"
import connection from "../conection"


export const refatorCreatUsers = async (req: Request, res: Response) => {
    try {
        const { complemento, numero, cep, email, senha } = req.body

        const address = await getAddressInfo(cep)
        const id = Date.now().toString()
        
        if (!address) {
            throw new Error("Deu ruim no serviço getAddressInfo")
        }
        await connection("Server_Backend").insert({
            id : id, 
            email: email,
            senha: senha,
            cep: cep,
            logradouro: address.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: address.bairro,
            cidade: address.cidade,
            estado: address.estado
        })

        // const info = await mailTransporter.sendMail({
        //     from: `<${process.env.NODEMAILER_USER}>`,
        //     to: email,
        //     subject: "Cadastro na plataforma API",
        //     text: `Olá, ${email}! Parabéns pela inscrição!
        //     Segue abaixo seus dados:
        //     SENHA: ${password}
        //     ENDEREÇO: ${address.cidade}/${address.estado} ${address.bairro}, ${address.logradouro}`,
        //     html: `<p>Olá, ${email}! <strong>Parabéns pela inscrição!</strong>
        //     Segue abaixo seus dados:
        //     SENHA: <em>${password}</em>
        //     ENDEREÇO: ${address.cidade}/${address.estado} ${address.bairro}, ${address.logradouro}</p>`
        // })

        res.send({address, message: "Cadastro realizado com sucesso" })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
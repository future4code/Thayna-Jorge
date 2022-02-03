import { useState } from "react"

const useForm = (estadoinicial) => {
    const [form, setForm] = useState(estadoinicial)


    const criaCadastro = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(estadoinicial)
    }

    return [form, criaCadastro, clear]

}
export default useForm
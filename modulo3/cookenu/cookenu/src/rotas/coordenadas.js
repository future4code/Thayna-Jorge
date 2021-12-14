export const goToLogin = (histry) => {
    histry.push("/login")
}

export const goToCadastro = (histry) => {
    histry.push("/cadastro")
}

export const goToAdcReceitas = (histry) => {
    histry.push("/adicionar-receitas")
}

export const goToDetalhes= (histry ,id) => {
    histry.push(`/detalhes/${id}`)
}

export const goToReceitas = (histry) => {
    histry.push("/")
}
export const goToLogin = (history) => {
    history.push("/login")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToAdcReceitas = (history) => {
    history.push("/adicionar-receitas")
}

export const goToDetalhes= (history ,id) => {
    history.push(`/detalhes/${id}`)
}

export const goToReceitas = (history) => {
    history.push("/")
}
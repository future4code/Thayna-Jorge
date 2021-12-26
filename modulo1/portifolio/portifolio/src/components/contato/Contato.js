import react from "react";
import { ContatoContainer } from "./styled";

export const Contato = () => {
    return(
        
        <ContatoContainer>
            <h1> Contato </h1>
            <div>
            <h2>Tel: <a href="https://api.whatsapp.com/send?phone=5521981503429" target="_blank">(21) 98150-3429</a></h2>
            <h2>E-mail: thaynasaad.ts@gmail.com</h2>
            </div>
        </ContatoContainer>
        
    )
}
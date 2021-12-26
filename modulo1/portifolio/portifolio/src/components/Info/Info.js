import React from "react";
import { TextoInfo } from "./styled";
import { FundoBackground } from "./styled";

export const Info = () => {


    return (
        <FundoBackground>
            <TextoInfo>
             <h1> Sobre Mim </h1>
                <p> 
                Olá muito prazer, tenho 25 anos, moro no Rio de Janeiro - RJ <br/>
                Atuo na área de Web e tecnologia há mais ou menos 6 anos<br/>
                Comecei com pequenos projetos de Web Marketing como posts para redes sociais,<br/>
                cartão de visita interativo e sites em  Wix e WordPress.<br/>
                Surgiu então a oportunidade de fazer o curso de Full-Stack pela Labenu, <br/>
                com o qual aprendi a desenvolver projetos em HTML, CSS, JavaScript e React. 
                </p>
                
                <a href="https://www.canva.com/design/DAEyzgA2qmQ/PQhUxc61KhUZwB8zpQLzdg/view" target="_blank"><button>CV em PDF</button></a>


            </TextoInfo>
        </FundoBackground>
    )
}
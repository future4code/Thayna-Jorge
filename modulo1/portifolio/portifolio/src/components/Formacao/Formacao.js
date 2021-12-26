import React from "react";
import { ContainerFormacao, TextFormacao } from "./styled";
import iconGradu from "../img/capelo.png"
import iconExpe from "../img/maleta.png"
export const Formacao = () => {
    return (
        <ContainerFormacao>
            <TextFormacao>
                <img src={iconGradu}/>
                <h2>
                    Formação
                </h2>
                <p>
                    Labenu - Full-Stack (Cursando)
                </p>
                <p>
                Tecnologias Aprendidas
                </p>
                <p>
                     JavaScript | CSS3 | HTML5 | React.js | Git | GitHub | Node.js 

                </p>
                <hr/>
                <p> Escola Técnica Rezende-Rammel</p>
                <p> Técnico em Petróleo e Gás - (Concluído)</p>

            </TextFormacao>

            <TextFormacao>
                <img src={iconExpe}/>
                <h2>
                    Experiência Profissional
                </h2>
                <p>
                    VolksWagen - Auxiliar Administrativo
                </p>
                <p>
                    Atividades
                </p>
                <p>
                        Atendimento ao Público | Organização de Arquivos<br/>
                        Controle e fechamento de Ordem de Serviço<br/>
                        Processos Burocráticos | Faturamento
                </p>
                <hr/>

                <p>
                    4D ODONTOLOGIA - Recepcionista
                </p>
                <p>
                    Atividades
                </p>
                <p>
                    Atendimento ao Público | Criação e Controle de Prontuário<br/>
                    Marcação de Consultas | Cadastro em Sistema interno
                </p>
            </TextFormacao>
        </ContainerFormacao>
    )

}
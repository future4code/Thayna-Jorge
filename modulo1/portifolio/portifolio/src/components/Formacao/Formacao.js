import React from "react";
import { ContainerFormacao, TextFormacao } from "./styled";
import iconGradu from "../img/capelo.png"
import iconExpe from "../img/maleta.png"
export const Formacao = () => {
    return (
        <ContainerFormacao>
            <TextFormacao>
                <img src={iconGradu}/>
                <h1>
                    Formação
                </h1>
                <h2>
                    Labenu - Full-Stack (Cursando)
                </h2>
                <h2>
                Tecnologias Aprendidas
                </h2>
                <h2>
                     JavaScript | CSS3 | HTML5 | React.js | Git | GitHub | Node.js 

                </h2>
                <hr/>
                <h2> Escola Técnica Rezende-Rammel</h2>
                <h2> Técnico em Petróleo e Gás - (Concluído)</h2>

            </TextFormacao>

            <TextFormacao>
                <img src={iconExpe}/>
                <h1>
                    Experiência Profissional
                </h1>
                <h2>
                    VolksWagen - Auxiliar Administrativo
                </h2>
                <h2>
                    Atividades
                </h2>
                <h2>
                        Atendimento ao Público | Organização de Arquivos<br/>
                        Controle e fechamento de Ordem de Serviço<br/>
                        Processos Burocráticos | Faturamento
                </h2>
                <hr/>

                <h2>
                    4D ODONTOLOGIA - Recepcionista
                </h2>
                <h2>
                    Atividades
                </h2>
                <h2>
                    Atendimento ao Público | Criação e Controle de Prontuário<br/>
                    Marcação de Consultas | Cadastro em Sistema interno
                </h2>
            </TextFormacao>
        </ContainerFormacao>
    )

}
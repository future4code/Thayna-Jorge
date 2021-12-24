import react from "react";
import { FotoPerfil } from "./styled";
import perfil from "../img/perfil.jpg"


export const Header = () => {
    return (
        <div>
            <FotoPerfil>
                <img src={perfil} />
                <h1>Thayna Saad <br/>
                    Desenvolvedora Front-End<br/>
                    HTML5 | CSS3 | JavaScript | React.js  Git | GitHub | TypeScript <br/>
                    <a href="https://github.com/Thaysaadj">GitHub | </a>
                    <a href="https://www.linkedin.com/in/thayna-saad-b3150bb9/">LinkedIn</a>
                </h1>
            </FotoPerfil>

        </div>
    )


}
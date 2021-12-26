import react from "react";
import { HeaderContainer } from "./styled";
import perfil from "../img/perfil.jpg"


export const Header = () => {
    return (

        <HeaderContainer>
            <img src={perfil} />

            <div>
                <h1>Thayna Saad <br />
                    Desenvolvedora Front-End
                </h1>
                <div className="button-container">
                    <a href="https://github.com/Thaysaadj" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/thayna-saad-b3150bb9/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </HeaderContainer>



    )


}
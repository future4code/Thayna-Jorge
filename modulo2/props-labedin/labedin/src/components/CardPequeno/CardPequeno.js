import React from "react";
import { CardDiv } from "./style.js";

function CardPequeno({ foto, local, texto }) {
  return (
    <CardDiv>
      <img src={foto} />
      <p>
        {local}: {texto}
      </p>
    </CardDiv>
  );
}

export default CardPequeno;

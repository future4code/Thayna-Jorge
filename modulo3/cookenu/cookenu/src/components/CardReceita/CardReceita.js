import react from "react"
import { CardActionArea } from "@material-ui/core"
import { CardMedia } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import {CardReceitaStyled, CardText} from "./StyledCardReceita"

const CardReceita = (props) => {
    return (
        <CardReceitaStyled onClick={props.onClick}>
            {/* <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={props.title}
                    height={"150px"}
                    src={props.image}
                    title={props.title}
                />
                <CardText>
                    <Typography align={"center"}>
                    {props.title.toUpperCase()}
                    </Typography>
                </CardText>
            </CardActionArea> */}
            <img src={props.image}/>
            <h3>{props.text}</h3>
        </CardReceitaStyled>
    )
}

export default CardReceita  
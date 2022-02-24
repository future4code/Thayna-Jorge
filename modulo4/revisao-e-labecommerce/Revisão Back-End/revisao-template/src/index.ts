import app from "./app" 
import {getAllCaracters} from "./endpoints/getAllCaracters"
import {criaCaracters} from "./endpoints/criaCaracters"
import {deleteCaracter} from "./endpoints/deleteCaracter"


app.get("/caracter", getAllCaracters)
app.put("/caracter/cria", criaCaracters)
app.delete("/caracter/:id", deleteCaracter)
// Aqui estão de fato os endpoints junto com as funções que 
// acionam eles.

import { app } from "./app";
import {createUser} from "./endpoints/createUser"
import { login } from "./endpoints/login";

app.post("/cadastro", createUser)
app.post("/login", login)
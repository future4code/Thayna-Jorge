import { app } from "./app";
import {getAllUsers} from "./endpoints/getUsersName"
import {getUserType} from "./endpoints/getUserType"

app.get("/users", getAllUsers)
app.get("/user/:type", getUserType)
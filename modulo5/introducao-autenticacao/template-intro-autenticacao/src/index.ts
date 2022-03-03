import app from "./app"
import createUser from "./endpoints/editUser"
import editUser from './endpoints/editUser'


app.post('/user', createUser)
app.put('/user/edit/:id', editUser)
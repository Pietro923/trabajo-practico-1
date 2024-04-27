const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

// Rutas CRUD = Create, Read, Update, Delete
// Se descarga la extension Thunder para poder utilizar los metodos

router.post("/", async (req, res)=>{
    const body = req.body; //recibo en el body el contenido
    const respuesta = await ModelUser.create(body) //Se espera a que se utilice el create
    res.send(respuesta) //aca mando el contenido
})
router.get("/", async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

router.get("/:id", async (req, res) => {
    const id = req.params.id; //dato que se pasa por la url, recibe el id usando el req.params
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id; 
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body)
    res.send(respuesta);
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id})
    res.send(respuesta);
})


app.use(express.json()) //Se le dice que use json
app.use(router); // se le dice que use router
// se le dice funcione en el 3000 y muestre el mensaje de abajo
app.listen(3000, () => {
    console.log("El servidor esta en el puerto 3000");
})

// se conecta a la base
dbconnect();


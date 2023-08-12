import dotenv from "dotenv";
import express from "express";
import appCliente from "./routers/Cliente.js";
import appAlquiler from "./routers/Alquiler.js";
import appAutomovil from "./routers/Automovil.js";
import appEmpleado from "./routers/Empleado.js";
import { appToken, appVerify } from "./limit/token.js";


dotenv.config();
let app = express();

app.use(express.json());

app.use("/cliente",appVerify, appCliente);
app.use("/Alquiler",appVerify, appAlquiler);
app.use("/Automovil",appVerify, appAutomovil);
app.use("/Empleado",appVerify, appEmpleado);
app.use("/token", appToken); //para generar el token es con /token/"nombre coleccion"

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
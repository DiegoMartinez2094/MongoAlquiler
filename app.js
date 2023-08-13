import dotenv from "dotenv";
import express from "express";
import appCliente from "./routers/Cliente.js";
import appAlquiler from "./routers/Alquiler.js";
import appAutomovil from "./routers/Automovil.js";
import appEmpleado from "./routers/Empleado.js";
import appRegistro_Devolucion from "./routers/Registro_Devolucion.js";
import appRegistro_Entrega from "./routers/Registro_Entrega.js";
import appReserva from "./routers/Reserva.js";
import { appToken, appVerify } from "./limit/token.js";


dotenv.config();
let app = express();

app.use(express.json());

app.use("/cliente",appVerify, appCliente);
app.use("/Alquiler",appVerify, appAlquiler);
app.use("/Automovil",appVerify, appAutomovil);
app.use("/Empleado",appVerify, appEmpleado);
app.use("/Registro_Devolucion",appVerify,appRegistro_Devolucion)
app.use("/Registro_Entrega",appVerify,appRegistro_Entrega)
app.use("/Reserva",appVerify,appReserva)
app.use("/token", appToken); //para generar el token es con /token/"nombre coleccion"

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
import dotenv from "dotenv";
import express from "express";
import appCliente from "./routers/Cliente.js";

import { appToken, appVerify } from "./limit/token.js";


dotenv.config();
let app = express();

app.use(express.json());

app.use("/cliente",appVerify, appCliente);
app.use("/token", appToken); //para generar el token es con /token/user

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
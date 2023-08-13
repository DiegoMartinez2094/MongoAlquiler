import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Registro_Devolucion.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appRegistro_Devolucion = Router();

let db = await con();
let Registro_Devolucion = db.collection("Registro_Devolucion");

appRegistro_Devolucion.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let Registro_Devolucion = db.collection("Registro_Devolucion");
    let result = await Registro_Devolucion.find({}).toArray();
    res.send(result);
});
appRegistro_Devolucion.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Registro_Devolucion.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
        // resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        // res.status(resul.status).send(resul);
    }
});

appRegistro_Devolucion.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Registro_Devolucion = db.collection("Registro_Devolucion");

        const id = req.params.id;
        const result = await Registro_Devolucion.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});
export default appRegistro_Devolucion; 
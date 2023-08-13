import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Registro_Entrega.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appRegistro_Entrega = Router();

let db = await con();
let Registro_Entrega = db.collection("Registro_Entrega");

appRegistro_Entrega.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let Registro_Entrega = db.collection("Registro_Entrega");
    let result = await Registro_Entrega.find({}).toArray();
    res.send(result);
});
appRegistro_Entrega.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Registro_Entrega.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
    }
});

appRegistro_Entrega.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Registro_Entrega = db.collection("Registro_Entrega");

        const id = req.params.id;
        const result = await Registro_Entrega.deleteOne({ _id: new ObjectId(id) });

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
export default appRegistro_Entrega; 
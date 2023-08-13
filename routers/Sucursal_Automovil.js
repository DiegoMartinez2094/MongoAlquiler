import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Sucursal_Automovil.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appSucursal_Automovil = Router();

let db = await con();
let Sucursal_Automovil = db.collection("Sucursal_Automovil");

appSucursal_Automovil.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let Sucursal_Automovil = db.collection("Sucursal_Automovil");
    let result = await Sucursal_Automovil.find({}).toArray();
    res.send(result);
});
appSucursal_Automovil.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Sucursal_Automovil.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
    }
});

appSucursal_Automovil.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Sucursal_Automovi = db.collection("Sucursal_Automovi");

        const id = req.params.id;
        const result = await Sucursal_Automovi.deleteOne({ _id: new ObjectId(id) });

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
export default appSucursal_Automovil; 
import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Sucursal.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appSucursal = Router();

let db = await con();
let Sucursal = db.collection("Sucursal");

appSucursal.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let Sucursal = db.collection("Sucursal");
    let result = await Sucursal.find({}).toArray();
    res.send(result);
});
appSucursal.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Sucursal.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
    }
});

appSucursal.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Sucursal = db.collection("Sucursal");

        const id = req.params.id;
        const result = await Sucursal.deleteOne({ _id: new ObjectId(id) });

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
export default appSucursal; 
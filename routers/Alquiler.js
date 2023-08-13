import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Alquiler.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appAlquiler = Router();

let db = await con();
let Alquiler = db.collection("Alquiler");

 appAlquiler.get("/todos", limitGrt(), appMiddlewareCampusVerify, async(req, res) => { //http://127.10.10.10:5011/Alquiler/todos
     if(!req.rateLimit) return; 
     console.log(req.rateLimit);
     let db = await con();
     let Alquiler = db.collection("Alquiler");
     let result = await Alquiler.find({}).toArray();
     res.send(result); });


appAlquiler.get("/AlquilerCliente", limitGrt(), appMiddlewareCampusVerify, async (req, res) => { //http://127.10.10.10:5011/Alquiler/AlquilerCliente
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
  
    try {
      let db = await con();
      let Alquiler = db.collection("Alquiler");
  
      let result = await Alquiler.aggregate([
        { $match: { Estado: "Activo" } },
        {
          // Realizar un $lookup para obtener los datos de cliente relacionados
          $lookup: {
            from: "Cliente",
            localField: "ID_Cliente",
            foreignField: "ID_Cliente",
            as: "cliente_data",
          },
        },
        { $unwind: "$cliente_data" }, // Desenrollar el resultado del $lookup, ya que puede haber múltiples clientes relacionados para un alquiler
        
        // Agrupar los datos para obtener el resultado final
        {
          $group: {
            _id: "$ID_Alquiler",
            ID_Alquiler: { $first: "$ID_Alquiler" },
            ID_Cliente: { $first: "$ID_Cliente" },
            ID_Automovil: { $first: "$ID_Automovil" },
            Fecha_Inicio: { $first: "$Fecha_Inicio" },
            Fecha_Fin: { $first: "$Fecha_Fin" },
            Costo_Total: { $first: "$Costo_Total" },
            Estado: { $first: "$Estado" },
            Cliente: {
              $mergeObjects: {
                Nombre: "$cliente_data.Nombre",
                Apellido: "$cliente_data.Apellido",
                DNI: "$cliente_data.DNI",
                Direccion: "$cliente_data.Direccion",
                Telefono: "$cliente_data.Telefono",
                Email: "$cliente_data.Email",
              },
            },
          },
        },
      ]).toArray();
  
      res.send(result);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      res.status(500).send("Error al obtener los datos");
    }
  });
    
appAlquiler.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Alquiler.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
        // resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        // res.status(resul.status).send(resul);
    }
});

appAlquiler.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Alquiler = db.collection("Alquiler");

        const id = req.params.id;
        const result = await Alquiler.deleteOne({ _id: new ObjectId(id) });

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
export default appAlquiler; 
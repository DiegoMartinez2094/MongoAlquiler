import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/Reserva.js";
import {Router} from "express";
import { ObjectId } from "mongodb";
const appReserva = Router();

let db = await con();
let Reserva = db.collection("Reserva");



appReserva.get("/ReservasPendientes", limitGrt(), appMiddlewareCampusVerify,async (req, res) => { //http://127.10.10.10:5011/Reserva/ReservasPendientes
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
  
    try {
      let db = await con();
      let Alquiler = db.collection("Alquiler");
  
      let result = await Reserva.aggregate([
        { $match: { Estado: 'Pendiente' } },

  // Lookup para unir con la colección Cliente
  {
    $lookup: {
      from: 'Cliente',
      localField: 'ID_Cliente',
      foreignField: 'ID_Cliente',
      as: 'cliente'
    }
  },

  // Desenrollar el array 'cliente' para obtener un solo objeto de cliente por reserva
  { $unwind: '$cliente' },

  // Lookup para unir con la colección Automovil
  {
    $lookup: {
      from: 'Automovil',
      localField: 'ID_Automovil',
      foreignField: 'ID_Automovil',
      as: 'automovil'
    }
  },

  // Desenrollar el array 'automovil' para obtener un solo objeto de automóvil por reserva
  { $unwind: '$automovil' },

  // Proyectar solo los campos deseados para el resultado final
  {
    $project: {
      _id: 0,
      ID_Reserva: 1,
      Fecha_Reserva: 1,
      Fecha_Inicio: 1,
      Fecha_Fin: 1,
      Estado: 1,
      Cliente: {
        ID_Cliente: '$cliente.ID_Cliente',
        Nombre: '$cliente.Nombre',
        Apellido: '$cliente.Apellido',
        DNI: '$cliente.DNI',
        Direccion: '$cliente.Direccion',
        Telefono: '$cliente.Telefono',
        Email: '$cliente.Email'
      },
      Automovil: {
        ID_Automovil: '$automovil.ID_Automovil',
        Marca: '$automovil.Marca',
        Modelo: '$automovil.Modelo',
        Anio: '$automovil.Anio',
        Tipo: '$automovil.Tipo',
        Capacidad: '$automovil.Capacidad',
        Precio_Diario: '$automovil.Precio_Diario'
      }
    }
  }
]).toArray();
  
      res.send(result);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      res.status(500).send("Error al obtener los datos");
    }
  });
    

appReserva.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let Reserva = db.collection("Reserva");
    let result = await Reserva.find({}).toArray();
    res.send(result);
});
appReserva.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await Reserva.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
        // resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        // res.status(resul.status).send(resul);
    }
});

appReserva.delete("/:id", limitGrt(), appMiddlewareCampusVerify, async (req, res) => {
    if (!req.rateLimit) return;

    try {
        let db = await con();
        let Reserva = db.collection("Reserva");

        const id = req.params.id;
        const result = await Reserva.deleteOne({ _id: new ObjectId(id) });

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
export default appReserva; 
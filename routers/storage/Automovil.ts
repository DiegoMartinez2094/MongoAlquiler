import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "_id": {
//     "$oid": "64ca7d41c4ba2e79817b3166"
//   },
//   "ID_Automovil": 5,
//   "Marca": "Nissan",
//   "Modelo": "Sentra",
//   "Anio": 2022,
//   "Tipo": "Sedan",
//   "Capacidad": 4,
//   "Precio_Diario": 48
// }

export class car {
  @Expose({ name: 'ID_Automovil' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Automovil es obligatorio`}}})
    ID_Automovil: number;

    @Expose({ name: 'Marca' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Marca es obligatoria`}}})
    Marca: string;
    
    @Expose({ name: 'Modelo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Modelo es obligatorio`}}})
    Modelo: string;

    @Expose({ name: 'Anio' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Anio es obligatorio`}}})
    Anio: number;

    constructor(data:Partial<car>) {
      Object.assign(this, data);
      this.ID_Automovil = 0;
      this.Marca = "Faker";
      this.Modelo = "Model";
      this.Anio = 0;
    }
}
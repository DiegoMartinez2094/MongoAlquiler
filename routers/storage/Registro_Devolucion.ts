import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "_id": {
//     "$oid": "64ca7d42c4ba2e79817b3189"
//   },
//   "ID_Registro": 5,
//   "ID_Alquiler": 5,
//   "ID_Empleado": 2,
//   "Fecha_Devolucion": {
//     "$date": "2023-07-14T00:00:00Z"
//   },
//   "Combustible_Devuelto": 18,
//   "Kilometraje_Devuelto": 2000,
//   "Monto_Adicional": 12
// }

export class registerDev {
  @Expose({ name: 'ID_Registro' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Registro es obligatoria`}}})
    ID_Registro: number;

    @Expose({ name: 'ID_Alquiler' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Alquiler es obligatorio`}}})
    ID_Alquiler: number;

    @Expose({ name: 'ID_Empleado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Empleado es obligatorio`}}})
    ID_Empleado: number;

    @Expose({ name: 'Cargo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Cargo es obligatorio`}}})
    Cargo: string;

    constructor(data:Partial<Employee>) {
      Object.assign(this, data);
      this.ID_Registro = 0;
      this.ID_Alquiler = 0;
      this.Cargo= "cargo"
    }
}
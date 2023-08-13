import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "_id": {
//     "$oid": "64ca7d42c4ba2e79817b3181"
//   },
//   "ID_Registro": 2,
//   "ID_Alquiler": 2,
//   "ID_Empleado": 4,
//   "Fecha_Entrega": {
//     "$date": "2023-07-07T00:00:00Z"
//   },
//   "Combustible_Entregado": 30,
//   "Kilometraje_Entregado": 1800
// }

export class registerEnt {
  @Expose({ name: 'ID_Registro' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Registro es obligatoria`}}})
    ID_Registro: number;

    @Expose({ name: 'ID_Alquiler' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Alquiler es obligatorio`}}})
    ID_Alquiler: number;

    @Expose({ name: 'ID_Empleado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Empleado es obligatorio`}}})
    ID_Empleado: number;

    @Expose({ name: 'Fecha_Entrega' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Fecha_Entrega es obligatoria`}}})
    Fecha_Entrega: string;

    constructor(data:Partial<registerEnt>) {
      Object.assign(this, data);
      this.ID_Registro = 0;
      this.ID_Alquiler = 0;
      this.ID_Empleado=0;
      this.Fecha_Entrega="fecha_entrega";

    }
}
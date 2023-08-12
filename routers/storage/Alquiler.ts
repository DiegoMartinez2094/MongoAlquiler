import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// },
// "ID_Alquiler": 2,
// "ID_Cliente": 2,
// "ID_Automovil": 4,
// "Fecha_Inicio": {
//   "$date": "2023-07-02T00:00:00Z"
// },
// "Fecha_Fin": {
//   "$date": "2023-07-07T00:00:00Z"
// },
// "Costo_Total": 275,
// "Estado": "Disponible"
// }

export class rent {
  @Expose({ name: 'ID_Alquiler' })
  @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Alquiler es obligatorio`}}})
  ID_Alquiler: number;

  @Expose({ name: 'ID_Cliente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Cliente es obligatoria`}}})
    ID_Cliente: number;

    @Expose({ name: 'ID_Automovil' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Automovil es obligatorio`}}})
    ID_Automovil: number;


    constructor(data:Partial<rent>) {
      Object.assign(this, data);
      this.ID_Alquiler = 0;
      this.ID_Cliente = 0;
      this.ID_Automovil = 0;
    }
}
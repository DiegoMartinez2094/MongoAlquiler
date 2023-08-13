import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "_id": {
//     "$oid": "64ca7d41c4ba2e79817b316e"
//   },
//   "ID_Reserva": 3,
//   "ID_Cliente": 4,
//   "ID_Automovil": 2,
//   "Fecha_Reserva": {
//     "$date": "2023-07-08T00:00:00Z"
//   },
//   "Fecha_Inicio": {
//     "$date": "2023-07-14T00:00:00Z"
//   },
//   "Fecha_Fin": {
//     "$date": "2023-07-19T00:00:00Z"
//   },
//   "Estado": "Pendiente"
// }

export class reserv {
  @Expose({ name: 'ID_Reserva' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Reserva es obligatoria`}}})
    ID_Reserva: number;

    @Expose({ name: 'ID_Cliente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Cliente es obligatoria`}}})
    ID_Cliente: number;

    @Expose({ name: 'ID_Automovil' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Automovil es obligatoria`}}})
    ID_Automovil: number;

    @Expose({ name: 'Fecha_Reserva' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Fecha_Reserva es obligatorio`}}})
    Fecha_Reserva: string;

    @Expose({ name: 'Estado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Estado es obligatorio`}}})
    Estado: string;

    constructor(data:Partial<reserv>) {
      Object.assign(this, data);
      this.ID_Reserva = 0;
      this.ID_Cliente = 0;
      this.ID_Automovil = 0;
      this.Fecha_Reserva = "fecha";
      this.Estado="estado"
    }
}
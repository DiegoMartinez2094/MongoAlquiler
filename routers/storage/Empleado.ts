import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "_id": {
//     "$oid": "64ca7d42c4ba2e79817b317c"
//   },
//   "ID_Empleado": 2,
//   "Nombre": "Luis",
//   "Apellido": "Rodriguez",
//   "DNI": "987654321",
//   "Direccion": "Avenida 222",
//   "Telefono": "2222222222",
//   "Cargo": "Asistente"
// }

export class Employee {
  @Expose({ name: 'ID_Empleado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Empleado es obligatoria`}}})
    ID_Empleado: number;

    @Expose({ name: 'Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre es obligatorio`}}})
    Nombre: string;

    @Expose({ name: 'DNI' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El DNI es obligatorio`}}})
    DNI: number;

    @Expose({ name: 'Cargo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Cargo es obligatorio`}}})
    Cargo: string;

    constructor(data:Partial<Employee>) {
      Object.assign(this, data);
      this.ID_Empleado = 0;
      this.Nombre = "client";
      this.DNI = 0;
      this.Cargo= "cargo"
    }
}
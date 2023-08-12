import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
// {
//   "ID_Cliente": 4,
//   "Nombre": "Laura",
//   "Apellido": "Martinez",
//   "DNI": "09876543",
//   "Direccion": "Ruta 101",
//   "Telefono": "44444444",
//   "Email": "laura@example.com"
// }

export class Client {
  @Expose({ name: 'ID_Cliente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Cliente es obligatoria`}}})
    ID_Cliente: number;

    @Expose({ name: 'Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre es obligatorio`}}})
    Nombre: string;

    @Expose({ name: 'DNI' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El DNI es obligatorio`}}})
    DNI: number;

    constructor(data:Partial<Client>) {
      Object.assign(this, data);
      this.ID_Cliente = 0;
      this.Nombre = "Faker";
      this.DNI = 0;
    }
}
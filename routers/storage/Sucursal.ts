import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';

// "ID_Sucursal": 1,
// "Nombre": "Sucursal A",
// "Direccion": "Calle Principal 123",
// "Telefono": "1111111111"

export class Sucursal {
  @Expose({ name: 'ID_Sucursal' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Sucursal es obligatoria`}}})
    ID_Sucursal: number;

    @Expose({ name: 'Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre es obligatorio`}}})
    Nombre: string;

    
    @Expose({ name: 'Direccion' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Direccion es obligatorio`}}})
    Direccion: string;

    @Expose({ name: 'Telefono' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Telefono es obligatoria`}}})
    Telefono: number;

    constructor(data:Partial<Sucursal>) {
      Object.assign(this, data);
      this.ID_Sucursal = 0;
      this.Nombre = "nombre";
      this.Direccion="Direccion"
      this.Telefono = 0;
    }
}
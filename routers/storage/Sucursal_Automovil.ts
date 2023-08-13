import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';

// "ID_Sucursal": 3,
// "ID_Automovil": 3,
// "Cantidad_Disponible": 2


export class Sucursal_Automovil {
  @Expose({ name: 'ID_Sucursal' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Sucursal es obligatoria`}}})
    ID_Sucursal: number;

    @Expose({ name: 'ID_Automovil' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Automovil es obligatoria`}}})
    ID_Automovil: number;

    @Expose({ name: 'Cantidad_Disponible' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Cantidad_Disponible es obligatoria`}}})
    Cantidad_Disponible: number;

    constructor(data:Partial<Sucursal_Automovil>) {
      Object.assign(this, data);
      this.ID_Sucursal = 0;
      this.ID_Automovil = 0;
      this.Cantidad_Disponible = 0;
    }
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
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
    constructor(data) {
        Object.assign(this, data);
        this.ID_Registro = 0;
        this.ID_Alquiler = 0;
        this.ID_Empleado = 0;
        this.Fecha_Entrega = "fecha_entrega";
    }
}
__decorate([
    Expose({ name: 'ID_Registro' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Registro es obligatoria` }; } }),
    __metadata("design:type", Number)
], registerEnt.prototype, "ID_Registro", void 0);
__decorate([
    Expose({ name: 'ID_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Alquiler es obligatorio` }; } }),
    __metadata("design:type", Number)
], registerEnt.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Empleado es obligatorio` }; } }),
    __metadata("design:type", Number)
], registerEnt.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: 'Fecha_Entrega' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Fecha_Entrega es obligatoria` }; } }),
    __metadata("design:type", String)
], registerEnt.prototype, "Fecha_Entrega", void 0);

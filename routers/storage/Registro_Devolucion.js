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
    constructor(data) {
        Object.assign(this, data);
        this.ID_Registro = 0;
        this.ID_Alquiler = 0;
        this.Cargo = "cargo";
    }
}
__decorate([
    Expose({ name: 'ID_Registro' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Registro es obligatoria` }; } }),
    __metadata("design:type", Number)
], registerDev.prototype, "ID_Registro", void 0);
__decorate([
    Expose({ name: 'ID_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Alquiler es obligatorio` }; } }),
    __metadata("design:type", Number)
], registerDev.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Empleado es obligatorio` }; } }),
    __metadata("design:type", Number)
], registerDev.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: 'Cargo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Cargo es obligatorio` }; } }),
    __metadata("design:type", String)
], registerDev.prototype, "Cargo", void 0);

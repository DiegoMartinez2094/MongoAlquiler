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
    constructor(data) {
        Object.assign(this, data);
        this.ID_Empleado = 0;
        this.Nombre = "client";
        this.DNI = 0;
        this.Cargo = "cargo";
    }
}
__decorate([
    Expose({ name: 'ID_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Empleado es obligatoria` }; } }),
    __metadata("design:type", Number)
], Employee.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: 'Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Nombre es obligatorio` }; } }),
    __metadata("design:type", String)
], Employee.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    IsDefined({ message: () => { throw { status: 422, message: `El DNI es obligatorio` }; } }),
    __metadata("design:type", Number)
], Employee.prototype, "DNI", void 0);
__decorate([
    Expose({ name: 'Cargo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Cargo es obligatorio` }; } }),
    __metadata("design:type", String)
], Employee.prototype, "Cargo", void 0);

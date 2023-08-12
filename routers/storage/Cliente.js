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
//   "ID_Cliente": 4,
//   "Nombre": "Laura",
//   "Apellido": "Martinez",
//   "DNI": "09876543",
//   "Direccion": "Ruta 101",
//   "Telefono": "44444444",
//   "Email": "laura@example.com"
// }
export class Client {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Cliente = 0;
        this.Nombre = "Faker";
        this.DNI = 0;
    }
}
__decorate([
    Expose({ name: 'ID_Cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Cliente es obligatoria` }; } }),
    __metadata("design:type", Number)
], Client.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: 'Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Nombre es obligatorio` }; } }),
    __metadata("design:type", String)
], Client.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    IsDefined({ message: () => { throw { status: 422, message: `El DNI es obligatorio` }; } }),
    __metadata("design:type", Number)
], Client.prototype, "DNI", void 0);

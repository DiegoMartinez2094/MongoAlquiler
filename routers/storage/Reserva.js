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
    constructor(data) {
        Object.assign(this, data);
        this.ID_Reserva = 0;
        this.ID_Cliente = 0;
        this.ID_Automovil = 0;
        this.Fecha_Reserva = "fecha";
        this.Estado = "estado";
    }
}
__decorate([
    Expose({ name: 'ID_Reserva' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Reserva es obligatoria` }; } }),
    __metadata("design:type", Number)
], reserv.prototype, "ID_Reserva", void 0);
__decorate([
    Expose({ name: 'ID_Cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Cliente es obligatoria` }; } }),
    __metadata("design:type", Number)
], reserv.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: 'ID_Automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Automovil es obligatoria` }; } }),
    __metadata("design:type", Number)
], reserv.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'Fecha_Reserva' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Fecha_Reserva es obligatorio` }; } }),
    __metadata("design:type", String)
], reserv.prototype, "Fecha_Reserva", void 0);
__decorate([
    Expose({ name: 'Estado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Estado es obligatorio` }; } }),
    __metadata("design:type", String)
], reserv.prototype, "Estado", void 0);

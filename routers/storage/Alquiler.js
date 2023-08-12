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
// },
// "ID_Alquiler": 2,
// "ID_Cliente": 2,
// "ID_Automovil": 4,
// "Fecha_Inicio": {
//   "$date": "2023-07-02T00:00:00Z"
// },
// "Fecha_Fin": {
//   "$date": "2023-07-07T00:00:00Z"
// },
// "Costo_Total": 275,
// "Estado": "Disponible"
// }
export class rent {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Alquiler = 0;
        this.ID_Cliente = 0;
        this.ID_Automovil = 0;
    }
}
__decorate([
    Expose({ name: 'ID_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Alquiler es obligatorio` }; } }),
    __metadata("design:type", Number)
], rent.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Cliente es obligatoria` }; } }),
    __metadata("design:type", Number)
], rent.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: 'ID_Automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Automovil es obligatorio` }; } }),
    __metadata("design:type", Number)
], rent.prototype, "ID_Automovil", void 0);

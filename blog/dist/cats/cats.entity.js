"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let CatEntity = class CatEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CatEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500, unique: true }),
    __metadata("design:type", String)
], CatEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500 }),
    __metadata("design:type", String)
], CatEntity.prototype, "breed", void 0);
__decorate([
    typeorm_1.Column('numeric'),
    __metadata("design:type", Number)
], CatEntity.prototype, "age", void 0);
CatEntity = __decorate([
    typeorm_1.Entity('cat')
], CatEntity);
exports.CatEntity = CatEntity;
//# sourceMappingURL=cats.entity.js.map
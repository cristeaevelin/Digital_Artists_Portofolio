"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksService = void 0;
const common_1 = require("@nestjs/common");
let WorksService = class WorksService {
    constructor() {
        this.works = [];
    }
    createWork(workDto) {
        const newWork = { id: Date.now(), ...workDto };
        this.works.push(newWork);
        console.log('New work created:', newWork);
        return newWork;
    }
    getAllWorks() {
        return this.works;
    }
    updateWork(id, workDto) {
        const index = this.works.findIndex(work => work.id === id);
        if (index === -1)
            return null;
        this.works[index] = { ...this.works[index], ...workDto };
        return this.works[index];
    }
    deleteWork(id) {
        const index = this.works.findIndex(work => work.id === id);
        if (index === -1)
            return null;
        return this.works.splice(index, 1)[0];
    }
};
exports.WorksService = WorksService;
exports.WorksService = WorksService = __decorate([
    (0, common_1.Injectable)()
], WorksService);
//# sourceMappingURL=works.service.js.map
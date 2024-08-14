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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksController = void 0;
const common_1 = require("@nestjs/common");
const works_service_1 = require("./works.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let WorksController = class WorksController {
    constructor(worksService) {
        this.worksService = worksService;
    }
    createWork(workDto) {
        return this.worksService.createWork(workDto);
    }
    getAllWorks() {
        return this.worksService.getAllWorks();
    }
    updateWork(id, workDto) {
        return this.worksService.updateWork(id, workDto);
    }
    deleteWork(id) {
        return this.worksService.deleteWork(id);
    }
    uploadFile(file) {
        console.log('File uploaded:', file);
        return { path: `uploads/${file.filename}` };
    }
};
exports.WorksController = WorksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], WorksController.prototype, "createWork", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], WorksController.prototype, "getAllWorks", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], WorksController.prototype, "updateWork", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], WorksController.prototype, "deleteWork", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Date.now() + (0, path_1.extname)(file.originalname);
                cb(null, randomName);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorksController.prototype, "uploadFile", null);
exports.WorksController = WorksController = __decorate([
    (0, common_1.Controller)('works'),
    __metadata("design:paramtypes", [works_service_1.WorksService])
], WorksController);
//# sourceMappingURL=works.controller.js.map
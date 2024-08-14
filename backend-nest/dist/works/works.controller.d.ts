import { WorksService, Work } from './works.service';
export declare class WorksController {
    private readonly worksService;
    constructor(worksService: WorksService);
    createWork(workDto: Partial<Work>): Work;
    getAllWorks(): Work[];
    updateWork(id: number, workDto: Partial<Work>): Work | null;
    deleteWork(id: number): Work | null;
    uploadFile(file: Express.Multer.File): {
        path: string;
    };
}

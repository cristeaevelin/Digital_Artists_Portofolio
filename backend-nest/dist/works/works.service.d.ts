export interface Work {
    id: number;
    title: string;
    description: string;
}
export declare class WorksService {
    private works;
    createWork(workDto: Partial<Work>): Work;
    getAllWorks(): Work[];
    updateWork(id: number, workDto: Partial<Work>): Work;
    deleteWork(id: number): Work;
}

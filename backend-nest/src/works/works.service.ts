import { Injectable } from '@nestjs/common';

export interface Work {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class WorksService {
  private works: Work[] = [];

  createWork(workDto: Partial<Work>) {
    const newWork: Work = { id: Date.now(), ...workDto as Work };
    this.works.push(newWork);
    console.log('New work created:', newWork);
    return newWork;
  }

  getAllWorks(): Work[] {
    return this.works;
  }

  updateWork(id: number, workDto: Partial<Work>) {
    const index = this.works.findIndex(work => work.id === id);
    if (index === -1) return null;

    this.works[index] = { ...this.works[index], ...workDto };
    return this.works[index];
  }

  deleteWork(id: number) {
    const index = this.works.findIndex(work => work.id === id);
    if (index === -1) return null;

    return this.works.splice(index, 1)[0];
  }
}

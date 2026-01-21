import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate?: number;
    interruptedDate?: number;
    type: keyof TaskStateModel['config'];
}
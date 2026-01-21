import type { TaskModel } from "./taskModel";

export type TaskStateModel = {  
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTaskId: TaskModel | null;
    currentCycle: number;
    config : {
        workTime: number;
        shortBreakTime: number; 
        longBreakTime: number;
        cyclesUntilLongBreak: number;
    }
}
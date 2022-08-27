import { TaskModel } from "./task-model";

export class GetTaskResponse {
    statusCode !: number;
    taskList!: TaskModel[];
    msg!: string
  }

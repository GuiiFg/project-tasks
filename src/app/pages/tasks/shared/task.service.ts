import { Injectable } from '@angular/core';
import { TaskModel } from './task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: TaskModel[] = [
    {id:1, description: 'Tarefa 1', done:false},
    {id:2, description: 'Tarefa 2', done:true},
    {id:3, description: 'Tarefa 3', done:false},
    {id:4, description: 'Tarefa 4', done:true},
    {id:5, description: 'Tarefa 5', done:false},
    {id:6, description: 'Tarefa 6', done:false},
    {id:7, description: 'Tarefa 7', done:false},
  ]

  constructor() { }
  
  getAll(){
    return this.tasks
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  saveTask(task: TaskModel){
    if(task.id){
      const taskToUpdate = this.getById(task.id);
      if(taskToUpdate != undefined){
        taskToUpdate.description = task.description;
        taskToUpdate.done = task.done;
      }
    }else{
      task.done = false;
      if(this.tasks.length != 0){
        const lastId = this.tasks[this.tasks.length - 1].id
        task.id = lastId + 1;
      }else{
        task.id = 1
      }
      this.tasks.push(task);
    }
  }

  deleteTask(id: number){
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}

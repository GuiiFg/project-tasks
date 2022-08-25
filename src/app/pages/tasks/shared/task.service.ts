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
}

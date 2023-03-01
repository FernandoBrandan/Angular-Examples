import {  CdkDragDrop,  moveItemInArray,  transferArrayItem,} from '@angular/cdk/drag-drop'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css'],
})
export class DragdropComponent implements OnInit {
  todo: string[] = ['todo', 'todo', 'todo']
  progress: string[] = ['progress', 'progress', 'progress']
  done: string[] = ['done', 'done', 'done']

  tarea: string = ''

  constructor() {}
  ngOnInit(): void {}

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  // }

  agregarTarea(){
    if (this.tarea === '') {
      return
    }
    this.todo.push(this.tarea)
    this.tarea = ''
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex
      )
    }
  }
}

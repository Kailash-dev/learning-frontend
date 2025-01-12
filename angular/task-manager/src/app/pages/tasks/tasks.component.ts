import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { TaskComponent } from '../../components/task/task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatCardModule,
      ReactiveFormsModule,
      NgFor,
      FormsModule,TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: any[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data.slice(0, 10); // Display the first 10 tasks
    });
  }

  toggleComplete(task: any) {
    task.completed = !task.completed; // Simulate completion toggle
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId); // Simulate task deletion
  }
}

import { Component, Input } from '@angular/core';
import { Employee } from '../../services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {
  @Input() employee!: Employee;
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({ task: '' });
  }

  submitTask() {
    const task = this.taskForm.value.task;
    if (task) {
      this.employee.tasks = this.employee.tasks || [];
      this.employee.tasks.push(task);
      this.taskForm.reset();
      console.log(`Task added for ${this.employee.name}: ${task}`);
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({ name: '', position: '' });
  }

  onSubmit() {
    console.log('Form submitted:', this.empForm.value);
  }
}

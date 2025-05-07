import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit {
  employee!: Employee;

  constructor(private route: ActivatedRoute, private empService: EmployeeService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empService.getEmployee(id).subscribe(data => this.employee = data);
  }
}

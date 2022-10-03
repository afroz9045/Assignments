import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDepartments } from 'src/app/Models/IDepartments';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-available-departments',
  templateUrl: './available-departments.component.html',
  styleUrls: ['./available-departments.component.css']
})
export class AvailableDepartmentsComponent implements OnInit {
  departmentList: IDepartments[] = [];
  busy: boolean | undefined;
  errorMessage: string | undefined;
  constructor(private departmentService:DepartmentService,private http:HttpClient) { }

  ngOnInit() {
    debugger;
    this.getDepartments()
  }  
  getDepartments() {
    this.departmentService.getAllDepartments().subscribe((response) => {
      const departments = JSON.stringify(response);

      this.departmentList = JSON.parse(departments)
      console.log(this.departmentList)
      this.busy = false;
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

}}

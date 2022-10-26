import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  departmentName: string = ""
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  addDepartment() {
    debugger
    let department = {
      departmentName: this.departmentName
    }

    this.departmentService.addDepartment(department).subscribe((response) => {
      console.log(response.departmentName + "added successfully!")
      if (response) {
        Swal.fire({
          title: 'Department Adding Status',
          text: `Department with department name : ${this.departmentName} added successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Department Adding Status',
          text: `${err.error} `,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)
      })
  }
}

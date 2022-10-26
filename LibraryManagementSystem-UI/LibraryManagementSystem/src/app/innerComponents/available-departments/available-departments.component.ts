import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDepartments } from 'src/app/Models/IDepartments';
import { DepartmentService } from 'src/app/Services/department.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-available-departments',
  templateUrl: './available-departments.component.html',
  styleUrls: ['./available-departments.component.css']
})
export class AvailableDepartmentsComponent implements OnInit {
  departmentList: IDepartments[] = [];
  errorMessage: string | undefined;
  isAdmin: boolean = false;

  editedDepartmentName: String = "";
  editedDepartmentId: any;
  constructor(private departmentService: DepartmentService, private http: HttpClient, private userService: UserService) {
    this.userService.userRoleVerify()
    this.getDepartments()
  }

  ngOnInit() {

  }

  getDepartments() {
    let userRole = localStorage.getItem("userRole")
    if (userRole === "Principle" || userRole === "Director") {
      this.isAdmin = true;
    }
    debugger
    this.departmentService.getAllDepartments().subscribe((response) => {
      const departments = JSON.stringify(response);

      this.departmentList = JSON.parse(departments)
      console.log(this.departmentList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }
  onDepartmentEdit(deptId: number, index: number) {
    this.editedDepartmentName = this.departmentList[index].departmentName
    console.log(`Department id for edit is : ${deptId} and index is ${index}`)
    this.editedDepartmentId = deptId
  }
  editDepartment() {
    debugger
    let departmentName = {
      departmentName: this.editedDepartmentName
    }
    this.departmentService.onDepartmentEdit(departmentName, this.editedDepartmentId).subscribe((response) => {
      console.log("Updated department name is : " + response.departmentName)
      if (response) {
        this.getDepartments();
        Swal.fire({
          title: 'Department details updated',
          text: `Department with department id : ${this.editedDepartmentId} updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Department Update Status',
          text: `${err.error} `,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)

      }

    )
  }

  onDepartmentDelete(deptId: number) {
    console.log(`department id for delete is : ${deptId}`)
    console.log(`department id  for delete is : ${deptId}`)
    Swal.fire({
      title: 'Delete Confirmation',
      text: `Do you want to delete this department?`,
      icon: 'question',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then((result) => {
      debugger
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        this.departmentService.deleteDepartment(deptId).subscribe((response) => {
          console.log(response)
          this.getDepartments();
          Swal.fire({
            title: 'Department Delete Status',
            text: `Department with department id : ${deptId} deleted successfully!`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        },
          err => {
            console.log(err)
            Swal.fire({
              title: 'Department Delete Status',
              text: `${err.error} `,
              icon: 'warning',
              confirmButtonText: 'Ok'
            })
            console.log(err.errorMessage)
          })
      }
    })
  }
}

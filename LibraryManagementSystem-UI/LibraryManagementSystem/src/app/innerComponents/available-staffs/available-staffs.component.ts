import { Component, OnInit } from '@angular/core';
import { IStaffDto } from 'src/app/Models/IStaffDto';
import { AuthService } from 'src/app/Services/auth.service';
import { StaffService } from 'src/app/Services/staff.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-available-staffs',
  templateUrl: './available-staffs.component.html',
  styleUrls: ['./available-staffs.component.css']
})
export class AvailableStaffsComponent implements OnInit {
  staffList: IStaffDto[] = [];
  errorMessage: string | undefined;
  editedStaffName: string = "";
  isAdmin: boolean = false;
  editedStaffId: string = "";

  constructor(private staffService: StaffService, private userService: UserService,private authService:AuthService) {
    this.userService.userRoleVerify()
    this.getStaffs()
  }

  ngOnInit(): void {
  }
  getStaffs() {
    debugger
    let userRole = localStorage.getItem("userRole")
    if (userRole === "Principle" || userRole === "Director") {
      this.isAdmin = true;
    }
    this.staffService.getStaff().subscribe((response) => {
      const staffs = JSON.stringify(response);
      this.staffList = JSON.parse(staffs)
      console.log(this.staffList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }
  onStaffEdit(staffId: string, index: number) {
    this.editedStaffName = this.staffList[index].staffName
    console.log(`Staff id for edit is : ${staffId} and index is ${index}`)
    this.editedStaffId = staffId
  }
  editStaff() {
    debugger
    let staffName = {
      staffName: this.editedStaffName
    }
    this.staffService.onStaffEdit(staffName, this.editedStaffId).subscribe((response) => {
      console.log("Updated staff name is : " + response.staffName)
      if (response) {
        this.getStaffs();
        Swal.fire({
          title: 'Staff details updated',
          text: `Staff with staff id : ${this.editedStaffId} updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Staff Update Status',
          text: `${err.error}`,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)
      }

    )
  }
  onStaffDelete(staffId: string) {
    debugger
    console.log(`staff id  for delete is : ${staffId}`)
    console.log(`staff id for delete is : ${staffId}`)
    Swal.fire({
      title: 'Delete Confirmation',
      text: `Do you want to delete this staff?`,
      icon: 'question',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then((result) => {
      debugger
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        this.authService.deleteUser(staffId).subscribe((response)=>{
          console.log(response)
        })
        this.staffService.deleteStaff(staffId).subscribe((response) => {
          console.log(response)
          this.getStaffs();
          Swal.fire({
            title: 'Staff Delete Status',
            text: `Staff with staff id : ${staffId} deleted successfully!`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        },
          err => {
            console.log(`error status code is : ${err.status}`)
            if (err.status == 500) {
              this.errorMessage = "First delete user details and then try for this staff deletion"
              console.log(`Error message is :${this.errorMessage}`)
            } else {
              this.errorMessage = err.error
            }
            console.log(err)
            Swal.fire({
              title: 'Staff Delete Status',
              text: `${this.errorMessage} `,
              icon: 'warning',
              confirmButtonText: 'Ok'
            })
            console.log(err.errorMessage)
          })
      }
    })
  }
  onDeleteStaff(staffId: string) {
    console.log(`Delete Staff id is: ${staffId}`)
  }
}

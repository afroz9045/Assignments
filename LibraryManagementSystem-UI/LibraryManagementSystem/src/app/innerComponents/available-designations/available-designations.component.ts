import { Component, OnInit } from '@angular/core';
import { IDesignations } from 'src/app/Models/IDesignations';
import { DesignationService } from 'src/app/Services/designation.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-available-designations',
  templateUrl: './available-designations.component.html',
  styleUrls: ['./available-designations.component.css']
})
export class AvailableDesignationsComponent implements OnInit {
  designationList: IDesignations[] = [];
  errorMessage: string | undefined;
  editedDesignationName:string= "";
  isAdmin: boolean = false;
  editedDesignationId: string = "";
  constructor(private designationService: DesignationService, private userService: UserService) {
    this.userService.userRoleVerify()
    this.getDesignations();
  }

  ngOnInit(): void {
  }
  getDesignations() {
    debugger
    let userRole = localStorage.getItem("userRole")
    if (userRole === "Principle" || userRole === "Director") {
      this.isAdmin = true;
    }
    this.designationService.getAllDesignations().subscribe((response) => {
      const designations = JSON.stringify(response);
      this.designationList = JSON.parse(designations)
      console.log(this.designationList)
    }, (response) => {
      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }

  editDesignation() {
    debugger
    let designationName = {
      designationName: this.editedDesignationName
    }
    this.designationService.onDesignationEdit(designationName, this.editedDesignationId).subscribe((response) => {
      console.log("Updated designation name is : " + response.designationName)
      if (response) {
        this.getDesignations();
        Swal.fire({
          title: 'Designation details updated',
          text: `Designation with designation id : ${this.editedDesignationId} updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Designation Update Status',
          text: `${err.error} `,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)

      }

    )
  }

  onDesignationEdit(designationId: string, index: number) {
    this.editedDesignationName = this.designationList[index].designationName
    console.log(`Designation id for edit is : ${designationId} and index is ${index}`)
    this.editedDesignationId = designationId
  }
 
  onDesignationDelete(designationId: string) {
    console.log(`designation id for delete is : ${designationId}`)
    console.log(`designation id  for delete is : ${designationId}`)
    Swal.fire({
      title: 'Delete Confirmation',
      text: `Do you want to delete this designation?`,
      icon: 'question',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then((result) => {
      debugger
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        this.designationService.deleteDesignation(designationId).subscribe((response) => {
          console.log(response)
          this.getDesignations();
          Swal.fire({
            title: 'Designation Delete Status',
            text: `Designation with designation id : ${designationId} deleted successfully!`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        },
          err => {
            console.log(err)
            Swal.fire({
              title: 'Designation Delete Status',
              text: `${err.errorMessage} `,
              icon: 'warning',
              confirmButtonText: 'Ok'
            })
            console.log(err.errorMessage)
          })
      }
    })
  }
  onDeleteDesignation(designationId: string) {
    console.log(`delete designation id is : ${designationId}`);
  }
}

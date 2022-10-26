import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/Services/designation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designationName: any;

  constructor(private designationService:DesignationService) { }

  ngOnInit(): void {
  }

  addDesignation() {
    debugger
    let designation = {
      designationName: this.designationName
    }

    this.designationService.addDesignation(designation).subscribe((response) => {
      console.log(response.designationName + "added successfully!")
      if (response) {
        Swal.fire({
          title: 'Designation Adding Status',
          text: `designation with designation name : ${this.designationName} added successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'designation Adding Status',
          text: `${err.error} `,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)
      })
  }

}

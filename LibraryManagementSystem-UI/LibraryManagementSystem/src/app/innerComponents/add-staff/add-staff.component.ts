import { Component, OnInit } from '@angular/core';
import { IStaff } from 'src/app/Models/IStaff';
import { IStaffDto } from 'src/app/Models/IStaffDto';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  isHide:Boolean =false;
  constructor(private staffService:StaffService) { }
  staffName = "";
  designationId = "";
  email: string = "";
  password: string = "";
  gender :string =""
  abcd:any=''

  getGender(event:any){
    this.gender = event.target.value;
    console.log(this.gender);
  }

  getDesignation(event:any){
    this.designationId = event.target.value;
    console.log(`Selected designation is ${this.designationId}`);
  }
  

  addStaff() {
    debugger
    let staffDetails:IStaff = {
      staffName: this.staffName,
      designationId: this.designationId,
      email: this.email,
      password: this.password,
      gender:this.gender
    }
    this.staffService.addStaff(staffDetails).subscribe((res)=>{
      console.log(res);
      if(res!==null || res!==undefined)
      {
        this.isHide=true;
        setInterval(() => {
          this.isHide=false;
        }, 10000);
      }
      
    })
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { IStaff } from 'src/app/Models/IStaff';
import { IStaffDto } from 'src/app/Models/IStaffDto';
import { DesignationService } from 'src/app/Services/designation.service';
import { IDesignations } from 'src/app/Models/IDesignations';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  isHide:Boolean =false;
  constructor(private staffService:StaffService,private designationService:DesignationService) { 
    this.callGetDesignation()
  }

  designationList: IDesignations[] = [];
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
  
  callGetDesignation(){
    this.designationService.getAllDesignations().subscribe((res)=>{
      var stringifyDesignation = JSON.stringify(res)
      this.designationList = JSON.parse(stringifyDesignation)
      console.log(this.designationList)
    });
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

import { Component, OnInit } from '@angular/core';
import { IStaffDto } from 'src/app/Models/IStaffDto';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-available-staffs',
  templateUrl: './available-staffs.component.html',
  styleUrls: ['./available-staffs.component.css']
})
export class AvailableStaffsComponent implements OnInit {
  staffList: IStaffDto[] = [];
  errorMessage: string | undefined;

  constructor(private staffService:StaffService) { 
    this.getStaffs()
  }

  ngOnInit(): void {
  }
  getStaffs() {
    debugger
    this.staffService.getStaff().subscribe((response) => {
      const staffs = JSON.stringify(response);

      this.staffList = JSON.parse(staffs)
      console.log(this.staffList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }
  editStaff(id:string)
  {
console.log(id)
  }
  deleteStaff(id:string)
  {
console.log(id)
  }
}

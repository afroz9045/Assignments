import { Component, OnInit } from '@angular/core';
import { IDesignations } from 'src/app/Models/IDesignations';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-available-designations',
  templateUrl: './available-designations.component.html',
  styleUrls: ['./available-designations.component.css']
})
export class AvailableDesignationsComponent implements OnInit {
  designationList: IDesignations[] = [];
  errorMessage: string | undefined;
  constructor(private designationService: DesignationService) {
    this.getDesignations();
  }

  ngOnInit(): void {
  }
  getDesignations() {
    debugger
    this.designationService.getAllDesignations().subscribe((response) => {
      const designations = JSON.stringify(response);

      this.designationList = JSON.parse(designations)
      console.log(this.designationList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }

  onEditDesignation(designationId: string) {
    console.log(`edit designation id is : ${designationId}`);
  }
  onDeleteDesignation(designationId: string) {
    console.log(`delete designation id is : ${designationId}`);
  }
}

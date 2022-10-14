import { Component, OnInit } from '@angular/core';
import { IIssueVm } from 'src/app/Models/IIssueVm';
import { IPenaltyVm } from 'src/app/Models/IPenaltyVm';
import { PenaltyService } from 'src/app/Services/penalty.service';

@Component({
  selector: 'app-penalty-check',
  templateUrl: './penalty-check.component.html',
  styleUrls: ['./penalty-check.component.css']
})
export class PenaltyCheckComponent implements OnInit {

issueId:any;
isPenaltyPayPrompt :boolean = false;
isPenalty:boolean = false;
penaltyAmount :any;
penaltyId:any;
  constructor(private penaltyService:PenaltyService) { }

  ngOnInit(): void {
  }

  checkPenalty(){
    debugger
    let responseData = this.penaltyService.checkPenalty(this.issueId).subscribe((response)=>{
      console.log(response);
      console.log(response.penaltyAmount);
      console.log(response.penaltyPaidStatus);
      console.log(response.penaltyId);
      console.log(response.issueId);

      if(response.penaltyAmount>0 || response.penaltyPaidStatus ===false){
        this.isPenaltyPayPrompt = true;
        this.isPenalty = true;
        this.penaltyAmount = response.penaltyAmount;
        this.penaltyId = response.penaltyId;
        this.issueId = response.issueId;
      }
    }
    )
  }

}

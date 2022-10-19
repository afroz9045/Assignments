import { Component, OnInit } from '@angular/core';
import { PayPenaltyVm } from 'src/app/Models/PayPenaltyVm';
import { JwtDecodeService } from 'src/app/Services/jwt-decode.service';
import { PenaltyService } from 'src/app/Services/penalty.service';

@Component({
  selector: 'app-penalty-check',
  templateUrl: './penalty-check.component.html',
  styleUrls: ['./penalty-check.component.css']
})
export class PenaltyCheckComponent implements OnInit {

  issueId: any;
  isPenaltyPayPrompt: boolean = false;
  isNoPenaltyAlert:boolean =false;
  isPenalty: boolean = false;
  penaltyAmount: any;
  penaltyId: any;
  errorMsg: string = "";
  constructor(private penaltyService: PenaltyService, private tokenDecodeService:JwtDecodeService) { }

  ngOnInit(): void {
  }

  checkPenalty() {
    debugger
    let responseData = this.penaltyService.checkPenalty(this.issueId).subscribe((response) => {
      console.log(response);
      console.log(response.penaltyAmount);
      console.log(response.penaltyPaidStatus);
      console.log(response.penaltyId);
      console.log(response.issueId);

      if (response.penaltyAmount > 0 && response.penaltyPaidStatus === false) {
        this.isPenaltyPayPrompt = true;
        this.isPenalty = true;
        this.penaltyAmount = response.penaltyAmount;
        this.penaltyId = response.penaltyId;
        this.issueId = response.issueId;
      }
      else if(response.penaltyPaidStatus === true ){
        this.isNoPenaltyAlert=true;
        this.isPenaltyPayPrompt = false;
        this.errorMsg="Penalty not found!"
        setTimeout(() => {
          this.isNoPenaltyAlert=false;
        }, 5000);
      }
    },err => {
      console.log(err.error)
      if (err.status ==404) {
        this.isNoPenaltyAlert=true;
        this.errorMsg = err.error
      }
    }
    )
  }
  onPayPenalty() {
    debugger
    let penalty :PayPenaltyVm={
      BookIssuedId : this.issueId,
      penaltyAmount : this.penaltyAmount
    }
    this.penaltyService.payPenalty(penalty).subscribe((res)=>{
      console.log(res);
    })
  }
}

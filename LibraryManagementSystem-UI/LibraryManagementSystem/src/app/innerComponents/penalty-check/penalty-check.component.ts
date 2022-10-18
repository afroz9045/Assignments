import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPenaltyDto } from 'src/app/Models/IPenaltyDto';
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
  isPenalty: boolean = false;
  penaltyAmount: any;
  penaltyId: any;
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

      if (response.penaltyAmount > 0 || response.penaltyPaidStatus === false) {
        this.isPenaltyPayPrompt = true;
        this.isPenalty = true;
        this.penaltyAmount = response.penaltyAmount;
        this.penaltyId = response.penaltyId;
        this.issueId = response.issueId;
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

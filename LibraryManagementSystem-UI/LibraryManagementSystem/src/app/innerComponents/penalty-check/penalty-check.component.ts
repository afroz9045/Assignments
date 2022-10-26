import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayPenaltyVm } from 'src/app/Models/PayPenaltyVm';
import { JwtDecodeService } from 'src/app/Services/jwt-decode.service';
import { PenaltyService } from 'src/app/Services/penalty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-penalty-check',
  templateUrl: './penalty-check.component.html',
  styleUrls: ['./penalty-check.component.css']
})
export class PenaltyCheckComponent implements OnInit {

  issueId: any;
  isPenaltyPayPrompt: boolean = false;
  isNoPenaltyAlert: boolean = false;
  isPenalty: boolean = false;
  penaltyAmount: any;
  penaltyId: any;
  errorMsg: string = "";
  constructor(private penaltyService: PenaltyService, private tokenDecodeService: JwtDecodeService, private router: Router) { }

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
      if (response.penaltyPaidStatus === true) {
        Swal.fire({
          title: 'Penalty status',
          text: `Penalty with issue id : ${this.issueId} is already paid!`,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    }, err => {
      Swal.fire({
        title: 'Penalty status',
        text: `${err.error}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    )
  }
  onPayPenalty() {
    debugger
    let penalty: PayPenaltyVm = {
      BookIssuedId: this.issueId,
      penaltyAmount: this.penaltyAmount
    }
    this.penaltyService.payPenalty(penalty).subscribe((res) => {
      console.log(res);
      if (res) {
        Swal.fire({
          title: 'Penalty Payment Status',
          text: `Penalty with issue id : ${this.issueId} deleted successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          this.router.navigateByUrl('/returnbook')
        })
      }
    })
  }
}

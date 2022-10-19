import { Component, OnInit } from '@angular/core';
import { PendingReturnsDto } from 'src/app/Models/PendingReturnsDto';
import { ReturnService } from 'src/app/Services/return.service';

@Component({
  selector: 'app-pending-returns',
  templateUrl: './pending-returns.component.html',
  styleUrls: ['./pending-returns.component.css']
})
export class PendingReturnsComponent implements OnInit {
  pendingReturnList: PendingReturnsDto[] = [];

  constructor(private returnService:ReturnService) {
    this.getPendingReturns();
   }

  ngOnInit(): void {
  }

  getPendingReturns(){
    this.returnService.getPendingReturns().subscribe((response)=>{
      const pendingReturns = JSON.stringify(response);

      this.pendingReturnList = JSON.parse(pendingReturns)
      console.log(this.pendingReturnList)
    })
  }
}

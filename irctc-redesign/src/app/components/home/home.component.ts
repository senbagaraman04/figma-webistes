import { Component, OnInit } from '@angular/core';


interface Quota {
  name: string;
  code: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  fromStation: any;
  toStation: any;

  date!: Date;

  minDate: Date = new Date();

  maxDate: Date = new Date();


  quotas: Quota[] = []
  selectedQuota: Quota | undefined;



  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 2;
    this.minDate = new Date();

    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);


    this.quotas = [
      { name: 'General Public', code: 'GP' },
      { name: 'Senior Citizen', code: 'SC' },
      { name: 'Tatkal', code: 'TKL' },
      { name: 'Premium Taktal', code: 'PQTKL' },
    ];
  }


  reverseDestinationClick() {
    const oldFrom = this.fromStation;
    this.fromStation = this.toStation;
    this.toStation = oldFrom;

  }

}

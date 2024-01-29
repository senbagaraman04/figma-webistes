import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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


   selectedQuota: Quota | undefined;
   trainSearchForm: FormGroup<TrainSearchFormGroup> = {} as FormGroup<TrainSearchFormGroup>;


   constructor(private fb: FormBuilder){}

  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 2;
    this.minDate = new Date();

    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);


    this.initializeForm();
    
  }


  reverseDestinationClick() {
    const oldFrom = this.fromStation;
    this.fromStation = this.toStation;
    this.toStation = oldFrom;

  }


  initializeForm() {  

    this.trainSearchForm = this.fb.group({
      fromStation: ['', Validators.required],
      toStation:['', Validators.required],
      travelDate: ['', Validators.required],
      travelQuota: ['', Validators.required]
    }) as FormGroup<TrainSearchFormGroup>;
  }

}

export interface TrainSearchFormGroup {
  
  fromStation: FormControl<string>;
  toStation: FormControl<string>;
  travelDate: FormControl<string>;
   travelQuota: FormControl<string>;
}
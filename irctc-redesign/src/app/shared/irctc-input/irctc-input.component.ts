import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-irctc-input',
  templateUrl: './irctc-input.component.html',
  styleUrls: ['./irctc-input.component.scss']
})
export class IrctcInputComponent implements OnInit {

  @Input() placeholder = '';
  @Input() ngClass = '';

  constructor() {

  }


  ngOnInit(): void {
    //
  }

}

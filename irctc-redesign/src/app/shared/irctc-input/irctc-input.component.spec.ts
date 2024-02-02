import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrctcInputComponent } from './irctc-input.component';

describe('IrctcInputComponent', () => {
  let component: IrctcInputComponent;
  let fixture: ComponentFixture<IrctcInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrctcInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrctcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

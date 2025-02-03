import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtestInputsComponent } from './loadtest-inputs.component';

describe('LoadtestInputsComponent', () => {
  let component: LoadtestInputsComponent;
  let fixture: ComponentFixture<LoadtestInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadtestInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadtestInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

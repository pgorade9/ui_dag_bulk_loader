import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtestOutputComponent } from './loadtest-output.component';

describe('LoadtestOutputComponent', () => {
  let component: LoadtestOutputComponent;
  let fixture: ComponentFixture<LoadtestOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadtestOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadtestOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

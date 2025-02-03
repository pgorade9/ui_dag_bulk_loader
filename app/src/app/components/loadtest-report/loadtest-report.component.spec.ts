import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtestReportComponent } from './loadtest-report.component';

describe('LoadtestReportComponent', () => {
  let component: LoadtestReportComponent;
  let fixture: ComponentFixture<LoadtestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadtestReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadtestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

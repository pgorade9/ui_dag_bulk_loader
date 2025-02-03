import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtestDetailsComponent } from './loadtest-details.component';

describe('LoadtestDetailsComponent', () => {
  let component: LoadtestDetailsComponent;
  let fixture: ComponentFixture<LoadtestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadtestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadtestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

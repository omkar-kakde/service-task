import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasengerDashboardComponent } from './pasenger-dashboard.component';

describe('PasengerDashboardComponent', () => {
  let component: PasengerDashboardComponent;
  let fixture: ComponentFixture<PasengerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasengerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasengerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

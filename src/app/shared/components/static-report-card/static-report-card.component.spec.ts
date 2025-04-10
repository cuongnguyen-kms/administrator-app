import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticReportCardComponent } from './static-report-card.component';

describe('StaticReportCardComponent', () => {
  let component: StaticReportCardComponent;
  let fixture: ComponentFixture<StaticReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticReportCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

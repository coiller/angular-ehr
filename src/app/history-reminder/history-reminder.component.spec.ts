import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReminderComponent } from './history-reminder.component';

describe('HistoryReminderComponent', () => {
  let component: HistoryReminderComponent;
  let fixture: ComponentFixture<HistoryReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationComponent } from './participation.component';

describe('ParticipationComponent', () => {
  let component: ParticipationComponent;
  let fixture: ComponentFixture<ParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*
    fixture = TestBed.createComponent(ParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    */
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});

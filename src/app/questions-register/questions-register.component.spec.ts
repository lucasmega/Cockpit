import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsRegisterComponent } from './questions-register.component';

describe('QuestionsRegisterComponent', () => {
  let component: QuestionsRegisterComponent;
  let fixture: ComponentFixture<QuestionsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

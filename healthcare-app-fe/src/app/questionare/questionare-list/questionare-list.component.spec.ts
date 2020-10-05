import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionareListComponent } from './questionare-list.component';

describe('QuestionareListComponent', () => {
  let component: QuestionareListComponent;
  let fixture: ComponentFixture<QuestionareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

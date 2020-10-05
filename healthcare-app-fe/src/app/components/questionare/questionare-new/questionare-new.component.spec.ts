import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionareNewComponent } from './questionare-new.component';

describe('QuestionareNewComponent', () => {
  let component: QuestionareNewComponent;
  let fixture: ComponentFixture<QuestionareNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionareNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionareNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

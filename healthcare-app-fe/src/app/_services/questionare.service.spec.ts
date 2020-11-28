import { TestBed } from '@angular/core/testing';

import { QuestionareService } from './questionare.service';

describe('QuestionareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionareService = TestBed.get(QuestionareService);
    expect(service).toBeTruthy();
  });
});

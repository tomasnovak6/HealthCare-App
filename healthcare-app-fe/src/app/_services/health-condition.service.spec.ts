import { TestBed } from '@angular/core/testing';

import { HealthConditionService } from './health-condition.service';

describe('HealthConditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthConditionService = TestBed.get(HealthConditionService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LogincredsService } from './logincreds.service';

describe('LogincredsService', () => {
  let service: LogincredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

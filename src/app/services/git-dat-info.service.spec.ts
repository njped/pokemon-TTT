/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitDatInfoService } from './git-dat-info.service';

describe('Service: GitDatInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitDatInfoService]
    });
  });

  it('should ...', inject([GitDatInfoService], (service: GitDatInfoService) => {
    expect(service).toBeTruthy();
  }));
});

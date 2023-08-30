/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CacheDatInfoService } from './cacheDatInfo.service';

describe('Service: CacheDatInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheDatInfoService]
    });
  });

  it('should ...', inject([CacheDatInfoService], (service: CacheDatInfoService) => {
    expect(service).toBeTruthy();
  }));
});

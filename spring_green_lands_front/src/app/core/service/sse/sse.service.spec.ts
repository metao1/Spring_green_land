import {inject, TestBed} from '@angular/core/testing';

import {SseService} from './sse.service';

describe('SseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SseService]
    });
  });

  it('should ...', inject([SseService], (service: SseService) => {
    expect(service).toBeTruthy();
  }));
});

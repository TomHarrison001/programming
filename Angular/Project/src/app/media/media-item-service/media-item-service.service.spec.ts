import { TestBed } from '@angular/core/testing';

import { MediaItemService } from './media-item-service.service';

describe('MediaItemServiceService', () => {
  let service: MediaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

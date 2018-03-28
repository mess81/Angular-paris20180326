import { TestBed, inject } from '@angular/core/testing';

import { EditRevolveService } from './edit-revolve.service';

describe('EditRevolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditRevolveService]
    });
  });

  it('should be created', inject([EditRevolveService], (service: EditRevolveService) => {
    expect(service).toBeTruthy();
  }));
});

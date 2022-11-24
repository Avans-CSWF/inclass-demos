import { TestBed } from '@angular/core/testing';

import { DummyModelRepository } from './model-repository.service';

describe('ModelRepositoryService', () => {
  let service: DummyModelRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyModelRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

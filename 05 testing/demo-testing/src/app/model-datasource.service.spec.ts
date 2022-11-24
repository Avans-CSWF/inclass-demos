import { TestBed } from '@angular/core/testing';

import { DummyModelDatasource } from './model-datasource.service';

describe('ModelDatasourceService', () => {
  let service: DummyModelDatasource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyModelDatasource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

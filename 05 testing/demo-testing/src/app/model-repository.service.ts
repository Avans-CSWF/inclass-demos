import { Injectable } from '@angular/core';
import { DummyModel } from './dummy-model';
import { DummyModelDatasource } from './model-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DummyModelRepository {

  constructor(private datasource: DummyModelDatasource) { }

  getAll(): DummyModel[] {
    return this.datasource.getEntities();
  }
  get(id: number): DummyModel | undefined {
    return this.datasource.getEntity(id);
  }
}

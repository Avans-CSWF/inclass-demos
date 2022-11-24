import { Injectable } from '@angular/core';
import { DummyModel } from './dummy-model';

@Injectable({
  providedIn: 'root'
})
export class DummyModelDatasource {
  entities: DummyModel[];
  constructor() { 
    this.entities = [
      new DummyModel(1, "a", "Soccer"), 
      new DummyModel(2, "b", "Chess"), 
      new DummyModel(3, "c", "Soccer")
    ];
  }

  getEntities(): DummyModel[] {
    return this.entities;
  }

  getEntity(id: number): DummyModel | undefined {
    return this.entities.find(e => e.id == id);
  }
}

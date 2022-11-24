import { DummyModel } from './dummy-model';

describe('DummyModel', () => {
  it('should create an instance', () => {
    expect(new DummyModel(0, "test", "testcat")).toBeTruthy();
  });
});

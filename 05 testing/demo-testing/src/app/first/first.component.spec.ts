import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DummyModel } from '../dummy-model';
import { DummyModelRepository } from '../model-repository.service';

import { FirstComponent } from './first.component';

@Component({
  template: `<first [model]="model"></first>`,
})
class TestComponent {
  constructor(public model: DummyModelRepository) {}

  @ViewChild(FirstComponent)
  firstComponent!: FirstComponent;
}

let testEntities: DummyModel[] = [
  new DummyModel(1, 'test1', 'Soccer'),
  new DummyModel(2, 'test2', 'Chess'),
  new DummyModel(3, 'test3', 'Soccer'),
];

describe('FirstComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: FirstComponent;
  let debugElement: DebugElement;
  let spanElement: HTMLSpanElement;
  let divElement: HTMLDivElement;

  let mockRepository = {
    getAll: function () {
      return testEntities;
    },
  };

  let repositorySpy = jasmine.createSpyObj('DummyModelRepository', ['get', 'getAll']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FirstComponent],
      providers: [{ provide: DummyModelRepository, useValue: mockRepository }],
      //providers: [{ provide: DummyModelRepository, useValue: repositorySpy }],
    });
    
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance.firstComponent;
      debugElement = fixture.debugElement.query(By.directive(FirstComponent));
      spanElement = debugElement.query(By.css('span')).nativeElement;
      //bindingElement = debugElement.query(By.css("span")).nativeElement;
      divElement = debugElement.query(By.css('div')).nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is defined', () => {
    expect(component).toBeDefined();
  });

  it('filters categories', () => {
    component.category = 'Chess';
    fixture.detectChanges();
    expect(component.getEntities().length).toBe(1);
    expect(spanElement.textContent).toContain('1');
    component.category = 'Soccer';
    fixture.detectChanges();
    expect(component.getEntities().length).toBe(2);
    expect(spanElement.textContent).toContain('2');
    component.category = 'Running';
    fixture.detectChanges();
    expect(component.getEntities().length).toBe(0);
    expect(spanElement.textContent).toContain('0');
  });

  it('handles mouse events', () => {
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains('bg-success')).toBeFalsy();
    debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
    fixture.detectChanges();
    expect(component.highlighted).toBeTruthy();
    expect(divElement.classList.contains('bg-success')).toBeTruthy();
    debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
    fixture.detectChanges();
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains('bg-success')).toBeFalsy();
  });

  it('implements output property', () => {
    let highlighted: boolean = false;
    component.change.subscribe((value) => (highlighted = value));
    debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
    expect(highlighted).toBeTruthy();
    debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
    expect(highlighted).toBeFalsy();
  });

  it('receives the model through an input property', () => {
    repositorySpy.getAll.and.returnValue(testEntities);
    component.category = 'Chess';
    fixture.detectChanges();
    let products = mockRepository
      .getAll()
      .filter((p) => p.category == component.category);
    let componentProducts = component.getEntities();
    for (let i = 0; i < componentProducts.length; i++) {
      expect(componentProducts[i]).toEqual(products[i]);
    }
    expect(
      debugElement.query(By.css('span')).nativeElement.textContent
    ).toContain(products.length);
  });
});

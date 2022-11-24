import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DummyModel } from './dummy-model';
import { FirstComponent } from './first/first.component';
import { DummyModelRepository } from './model-repository.service';

describe('AppComponent', () => {
  let mockRepository = {
    getAll: function () {
      return [
        new DummyModel(1, 'test1', 'Soccer'),
        new DummyModel(2, 'test2', 'Chess'),
        new DummyModel(3, 'test3', 'Soccer'),
      ];
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FirstComponent,
      ],
      providers: [{ provide: DummyModelRepository, useValue: mockRepository }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('demo-testing');
  });
});

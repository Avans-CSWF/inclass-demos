import { Component } from '@angular/core';
import { DummyModelRepository } from './model-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-testing';

  constructor(public repo: DummyModelRepository) {}
}

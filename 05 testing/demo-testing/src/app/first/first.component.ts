import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DummyModel } from '../dummy-model';
import { DummyModelRepository } from '../model-repository.service';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
})
export class FirstComponent implements OnInit {

  constructor(private repo: DummyModelRepository) { }

  ngOnInit(): void {
  }

  category: string = 'Soccer';
  highlighted: boolean = false;
  @Input("model")
  model?: DummyModelRepository;
  
  @Output("highlight")
  change = new EventEmitter<boolean>;

  getEntities(): DummyModel[] {
    //return this.model == null ? [] : this.model.getAll().filter(e => e.category == this.category);
    return this.repo
      .getAll()
      .filter((p) => p.category == this.category);
  }

  @HostListener("mouseenter", ["$event.type"])
  @HostListener("mouseleave", ["$event.type"])
  setHighlight(type:string) {
    this.highlighted = type == "mouseenter";
    this.change.emit(this.highlighted);
  }

}

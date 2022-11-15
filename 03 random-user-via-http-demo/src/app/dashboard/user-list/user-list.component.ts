import { Component, OnInit } from '@angular/core';
import { RandomPerson } from 'src/app/models/random-person';
import { RandomPersonService } from 'src/app/models/random-person.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  persons: RandomPerson[] = [
    { name: { title: 'dhr', first: 'voor', last: 'achter'},
  gender: 'iets',
  }];
  constructor(public personService: RandomPersonService) { }

  ngOnInit(): void {
    // this.personService.listZonderMap().subscribe(result => {
    //   console.log('got something: ' + JSON.stringify(result.results));
    //   this.persons = result.results;
    // });

    this.personService.list()
      .subscribe(result => {
        console.log(`got result: ${JSON.stringify(result)}`)
        this.persons = result;
      });
    
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RandomPerson, RandomPersonResponse } from './random-person';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class RandomPersonService {
  // Misschien beter om de http aanroepen in een repository te zetten en de repo hier te injecteren -->
  constructor(readonly http: HttpClient) {}

  public listZonderMap(options?: any): Observable<RandomPersonResponse> {
    const endpoint = environment.randomPersonEndpoint;
    console.log(`list: using ${endpoint}`);

    return this.http
      .get<RandomPersonResponse>(endpoint, { ...options, ...httpOptions })
      .pipe(
        tap(response => console.log(response)),
        catchError(this.handleError)
      );
  }

  public list(): Observable<RandomPerson[]> {
    const endpoint = environment.randomPersonEndpoint;
    console.log(`list: using ${endpoint}`);

    return this.http
      .get<RandomPersonResponse>(endpoint, this.getOptions())
      .pipe(
        tap(response => console.log(`Raw response: ${JSON.stringify(response)}\r\n-------------\r\n`)),
        // extract collectie -->
        map((response: any) => response.results as RandomPerson[]),
        tap(console.log),
        // transformeer resultaat (hier niet nodig, wel als model anders is dan response schema) -->
        map((response) => 
          response.map((user: any) => {
            return {
              gender: user.gender,
              name: {
                title: user.name.title ?? '<onbekend>',
                first: user.name.first ?? '<onbekend>',
                last: user.name.last   ?? '<onbekend>',
              },
              
            } as RandomPerson;
          })
        ),
        tap(console.log),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError(() => error);
  }

  private getOptions() {
    
    return {
      
      headers: new HttpHeaders({
        "Authorization": `Bearer<hettoken>`,
      }),
    };
  }
}
// TODO: combpine options with headers in 'getOptions()' -->
const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

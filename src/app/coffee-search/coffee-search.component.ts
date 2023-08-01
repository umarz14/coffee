import { Component, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coffee-search',
  templateUrl: './coffee-search.component.html',
  styleUrls: ['./coffee-search.component.css']
})
export class CoffeeSearchComponent {

  responseData: any;
  errorMessage: any;

  constructor(private http: HttpClient) {}
  
  

  getTodos() {

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.responseData = data;
        console.log(data)
      },
      error: (error) => {
        //this.errorMessage = error.message;
        console.log(error);
      },
      complete: () => {
        console.log('Request Complete');
      }
    });
  }

}
  
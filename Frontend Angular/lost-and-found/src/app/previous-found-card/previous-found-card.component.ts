import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-previous-found-card',
  templateUrl: './previous-found-card.component.html',
  styleUrls: ['./previous-found-card.component.css']
})
export class PreviousFoundCardComponent {

  public foundcardList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCardList();
  }

  getCardList() {


    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {


      this.foundcardList = response;
      console.log(this.foundcardList)
    })

  }


}


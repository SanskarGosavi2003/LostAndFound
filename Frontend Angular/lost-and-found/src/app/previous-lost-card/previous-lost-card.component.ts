import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-previous-lost-card',
  templateUrl: './previous-lost-card.component.html',
  styleUrls: ['./previous-lost-card.component.css']
})
export class PreviousLostCardComponent {

  public lostcardList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCardList();
  }

  getCardList() {


    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {


      this.lostcardList = response;
      console.log(this.lostcardList)
    })

  }


}

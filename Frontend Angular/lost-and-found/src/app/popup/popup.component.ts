import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public cardList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCardList();
  }




  getCardList() {


    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {


      this.cardList = response;
    });

  }

}

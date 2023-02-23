

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cardList: any;
  public postJsonValue: any;

  constructor(private http: HttpClient, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getCardList();
  }

  openDialog() {
    this.dialogRef.open(PopupComponent, { width: '23%', height: 'fit-content', enterAnimationDuration: '1000ms', exitAnimationDuration: '1000ms', panelClass: 'my-dialog' })

  }



  getCardList() {


    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {


      this.cardList = response;
    });

  }

}





import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { animate, state, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        animate(5000)
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  public cardList: any;
  public postJsonValue: any;

  constructor(private http: HttpClient, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getCardList();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%'; // set the width
    dialogConfig.height = '505'; // set the height
    dialogConfig.maxWidth = '90%'; // set the maximum width to 90% of the screen width
    dialogConfig.maxHeight = '90%'; // set the maximum height to 90% of the screen height

    this.dialogRef.open(PopupComponent, dialogConfig)

  }



  getCardList() {


    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {


      this.cardList = response;
    });

  }
  /*{  enterAnimationDuration: '1000ms', exitAnimationDuration: '1000ms', panelClass: 'my-dialog' }*/
}



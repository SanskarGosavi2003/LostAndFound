import { RequestsearchService } from './../requestsearch.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestssearch',
  templateUrl: './requestssearch.component.html',
  styleUrls: ['./requestssearch.component.css']
})
export class RequestssearchComponent implements OnInit {

  
myForm:FormGroup;

constructor(services: RequestsearchService) { 
  this.myForm=services.sp();
  this.myForm.valueChanges.subscribe(console.log);
}

selectedFile=null;

onFileSelected(event){
  console.log(event);
}
ngOnInit() {
  
  }


  onUpload(){}

}

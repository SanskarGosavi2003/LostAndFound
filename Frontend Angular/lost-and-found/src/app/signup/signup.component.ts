import { SignupService } from './../signup.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;

  constructor(services: SignupService) { 
    this.myForm=services.sp();
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit() {
    
    }

}

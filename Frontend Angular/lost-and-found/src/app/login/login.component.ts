import { LoginService } from './../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup;

  constructor(services: LoginService) { 
    this.myForm=services.sp();
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit() {
    
    }
    
  }



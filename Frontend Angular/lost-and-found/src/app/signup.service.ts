import { FormBuilder, Validators, } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private fb: FormBuilder) { }
  sp()
  {
    return this.fb.group({name:'',email: '', password: '',phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  , });
  
}
}

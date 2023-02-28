import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder) { }
  sp()
  {
    return this.fb.group({email: '', password: '', });
  
}
}
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsearchService {

  constructor(private fb: FormBuilder) { }
  sp()
  {
    return this.fb.group({title: '', description: '',location:'',dnt:'',cat:'' });
  
}
}

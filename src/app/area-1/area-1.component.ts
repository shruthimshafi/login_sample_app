import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-area-1',
  templateUrl: './area-1.component.html',
  styleUrls: ['./area-1.component.css']
})
export class Area1Component implements OnInit {

  NewRegistrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.NewRegistrationForm = this.fb.group({
      email: ['',  Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  onSubmit(NewRegistrationForm) {
    if (this.NewRegistrationForm.valid) {
      console.log('Form Submitted!' );
    }
  }

}

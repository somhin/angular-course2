import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  form1: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      phoneNum: '',
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cf__password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    console.log(JSON.stringify(this.form1.value));
  }
}

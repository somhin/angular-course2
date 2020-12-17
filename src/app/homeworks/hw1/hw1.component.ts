import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hw1',
  templateUrl: './hw1.component.html',
  styleUrls: ['./hw1.component.scss'],
})
export class Hw1Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      comment: '',
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    console.log(JSON.stringify(this.form.value));
  }
}

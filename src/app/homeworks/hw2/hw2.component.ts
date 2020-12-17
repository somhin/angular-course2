import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.scss'],
})
export class Hw2Component implements OnInit {
  exRates: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.form = this.fb.group({
      input1: '',
      input2: '',
      currency1: ['', Validators.required],
      currency2: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  convert() {}
}

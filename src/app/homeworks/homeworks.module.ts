import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Hw1Component } from '../homeworks/hw1/hw1.component';
import { Hw2Component } from '../homeworks/hw2/hw2.component';

@NgModule({
  declarations: [Hw1Component, Hw2Component],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [Hw1Component, Hw2Component],
})
export class HomeworksModule {}

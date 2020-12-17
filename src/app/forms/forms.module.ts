import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyformComponent } from '../forms/myform/myform.component';

@NgModule({
  declarations: [MyformComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MyformComponent],
})
export class FormsComponentModule {}

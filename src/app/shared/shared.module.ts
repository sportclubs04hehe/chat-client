import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ValidationMessageComponent } from './errors/validation-message/validation-message.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class SharedModule { }

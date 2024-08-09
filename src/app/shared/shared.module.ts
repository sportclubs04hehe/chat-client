import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ValidationMessageComponent } from './errors/validation-message/validation-message.component';
import { RouterModule } from '@angular/router';
import { AutoFocusDirective } from './auto-focus.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './modals/notification/notification.component';




@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessageComponent,
    AutoFocusDirective,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
    AutoFocusDirective,
    ReactiveFormsModule,
    HttpClientModule,
    ValidationMessageComponent,
  ]
})
export class SharedModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage: string[] = [];

  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    // private sharedService: SharedService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      lastName: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      email: ['',[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
    })
  }

  register() {
    this.submitted = true;
    this.errorMessage = [];

    if(this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          // this.sharedService.showNotification(true, response.value.title, response.value.message);
          this.router.navigateByUrl('/account/login');
        },
        error: (error) => {
          if(error.error.errors) {
            this.errorMessage = error.error.errors;
          } 
          else {
            this.errorMessage.push(error.error);
          }
        },
        complete: () => {
          console.log('đăng ký thành công');
        }
      });
    }
  }


}

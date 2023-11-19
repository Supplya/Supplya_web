import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  registerForm: FormGroup;
  showPassword: boolean = false;

  constructor( private fb: FormBuilder,  private route: Router) {
    this.registerForm = fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['user'],
      createdAt: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
 
    })

  }
  ngOnInit(): void {
    
  }

  register(){

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

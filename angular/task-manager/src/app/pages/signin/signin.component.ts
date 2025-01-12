import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private authenticated: AuthService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      console.log(email,password)
      // Check if the credentials match
      if (email === 'kailash514910@gmail.com' && password === 'admin123') {
        console.log('Login successful. Navigating to home...');
        // this.authenticated.authenticated = true;
        localStorage.setItem("isLoggedIn", "true")
        console.log(localStorage.getItem("isLoggedIn"))
        this.router.navigate(['/tasks']); // Navigate to the home route
      } else {
        console.log('Invalid credentials. Please try again.');
        // alert('Invalid credentials. Please try again.');
      }
    } else {
      console.log('Form is invalid.');
      // alert('Please fill in all required fields correctly.');
    }
  }
}

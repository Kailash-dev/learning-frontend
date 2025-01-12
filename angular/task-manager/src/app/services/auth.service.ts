import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   authenticated: boolean = false; // Renamed variable to avoid conflict

  constructor() {}

  // Method to check if the user is authenticated
  isUserAuthenticated(): boolean {  // Renamed function to avoid conflict
    const status: any = localStorage.getItem("isLoggedIn");
    console.log(status)
    this.authenticated = status
    return this.authenticated; // Using the renamed variable
  }

  // Method to log the user in
  login() {
    this.authenticated = true; // Renamed variable
  }

  // Method to log the user out
  logout() {
    this.authenticated = false; // Renamed variable
  }
}

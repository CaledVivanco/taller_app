import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  handleLogin() {
    if (this.email && this.password) {
      
      console.log('Login con:', this.email, this.password);

    
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingrese email y contraseña');
    }
  }
}

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
      // Aquí después conectamos Firebase
      console.log('Login con:', this.email, this.password);

      // Por ahora redirige al home
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingrese email y contraseña');
    }
  }
}

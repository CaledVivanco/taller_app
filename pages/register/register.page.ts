import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  handleRegister() {
    if (this.email && this.password) {
      console.log('Registro con:', this.email, this.password);

      // Por ahora redirige al login
      this.router.navigate(['/login']);
    } else {
      alert('Complete todos los campos');
    }
  }
}

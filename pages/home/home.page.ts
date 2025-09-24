import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  wallpapers = [
    { name: 'Wallpaper 1', url: 'https://placekitten.com/300/200', date: new Date() },
    { name: 'Wallpaper 2', url: 'https://placekitten.com/400/300', date: new Date() }
  ];

  constructor(private router: Router) {}

  addWallpaper() {
    alert('Aquí iría la lógica para subir un wallpaper a Supabase 📤');
  }

  logout() {
    /
    this.router.navigate(['/login']);
  }
}

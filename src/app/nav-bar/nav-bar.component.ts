import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  closeMenu(): void {
    const toggle = document.getElementById('nav-toggle') as HTMLInputElement;
    if (toggle) {
      toggle.checked = false;
    }
  }
}

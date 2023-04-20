import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  location: string

  ngOnInit() {
    this.location = this.getLocationPathName();
  }

  getLocationPathName() {
    if (window.location.pathname === '/') {
      return 'Home';
    } else {
      return window.location.pathname.split('/')[1]
    }
  }
}

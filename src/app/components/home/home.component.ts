import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  location: string
  menuIsOpen: boolean = false

  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.location = this.getLocationPathName();
      }
    })
  }

  getLocationPathName(): string {
    if (window.location.pathname === '/') {
      return 'Home';
    } else {
      return window.location.pathname.split('/')[1]
    }
  }
}

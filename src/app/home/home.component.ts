import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  location: string

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.location = this.getLocationPathName();
    this.cd.detectChanges();
  }

  getLocationPathName() {
    if (window.location.pathname === '/') {
      return 'Home';
    } else {
      return window.location.pathname.split('/')[1]
    }
  }
}

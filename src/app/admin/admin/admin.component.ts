import { Component, OnInit } from '@angular/core';
import { routes } from './sidenav';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  routes = routes;
  activated: string = 'dashboard';

  constructor() {}

  ngOnInit() {}

  toggleWidth(id: string) {
    const element = document.getElementById(id);

    if (element.classList.contains('sidebar-wrapper')) {
      element.classList.remove('sidebar-wrapper');
      element.classList.add('sidebar-hidden');
      return;
    }
    element.classList.remove('sidebar-hidden');
    element.classList.add('sidebar-wrapper');
  }

  toggleDisplay(id: string) {
    const display = document.getElementById(id).style.display;
    if (display === 'block') {
      document.getElementById(id).style.display = 'none';
      return;
    }
    document.getElementById(id).style.display = 'block';
  }

  setActivated(link: string) {
    document.getElementById(this.activated).classList.remove('activated');
    document.getElementById(link).classList.add('activated');
    this.activated = link;
  }
}

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  constructor() {}

  ngOnDestroy(): void {
    localStorage.removeItem('userPressEnter');
  }
}

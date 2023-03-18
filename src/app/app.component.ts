import { compileNgModule } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'marvel';
  enterPressed = false;
  userData!: any;
  todayDate = new Date();

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userPressEnter')) {
      const localDataValue = localStorage.getItem('userPressEnter');

      console.log(this.todayDate.toDateString());

      if (localDataValue != this.todayDate.toDateString()) {
        localStorage.removeItem('userPressEnter');
      }
    }

    this.enterPressed =
      localStorage.getItem('userPressEnter') === this.todayDate.toDateString();
  }

  onClickNavigate(): void {
    localStorage.setItem('userPressEnter', this.todayDate.toDateString());
    this.enterPressed = true;
    //this.router.navigate(['']);
  }
}

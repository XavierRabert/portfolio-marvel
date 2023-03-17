import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel';
  enterPressed = true;

  constructor(private router: Router) {}
  onClickNavigate(): void {
    this.enterPressed = true;
    console.log(this.enterPressed);
    this.router.navigate(['home']);
  }
}

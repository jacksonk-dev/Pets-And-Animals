import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { user } from './services/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Pets-And-Animals';
  user: user = {};

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPets();
    this.user = this.authService.user;
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => {
        this.user = this.authService.user;
      })
  }
}

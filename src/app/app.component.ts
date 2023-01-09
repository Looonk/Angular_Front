import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(
    private _router: Router,
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
    this._router.navigateByUrl("/login");
  }

}


import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage: any;
  first: any;
  isLogin: any;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
   this.isUserLogin();
  }

  onSubmit(form: NgForm) {
    this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      if (res) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigateByUrl("");
      }
    },
      (error: any) => {
        console.log(error);
        if (error.status == 404) {
          Swal.fire('Login erroneo', 'Usuario no encontrado', 'error');
        }
        if (error.status == 406) {
          Swal.fire('Login erroneo', 'Password incorrecta', 'error');
        }
      }
    )

  }


  /*
  isUserLogin(first:boolean): boolean {
    console.log(first);
    if (this._auth.getUserDetails() != null && !first) {
      this.isLogin = true;
      this.logout();
      return false;
    }
    return true;
  }
*/

isUserLogin() {
  if (this._auth.getUserDetails() != null) {   
      this.isLogin = true;
  }
}

  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
  }


  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }
}

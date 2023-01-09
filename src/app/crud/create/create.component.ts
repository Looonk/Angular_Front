import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  isLogin: boolean = false
  errorMessage: any

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.roles);
    this._api.postTypeRequest('users', form.value).subscribe((res: any) => {
      if (res) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['crud/manage']);
        Swal.fire('Creacion de usuario', 'Completada', 'success');
      }},
    (error: any) => {
      if (error.status == 409) {
        Swal.fire('Creacion de usuario fallida', 'Ya existe un usuario registrado con el email solicitado', 'error');
      }
    }
    );
  }
}



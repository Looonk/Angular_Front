import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  userForm : any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {  
    form.controls["roles"].setValue("User");
    this.validate(form);
    console.log("works");

    this._api.postTypeRequest('users', form.value).subscribe((res: any) => {
      if (res) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['login']);
      }
    },
      (error: any) => {
        if (error.status == 409) {
          Swal.fire('Creacion de usuario fallida', 'Ya existe un usuario registrado con el email solicitado', 'error');
        }
        if (error.status == 406) {
          Swal.fire('Creacion de usuario fallida', 'El nombre de usuario seleccionado ya esta en uso', 'error');
        }
      });

  }

  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  validate(form:any){

    this.userForm = new FormGroup({
      nombre: new FormControl(form.value.nombre, [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl(form.value.apellido, [Validators.required, Validators.minLength(5)]),
      username: new FormControl(form.value.username, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(form.value.email, [Validators.required, Validators.minLength(8), Validators.email]),
      rol: new FormControl(form.value.roles, [Validators.required]),
      password: new FormControl(form.value.password, [Validators.required, Validators.minLength(8)]),
    })
    

  }

}

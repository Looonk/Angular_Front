import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {

  id = this.route.snapshot.params["id"];
  nombre = "";
  apellido = "";
  email = "";
  roles = "";
  password = "";


  constructor(
    private _api: ApiService,
    private _router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._api.getTypeRequest('users/' + this.id).subscribe((res: any) => {
      this.nombre = res.nombre;
      this.apellido = res.apellido;
      this.email = res.email;
      this.roles = res.roles;
      console.log('rol inicial');
      console.log(this.roles);
    });
  }
  onSubmit(form: NgForm) {
    form.value.nombre = form.value.nombre == "" ? this.nombre : form.value.nombre;
    form.value.apellido = form.value.apellido == "" ? this.apellido : form.value.apellido;
    form.value.email = form.value.email == "" ? this.email : form.value.email;
    form.value.roles = form.value.roles == "" ? this.roles : form.value.roles;
    console.log('rol asignado');
    console.log(form.value.roles);
    this._api.putTypeRequest('users/' + this.id, form.value).subscribe((res: any) => {
      if (res) {
        Swal.fire('Modificacion', 'Completada', 'success');
        this._router.navigate(['crud/manage']);
      } else {
        console.log(res.msg);
      }
    });

  }

}

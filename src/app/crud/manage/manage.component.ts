import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../entity/user';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-users',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {

  users?: User[];

  constructor(
    private _api: ApiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._api.getTypeRequest('users').subscribe((res: any) => {
      if (res) {
        this.users = res;
      } else {
        console.log(res.msg);
      }
    });
  }
  update(id: any) {
    id = String(id);
    this._router.navigateByUrl(`crud/update/${id}`);
  }

  delete(id: any) {
    id = String(id);
    this._api.deleteTypeRequest('users/' + id).subscribe((res: any) => {
      this.reloadCurrentRoute();
      Swal.fire('Eliminacion de usuario', 'Completada', 'success');
    });

  }
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }
}

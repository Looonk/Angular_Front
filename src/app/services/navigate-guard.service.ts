import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigateService implements CanActivate{

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let data = JSON.parse(this._authService.getUserDetails()!);
    if (data.roles==="Admin"){
      return true;
    }
    else {
      Swal.fire('Acceso Denegado', 'Ud no tiene permisos suficientes para visualizar esta pagina', 'error');
      return false;
    }
    // you can save redirect url so after authing we can move them back to the page they requested
    
  }

}

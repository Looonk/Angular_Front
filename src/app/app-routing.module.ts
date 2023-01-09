import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './crud/create/create.component';
import { CrudComponent } from './crud/crud.component';
import { ManageComponent } from './crud/manage/manage.component';
import { UpdateComponent } from './crud/update/update.component';
import { ViewComponent } from './HIS_connector/view/view.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NavigateService } from './services/navigate-guard.service';
import { LobbyComponent } from './HIS_connector/lobby/lobby.component';
import { HISComponent } from './HIS_connector/his.component';


const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'crud', canActivate: [AuthGuardService, NavigateService],  component: CrudComponent},
  {path: 'crud/create', canActivate: [AuthGuardService, NavigateService], component: CreateComponent},
  {path: 'crud/manage', canActivate: [AuthGuardService, NavigateService], component: ManageComponent},
  {path: 'crud/update/:id', canActivate: [AuthGuardService, NavigateService], component: UpdateComponent},
  {path: 'his', canActivate: [AuthGuardService], component: HISComponent},
  {path: 'his/search', canActivate: [AuthGuardService], component: LobbyComponent},
  {path: 'his/view', canActivate: [AuthGuardService], component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageComponent } from './crud/manage/manage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpdateComponent } from './crud/update/update.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './crud/create/create.component';
import { CrudComponent } from './crud/crud.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewComponent } from './HIS_connector/view/view.component';
import { LobbyComponent } from './HIS_connector/lobby/lobby.component';
import { HISComponent } from './HIS_connector/his.component'



@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    CrudComponent,
    ViewComponent,
    LobbyComponent,
    HISComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

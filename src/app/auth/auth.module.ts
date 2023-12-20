import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthSigninComponent } from './auth-signin-component/auth-signin.component';
import { CommonsModule } from '../commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    AuthSigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AuthModule { }

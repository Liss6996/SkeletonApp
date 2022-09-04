import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

// Importamos el modulo
import { ComponentsModule } from 'src/app/components/components.module';
import { BaseModule } from 'src/app/components/base.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    CommonModule,
    ComponentsModule,
    BaseModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

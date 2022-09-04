import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule // Para quitar el error de que no reconoce las etiquetas de ionic
  ],exports:[FooterComponent, HeaderComponent]
})
export class BaseModule { }

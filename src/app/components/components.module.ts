import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el componentes
import { BotonComponent } from './boton/boton.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BotonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  // Permitimos el uso del componente
  exports: [
    BotonComponent
  ]

})
export class ComponentsModule { }

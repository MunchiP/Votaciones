import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Publico/principal/principal.component';
import { VerificacionComponent } from './Publico/verificacion/verificacion.component';
import { InfoEleccionesComponent } from './Publico/info-elecciones/info-elecciones.component';
import { EleccionComponent } from './Publico/eleccion/eleccion.component';
import { CertificadoComponent } from './Publico/certificado/certificado.component';

const routes: Routes = [
  {path: '' , component: PrincipalComponent },

  //1 Log in
  {path: 'Verificacion' , component: VerificacionComponent },

  //2 Informacion de las Elecciones
  {path: 'Informacion' , component: InfoEleccionesComponent},
  
  //3 Elecciones
  {path: 'Elecciones' , component: EleccionComponent},

  //4 Certificado
  {path: 'Certificado' , component: CertificadoComponent},


  // Redireccion
  {path: '**' , redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

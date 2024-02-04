import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Publico/menu/menu.component';
import { PrincipalComponent } from './Publico/principal/principal.component';
import { InfoEleccionesComponent } from './Publico/info-elecciones/info-elecciones.component';
import { EleccionComponent } from './Publico/eleccion/eleccion.component';
import { CertificadoComponent } from './Publico/certificado/certificado.component';
import { YavotoComponent } from './Publico/yavoto/yavoto.component';
import { VerificacionComponent } from './Publico/verificacion/verificacion.component';
import { AdministradorComponent } from './Privado/administrador/administrador.component';
import { VerResultadosComponent } from './Privado/ver-resultados/ver-resultados.component';
import { CreaComponent } from './Privado/Eleccion/crea/crea.component';
import { ActualizaComponent } from './Privado/Eleccion/actualiza/actualiza.component';
import { BorrarComponent } from './Privado/Eleccion/borrar/borrar.component';
import { EliminarComponent } from './Privado/Cargo/eliminar/eliminar.component';
import { CrearComponent } from './Privado/Perfiles/crear/crear.component';
import { BotonesComponent } from './Servicio/botones/botones.component';
import { FooterComponent } from './Publico/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { CabeceraComponent } from './Publico/cabecera/cabecera.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    InfoEleccionesComponent,
    EleccionComponent,
    CertificadoComponent,
    YavotoComponent,
    VerificacionComponent,
    AdministradorComponent,
    VerResultadosComponent,
    CreaComponent,
    ActualizaComponent,
    BorrarComponent,
    EliminarComponent,
    CrearComponent,
    BotonesComponent,
    FooterComponent,
    CabeceraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

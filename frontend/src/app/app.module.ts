import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import {HttpClientModule} from '@angular/common/http'
//importando a biblioteca forms que possibilita realizar as rotinas com os formulários
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModificarComponent,
    CadastrarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

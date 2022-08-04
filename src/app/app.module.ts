import { FormsModule } from '@angular/forms';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
    BarraPesquisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CarrinhoModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

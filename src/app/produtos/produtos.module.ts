import { FormsModule } from '@angular/forms';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [ProdutosComponent, DetalhesProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule, FormsModule],
})
export class ProdutosModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    CadastarProdutoComponent,
    EditarProdutoComponent,
    DeletarProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

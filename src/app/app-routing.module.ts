import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';

const routes : Routes = [
  {path: 'produtos', component: ListarProdutoComponent},
  {path: 'produtos/cadastrar', component: CadastarProdutoComponent},
  {path: 'produtos/excluir/:id', component: DeletarProdutoComponent},
  {path: 'produtos/editar/:id', component: EditarProdutoComponent},
  {path: '', redirectTo:'/produtos', pathMatch: 'full'}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


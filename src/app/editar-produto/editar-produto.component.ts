import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  // formEditarProduto:FormGroup;
  // produtoEditar : Produto;

  constructor(private web : WebService,
    private rota: ActivatedRoute,
    private router: Router) { }

 produtoEditar : Produto = null;

  ngOnInit(): void {
    this.getProduto();
  }

  // private inicializarFormulario(){
  //   this.getProduto();
  //   this.formEditarProduto = new FormGroup({
  //     description: new FormControl(this.produtoEditar._id),
  //     price: new FormControl("123"),
  //     title: new FormControl("123"),
  //     _id: new FormControl("123")
  //   })
  // }

  salvarProduto() : void {
    console.log("salvandoPRoduto");
    this.web.editarProduto(this.produtoEditar).subscribe(res =>{
      console.log(res);
      if(res.ok == true){
        alert("Edição realizada com sucesso!");
        this.router.navigate(['/produtos']);
      }
      else{
        alert("Erro ao realizar edição");
        this.router.navigate(['/produtos']);
      }
    });
  }

  getProduto(): void {
    let id = this.rota.snapshot.paramMap.get("id")
    this.web.getProdutosById(id).subscribe(res =>{
      console.log(res);
      this.produtoEditar = res;
    });

  }


}

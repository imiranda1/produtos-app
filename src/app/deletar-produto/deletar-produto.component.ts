import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  constructor(private web : WebService,
              private rota: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.deletarProduto();
  }

  deletarProduto(): void{
    let id = this.rota.snapshot.paramMap.get("id");
    console.log("deletarProduto")
    this.web.deletarProduto(id).subscribe(res =>{
      console.log(res);
      if(res.ok == true){
        alert("Cadastro realizado com sucesso");
        this.router.navigate(['/produtos']);
      }
      else{
        alert("Erro ao realizar foi realisado");
        this.router.navigate(['/produtos']);
      }
    });

  }

}

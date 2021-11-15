import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastar-produto',
  templateUrl: './cadastar-produto.component.html',
  styleUrls: ['./cadastar-produto.component.css']
})
export class CadastarProdutoComponent implements OnInit {

  produto = {title:"", price: 0.0, description: ""}

  constructor(private web : WebService,
    private rota: ActivatedRoute,
    private router: Router) { }

  cadastrar(){
    this.web.cadastrarProduto(this.produto).subscribe(res =>{
      console.log(res);
      if(res.ok == true){
        alert("Cadastro realizado com Sucesso");
        this.router.navigate(['/produtos']);

      }
      else{
        alert("Erro ao cadastrar produto ");
      }
    });

  }
  ngOnInit(): void {
  }

}

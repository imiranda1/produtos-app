import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastar-produto',
  templateUrl: './cadastar-produto.component.html',
  styleUrls: ['./cadastar-produto.component.css']
})
export class CadastarProdutoComponent implements OnInit {

  produto = {title:"", price: 0.0, description: ""}

  constructor(private web : WebService) { }

  cadastrar(){
    this.web.cadastrarProduto(this.produto).subscribe(res =>{
      console.log(res);
      if(res.ok == true){
        alert("Cadastro realizado com sucesso");
      }
      else{
        alert("Erro ao realizar foi realisado");
      }
    });

  }
  ngOnInit(): void {
  }

}

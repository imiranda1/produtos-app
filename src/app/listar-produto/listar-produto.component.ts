import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private web : WebService) { }

  loadProdutos(): void {
    console.log("teste");
    this.web.getProdutos().subscribe(res => {
      this.listaProdutos = res;
      console.log(res);
    });
     console.log("teste");
  }

  ngOnInit(): void {
    console.log("teste");
    this.loadProdutos();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public feriados:any = []
  constructor(private http:HttpClient) {
    this.criarFeriado();
    this.anosSelecionaveis();
  }
  public anos:any=[];
  anosSelecionaveis(){
    let anoAtual = new Date().getFullYear();
    for(let a = anoAtual - 20; a <= anoAtual +20; a++){
        this.anos.push(a);
    }
  }
   public anoSelecionado:any= new Date().getFullYear();
  criarFeriado(){
        
    const apitoken ='7420|2pPMdYSwip59HYnLkbxe3q5TbPnQQVWd';
    const ano = this.anoSelecionado;
    const url = `https://api.invertexto.com/v1/holidays/${ano}?token=${apitoken}`;

    this.http.get(url).subscribe((retorno) => {

      this.feriados = retorno;

    })};
    MudarAno(){
      console.log("deu")
        this.criarFeriado();
    }
    converterDataBR(date: any){
        let data = date.split('-');
        return `${data[2]}/${data[1]}/${data[0]}`
    }
}
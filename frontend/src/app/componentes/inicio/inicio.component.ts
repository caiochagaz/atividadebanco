import {TransferenciaService, Transferencia } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variável declarada do tipo transferência
  ListarTransferencia: Transferencia[]

  //construtor com variáveis declaradas
  constructor(private transferenciaService: TransferenciaService, private router:Router) {
    this.ListarTransferencia = []
  }


  ngOnInit(): void {
    this.listarTransferencias()
  }

  //função que realiza a listagem de transferências que estão cadastradas no banco de dados
  listarTransferencias(){
    this.transferenciaService.getTransferencia().subscribe({
      // setando a variável para dentro do resultado
      next: (resultado) => {console.log(resultado), this.ListarTransferencia = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')

    })

  }

  //função para excluir uma transferência pelo seu id
  excluir(id:any){
    this.transferenciaService.deleteTransferencia(id).subscribe({
      next: (resultado) => {console.log("transferencia excluída")
      this.listarTransferencias()},
      error: (erro) => console.error(erro),
      complete: () => console.info ("Processo de exclusão completado")
    })

  }

  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }



}

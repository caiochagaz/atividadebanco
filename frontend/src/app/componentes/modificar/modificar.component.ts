import { Transferencia, TransferenciaService } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';


//importando a biblioteca de rotas do angular, inclusive o pacote que perimte pegarmos a rota ativa no momento (ActivatedRoute)
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia:Transferencia ={
    id_transferencia:'',
    nomeCliente:'',
    contaCliente:'',
    valor:''
  }

  constructor(private transferenciaService:TransferenciaService, private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

    //snapshot captura o parâmetro na rota ativa, nesse caso o id
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']

    this.transferenciaService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado) => this.transferencia = (resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info("Transferência encontrada")
    })

  }

  modificar(){
    this.transferenciaService.editTransferencia(this.transferencia.id_transferencia,this.transferencia).subscribe({
      next: (resultado) => console.log(resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info("edição completada com êxito")
    })
    this.router.navigate(['/inicio'])

  }

}

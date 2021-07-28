import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [

  ]
})
export class PorPaisComponent {

  constructor( private paisService: PaisService){}

  termino:string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  

  buscar(termino: string){
    this.hayError = false;
    this.paisService.buscarPaises(termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;
      
    }, (err=>{
      this.hayError = true;
      this.paises = [];
    })); 
  }
  sugerencias(termino: string){
    this.hayError = false;
  }
}

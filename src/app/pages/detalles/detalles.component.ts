import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  validacion!:string

  datosdeUsers!:any

  codigo:any


  dataDetails!:any

  constructor(public data : ServiciosService , private rutaActiva: ActivatedRoute ){}
  

  ngOnInit():void{

    this.data.getAll().subscribe(data => this.datosdeUsers = data)

    this.rutaActiva.paramMap.subscribe(
      (paramMap: any) => {
        const{params} = paramMap
    // console.log(params.id)
    this.codigo = params.id
      }
    );
 
  }
  ngAfterViewChecked(){
    this.dataDetails=this.datosdeUsers.filter((element: { id: number; }) => element.id == this.codigo)
     
    this.validacion= JSON.stringify(this.dataDetails[0].completed)
  }


}

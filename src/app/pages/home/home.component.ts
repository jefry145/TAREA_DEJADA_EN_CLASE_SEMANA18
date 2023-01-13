import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   
   data!:any
  constructor(private JsonDatos : ServiciosService  ){}

  mostra(){
    console.log(this.data)
  }
  ngOnInit():void{

    this.JsonDatos.getAll().subscribe(JsonDatos => this.data = JsonDatos)
    
  }
}

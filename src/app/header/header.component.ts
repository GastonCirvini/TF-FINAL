import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 // creo ocultar y le doy valor false
 ocultar = false;
 random:number = 0;
oculto () {

}

 //creo dos funciones una para mostrar , y otra para ocultar , ambas muestran en consola el valor que le dieron a ocultar,esto último solo con el fin de poder tener un mejor control desde las opciones de desarrollador de lo que esta ocurriendo, se puede omitir sin problema. IMPORTANTE:No olvidar que las funciones deben estar dentro de AppComponent.
 muestro(){
   this.random +=1;
   this.ocultar = true;
   console.log(this.random);
   if (this.random%2 == 0){
    this.ocultar=false 
   }
   
   }

   

  constructor() { }

  ngOnInit(): void {
    
  }

}


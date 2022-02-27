import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  
})
export class BodyComponent implements OnInit {
  cabezal:string="José Gastón Cirvini";
  @ViewChild('stickyMenu') menuElement!: ElementRef;
  value: number = 0; value1: number = 0; value2: number = 0; value3: number = 0; value4: number = 0; value5: number = 0; value6: number = 0; value7: number = 0; value8: number = 0;
  nombre: string = "JavaScript";
  sticky:boolean = false;
  elementPosition: any;
  habilitar:boolean = true;
  url: string= "";
  title:string = "Cambiar foto de perfil";
  cambiar: boolean = false;
  random:number = 0;
  

constructor(private messageService: MessageService) {}

ngOnInit() {

}

muestro(){
  this.random +=1;
  this.cambiar = true;
  console.log(this.random);
  if (this.random%2 == 0){
   this.cambiar=false
  }
  
  }

 habilitarSeccion (): void {
  this.habilitar = false;
  console.log(this.habilitar); 
}
deshabilitarSeccion (): void {
  this.habilitar = true;
console.log(this.habilitar); 
}

ngAfterViewInit (){
  this.elementPosition = this.menuElement.nativeElement.offsetTop

}

cambiarImagen (){

}



@HostListener ('window:scroll', ['$event'])
  handleScroll (){
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}



export class ImageSnippet {
  constructor (public src:string, public file: File){}
  
}

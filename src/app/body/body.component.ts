import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
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
  habilitar:boolean = false;

constructor(private messageService: MessageService) {}

ngOnInit() {

}

 habilitarSeccion () {
  this.habilitar = true;
console.log(this.habilitar); 
}

ngAfterViewInit (){
  this.elementPosition = this.menuElement.nativeElement.offsetTop

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





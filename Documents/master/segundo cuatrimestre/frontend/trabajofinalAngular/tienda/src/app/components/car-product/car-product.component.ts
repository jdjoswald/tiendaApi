import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-car-product',
  templateUrl: './car-product.component.html',
  styleUrls: ['./car-product.component.css']
})
export class CarProductComponent {


  @Input() id: number=0;
  @Input() imagen: string="";
  @Input() nombre: string="";
  @Input() precio: number=0;
  @Input() codigo: number=0;
  @Input() descripcion: number=0;
  @Input() stock: number=0;
  @Input() categoria: number=0;
  faTrashAlt=faTrashAlt;
  
  @Output() idborrar = new EventEmitter<number>();

  borrar(id: number){
    this.idborrar.emit(id);

  }
}

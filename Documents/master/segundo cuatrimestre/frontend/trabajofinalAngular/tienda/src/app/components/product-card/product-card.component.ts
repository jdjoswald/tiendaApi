import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() imagen: string="";
  @Input() nombre: string="";
  @Input() precio: number=0;
  @Input() codigo: number=0;
  @Input() descripcion: string="";
  @Input() stock: number=0;
  @Input() categoria: string="lkjnj";
  faShoppingCart=faShoppingCart;

  @Output() carrito = new EventEmitter<number>();

  

  onBotonClick(boton: number) {
    this.carrito.emit(boton);
  }

}

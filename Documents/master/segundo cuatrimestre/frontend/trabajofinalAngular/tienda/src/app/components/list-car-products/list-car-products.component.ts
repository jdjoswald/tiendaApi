import { Component } from '@angular/core';
import { product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-list-car-products',
  templateUrl: './list-car-products.component.html',
  styleUrls: ['./list-car-products.component.css']
})
export class ListCarProductsComponent {
  listProducts:product[]=[  /*
    { id: 1, nombre: 'Producto 1', precio: 10 , cantidad:10,/*categoria: nullcategoriaid:1,imagen:"ldksdls",descripcion:"sasas"},
    { id: 1, nombre: 'Producto 2', precio: 10 , cantidad:10,/*categoria: nullcategoriaid:1,imagen:"ldksdls",descripcion:"sasas"},
    { id: 1, nombre: 'Producto 3', precio: 10 , cantidad:10/*,categoria: null,categoriaid:1,imagen:"ldksdls",descripcion:"sasas"}*/]

}

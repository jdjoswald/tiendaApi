import { Component, Input,  ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-button',
  templateUrl: './categoria-button.component.html',
  styleUrls: ['./categoria-button.component.css']
})
export class CategoriaButtonComponent {
  @Input() nombre: string="";



  @Output() cambiarTitulo = new EventEmitter<string>();

  

  onBotonClick(boton: string) {
    this.cambiarTitulo.emit(boton);
  }
  
  

}

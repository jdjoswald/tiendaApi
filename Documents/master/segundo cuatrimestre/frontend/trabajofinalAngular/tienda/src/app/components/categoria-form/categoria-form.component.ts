import { Component,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7289/api/Categoria';
 
  @Input() nombre: string="";


  enviar(){
    
    const categoria = { id: 0, nombre: this.nombre };

    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    this.http.post(this.apiUrl, categoria, httpOptions)
    .subscribe(
      response => alert("Categoria agregada"),
      error => console.log(error)
    );

    this.nombre=""

  }

 
 
}

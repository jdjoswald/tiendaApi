import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = 'https://localhost:7289/api/Categoria';


  constructor(private http: HttpClient) { }

  getCategoria() {
    return this.http.get(this.apiUrl);
  }
}

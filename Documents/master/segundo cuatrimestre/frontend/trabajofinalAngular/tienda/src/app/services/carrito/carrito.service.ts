import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  apiUrl = 'https://localhost:7289/api/Carrito';


  constructor(private http: HttpClient) { }

  getCarrito() {
    return this.http.get(this.apiUrl);
  }
}

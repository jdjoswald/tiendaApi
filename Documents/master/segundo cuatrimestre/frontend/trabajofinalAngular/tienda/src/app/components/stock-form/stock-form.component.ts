import { Component,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { product } from 'src/app/interfaces/Product';
import { CategoriaService } from '../../services/categoria/categoria.service';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent {

   
  constructor(private http: HttpClient , private productService: ProductService, private categoriaService :CategoriaService) { }
  listProducts:product[]=[];

  @Input() articulo: number=0;
  @Input() cantidad: number=0;

  ngOnInit() {
   this.cargar()
    
  }
  cargar(){
  
     this.productService.getProducts().subscribe((data: any) => {
      console.log(data)

      for (const item of data) {
        const producto: product = { 
          id: item.id,  
          nombre: item.nombre , 
          precio: item.precio , 
          cantidad: item.cantidad,
          categoria: item.categoria ,
          categoriaid: item.categoriaid,
          imagen: item.imagen,
          descripcion: item.descripcion}
        ;
        this.listProducts.push(producto);
      }
    });
  }

  enviar(){
    //alert(this.articulo+' '+this.cantidad)
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put(`https://localhost:7289/api/Articulo/${this.articulo}/aumentar-cantidad/${this.cantidad}`,httpOptions)
    .subscribe(
      response => alert("Categoria agregada"),
      error => console.log(error)
    );
    this.articulo=0;
    this.cantidad=0;
    this.listProducts=[];
    this.cargar();
   
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from 'src/app/interfaces/Categoria';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor(private http: HttpClient , private productService: ProductService, private categoriaService :CategoriaService) { }
  listCategoria: Categoria[]=[];
  private apiUrl = 'https://localhost:7289/api/Articulo';

  
  @Input() nombre: string="";
  @Input() precio: number=0; 
  @Input() cantidad: number=0;
  @Input() categoriaid: number=0;
  imagenBase64: string="";
  @Input() descripcion: string="";  
  
  enviar(){

    const articulo={

      nombre: this.nombre ,
      cantidad: this.cantidad,
      precio: this.precio,
      imagen:this.imagenBase64 ,
      descripcion: this.descripcion,
      categoriaId: this.categoriaid,
      categoria: {
        id: 0,
        nombre: "test"
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
      this.http.post(this.apiUrl, articulo, httpOptions)
      .subscribe(
        response => alert("Articulo agregada"),
        error => console.log(error)
      );
  
      this.nombre ="";
      this.precio =0; 
      this.cantidad =0;
      this.categoriaid =0;
      this.imagenBase64 ="";
      this.descripcion ="";
  
    
  }

  ngOnInit() {
    this.categoriaService.getCategoria().subscribe((data: any) => {
      console.log(data)
      for (const item of data) {
        const categoria: Categoria={
          id:item.id,
          nombre: item.nombre,
        }
        this.listCategoria.push(categoria)
      }
    });
  }



  onSeleccionarImagen(evento: any) {
    const archivo = evento.target.files[0];
    const lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      this.imagenBase64 = lector.result as string;
    };
  }
  

  

}

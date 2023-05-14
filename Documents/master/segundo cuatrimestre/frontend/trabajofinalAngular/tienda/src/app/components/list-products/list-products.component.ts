import { Component,ElementRef } from '@angular/core';
import { product } from 'src/app/interfaces/Product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { CarritoService } from '../../services/carrito/carrito.service';
import { Carrito } from 'src/app/interfaces/Carrito';
import { Categoria } from 'src/app/interfaces/Categoria';
import { faTrashAlt,faShoppingBag } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  constructor(private elRef: ElementRef,private http: HttpClient, private productService: ProductService, private categoriaService :CategoriaService , private carritoService :CarritoService) { }
  listProducts:product[]=[];
  listCarrito: Carrito[]=[];
  listCategoria: Categoria[]=[];
  

   
   apiUrl : string= 'https://localhost:7289/api/Carrito';
  public icons = {
    trash: faTrashAlt,
    shoppingBag: faShoppingBag
  };
  titulo :string= 'Todos';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  
  

  ngOnInit() {
   
this.cargarArticulos()
this.cargarCarrito()
  }

  cargarArticulos(){
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

  cargarCarrito(){
    this.carritoService.getCarrito().subscribe((data: any) => {
      console.log(data)
      for (const item of data) {
        const carrito: Carrito={

          id:item.id,
          ArticuloId:item.articuloId ,
          Articulo: item.articulo,
          cantidad: item.cantidad,

        }
        this.listCarrito.push(carrito);
      }
    });

  }

  anadirCarrito(id: number){
    
    const data = {
      id: 0,
      articuloId: id,
      articulo: {
        id: id ,
        nombre: 'string',
        cantidad: 0,
        precio: 0,
        imagen: 'string',
        descripcion: 'string',
        categoriaId: 0,
        categoria: {
          id: 0,
          nombre: 'string'
        }
      },
      cantidad: 0
    };

    
  
    this.http.post(this.apiUrl ,data, this.httpOptions)
    .subscribe(
      response => console.log("articulo agregado"),
      error => console.log(error)
    );
    this.listCarrito=[]

   
setTimeout(() => {
  this.cargarCarrito()
}, 500); 

  

    
  }
  borrarCarrito(id: number){

  
  
    this.http.delete(`https://localhost:7289/api/Carrito/eliminarCarrito/`+id,  this.httpOptions)
    .subscribe(
      response => console.log("Articulo elmiminado"),
      error => console.log(error)
    );
    this.listCarrito=[]
    setTimeout(() => {
      this.cargarCarrito()
    }, 500); 

    
  }

  
  calculartotal(): number{
    let total: number =0;
    console.log(total)
    this.listCarrito.forEach(productos => {
    total=total+(productos.Articulo.precio*productos.cantidad)
    console.log(total)
    
    });
    return total;
  }

  ocultar(nombre: string) {
    this.titulo=nombre
    const productos = document.querySelectorAll(`.productos > *`);
    productos.forEach(producto => {
      const elemento = producto as HTMLElement;
     
      if (elemento.classList.contains(nombre)) {
        elemento.style.display = 'block';
      } else {
        elemento.style.display = 'none';
      }
      
      
    });
  }
  mostrar() {
    this.titulo="Todos"
    const productos = document.querySelectorAll(`.productos > *`);
    productos.forEach(producto => {
      const elemento = producto as HTMLElement;
      elemento.style.display = 'block';
    });
  }
  borrarTodos(){

    this.http.delete(this.apiUrl+"/eliminarCarritoTodo", this.httpOptions)
    .subscribe(
      response => console.log("articulo agregado"),
      error => console.log(error)
    );
    this.listCarrito=[]

  }

  open(){}

  comprar(){

    this.listCarrito.forEach(element => {

      this.http.put(`https://localhost:7289/api/Articulo/${element.ArticuloId}/decrementar-cantidad/${element.cantidad}`,this.httpOptions)
      .subscribe(
        response => alert("Articulos comprados"),
        error => console.log(error)
      );
    });

   
this.listProducts=[]
this.listCategoria=[]
    setTimeout(() => {
    this.cargarArticulos()
    this.borrarTodos()
    }, 1000); 

  

    
  }

}

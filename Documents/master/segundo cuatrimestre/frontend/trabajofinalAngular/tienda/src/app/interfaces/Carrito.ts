import { product } from "./Product";

export interface Carrito{
    id:number;
    ArticuloId: number;
    Articulo: product;
    cantidad: number;
}
import { Categoria } from "./Categoria";

export interface product {
    id:number;
    nombre: string;
    cantidad: number;
    precio: number;
    imagen: string;
    descripcion: string;
    categoriaid: number;
    categoria: Categoria;
  }
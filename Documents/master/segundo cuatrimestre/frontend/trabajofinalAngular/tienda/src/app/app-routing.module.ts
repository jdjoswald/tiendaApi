import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {path:"", component: ListProductsComponent},
  
  {path:"categoriaForm", component: CategoriaFormComponent},
  {path:"productForm", component: ProductFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

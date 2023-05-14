import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarComponent } from './components/car/car.component';
import { ProductComponent } from './components/product/product.component';
import { CarProductComponent } from './components/car-product/car-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListCarProductsComponent } from './components/list-car-products/list-car-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaButtonComponent } from './components/categoria-button/categoria-button.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { StockFormComponent } from './components/stock-form/stock-form.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarComponent,
    ProductComponent,
    CarProductComponent,
    ListProductsComponent,
    ListCarProductsComponent,
    ProductCardComponent,
    CategoriaListComponent,
    CategoriaButtonComponent,
    ProductFormComponent,
    StockFormComponent,
    CategoriaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

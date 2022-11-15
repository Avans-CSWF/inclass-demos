import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './public/product-detail/product-detail.component';
import { ProductListComponent } from './public/product-list/product-list.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: 'products', pathMatch: 'full', component: ProductListComponent},
  { path: 'products/:id', pathMatch: 'full', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

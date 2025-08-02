import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },
  // {
  //   path: 'product-details',
  //   loadChildren: () => import('./products-details/products-details.module').then(m => m.ProductsDetailsModule),
  // },
  {
    path: "product-details",
    loadChildren: () => import('./products-details/products-details.module').then(m => m.ProductsDetailsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

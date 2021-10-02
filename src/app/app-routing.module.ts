import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { SinglecategoryComponent } from './singlecategory/singlecategory.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent 
  },
  // {
  //   path:'filter/home',
  //   component:HomeComponent
  // },
  {
    path:'aboutus',
    component:AboutusComponent,
  },

  // {
  //   path:'filter/aboutus',
  //   component:AboutusComponent
  // },

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  // {
  //   path:'filter/contactus',
  //   component:ContactusComponent
  // },
  {
    path:'productdetails',
    component:ProductdetailsComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },

  // {
  //   path:'filter/products',
  //   component:ProductsComponent
  // },
  {
    path:'allproducts',
    component:AllproductComponent
  },
  {
    path:'category',
    component:SinglecategoryComponent
  },

  {
    path:'filter/category',
    component:SinglecategoryComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

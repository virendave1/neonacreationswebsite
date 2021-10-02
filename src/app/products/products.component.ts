import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Http ,Headers} from '@angular/http';
import { hostport } from '../app.component';
import { localizedString } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProdnameTxt: any;
  ProdImage: any;
  Prodprice: any;
  Prodsubcategory: any;
  Prodcategory: any;
  Prodcolor: any;
  Prodsku: any;
  Prodtags: any;
  Proddescription: any;
  Prodtype: any;
  Prodbanner: any;
  productcategory: any;
  productName: any;
  categoryname: any;

  constructor(private router: Router,private http: Http,private activatedRoute: ActivatedRoute) {     
    this.headers.append('authorization', this.token);
  }
  token:any = localStorage.getItem('token');
  headers = new Headers();
Id:any;
nameTxt:any;
emailTxt:any;
mobileTxt:any;
subjectTxt:any;
messageTxt:any;
productNameTxt:any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      const ID = paramsId.id;
      this.Id = ID;   
     this.getproduct();
    //  this.getproduct1();
    this.getproductcategory();
    });
  }
   productlist:any;
   pricestatus:any;
  getproduct(){
    this.http.get( hostport +'product', { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      this.productlist = result.product;
      this.pricestatus=result.product[0].priceFlag;
      localStorage.setItem("pricestatus",this.pricestatus);
      console.log(this.pricestatus);
    //  console.log(result.product);
    });
  }

getfindbyid(){
  const url = hostport + 'product/' +this.Id;
  this.http.get( url , { headers: this.headers } )
  .subscribe(Response => {
    let result = Response.json();
    // console.log(result);
    // console.log(localStorage.getItem("productid"));
    const table=result.product;
    this.ProdnameTxt = table.name;
    this.ProdImage = table.image;
    this.Prodprice = table.price;
    this.Prodsubcategory = table.subCategory.subCategory;
    this.Prodcategory = table.category.name;
    this.Prodcolor = table.color;
    this.Prodsku = table.sku;
    this.Prodtags = table.tags;
    this.Proddescription = table.description;
    this.Prodtype=table.typeProduct;
    this.Prodbanner=table.bannerImage;
    // this.pricestatus=table.priceFlag;
    

 console.log(table);

  });
 }
 product_id (id:any){
  //console.log( {id: id });
  this.router.navigate(['/productdetails', {id: id }]);
  this.getfindbyid();
}
value:any;
getproductcategory(){
  this.http.get( hostport +'category', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.productcategory = result.category;

  });
}
getcategoryid(id:any){ 
  //console.log(id);
  localStorage.setItem("productpagecategoryid",id);
  }
table:any;
categary_id:any;

getfindbyid1(){
  this.categary_id=localStorage.getItem("productpagecategoryid");
  const url = hostport + 'filter/category/' +this.categary_id;
  this.http.get( url , { headers: this.headers } )
  .subscribe(Response => {
    let result = Response.json();
    console.log(result);
    this.table=result.product;
    this.ProdnameTxt = this.table.name;
    this.ProdImage = this.table.image;
    this.Prodprice = this.table.price;
    this.Prodsubcategory = this.table.subCategory.subCategory;
    this.Prodcategory = this.table.category.name;
    this.Prodcolor = this.table.color;
    this.Prodsku = this.table.sku;
    this.Prodtags = this.table.tags;
    this.Proddescription = this.table.description;
    this.Prodtype=this.table.typeProduct;
    this.Prodbanner=this.table.bannerImage;
    console.log(this.table);
  });
 }

 getcategory(){
  this.http.get( hostport +'category', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.productName = result.category;
    this.categoryname=localStorage.getItem("categoryname");
    console.log(result);
  });
}

}

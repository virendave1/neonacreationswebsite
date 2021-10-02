import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { hostport } from '../app.component';

@Component({
  selector: 'app-singlecategory',
  templateUrl: './singlecategory.component.html',
  styleUrls: ['./singlecategory.component.css']
})
export class SinglecategoryComponent implements OnInit {

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
  productName: any;
  categoryname: any;
  bestproductlist: any;
  newcount: any;

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
     this.getfindbyid();
     this.getproduct();
     this.getproducts();
     this.getsingleproducttype();
    });
  }
table:any;
getfindbyid(){
  const url = hostport + 'filter/category/' +this.Id;
  this.http.get( url , { headers: this.headers } )
  .subscribe(Response => {
    let result = Response.json();
    //console.log(result);
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
  });
 }
pricestatus:any;
 getproduct(){
  this.http.get( hostport +'category', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.productName = result.category;
    this.categoryname=localStorage.getItem("categoryname");
    //console.log(this.categoryname);
   
  });
}
productslist:any;
category_id:any;
getproducts(){
  this.http.get( hostport +'product', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.productslist = result.product;
    this.pricestatus=result.product[0].priceFlag;
    localStorage.setItem("pricestatus",this.pricestatus);
    console.log(this.category_id);
    console.log(this.pricestatus);
  //  console.log(result.product);
  });
}
 product_id (id:any){
  //console.log( {id: id });
  this.router.navigate(['/productdetails', {id: id }]);
  this.getfindbyid();
}
singlecategorytype:any;
// getproductdata(){
//   this.singlecategorytype=localStorage.getItem("singleproducttype");
//   this.http.get( hostport +"filter/"+this.singlecategorytype , { headers: this.headers } )
//   .subscribe(Response => {
//     const result = Response.json(); 
//     this.bestproductlist = result.typeProduct;
//     console.log(this.bestproductlist);
//   });
// }
getsingleproducttype(){
  this.category_id=localStorage.getItem("menucategaryid");
  this.singlecategorytype=localStorage.getItem("singleproducttype");
  this.http.get( hostport +"filter/"+this.singlecategorytype+"/"+this.category_id , { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.bestproductlist = result.typeProduct;
    console.log(this.bestproductlist);
  });
}

}
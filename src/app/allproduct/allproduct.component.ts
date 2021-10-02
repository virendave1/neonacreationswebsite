import { Component, OnInit } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { hostport } from '../app.component';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

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
    });
  }
   productlist:any;
  getproduct(){
    this.http.get( hostport +'product', { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      this.productlist = result.product;
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
 //console.log(this.ProdnameTxt);
  });
 }
 product_id (id:any){
  //console.log( {id: id });
  this.router.navigate(['/productdetails', {id: id }]);
  this.getfindbyid();
}
}

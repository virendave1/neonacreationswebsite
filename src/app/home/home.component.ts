import { Component, OnInit} from '@angular/core';
import { Http , Headers} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { hostport} from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Id: any;
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
  producttype: any;

  constructor(private router: Router,private http: Http,private activatedRoute: ActivatedRoute) {
    this.headers.append('authorization', this.token);
   }
 token:any= localStorage.getItem('token');
  headers = new Headers();

  ngOnInit(): void {
      this.gettestimonial();   
      this.getproductdata();
      this.getproduct();
 
  }
  
  testimoniallist:any=[];
  gettestimonial(){
    this.http.get( hostport +'testimonials', { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      this.testimoniallist = result.testimonials;
     // console.log(this.testimoniallist);
      for(let i=0;i<this.testimoniallist.length;i++){
        const count=i;
       // console.log(i);
      }
    });
  }
  max:any;
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
 console.log(this.Prodprice);
  });
 }
 products:any=8;
 count:any;
 loadmore(){
   this.products=this.products+8;
  //  this.count=this.products;
  //  console.log(this.count);
 }
 salesproducts:any=8;
 loadmore1(){
   this.salesproducts=this.salesproducts+8;
 }
 newproducts:any=8;
 loadmore2(){
   this.newproducts=this.newproducts+8;
 }
//   isHidden(products:any) {
//   if (products==''){
//     return [style.display]="chatIsToggled ? 'block' : 'none'"
//   }
// }
 product_id (id:any){
  //console.log( {id: id });
  this.router.navigate(['/productdetails', {id: id }]);
  this.getfindbyid();
}
bestproductlist:any;
categorytype:any;
newcount:any;
getproductdata(){
  this.categorytype=localStorage.getItem("categorytype");
  this.http.get( hostport +"filter/"+this.categorytype , { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.bestproductlist = result.typeProduct;
    console.log(this.bestproductlist);
    for(let i=0;i<=this.bestproductlist.length;i++){
      var counts:any=i;
      localStorage.setItem("newcategorycount",counts);  
      this.newcount=localStorage.getItem("newcategorycount");

    }
  });
}
toggle() {
  this.bestproductlist = this.bestproductlist + 5;
}

producttypeimage:any;
productsalesimage:any;
productbestimage:any;
productbestsellerimage:any;
productkeyholderimage:any;
productprice:any;
pricestatus:any;
getproduct(){
  this.http.get( hostport +'product', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.producttype = result.product;
    this.producttypeimage=result.product[5].image;
    this.productsalesimage=result.product[38].image;
    this.productbestimage=result.product[13].image;
    this.productbestsellerimage=result.product[14].image;
    this.productkeyholderimage=result.product[6].image;
    this.pricestatus=result.product[0].priceFlag;
    // for(let i=0;i<=this.producttype.length;i++){
    // this.productprice=result.product[i].price;
    // if(this.productprice=="undefined" || this.productprice==""){
    //   console.log(this.productprice);
    // }
    
    // }
    console.log(this.producttypeimage);
    console.log(this.producttype);
localStorage.setItem("pricestatus",this.pricestatus);
  });
}
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http ,Headers} from '@angular/http';
import { hostport } from '../app.component';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
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
  show:number=1;
  @ViewChild('closebutton') closebutton: any;
  pricestatus: any;
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
productIdTxt:any;
reviewnameTxt:any;
reviewemailTxt:any;
reviewmessageTxt:any;
name:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      const ID = paramsId.id;
      this.Id = ID; 
     // console.log(this.Id);
      this.getproduct();
      this.getfindbyid();
     
    });
  }
  public onSave() {
    this.closebutton.nativeElement.click();
  }
  content:any;
  productimage:any;
  pname:any;

  getfindbyid(){
    const url = hostport + 'product/' +this.Id;
    this.http.get( url , { headers: this.headers } )
    .subscribe(Response => {
      let result = Response.json();
   console.log(result);
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
      this.pricestatus=table.priceFlag;
      this.content=this.Proddescription.replace(/(<([^>]+)>)/ig, '');
      this.pname=localStorage.getItem("productname");
      localStorage.setItem("productname",this.ProdnameTxt);
      localStorage.setItem("productId",this.Id);
      console.log(localStorage.getItem("productname"));
      console.log(this.pname);
      console.log(this.ProdImage);
   for(let i=1;i<=this.ProdImage.length;i++)
   {
    this.productimage=this.ProdImage;
    //console.log(this.productimage);

   }

  //  if(this.Prodbanner==null || this.Prodbanner==undefined ){
   
  //   return  this.Prodbanner=this.ProdImage;
  // }
  // else{
  //  return this.Prodbanner;
  // }
    });
   }

   querylist:any;
  insert(query:any){
    // modal.hide();
    this.http.post( hostport +'query', query, { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      this.onSave();
      if (this.nameTxt== null){
        this.nameTxt ='';
      }
      if (this.emailTxt== null){
        this.emailTxt ='';
      }
      if (this.mobileTxt== null){
        this.mobileTxt ='';
      }
      if (this.subjectTxt== null){
        this.subjectTxt ='';
      }
      alert("Query Sent Successfully !");

     // console.log(result);
    },
    error => {
      var valid =  error._body;
      valid = valid.replace(/[{},"]/g, "");
      valid = valid.replace(/message:/g,'')
      console.error('There was an error!', valid);
       alert(valid); 
        }
    );
}
// getfindbyidreview(){
//   const url = hostport + 'review/' +this.Id;
//   this.http.get( url , { headers: this.headers } )
//   .subscribe(Response => {
//     let result = Response.json();
//     const table=result.review;
//     this.reviewnameTxt = table.name;
//     this.reviewemailTxt = table.email;
//     this.reviewmessageTxt = table.message;
//   });
// }
insertreview(review:any){
  this.http.post( hostport +'review/'+this.Id,review, { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    alert("Review Submitted Successfully !");
    //console.log(result);
  },
  error => {
    var valid =  error._body;
    valid = valid.replace(/[{},"]/g, "");
    valid = valid.replace(/message:/g,'')
   // console.error('There was an error!', valid);
     alert(valid); 
      }
  );
}
productlist:any;
getproduct(){
  this.http.get( hostport +'product', { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.productlist = result.product;
    //console.log(result.product);
  });
}

// productimagelist:any;
// getproductimage(){
//   this.http.get( hostport +'product', { headers: this.headers } )
//   .subscribe(Response => {
//     const result = Response.json(); 
//     this.productimagelist = result.product.image;
//     console.log( this.productimagelist);
//   });
// }
slideConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": true
};
ProductslideConfig = {
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": false
};
slickInit(e: any) {
 // console.log('slick initialized');
}

breakpoint(e: any) {
 // console.log('breakpoint');
}

afterChange(e: any) {
 // console.log('afterChange');
}

beforeChange(e: any) {
 // console.log('beforeChange');
}
product_id (id:any){
  console.log( {id: id });
  this.router.navigate(['/productdetails', {id: id }]);
  this.getfindbyid();
}
}
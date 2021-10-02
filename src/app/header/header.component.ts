import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { hostport } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
Id:any;
  category_id: any;
  singlecategorytype: any;
  bestproductlist: any;
  constructor(private router: Router,private http: Http,private activatedRoute: ActivatedRoute) {     
    this.headers.append('authorization', this.token);
  }
  token:any = localStorage.getItem('token');
  headers = new Headers();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      const ID = paramsId.id;
      this.Id = ID;   
     this.getproduct();
    //  this.getproduct1();
    this.getsubcategory();
    });
  }
  categorylist:any;
  categoryname:any;
  getproduct(){
    this.http.get( hostport +'category', { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      this.categorylist = result.category;
      console.log(result);

    });
  }
    
  productpagecategoryid:any
  
  subcategorylist:any;
getsubcategory(){
  this.productpagecategoryid=localStorage.getItem("menucategaryid");
  this.http.get( hostport +'filter/menu/'+this.productpagecategoryid, { headers: this.headers } )
  .subscribe(Response => {   
    const result = Response.json(); 
    this.subcategorylist = result.product;
   console.log(this.subcategorylist);
   
  });
} 
  // getcategoryname(name:any){ 
  //   this.router.navigate(['../filter/category', {name: name }]);
  // }
getcategory(id:any){ 
  this.router.navigate(['../category', {id: id }]);
  localStorage.setItem("menucategaryid",id);
}
getcategoryid(id:any){ 
  localStorage.setItem("menucategaryid",id);
  console.log( localStorage.getItem("menucategaryid"));
}


subcategoryname:any;
getsingleproducttype(){
  this.category_id=localStorage.getItem("menucategaryid");
  this.singlecategorytype=localStorage.getItem("singleproducttype");
  this.http.get( hostport +"filter/"+this.singlecategorytype+"/"+this.category_id , { headers: this.headers } )
  .subscribe(Response => {
    const result = Response.json(); 
    this.bestproductlist = result.typeProduct;
    // this.subcategoryname=result.typeProduct.subCategory.subCategory;
    // console.log(this.subcategoryname);
    console.log(this.bestproductlist);
  });
}
}

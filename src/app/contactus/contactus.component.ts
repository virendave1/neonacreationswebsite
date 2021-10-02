import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http ,Headers} from '@angular/http';
import { hostport } from '../app.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

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
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      const ID = paramsId.id;
      this.Id = ID;   
    });
  }

  insert(query:any){
    this.http.post( hostport +'contact-us', query, { headers: this.headers } )
    .subscribe(Response => {
      const result = Response.json(); 
      alert("Mail Sent Successfully !");
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
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router : Router,private service : CustomerService) { }

  public data:any;
  public search:string;

  ngOnInit(): void {
    this.service.get_details().subscribe(data =>this.data = data);
  }
  
  onClick = () => {
    this.router.navigate(['/enterdetails']);
  }

  edit = (firstname) => {
    this.router.navigate(['/edit',firstname]);
  }

  onsearch = () => {
    this.router.navigate(['/search',this.search])
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent implements OnInit {

  constructor(private router:Router,private service:CustomerService) { }


  public firstname:string;
  public lastname:string;
  public email:string;
  public address:string;
  public city:string;
  public state:string;


  ngOnInit(): void {
  }

  onClick = () => {
    const data = {
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      address:this.address,
      city:this.city,
      state:this.state
    }

    this.service.post_details(data).subscribe(data=> {
      console.log(data);
    });
  }


  
  cancel = () => {
    this.router.navigate(['/customers']);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router,private service:CustomerService,private activateroute : ActivatedRoute) { }
  public firstname:string;
  public lastname:string;
  public address:string;
  public city:string;
  public state:string;
  public data:any;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params:ParamMap)=> {
      console.log(params);
      this.firstname = params.get('firstname');
      console.log(this.firstname);
      this.service.getByFirstname(this.firstname).subscribe(data=> {
        console.log(data);
        this.firstname=data[0].firstname;
        this.lastname=data[0].lastname;
        this.address=data[0].address;
        this.city=data[0].city;
        this.state=data[0].state;
      
      });
        
    });
    
  }
  update = () => {
    const data = {
      firstname:this.firstname,
      address:this.address,
      city:this.city,
      state:this.state
    }
    this.service.update_details(data).subscribe(data=> {
      console.log(data);})
    }


    delete = () => {
      this.service.delete_details(this.firstname).subscribe(data => {
        console.log(data);
      })
    }

    cancel = () => {
      this.router.navigate(['/customers']);
    }

    
  }
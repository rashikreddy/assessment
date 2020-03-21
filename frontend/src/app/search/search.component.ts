import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router,private activateroute:ActivatedRoute,private service:CustomerService) { }
  public search:string;
  public data:string;
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params:ParamMap)=>{
      this.search=params.get('search');
      this.service.getByFirstname(this.search).subscribe(data=> {
        this.data=data;
      })
    });
  }

  back = () => {
    this.router.navigate(['/customers'])
  }
}

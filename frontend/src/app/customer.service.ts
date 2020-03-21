import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  get_details = ():Observable<any> => {
    const url = 'http://localhost:3000/customer/details'
    return this.http.get<any>(url);
  }

  post_details = (data):Observable<any> => {
    const url = 'http://localhost:3000/customer/enter';
    return this.http.post<any>(url,data);
  }

  update_details = (data):Observable<any> => {
    const url = `http://localhost:3000/customer/update/${data.firstname}`;
    return this.http.put<any>(url,data);
  }

  delete_details = (data):Observable<any> => {
    const url = `http://localhost:3000/customer/delete/${data}`;
    return this.http.delete(url);
  }

  getByFirstname = (firstname):Observable<any> => {
    console.log(firstname);
    const url = `http://localhost:3000/customer/${firstname}`;
    return this.http.get<any>(url);
  }
}

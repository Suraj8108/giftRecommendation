import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private HttpClient: HttpClient) { }

  buypost(form_data:any){
    console.log(form_data)
    let url="http://localhost:4000/paynow"
    return this.HttpClient.post(url,form_data)
  }
}

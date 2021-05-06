import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminuploadService {

  constructor(private HttpClient:HttpClient) { }

  postupload(input:any){
    //let input = new FormData();
    //input.append("thefile", fileToUpload);
    //form_data.append(fileToUpload)
    let url = "http://localhost:3000/updata";
    //input.append("values",form_data)
    //input.append("title","Hell")
    //input.append("description","Hell")
    //input.append("markdown","Hell")
    //console.log(form_data)
    console.log(input)
    return this.HttpClient.post(url,input)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchdashboardService {

  constructor(private HttpClient: HttpClient) { }

  getsearch(cat,idf){
    let url = `http://localhost:3000/actualsearch/?category=${cat}&idf=${idf}`
    return this.HttpClient.get(url)
  }

  postsearch(search){
    let url = "http://localhost:3000/search"
    return this.HttpClient.post(url,search)
  }

  idfsearch(idf){
    let url=`http://localhost:3000/idfsearch/?idf=${idf}`
    return this.HttpClient.get(url)
  }
}

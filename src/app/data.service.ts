import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }
  ge(){
    return this.ht.get('http://localhost:3000/posts');
  }
  po(d){
    return this.ht.post('http://localhost:3000/posts',d);
  }
  de(d){
    return this.ht.delete('http://localhost:3000/posts/' + d);
  }
  pu(d){
    return this.ht.put('http://localhost:3000/posts/' + d.id, d)
  }
}

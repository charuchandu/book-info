import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public hc:HttpClient) { }

  getData1():Observable<any>{
    return this.hc.get<any>(`../../assets/data.json`)
  }
}

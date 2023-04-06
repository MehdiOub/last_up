import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie.model";
import {Observable} from "rxjs";
import {Magasin} from "../model/magasin.model";
import {Stock} from "../model/stock.model";


@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8036/app/try'


  getListCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url+'/categorie/all');
  }

  getListMagasin(): Observable<Magasin[]>{
    return this.http.get<Magasin[]>(this.url+'/magasin/all');
  }

  getListStock(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.url+'/Stock/all');
  }
  deleteMagasin(code: string): Observable<object>{
    return this.http.delete(`${this.url + '/delelteMagasinByLibelle'}/${code}`) ;
  }

}

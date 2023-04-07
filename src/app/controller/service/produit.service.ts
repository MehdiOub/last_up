import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Stock} from "../model/stock.model";
import {Produit} from "../model/Produit.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private Url = 'http://localhost:8036/app/try/produit';


  constructor(private http: HttpClient) { }
  public findAll(): Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(this.Url+'/all');
  }
}

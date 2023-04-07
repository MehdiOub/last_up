import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/Produit.model";
import {CompteBudgetaire} from "../model/CompteBudgetaire.model";

@Injectable({
  providedIn: 'root'
})
export class CompteBudgetaireService {
  private Url='/app/try/CompteBudgetaire';

  constructor( private http: HttpClient) { }
  public findAllcnt(): Observable<Array<CompteBudgetaire>>{
      return this.http.get<Array<CompteBudgetaire>>(this.Url+'/all');
    }

}

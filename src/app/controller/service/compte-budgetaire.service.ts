import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompteBudgetaire} from "../model/CompteBudgetaire.model";


@Injectable({
  providedIn: 'root'
})
export class CompteBudgetaireService {
  private _compteBudgetaire: CompteBudgetaire;
  private _compteBudgetaires: Array<CompteBudgetaire>;
  private Url='http://localhost:8036/app/try/CompteBudgetaire';

  constructor( private http: HttpClient) { }


  get compteBudgetaire(): CompteBudgetaire {
    return this._compteBudgetaire;
  }

  set compteBudgetaire(value: CompteBudgetaire) {
    this._compteBudgetaire = value;
  }

  get compteBudgetaires(): Array<CompteBudgetaire> {
    return this._compteBudgetaires;
  }

  set compteBudgetaires(value: Array<CompteBudgetaire>) {
    this._compteBudgetaires = value;
  }

  public findAll(): Observable<Array<CompteBudgetaire>>{
      return this.http.get<Array<CompteBudgetaire>>(this.Url + '/all' );
    }



}

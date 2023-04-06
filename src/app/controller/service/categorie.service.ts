import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CompteBudgetaire} from "../model/CompteBudgetaire.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _categorie: Categorie;
  private _categories: Array<Categorie>;
  private _comptebugitaire: CompteBudgetaire;
  private _url ='http://localhost:8036/app/try/categorie';

  constructor(private http: HttpClient) { }
  public findAll(): Observable<Array<Categorie>>{
    return this.http.get<Array<Categorie>>(this._url+"/all");
  }
  public save(): Observable<Categorie> {
    return this.http.post<Categorie>(this._url + '/', this.categorie);
  }
  public deleteByLibelle(libelle: string): Observable<number> {
    return this.http.delete<number>(this._url + '/delelteCategorieByLibelle/'+libelle);
  }
  get categorie(): Categorie {
    if (this._categorie == null) {
      this._categorie = new Categorie();
    }
    return this._categorie;
  }
  set categorie(value: Categorie) {
    this._categorie = value;
  }
  get categories(): Array<Categorie> {
    if (this._categories == null) {
      this._categories = new Array<Categorie>();
    }
    return this._categories;
  }
  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

}

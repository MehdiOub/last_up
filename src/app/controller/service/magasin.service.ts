import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Magasin} from "../model/magasin.model";

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private Url = 'http://localhost:8036/app/try/magasin';
  private _magasin = new Magasin();
  private _magasins = new Array<Magasin>(); // cpn ::: list

  constructor(private http: HttpClient) { }
  public findAll(): Observable<Array<Magasin>>{
    return this.http.get<Array<Magasin>>(this.Url+ '/all');
  }

  public deleteMagasinByLibelle(libelle: string): Observable<number> {
    return this.http.delete<number>(this.Url + '/delelteMagasinByLibelle/'+libelle);
  }

  public save(): Observable<Magasin> {
    return this.http.post<Magasin>(this.Url + '/', this.magasin);
  }

  get magasin(): Magasin {
    if (this._magasin == null) {
      this._magasin = new Magasin();
    }
    return this._magasin;
  }

  get magasins(): Magasin[] {
    if (this._magasins == null) {
      this._magasins= new Array<Magasin>();
    }
    return this._magasins;
  }
  set magasin(value: Magasin){
    this._magasin=value;
  }

  set magasins(value: Magasin[]) {
    this._magasins= value;
  }
}

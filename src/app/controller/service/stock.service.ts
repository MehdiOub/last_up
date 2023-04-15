import { Injectable } from '@angular/core';
import {Stock} from "../model/stock.model";
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private Url ='http://localhost:8036/app/try/Stock';
  private _stock = {} as Stock;

  private _stocks = [] as Array<Stock>;
  constructor(private http: HttpClient) { }
  public findAll(): Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(this.Url+ '/all');}

  public save(): Observable<Stock> {
    return this.http.post<Stock>(this.Url+'/',this._stock);
  }
  get stock(): Stock {
    return this._stock;
  }
  set stock(value: Stock) {
    this._stock = value;
  }
  get stocks(): Stock[] {
    return this._stocks;
  }
  set stocks(value: Stock[]) {
    this._stocks = value;
  }

}


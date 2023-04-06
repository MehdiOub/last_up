import {Component, OnInit} from '@angular/core';
import {Stock} from "../../../controller/model/stock.model";
import {StockService} from "../../../controller/service/stock.service";
import {Magasin} from "../../../controller/model/magasin.model";
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  constructor(private stockService: StockService) {
  }
  public findAll(): void {
    this.stockService.findAll().
    subscribe(data => this.stocks = data);
  }
  public deleteByLibelle(stock:Stock ,index:number): void{

    this.stockService.deleteByLibelle(stock.libelle).subscribe(data=>{
      if(data>0){
        this.stocks.splice(index,1);

      }else{
        alert('DEL ERROR')
      }
    })
  }
  ngOnInit(): void {
    this.findAll();

  }

  get stock(): Stock {
    return this.stockService.stock;
  }

  set stock(value: Stock) {
    this.stockService.stock = value;
  }

  get stocks(): Stock[] {
    return this.stockService.stocks;
  }

  set stocks(value: Stock[]) {
    this.stockService.stocks = value;
  }

}

import {Component, OnInit} from '@angular/core';
import {StockService} from "../../../controller/service/stock.service";
import {Stock} from "../../../controller/model/stock.model";

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css']
})
export class StockViewComponent implements OnInit {
  constructor(private stockService: StockService) {
  }
  public findAll(): void {
    this.stockService.findAll().
    subscribe(data => this.stocks = data);
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

  ngOnInit(): void {
    this.findAll();
  }

}

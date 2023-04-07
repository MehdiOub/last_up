import {Component, OnInit} from '@angular/core';
import {StockService} from "../../../controller/service/stock.service";
import {Stock} from "../../../controller/model/stock.model";
import {Magasin} from "../../../controller/model/magasin.model";
import {MagasinService} from "../../../controller/service/magasin.service";
import {Produit} from "../../../controller/model/Produit.model";
import {ProduitService} from "../../../controller/service/produit.service";

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  constructor(private stockService: StockService,private magasinService: MagasinService ,private produitservice: ProduitService) {
    this.stock = new Stock();
    this.stock.magasin = new Magasin();
    this.stock.produit = new Produit();
  }

  public magasins: Magasin[] ;
  public magasin: Magasin;
  public produit: Produit;
  public produits: Produit[];


  public save(): void {
      this.stockService.save().subscribe(data => {
        if (data != null) {
          console.log(data);
          alert('save succreful');
        } else {
          alert('save failed');
        }
      });
    }
  public findAlls(): void {
    this.magasinService.findAll().subscribe(data =>
      this.magasins = data);
  }
  public FindAll(): void {
    this.produitservice.findAll().subscribe(data =>
      this.produits = data);
  }

  get stock(): Stock {
    return this.stockService.stock;
  }

  set stock(value: Stock) {
    this.stockService.stock = value;
  }

  ngOnInit(): void {
    this.findAlls();
    this.FindAll();

  }
  onSubmit(){
    this.save();
  }

}

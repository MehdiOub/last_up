import {Component, OnInit} from '@angular/core';
import {Stock} from "../../../controller/model/stock.model";
import {Magasin} from "../../../controller/model/magasin.model";
import {Categorie} from "../../../controller/model/categorie.model";
import {ListService} from "../../../controller/service/list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categorie: Categorie= new Categorie();
  magasin: Magasin = new Magasin() ;
  stock: Stock = new Stock() ;
  categories!: Categorie[] ;
  magasins!: Magasin[] ;
  stocks!: Stock[] ;

  constructor(private listService: ListService){
  }


  ngOnInit(): void {
    this.gtlistCategorie();
    this.gtlistMagasin() ;
    this.gtlistStock();
  }
  private gtlistCategorie(){
    this.listService.getListCategorie().subscribe(data => {
      this.categories = data ;
    })
  }
  private gtlistMagasin(){
    this.listService.getListMagasin().subscribe(data => {
      this.magasins = data ;
    })
  }

  private gtlistStock(){
    this.listService.getListStock().subscribe(data => {
      this.stocks = data ;
    })
  }

  deleteProduit(code: string){
    this.listService.deleteMagasin(code).subscribe(data =>{
      console.log(data);

      this.gtlistMagasin();
    }) }


}

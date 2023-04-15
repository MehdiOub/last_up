import {Component, OnInit} from '@angular/core';
import {Stock} from "../../../controller/model/stock.model";
import {Magasin} from "../../../controller/model/magasin.model";
import {Categorie} from "../../../controller/model/categorie.model";
import {ListService} from "../../../controller/service/list.service";
import {MagasinService} from "../../../controller/service/magasin.service";
import {ProduitService} from "../../../controller/service/produit.service";
import {Produit} from "../../../controller/model/Produit.model";
import {CategorieService} from "../../../controller/service/categorie.service";
import {CompteBudgetaireService} from "../../../controller/service/compte-budgetaire.service";
import {CompteBudgetaire} from "../../../controller/model/CompteBudgetaire.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categorie: Categorie= new Categorie();

  stock: Stock = new Stock() ;
  categories!: Categorie[] ;
  produits!: Produit[] ;

  comptebudgetaires!: CompteBudgetaire[] ;
  stocks!: Stock[] ;
  magasins!: Magasin[];

  constructor(private listService: ListService,private magasinService: MagasinService ,private produitservice: ProduitService
              ,private categorieService: CategorieService ,public compteBudgetaireService: CompteBudgetaireService) {
  ;
    this.stock.magasin = new Magasin();
    this.stock.produit = new Produit();
    this.categorie.compteBudgetaire = new CompteBudgetaire();
  }
  public findAlls(): void {
    this.magasinService.findAll().subscribe(data =>
      this.magasins = data);
  }
  public deleteMagasinByLibelle(magasin:Magasin ,index:number): void{

    this.magasinService.deleteMagasinByLibelle(magasin.libelle).subscribe(data=>{
      if(data>0){
        this.magasins.splice(index,1);

      }else{
        alert('DEL ERROR')
      }
    })
  }
  public deleteCategorieByLibelle(categorie:Categorie ,index:number): void{

    this.categorieService.deleteByLibelle(categorie.libelle).subscribe(data=>{
      if(data>0){
        this.categories.splice(index,1);

      }else{
        alert('DEL ERROR')
      }
    })
  }
  public FindAll(): void {
    this.produitservice.findAll().subscribe(data =>
      this.produits = data);
  }
  public findAllcnt(): void {
    this.compteBudgetaireService.findAll().subscribe(data =>
      this.comptebudgetaires = data);
  }



  ngOnInit(): void {
    this.gtlistCategorie();
    this.gtlistMagasin() ;
    this.gtlistStock();
    this.findAlls();
    this.FindAll();
    this.findAllcnt();

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
}

import {CategorieService} from "../../../controller/service/categorie.service";
import {Categorie} from "../../../controller/model/categorie.model";
import { Component, OnInit } from '@angular/core';
import {Magasin} from "../../../controller/model/magasin.model";

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  constructor(private categorieService: CategorieService) { }
  public deleteByLibelle(categorie:Categorie ,index:number): void{

    this.categorieService.deleteByLibelle(categorie.libelle).subscribe(data=>{
      if(data>0){
        this.categories.splice(index,1);

      }else{
        alert('DEL ERROR')
      }
    })
  }
  public findAll(): void {
    this.categorieService.findAll().subscribe(data => this.categories = data);}
  get categorie(): Categorie {
    if (this.categorieService.categorie == null) {this.categorieService.categorie = new Categorie();}
    return this.categorieService.categorie;
  }

  set categorie(value: Categorie) {this.categorieService.categorie = value;}

  get categories(): Array<Categorie> {return this.categorieService.categories;}
  set categories(value: Array<Categorie>) {this.categorieService.categories = value;}
  ngOnInit(): void {
    this.findAll();
  }

}

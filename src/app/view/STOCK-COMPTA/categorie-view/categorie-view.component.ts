import {Component, OnInit} from '@angular/core';
import {Categorie} from "../../../controller/model/categorie.model";
import {CategorieService} from "../../../controller/service/categorie.service";

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  constructor(private categorieService: CategorieService) { }
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

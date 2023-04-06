import { CategorieService } from "../../../controller/service/categorie.service";
import { Categorie } from "../../../controller/model/categorie.model";
import { Component, OnInit } from '@angular/core';
import {CompteBudgetaire} from "../../../controller/model/CompteBudgetaire.model";

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {
  constructor(private categorieService: CategorieService) {
  }

  get categorie(): Categorie {
    return this.categorieService.categorie;
  }
  set categorie(value: Categorie) {
    this.categorieService.categorie = value;}
  public save(): void {
    this.categorieService.save().subscribe(data =>{
      if (data!=null){
        console.log(data);
        alert('save succreful');
      } else {
        alert('save failed');}
    });
  }

  ngOnInit(): void {

  }

}

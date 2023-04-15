import { CategorieService } from "../../../controller/service/categorie.service";
import { Categorie } from "../../../controller/model/categorie.model";
import { Component, OnInit } from '@angular/core';
import {CompteBudgetaire} from "../../../controller/model/CompteBudgetaire.model";
import {CompteBudgetaireService} from "../../../controller/service/compte-budgetaire.service";

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {
  constructor(private categorieService: CategorieService , private  comptebudgetaireService: CompteBudgetaireService) {
    this.categorie=new Categorie();
    this.categorie.compteBudgetaire= new CompteBudgetaire();

  }
  get categorie(): Categorie {
    return this.categorieService.categorie;
  }
  public comptebudgeters: CompteBudgetaire[];
  public comptebudgeter: CompteBudgetaire;
  public findAllcnte(): void {
    this.comptebudgetaireService.findAll().subscribe(data =>
      this.comptebudgeters = data);
  }

  set categorie(value: Categorie) {
    this.categorieService.categorie = value;}
  public save(): void {
    console.log(this.categorie);

    this.categorieService.save().subscribe(data =>{
      console.log(this.categorie);
      if (data!=null){
        console.log(data);
        alert('save succreful');
      } else {
        alert('save failed');}
    });
  }

  ngOnInit(): void {
    this.findAllcnte();

  }
  onSubmit(){
    this.save();
  }

}

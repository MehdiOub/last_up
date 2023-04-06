import {Magasin} from "./magasin.model";
import {Produit} from "./Produit.model";



export class Stock {
  public id: number;
  public libelle: string;
  public magasin: Magasin;
  public produit: Produit;

}

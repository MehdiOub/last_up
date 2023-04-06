import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieCreateComponent} from "./view/STOCK-COMPTA/categorie-create/categorie-create.component";
import {ListComponent} from "./view/STOCK-COMPTA/list/list.component";
import {MagasinCreateModel} from "./view/STOCK-COMPTA/magasin-create/magasin-create.component";
import {StockCreateComponent} from "./view/STOCK-COMPTA/stock-create/stock-create.component";

const routes: Routes = [
  { path: 'create-categorie', component: CategorieCreateComponent },
  { path: 'lists', component: ListComponent},
  { path: '', component: ListComponent},
  { path: 'create-magasin', component: MagasinCreateModel},
  { path: 'create-stock', component: StockCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

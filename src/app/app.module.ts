import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MagasinListComponent } from './view/STOCK-COMPTA/magasin-list/magasin-list.component';
import { MagasinEditComponent } from './view/STOCK-COMPTA/magasin-edit/magasin-edit.component';
import { MagasinViewComponent } from './view/STOCK-COMPTA/magasin-view/magasin-view.component';
import { CategorieCreateComponent } from './view/STOCK-COMPTA/categorie-create/categorie-create.component';
import { CategorieListComponent } from './view/STOCK-COMPTA/categorie-list/categorie-list.component';
import { CategorieViewComponent } from './view/STOCK-COMPTA/categorie-view/categorie-view.component';
import { StockCreateComponent } from './view/STOCK-COMPTA/stock-create/stock-create.component';
import { StockListComponent } from './view/STOCK-COMPTA/stock-list/stock-list.component';
import { StockViewComponent } from './view/STOCK-COMPTA/stock-view/stock-view.component';
import {MagasinCreateModel} from "./view/STOCK-COMPTA/magasin-create/magasin-create.component";
import {CommonModule} from "@angular/common";
import { ListComponent } from './view/STOCK-COMPTA/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MagasinListComponent,
    MagasinEditComponent,
    MagasinViewComponent,
    CategorieCreateComponent,
    CategorieListComponent,
    CategorieViewComponent,
    StockCreateComponent,
    StockListComponent,
    StockViewComponent,
    MagasinCreateModel,
    ListComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

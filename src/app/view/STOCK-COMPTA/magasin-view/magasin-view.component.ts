import {Component, OnInit} from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin.service";
import {Magasin} from "../../../controller/model/magasin.model";

@Component({
  selector: 'app-magasin-view',
  templateUrl: './magasin-view.component.html',
  styleUrls: ['./magasin-view.component.css']
})
export class MagasinViewComponent implements OnInit {
  constructor(private _magasinService: MagasinService) { }
  public findAll(): void {
    this._magasinService.findAll().subscribe(data => this.magasins = data);
  }
  ngOnInit(): void {
    this.findAll();
  }
  get magasin(): Magasin {
    return this._magasinService.magasin;
  }

  get magasins(): Magasin[] {
    return this._magasinService.magasins;
  }
  set magasin(value: Magasin){
    this._magasinService.magasin=value;
  }

  set magasins(value: Magasin[]) {
    this._magasinService.magasins= value;
  }


}

import { Component, OnInit } from '@angular/core';
import { Magasin } from '../../../controller/model/magasin.model';
import { MagasinService } from '../../../controller/service/magasin.service';

@Component({
  selector: 'app-magasin-list',
  templateUrl: './magasin-list.component.html',
  styleUrls: ['./magasin-list.component.css']
})
export class MagasinListComponent implements OnInit {
  constructor(private _magasinService: MagasinService) { }

  ngOnInit(): void {
    this.findAll();

  }
  public findAll(): void {
    this._magasinService.findAll().subscribe(data => this.magasins = data);
  }
  public deleteByLibelle(magasin:Magasin ,index:number): void{

    this._magasinService.deleteMagasinByLibelle(magasin.libelle).subscribe(data=>{
      if(data>0){
        this.magasins.splice(index,1);

      }else{
        alert('DEL ERROR')
      }
    })
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

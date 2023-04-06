import {Component, OnInit} from '@angular/core';
import { Magasin } from '../../../controller/model/magasin.model';
import { MagasinService } from '../../../controller/service/magasin.service';

@Component({
  selector: 'app-magasin-edit',
  templateUrl: './magasin-edit.component.html',
  styleUrls: ['./magasin-edit.component.css']
})
export class MagasinEditComponent implements OnInit{
  constructor(private _magasinService: MagasinService) { }
  ngOnInit(): void {
  }
  get magasin(): Magasin{
    return this._magasinService.magasin;
  }

}

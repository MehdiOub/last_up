import { Component, OnInit } from '@angular/core';
import { Magasin } from '../../../controller/model/magasin.model';
import { MagasinService } from '../../../controller/service/magasin.service';

@Component({
  selector: 'app-magasin-create',
  templateUrl: './magasin-create.component.html',
  styleUrls: ['./magasin-create.component.css']
})
export class MagasinCreateModel implements OnInit{

  constructor(private magasinService: MagasinService) { }
  ngOnInit(): void {

  }
  public save(): void {
    this.magasinService.save().subscribe(data =>{
      if (data!=null){
        console.log(data);
        alert('save succreful');
      } else {
        alert('save failed');}
    });
  }


   get magasin(): Magasin{
    return this.magasinService.magasin;
   }


}

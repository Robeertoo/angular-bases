import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {


  constructor(private dbzService:DBZService) { }

  ngOnInit() { }

  get characters():Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterByID(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}

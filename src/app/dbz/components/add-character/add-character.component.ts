import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public chacter:Character ={
    name:'',
    power:0
  };
  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();
  emitCharacter():void{
    console.log(this.chacter);
    if(this.chacter.name.length===0) return;

    this.onNewCharacter.emit(this.chacter);
    this.chacter.name='';
    this.chacter.power=0;
  }
}

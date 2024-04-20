import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }
  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:7500
  }];
  addCharacter(chacter:Character):void{
    const newCgaracter:Character={id:uuid(),...chacter};
    let copiaCharacter=Object.assign({},newCgaracter)
    this.characters.push(copiaCharacter);
  }

  onDeleteCharacterByID(id:string):void{
    this.characters=this.characters.filter(ch=> ch.id!=id);
  }
}

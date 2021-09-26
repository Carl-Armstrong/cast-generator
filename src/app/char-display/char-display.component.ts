import { Component, OnInit } from '@angular/core';
import { ICharacter } from './character';
import { charGenerator } from './charGen';
import { IRelationship } from "./relationship";
import { setRelationships } from "./castGenerator";

@Component({
  selector: 'app-char-display',
  templateUrl: './char-display.component.html',
  styleUrls: ['./char-display.component.css']
})
export class CharDisplayComponent implements OnInit {
  // for now, create four random characters with preset names
  characters: ICharacter[] = [charGenerator("Alex"), charGenerator("Jamie"), charGenerator("Bobby"), charGenerator("Sam")]
  relationships: IRelationship[] = setRelationships(this.characters);

  constructor() { }

  ngOnInit(): void {
  }

}

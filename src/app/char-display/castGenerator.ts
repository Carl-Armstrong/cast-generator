import { ICharacter } from "./character";
import { IRelationship } from "./relationship";

// a list of possible types of relationships
let relationshipTypes: string[] = ["Parent/child", "sibling", "enemy", "romantic partner", "bff", "work mate", "room mate"];

/*
Creates a set of relationships between ICharacter objects
@ param castArray: an array of ICharacter objects
@ return: an array of relationship objects between all the characters
*/
export function setRelationships(castArray: ICharacter[]) {
    // an array of IRelationship objects. Each holds the indexes of two characters and contains their relationship type
    let relationshipTable: IRelationship[] = [];

    for (let i: number = 0; i < castArray.length; i++) {
        for (let j: number = i + 1; j < castArray.length; j++) {
            let tempString: string = castArray[i].name + castArray[j].name;
            let currentRelationship: IRelationship = { set: tempString, firstChar: castArray[i].name, firstIndex: i, secondChar: castArray[j].name, secondIndex: j, type: relationshipTypes[Math.floor(Math.random()*relationshipTypes.length)] };
            relationshipTable.push(currentRelationship);
        }
    }

    return relationshipTable;
}

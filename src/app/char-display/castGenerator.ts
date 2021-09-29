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

    // TODO - add a process that checks appropriateness of relationships - some of these are creepy
    for (let i: number = 0; i < castArray.length; i++) {
        for (let j: number = i + 1; j < castArray.length; j++) {
            let tempString: string = castArray[i].name + castArray[j].name;
            let currentRelationship: IRelationship = { set: tempString, firstChar: castArray[i].name, firstIndex: i, secondChar: castArray[j].name, secondIndex: j, type: setRelType(castArray[i], castArray[j]) };
            relationshipTable.push(currentRelationship);
        }
    }

    return relationshipTable;
}


/*
    A strictly random assignment of relationship types has produced too many creepy relationships or unlikely relationships. This
    list will identify inappropriate relationships. More should be added if they are noted.

    * Minors and adults in romantic relationships - especially very young minors
    * Adult relationships that stretch belief. Like 90 year old with 30 year old. These are feasible, but not as often as has been occuring.
*/

function setRelType(charA: ICharacter, charB: ICharacter)
{
    let isApprop: boolean = false;
    let relType: string = "";

    while (!isApprop)
    {
        relType = relationshipTypes[Math.floor(Math.random()*relationshipTypes.length)]
        if (validateAppropriateness(relType, charA, charB))
        {
            isApprop = true;
        }
    }
    return relType;
}

function validateAppropriateness(type: string, charA: ICharacter, charB: ICharacter)
{
    if (type == "romantic partner")
    {
        // apply standard creepiness rule (https://xkcd.com/314/): Don't date under age/2 + 7
        if (charB.age < ((charA.age / 2) + 7) || charA.age < ((charB.age /2) + 7))
        {
            return false;
        }
        // put other romantic checks here
        // if it runs through all romantic checks, return true
        else return true;
    }
    // if it gets here, return true
    else return true;
    
}
import { ICharacter } from "./character";

export function charGenerator(name: string) {
let age: number = Math.floor(Math.random() * 100) +1;
let gender: string = setGender();

let newChar: ICharacter = {name: name, age: age, gender: gender}
return newChar;
}

// TODO change this to a generic binary randomizer with parameters of trait A and trait B, returning one of them
function setGender() {
    let rando: number = (Math.random()>=0.5)? 1 : 0;
    if (rando === 0) {
        return "male";
    }
    return "female";
}
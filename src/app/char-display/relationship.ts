export interface IRelationship {

    // set: a string combination of the two character names
    set: string;
    // firstChar: the name of the first character in the relationship
    firstChar: string;
    // firstIndex: the index (from castArray) of the first character
    firstIndex: number;
    // secondChar: the name of the second character in the relationship
    secondChar: string;
    // secondIndex: the index (from castArray) of the second character
    secondIndex: number;
    // type: a string describing the relationship
    type: string;
}
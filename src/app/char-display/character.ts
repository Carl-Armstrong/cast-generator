export interface ICharacter {
    // in the future, I'd like traits to be defined by the user (with option for default)

    // name: currently defined when the ICharacter object is created
    name: string;
    // age: random number from 1 to 100
    age: number;
    // gender: currently binary for mvp purposes. Will add nuance later
    gender: string;
}
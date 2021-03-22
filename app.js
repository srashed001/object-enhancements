//Write an ES2015 Version 

function createInstructor(firstName, lastName){
    return {
        firstName, 
        lastName,
    }
}

const favoriteNumber = 42; 
const instuctor = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite",
}

const instructor = {
    firstName: 'Colt',
    sayHi (){
        return 'Hi!';
    },
    sayBye (){
        return this.fistName + " says bye!"
    },
};



//creatAnimal Function

function createAnimal(species, verb, noise){
    return {
        species, 
        verb, 
        [verb](){
           return noise; 
        },
    }
}
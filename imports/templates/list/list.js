import '../card/card.js';
import '../form/form.js';
import './list.html';
import './list.css';

import { ReactiveVar } from 'meteor/reactive-var';

// Data
import { data as DATA } from '/imports/data.js';

Template.list.onCreated(() => {
    this.reactiveData = new ReactiveVar([]);
    this.amount = new ReactiveVar();
    this.numberOfOptions = createArray();

});

Template.list.helpers({
    numberOfCards: () => numberOfOptions,

    colors : () => reactiveData.get(),

});

Template.list.events({
    
    'submit .form'(event){
        event.preventDefault();

        generateColors();
    },
});

function createArray(){
    let myArray = [];

    for(let i = 0; i < DATA.colors.length; i++){
        myArray.push(i);
    }
    return myArray;
}

function randomNumber(){
    return Math.floor(Math.random() * 12 );
}

function insertColors(myArray){
    let randomizedData = [];
    let index;

    for( let i = 0; i < amount.get(); i++ ){
        index = myArray.splice(randomNumber() - i, 1);
        randomizedData.push(DATA.colors[index]);
    }
    return randomizedData;
}

function generateColors(){
    let myArray = createArray();
    let randomizedData = insertColors(myArray);

    reactiveData.set(randomizedData);
}


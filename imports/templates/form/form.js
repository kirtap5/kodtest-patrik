import './form.html';
import './form.css';

Template.form.helpers({
    adjust : (option) => option + 1, 
});

Template.form.events({
    'submit .form'(event){
        event.preventDefault();
        const target = event.target;
        const value = target.amount.value;
        
        amount.set(value);        
    },
});




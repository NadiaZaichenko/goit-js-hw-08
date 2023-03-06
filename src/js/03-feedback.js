import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const messege = document.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state"

const formData = {};

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onFormSubmit);

populateForm ();

function onForm (evt){
 formData[evt.target.name] = evt.target.value;  
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 
}

function onFormSubmit(evt) {
 evt.preventDefault();
 form[{email, messege}] = evt.target.elements;
 if (email.value === "" || messege.value === "") {
   return alert('Заповніть будь ласка всі поля');
 }
console.log({email: email.value, messege: messege.value});
 console.log('Відправляємо форму');
 evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
};

function populateForm (evt) {
const contentForm = localStorage.getItem(STORAGE_KEY);
    if(contentForm){
        const parseContentForm = JSON.parse(contentForm)
        // console.log(parseContentForm);
        messege.value = parseContentForm.message;
        email.value = parseContentForm.email;
};
};
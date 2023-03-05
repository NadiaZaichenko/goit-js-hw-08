
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const messege = document.querySelector('textarea');



const formInput = function(evn) {
    console.log(email.value)
}

email.addEventListener('input', formInput);
const STORAGE_KEY = "feedback-form-state"
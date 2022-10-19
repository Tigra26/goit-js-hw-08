import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");


const FORM_STATE = "feedback-form-state";
let formData = {};
formFillOut()

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit',  onFormSubmit)

function onInputChange(evt){

    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
   
}
function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FORM_STATE)))
 
    evt.target.reset();
    formData = {};
    localStorage.removeItem(FORM_STATE);
}

function formFillOut(){
const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
if (savedData === null || savedData === undefined) {
    return
}
formData = savedData;

if(savedData){

    emailEl.value = savedData.email ? savedData.email : emailEl.value;
    textareaEl.value = savedData.message ? savedData.message : textareaEl.value;
}
}

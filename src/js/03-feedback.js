import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    text: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500))

// let defaultLocalStorage = {};

function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log(`email: ${refs.email.value}`);
    console.log(`message: ${refs.text.value}`);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultLocalStorage));
    // localStorage.clear();
}
let saveStorage;
saveStorage = localStorage.getItem(STORAGE_KEY)
formData = JSON.parse(saveStorage)
// console.log(typeof (saveStorage))
// console.log(saveStorage)
// console.log(formData)

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(JSON.stringify(formData))
}

saveFormData()
function saveFormData() { 
    try {
        const savedFormData = localStorage.getItem(STORAGE_KEY);
        // console.log(savedFormData)
        const parsedFormData = JSON.parse(savedFormData); 
        // console.log(parsedFormData)
        if (parsedFormData) { 
            refs.email.value = parsedFormData.email || ''; 
            refs.text.value = parsedFormData.message || '';
        };     
    } catch (error) {
    console.error("Get state error: ", error.message);
    }
}


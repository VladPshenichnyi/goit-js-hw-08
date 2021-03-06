import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    text: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));

function onFormData(e) {
    const formData = {
        email: refs.email.value,
        message: refs.text.value,
        }
    // formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

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
    };
};

function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log(`email: ${refs.form.email.value}`);
    console.log(`massage: ${refs.form.message.value}`);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
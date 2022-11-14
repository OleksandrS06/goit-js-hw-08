import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form")

// console.log(formEl);
const KEY_FORM = "feedback-form-state";
let userData = {};

const fillFormElements = () => {

  const dataFromLocalStorage = JSON.parse(localStorage.getItem(KEY_FORM));

  for (const prop in dataFromLocalStorage) {
      
    if (dataFromLocalStorage.hasOwnProperty(prop)) {
      formEl.elements[prop].value = dataFromLocalStorage[prop];
     }
// formEl.elements[prop].value = dataFromLocalStorage[prop];
    
    console.log(dataFromLocalStorage[prop]);
  }
}
fillFormElements();

function onInputElInput(event) {
  
  const name = event.target.name;
  const value = event.target.value;
  if (localStorage.getItem(KEY_FORM)){
     userData = JSON.parse(localStorage.getItem(KEY_FORM))
  }
  userData[name] = value;
  localStorage.setItem(KEY_FORM, JSON.stringify(userData))
  
}

const onSubmitBtnClick = event => {
  event.preventDefault();
  console.log(userData);

  event.target.reset();
  localStorage.removeItem(KEY_FORM);
}


formEl.addEventListener('input', throttle(onInputElInput, 500))
formEl.addEventListener('submit', onSubmitBtnClick)




















  // ДРУГИЙ СПОСІБ ЗАПИСУ В ЛОКАЛ СТОР
    // let localData = localStorage.getItem(KEY_FORM) ? JSON.parse(localStorage.getItem(KEY_FORM)) : {};
    // let localData = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {};
    // const { name, value, type } = event.target;
    // localData = {
    //     ...localData,
    //   [name]: value,
    // }
    // localStorage.setItem(KEY_FORM, JSON.stringify(localData))
    // console.log(localData);
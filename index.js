let ageTable = document.getElementById('age-table');
console.log(ageTable);
let labels = document.getElementsByTagName('label');
console.log(labels)
let firstTd = document.querySelector('#age-table td');
console.log(firstTd);
console.log(firstTd.textContent);
let formSearch = document.querySelector('form[name="search"]');
console.log(formSearch);
let firstInput = formSearch.querySelector('input');
console.log(firstInput)
let allInputs = document.querySelectorAll('input');
let lastInput = allInputs[allInputs.length - 1];
console.log(lastInput)

//по последнему вопросу он выведет body хотя я вначале думал что выведет form потом понял что body находится внутри innerhtml
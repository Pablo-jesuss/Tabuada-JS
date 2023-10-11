// Seleção de elementos 

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Funções

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for(i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    console.log(result);
  }

}

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
  
})
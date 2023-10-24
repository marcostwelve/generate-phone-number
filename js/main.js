const numberElement = document.getElementById("number");
const generateNumberBtn = document.getElementById("generate-number");
const copyNumberBtn = document.getElementById("copy-number");


generateNumberBtn.addEventListener("click",  () => {
  numberElement.innerText = "Gerando Número...";
  setTimeout(generateNumberPhone, 5000);
});

copyNumberBtn.addEventListener("click", copyNumber);

function generateNumberPhone() {
  let startNumber = "9";
  let digit = Math.floor(Math.random() * 89) + 11;
  let changeDigitZero = verifyZero(digit);
  let number = String(Math.floor(Math.random() * 99999999) + 1);
  let numberStr = number.toString();

  numberElement.innerText = formatNumber(changeDigitZero + startNumber + numberStr);
  
}

//Formatando o número para os padrões do Brasil
function formatNumber(number) {
  const regex = /^(\d{2})(\d{5})(\d{4})$/;

  return number.replace(regex, "($1) $2-$3");
  
}

//Verificando se o segundo digito do número verificador é zero
function verifyZero(number) {
  let newDigit = Math.floor(Math.random() * 9) + 1;
  return number.toString().replace(/0/g, newDigit);
}

//função para copiar número para a área de tranferência
function copyNumber() {
  const numberPhone = numberElement.innerText;
  navigator.clipboard.writeText(numberPhone).then(() => {
    alert(`Número ${numberPhone} copiado para a área de transferência`);
  },
  (error) => {
    console.error(`Erro ao copiar o CPF ${error}`);
  });
}
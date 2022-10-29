//Capiturar evento de submint do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value); /* convertendo os inputs para number */
const altura = Number(inputAltura.value); /* convertendo os inputs para number */

if (!peso) { 
  setResultado ('Peso invalido', false);
  return;
}  

if  (!altura) {
  setResultado ('Altura invalida', false);
  return;
}

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

//console.log(imc, nivelImc); Codigo mosrtra no console do navegador 
const msg = `Seu IMC é  ${imc} (${nivelImc}).`;

setResultado(msg, true);
});

/*
Menos de que 18,5  Abaixo do peso 
Enre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1 
Entre 35 e 19,9 Obesidade grau 2
Mais do que 40  Obesidade grau 3
*/
function getNivelImc (imc) {
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', /* vamos utilizar indice do array */
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

 if (imc >=39.9)  return nivel[5];
 if (imc >= 34.9) return nivel[4];
 if (imc >= 29.9) return nivel[3];
 if (imc >= 24.9) return nivel[2];
 if (imc >= 18.5) return nivel[1];
 if (imc < 18.5) return nivel[0];
}



function getImc (peso, altura) {
const imc = peso / altura ** 2;
return imc.toFixed(2);//resultado com duas dezenas 
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

   

  const p = criaP();

  if (isValid) {
     p.classList.add('paragrafo-resultado');
    }else{
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
//Capiturar evento de submint do formulário
const form = document.querySelector('#formulario');/*escutatdor de evento  */

form.addEventListener('submit', function (e) {
e.preventDefault();/*não vai ser enviado conforme comportamento padrao o submit*/
const inputPeso = e.target.querySelector('#peso');/*pegando os input do formulario e colocado em uma variavel*/
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value); /* convertendo os inputs para number */
const altura = Number(inputAltura.value); /* convertendo os inputs para number */

if (!peso) { 
  setResultado ('Peso invalido', false);/* Flague false para colocar na nossa classe  */
  return;
}  

if  (!altura) {
  setResultado ('Altura invalida', false);
  return;
}

const imc = getImc(peso, altura);/*função que recebe dois parametros e retorna o IMC */
const nivelImc = getNivelImc(imc);/*Cria o texto valores do imc */

//console.log(imc, nivelImc); Codigo mosrtra no console do navegador 
const msg = `Seu IMC é  ${imc} (${nivelImc}).`; /* mensagem de retorno do resultado do calculo imc*/

setResultado(msg, true);/*mensagem sera mostrada caso Resultado for valor verdadeiro */
});

/*
Menos de que 18,5  Abaixo do peso 
Enre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1 
Entre 35 e 19,9 Obesidade grau 2
Mais do que 40  Obesidade grau 3
*/
function getNivelImc (imc) {/*baseado no valor sera retornado o indice conforme as condiçoes */
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', /* vamos utilizar indice do array */
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

 if (imc >=39.9)  return nivel[5];
 if (imc >= 34.9) return nivel[4];
 if (imc >= 29.9) return nivel[3];
 if (imc >= 24.9) return nivel[2];
 if (imc >= 18.5) return nivel[1];
 if (imc < 18.5) return nivel[0];
}



function getImc (peso, altura) {/*função que faz o calculo do IMC */
const imc = peso / altura ** 2;
return imc.toFixed(2);//resultado com duas dezenas 
}

function criaP () {
    const p = document.createElement('p');/*cria um paragrafo*/
    return p;
}

function setResultado (msg, isValid) {/*resebe a mensagem - executa variavel isValid */
    const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
  const p = criaP();

  if (isValid) {/*se isValid for true executa */
     p.classList.add('paragrafo-resultado');
    }else{
    p.classList.add('bad');
  }

  p.innerHTML = msg;/*mostra a mensagem no html */
  resultado.appendChild(p);/*inserere o p por ultimo */
}
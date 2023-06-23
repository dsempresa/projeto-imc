function calcularIMC(){
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');
    
    let pessoas = [];
    
function recebeEventoForm(evento){
evento.preventDefault();
    
      let nome = form.querySelector('.nome');
      let sobrenome = form.querySelector('.sobrenome');
      let peso = form.querySelector('.peso');
      let altura = form.querySelector('.altura');
      
    
      if (!nome) {
        setResultado('Preecha o campo do nome', false);
        return;
      }
      if (!sobrenome) {
        setResultado('Preecha o campo do sobrenome', false);
        return;
      }
      if (!peso) {
        setResultado('Preecha o campo do peso', false);
        return;
      }
    
      if (!altura) {
        setResultado('Preecha o campo da altura', false);
        return;
      }
    
      let imc = getImc(peso.value, altura.value);
      let nivelImc = getNivelImc(imc); 
      
      pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:peso.value,
        altura:altura.value,
        imc:imc,
        nivel:nivelImc
      });      
      console.log(pessoas)
      resultado.innerHTML += '<p>'+nome.value+ ' ' +sobrenome.value+ '<br>'+ ' ' +imc+' IMC'+'<br>'+nivelImc+'</p>';
 
    
}
    
form.addEventListener('submit', recebeEventoForm);  
};
    
function getImc (peso, altura) {
    let imc = peso / altura**2;
    return imc.toFixed(2);
    
}
function getNivelImc (imc) {
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0]; 
   
}
calcularIMC()







 




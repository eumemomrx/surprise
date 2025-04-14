const inicio = new Date('2023-04-15');
const hoje = new Date();

diferenca = hoje - inicio;

const dias = (Math.floor(diferenca / (1000 * 60 * 60 * 24))); 
const horas = (dias * 24);
const minutos = (horas * 60);
const segundos = (minutos * 60);
const mTeia = Math.floor(minutos / 116)

function cDias(){

    return "Feliz "+ dias +" dias juntos🤎";     
}

function equivale(){
    return "Isso equivale a "+ horas +" horas, "+ minutos +" minutos ou "+ segundos +" segundos de patetadas";
}

function filme(){
    return "(Daria para ver Madame Teia "+ mTeia +" vezes nesse tempo)🫠";
}












document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dias').textContent = cDias();
  document.getElementById('equivale').textContent = equivale();  
  document.getElementById('filme').textContent = filme();
});
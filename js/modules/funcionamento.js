export default function initHorarioFuncionamento(){

}

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horariosSemana = funcionamento.dataset.horarios.split(',').map(Number);

const dataAgora = new Date();
const diaAtual = dataAgora.getDay();
const horarioAtual = dataAgora.getHours();


const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
const horarioSemana = (horarioAtual >= horariosSemana[0] && horarioAtual < horariosSemana[1]);

if (semanaAberto && horarioSemana) funcionamento.classList.add('aberto');
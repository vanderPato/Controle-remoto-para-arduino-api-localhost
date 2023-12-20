async function atualizarFrente() {

    const url = 'http://192.168.1.26:3000/api/data';
    const valorDireitaSpan = document.getElementById('direita');
    const valorEsquerdaSpan = document.getElementById('esquerda');
    const valoTrazSpan = document.getElementById('traz');
    const valorFrenteSpan = document.getElementById('frente');
    const valorFrente = valorFrenteSpan.innerText === 'true';
    
    
    const newData = {
        id: 0,
        frente: !valorFrente,
        traz:false,
        esquerda:false,
        direita:false
    };
    try{
        const response = await axios.patch(url, newData);
        
        valorFrenteSpan.innerText = response.data.frente.toString();
        valoTrazSpan.innerText = response.data.traz.toString();
        valorEsquerdaSpan.innerText = response.data.esquerda.toString();
        valorDireitaSpan.innerText = response.data.direita.toString();

    
    } catch(error) {
        console.log('Erro ao fazer a solicitação PATCH:', error);
}
}


async function atualizarTraz() {
const url = 'http://192.168.1.26:3000/api/data';
const valorDireitaSpan = document.getElementById('direita');
const valorFrenteSpan = document.getElementById('frente');
const valorEsquerdaSpan = document.getElementById('esquerda');
const valoTrazSpan = document.getElementById('traz');
const valorTraz = valoTrazSpan.innerText === 'true';

const newData = {
    id: 0,
    frente:false,
    traz:!valorTraz,
    esquerda:false,
    direita:false
};
try{
    const response = await axios.patch(url, newData);
    
    valoTrazSpan.innerText = response.data.traz.toString();
    valorFrenteSpan.innerText = response.data.frente.toString();
    valorEsquerdaSpan.innerText = response.data.esquerda.toString();
    valorDireitaSpan.innerText = response.data.direita.toString();



} catch(error) {
    console.log('Erro ao fazer a solicitação PATCH:', error);
}
}

async function atualizarEsquerda() {
const url = 'http://192.168.1.26:3000/api/data';
const valorDireitaSpan = document.getElementById('direita');
const valoTrazSpan = document.getElementById('traz');
const valorFrenteSpan = document.getElementById('frente');
const valorEsquerdaSpan = document.getElementById('esquerda');
const valorEsquerda = valorEsquerdaSpan.innerText === 'true';




const newData = {
    id: 0,
    frente: false,
    traz:false,
    esquerda:!valorEsquerda,
    direita:false
};
try{
    const response = await axios.patch(url, newData);
    
    valorEsquerdaSpan.innerText = response.data.esquerda.toString();
    valorFrenteSpan.innerText = response.data.frente.toString();
    valoTrazSpan.innerText = response.data.traz.toString();
    valorDireitaSpan.innerText = response.data.direita.toString();



} catch(error) {
    console.log('Erro ao fazer a solicitação PATCH:', error);
}
}



async function atualizarDireita() {
const url = 'http://192.168.1.26:3000/api/data';

const valoTrazSpan = document.getElementById('traz');
const valorFrenteSpan = document.getElementById('frente');
const valorEsquerdaSpan = document.getElementById('esquerda');
const valorDireitaSpan = document.getElementById('direita');
const valorDiteita = valorDireitaSpan.innerText === 'true';




const newData = {
    id: 0,
    frente: false,
    traz:false,
    esquerda:false,
    direita:!valorDiteita
};
try{
    const response = await axios.patch(url, newData);
    
    valorDireitaSpan.innerText = response.data.direita.toString();
    valorEsquerdaSpan.innerText = response.data.esquerda.toString();
    valorFrenteSpan.innerText = response.data.frente.toString();
    valoTrazSpan.innerText = response.data.traz.toString();


} catch(error) {
    console.log('Erro ao fazer a solicitação PATCH:', error);
}
}

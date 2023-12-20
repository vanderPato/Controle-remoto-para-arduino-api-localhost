<<<<<<< HEAD

    document.addEventListener("DOMContentLoaded", function() {
        const frenteDown = document.getElementById("frenteDown");
        const trazDown = document.getElementById("trazDown");
        const esquerdaDown = document.getElementById("esquerdaDown");
        const direitaDown = document.getElementById("direitaDown");
  

        let frentePrecionado = false;
        let trazPrecionado = false;
        let esquerdaPrecionado = false;
        let direitaPrecionado = false;

        frenteDown.addEventListener("mousedown", function() {
            frentePrecionado = true;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        frenteDown.addEventListener("mouseup", function() {
            frentePrecionado = false;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });




        trazDown.addEventListener("mousedown", function() {
            trazPrecionado = true;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        trazDown.addEventListener("mouseup", function() {
            trazPrecionado = false;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });



        esquerdaDown.addEventListener("mousedown", function() {
            esquerdaPrecionado = true;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        esquerdaDown.addEventListener("mouseup", function() {
            esquerdaPrecionado = false;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });





        direitaDown.addEventListener("mousedown", function() {
            direitaPrecionado = true;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        direitaDown.addEventListener("mouseup", function() {
            direitaPrecionado = false;
            atualizarDownFrente(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });






    })



async function atualizarDownFrente(valorFrente, valorTraz, valorEsquerdo, valorDireito) {
    const url = 'http://192.168.1.26:3000/api/data';
    const valorDireitaSpan = document.getElementById('direita');
    const valorEsquerdaSpan = document.getElementById('esquerda');
    const valoTrazSpan = document.getElementById('traz');
    const valorFrenteSpan = document.getElementById('frente');
    // valorFrente = valorFrenteSpan.innerText === 'true';
    
    
    const newData = {
        id: 0,
        frente: valorFrente,
        traz:valorTraz,
        esquerda:valorEsquerdo,
        direita:valorDireito
    };
  
    try{
        const response = await axios.patch(url, newData);
        
        valorFrenteSpan.innerText = response.data.frente.toString();
        valoTrazSpan.innerText = response.data.traz.toString();
        valorEsquerdaSpan.innerText = response.data.esquerda.toString();
        valorDireitaSpan.innerText = response.data.direita.toString();

=======
    
    async function atualizarFrente() {
        const url = 'http://192.168.1.24:3000/api/data';
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
    const url = 'http://192.168.1.24:3000/api/data';
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


>>>>>>> 3f86025c9505350accf17822f166d04f0ed5f131
    
    } catch(error) {
        console.log('Erro ao fazer a solicitação PATCH:', error);
}
}

<<<<<<< HEAD

document.addEventListener("DOMContentLoaded",  function( ) {
   const valorDireitaSpan = document.getElementById('direitaCar');
   const valorEsquerdaSpan = document.getElementById('esquerdaCar');
   const valoTrazSpan = document.getElementById('trazCar');
   const valorFrenteSpan = document.getElementById('frenteCar');

  
    let frente = false;
    let traz = false;
    let direita = false;
    let esquerda = false;

    valorFrenteSpan.addEventListener("click", function() {
        frente = !frente;
        traz = false;
        direita = false;
        esquerda = false;
        atualizarFrenteCar(frente, traz , esquerda, direita);

    });
   

    valoTrazSpan.addEventListener("click", function() {
        frente = false;
        traz = !traz;
        direita = false;
        esquerda = false;
        atualizarFrenteCar(frente, traz , esquerda, direita);

    });


    
    valorEsquerdaSpan.addEventListener("click", function() {
        frente = false;
        traz =false;
        esquerda  = !esquerda;
        direita = false;
        atualizarFrenteCar(frente, traz , esquerda, direita);

    });
  
      
    valorDireitaSpan.addEventListener("click", function() {
        frente = false;
        traz = false;
        esquerda  = false;
        direita = !direita;

        atualizarFrenteCar(frente, traz , esquerda, direita);
    });
  

})

async function atualizarFrenteCar(frente, traz, esquerda, direita) {
   const valorDireitaSpan = document.getElementById('direita');
   const valorEsquerdaSpan = document.getElementById('esquerda');
   const valoTrazSpan = document.getElementById('traz');
   const valorFrenteSpan = document.getElementById('frente');

    const url = 'http://192.168.1.26:3000/api/data';

    const newData = {
        id: 0,
        frente:frente,
        traz:traz,
        esquerda:esquerda,
        direita:direita
    };

    try{
        const response = await axios.patch(url, newData);  
        valorFrenteSpan.innerText = response.data.frente.toString();
        valoTrazSpan.innerText = response.data.traz.toString();
        valorEsquerdaSpan.innerText = response.data.esquerda.toString();
        valorDireitaSpan.innerText = response.data.direita.toString();

=======
async function atualizarEsquerda() {
    const url = 'http://192.168.1.24:3000/api/data';
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
    const url = 'http://192.168.1.24:3000/api/data';
    
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

>>>>>>> 3f86025c9505350accf17822f166d04f0ed5f131
    
    } catch(error) {
        console.log('Erro ao fazer a solicitação PATCH:', error);
}
}

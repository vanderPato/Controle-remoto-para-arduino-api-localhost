
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
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        frenteDown.addEventListener("mouseup", function() {
            frentePrecionado = false;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });




        trazDown.addEventListener("mousedown", function() {
            trazPrecionado = true;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        trazDown.addEventListener("mouseup", function() {
            trazPrecionado = false;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });



        esquerdaDown.addEventListener("mousedown", function() {
            esquerdaPrecionado = true;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        esquerdaDown.addEventListener("mouseup", function() {
            esquerdaPrecionado = false;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });





        direitaDown.addEventListener("mousedown", function() {
            direitaPrecionado = true;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });

        direitaDown.addEventListener("mouseup", function() {
            direitaPrecionado = false;
            atualizarDown(frentePrecionado, trazPrecionado, esquerdaPrecionado, direitaPrecionado);
        });






    })



async function atualizarDown(valorFrente, valorTraz, valorEsquerdo, valorDireito) {
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

    
    } catch(error) {
        console.log('Erro ao fazer a solicitação PATCH:', error);
}
}


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
        atualizarValorCar(frente, traz , esquerda, direita);

    });
   

    valoTrazSpan.addEventListener("click", function() {
        frente = false;
        traz = !traz;
        direita = false;
        esquerda = false;
        atualizarValorCar(frente, traz , esquerda, direita);

    });


    
    valorEsquerdaSpan.addEventListener("click", function() {
        frente = false;
        traz =false;
        esquerda  = !esquerda;
        direita = false;
        atualizarValorCar(frente, traz , esquerda, direita);

    });
  
      
    valorDireitaSpan.addEventListener("click", function() {
        frente = false;
        traz = false;
        esquerda  = false;
        direita = !direita;

        atualizarValorCar(frente, traz , esquerda, direita);
    });
  

})

async function atualizarValorCar(frente, traz, esquerda, direita) {
    const url = 'http://192.168.1.26:3000/api/data';
   const valorDireitaSpan = document.getElementById('direita');
   const valorEsquerdaSpan = document.getElementById('esquerda');
   const valoTrazSpan = document.getElementById('traz');
   const valorFrenteSpan = document.getElementById('frente');


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

    
    } catch(error) {
        console.log('Erro ao fazer a solicitação PATCH:', error);
}
}




// Em quanto o botão estiver precionado 
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
        direita:valorDireito,
        sensor:0,
        velocidade:"0"
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



//Usando click para controlar o arduino

document.addEventListener("DOMContentLoaded",  function( ) {
   const valorDireitaSpan = document.getElementById('direitaCar');
   const valorEsquerdaSpan = document.getElementById('esquerdaCar');
   const valoTrazSpan = document.getElementById('trazCar');
   const valorFrenteSpan = document.getElementById('frenteCar');
   const statusBar = document.getElementById("statusBar");

   

    
    
    
    let velocidadeCar = false;
    let frente = false;
    let traz = false;
    let direita = false;
    let esquerda = false;

    let percentPosition =0


    
   

   






    valorFrenteSpan.addEventListener("click", function() {
        frente = !frente;
        traz = false;
        direita = false;
        esquerda = false;
        atualizarValorCar(frente, traz , esquerda, direita, percentPosition.toFixed(0).toString());
        console.log(percentPosition.toFixed(0));

    });
   

    valoTrazSpan.addEventListener("click", function() {
        frente = false;
        traz = !traz;
        direita = false;
        esquerda = false;
        atualizarValorCar(frente, traz , esquerda, direita, percentPosition.toFixed(0).toString());
        console.log(percentPosition.toFixed(0));


    });


    
    valorEsquerdaSpan.addEventListener("click", function() {
        frente = false;
        traz =false;
        esquerda  = !esquerda;
        direita = false;
        atualizarValorCar(frente, traz , esquerda, direita, percentPosition.toFixed(0).toString());
        console.log(percentPosition.toFixed(0));


    });
  
      
    valorDireitaSpan.addEventListener("click", function() {
        frente = false;
        traz = false;
        esquerda  = false;
        direita = !direita;

        atualizarValorCar(frente, traz , esquerda, direita, percentPosition.toFixed(0).toString());
        console.log(percentPosition.toFixed(0));

    });




            // Adiciona um ouvinte de evento para rastrear a posição do mouse
        document.addEventListener('mousedown', function() {
            velocidadeCar = true; 
           
            console.log(velocidadeCar);
        });

        document.addEventListener('mouseup', function() {
            velocidadeCar = false; 
            console.log(velocidadeCar);
           
});

    console.log('aqui');
document.addEventListener("mousemove", function(event) {
    if(velocidadeCar){ 
    
    percentPosition = (event.clientX / window.innerWidth) * 100;
    console.log('valorees', percentPosition.toFixed(0));


    statusBar.style.width = percentPosition + "%";
    statusBar.innerText = percentPosition.toFixed(0) + "%";

    //console.log('Valor',  percentPosition.toFixed(0));

    atualizarValorCar(frente, traz , esquerda, direita, percentPosition.toFixed(0).toString());
}

})


  

})

async function atualizarValorCar(frente, traz, esquerda, direita, velocidadeCar) {
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
        direita:direita,
        sensor:0,
        velocidade:`${velocidadeCar.toString()}`
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

// document.addEventListener("DOMContentLoaded", function() {
//     const statusBar = document.getElementById("statusBar");
//     let velocidadeCar = false;
//     // Adiciona um ouvinte de evento para rastrear a posição do mouse
//     document.addEventListener('mousedown', function() {
//         velocidadeCar = true;
 

        
//     });
    
//     document.addEventListener('mouseup', function() {
//         velocidadeCar = false;

//     });

//     document.addEventListener("mousemove", function(event) {
//         if(velocidadeCar){ 
        
//                    const percentPosition = (event.clientX / window.innerWidth) * 100;
//                     statusBar.style.width = percentPosition + "%";
//                     statusBar.innerText = percentPosition.toFixed(0) + "%";
    
//                     //console.log('Valor',  percentPosition.toFixed(0));

//                     atualizarVelocidade(percentPosition.toFixed(0));
//                 }
                
//             });
    
   

// });



// async function atualizarVelocidade(velocidade ) {
    
//     const url = 'http://192.168.1.26:3000/api/data';
   
//     const newData = {
       
//         velocidade:velocidade
//     };
  
//     try{
//         await axios.patch(url, newData);
        
//     } catch(error) {
//         console.log('Erro ao fazer a solicitação PATCH:', error);
// }
// }
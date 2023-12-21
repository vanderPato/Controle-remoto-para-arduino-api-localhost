#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include "RoboCore_Vespa.h"
#include <Ultrasonic.h>


const char *ssid = "Delosma16_plus";
const char *password = "breno1603";
VespaMotors motors;
Ultrasonic ultrasonic(26, 25);
int distance;
const char *url = "http://192.168.1.26:3000/api/data";



void setup() {
Serial.begin(9600);
WiFi.begin(ssid, password);
while (WiFi.status() != WL_CONNECTED) {
  delay(1000);
  Serial.println("Conectando ao WiFi...");
}

Serial.println("Conectado ao WiFi");

}

void loop() {
  //distance = ultrasonic.read();
 // patchApi();
  String data = getApi();

 
  DynamicJsonDocument dado(1024);
    deserializeJson(dado, data);
     String frente   = dado["frente"];
     String traz     = dado["traz"];
     String esquerda = dado["esquerda"];
     String direita  = dado["direita"];
     int velocidade = dado["velocidade"];

    Serial.println("velocidade ");
    Serial.println(velocidade);
    Serial.println(" ");


   if(frente == "true"){
    Serial.println("Frente");
          motors.setSpeedLeft(-velocidade);
          motors.setSpeedRight(-velocidade);  

    }else if(traz == "true"){
    Serial.println("Ré");

      motors.setSpeedLeft(velocidade);
      motors.setSpeedRight(velocidade); 
      
    }else if(esquerda == "true"){
    Serial.println("esquerda");
      //motors.forward(60);
      motors.setSpeedLeft(velocidade);
      motors.setSpeedRight(-velocidade);



    }else if(direita == "true"){
    Serial.println("direita");
      motors.setSpeedRight(velocidade);
      motors.setSpeedLeft(-velocidade);



    }else{

        Serial.println("Parado");
        motors.setSpeedLeft(0);
        motors.setSpeedRight(0);
        motors.stop();
      }

        //delay(150);

   }



String getApi(){
  // Inicializar uma instância do cliente HTTP
  HTTPClient http;
  http.begin(url);
  // Fazer a requisição GET e obter a resposta
  int httpCode = http.GET();
  if (httpCode > 0) {
    // Se a requisição for bem-sucedida, imprima a resposta
    String payload = http.getString();
    
   http.end();
   //Serial.println("Dados " + data);
   return payload;

  } else {
    http.end();
    return "Falha na requisição à API";
  }

  // Encerrar a conexão com a API
  http.end();
  
}



void patchApi(){
  distance = ultrasonic.read();
  Serial.print(distance);
  String data = "frente=true&traz=false&esquerda=false&direita=false&sensor=" + distance;
  
  
  HTTPClient http;
 // http.begin(url);
  http.begin(url);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  int httpCode = http.POST(data);


  if (httpCode > 0) {
    // Se a requisição for bem-sucedida, imprima a resposta
    String payload = http.getString();
    Serial.println("Resposta do servidor: " + payload);
  } else {
    Serial.println("Falha na requisição POST");
  }
  http.end();

  // Aguardar um intervalo antes de fazer a próxima requisição
  

}

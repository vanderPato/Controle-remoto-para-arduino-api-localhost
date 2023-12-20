#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include "RoboCore_Vespa.h"


const char *ssid = "Delosma16_plus";
const char *password = "breno1603";
VespaMotors motors;

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
  String data = getApi();

 
  DynamicJsonDocument dado(1024);
    deserializeJson(dado, data);
     String frente   = dado["frente"];
     String traz     = dado["traz"];
     String esquerda = dado["esquerda"];
     String direita  = dado["direita"];

   if(frente == "true"){
    Serial.println("Frente");
          motors.setSpeedLeft(-70);
          motors.setSpeedRight(-70);  

    }else if(traz == "true"){
    Serial.println("Ré");

      motors.setSpeedLeft(70);
      motors.setSpeedRight(70); 
      
    }else if(esquerda == "true"){
    Serial.println("esquerda");
      //motors.forward(60);
      motors.setSpeedLeft(80);
      motors.setSpeedRight(-80);



    }else if(direita == "true"){
    Serial.println("direita");
      motors.setSpeedRight(80);
      motors.setSpeedLeft(-80);



    }else{

        Serial.println("Parado");
        motors.setSpeedLeft(0);
        motors.setSpeedRight(0);
        motors.stop();
      }

        delay(200);

   }



String getApi(){
  String url = "http://192.168.1.26:3000/api/data";
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

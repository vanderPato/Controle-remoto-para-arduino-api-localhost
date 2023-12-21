package com.vanderlei.fazendo_teste_para_tirar_duvidas;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.Rect;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.TouchDelegate;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();
    boolean frenteCar = false, trazCar = false, esquerdaCar = false, direitaCar = false;
    int velocidadeCar;
    LinearLayout containee;



    EditText edit;
    TextView texV;
    SeekBar seekBar;

    Button btnFrente, btnTraz,btnEsquerda, btnDireita, controle2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        controle2 = findViewById(R.id.controle2);
        seekBar = findViewById(R.id.seekBar);
        containee = findViewById(R.id.containee);
        btnFrente = findViewById(R.id.btnFrente);
        btnTraz = findViewById(R.id.btnTraz);
        btnEsquerda = findViewById(R.id.btnEsquerda);
        btnDireita = findViewById(R.id.btnDireita);
        texV = findViewById(R.id.texV);

        btnFrente.setBackgroundColor(Color.BLUE);
        btnTraz.setBackgroundColor(Color.BLUE);
        btnEsquerda.setBackgroundColor(Color.BLUE);
        btnDireita.setBackgroundColor(Color.BLUE);


        controle2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mudaControle();
            }
        });



        btnFrente.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                trazCar = false;
                esquerdaCar = false;
                direitaCar = false;
                frenteCar = !frenteCar;

                if(frenteCar) {
                    btnFrente.setBackgroundColor(Color.YELLOW);
                    btnFrente.setTextColor(Color.BLACK);

                    btnTraz.setBackgroundColor(Color.BLUE);
                    btnEsquerda.setBackgroundColor(Color.BLUE);
                    btnDireita.setBackgroundColor(Color.BLUE);


                }else {
                    btnFrente.setBackgroundColor(Color.BLUE);
                    btnFrente.setTextColor(Color.WHITE);
                }


                patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar, velocidadeCar );
            }
        });

        btnTraz.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                trazCar = !trazCar;
                esquerdaCar = false;
                direitaCar = false;
                frenteCar = false;


                if(trazCar) {
                    btnTraz.setBackgroundColor(Color.YELLOW);
                    btnTraz.setTextColor(Color.BLACK);

                    btnFrente.setBackgroundColor(Color.BLUE);
                    btnEsquerda.setBackgroundColor(Color.BLUE);
                    btnDireita.setBackgroundColor(Color.BLUE);

                }else {
                    btnTraz.setBackgroundColor(Color.BLUE);
                    btnTraz.setTextColor(Color.WHITE);
                }
                patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar, velocidadeCar );
            }
        });


        btnEsquerda.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                trazCar = false;
                esquerdaCar = !esquerdaCar;
                direitaCar = false;
                frenteCar = false;

                if(esquerdaCar) {
                    btnEsquerda.setBackgroundColor(Color.YELLOW);
                    btnEsquerda.setTextColor(Color.BLACK);

                    btnFrente.setBackgroundColor(Color.BLUE);
                    btnTraz.setBackgroundColor(Color.BLUE);
                    btnDireita.setBackgroundColor(Color.BLUE);
                }else {
                    btnEsquerda.setBackgroundColor(Color.BLUE);
                    btnEsquerda.setTextColor(Color.WHITE);
                }

                patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar, velocidadeCar );
            }
        });




        btnDireita.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                trazCar = false;
                esquerdaCar = false;
                direitaCar = !direitaCar;
                frenteCar = false;

                if(direitaCar) {
                    btnDireita.setBackgroundColor(Color.YELLOW);
                    btnDireita.setTextColor(Color.BLACK);


                    btnFrente.setBackgroundColor(Color.BLUE);
                    btnTraz.setBackgroundColor(Color.BLUE);
                    btnEsquerda.setBackgroundColor(Color.BLUE);
                }else {
                    btnDireita.setBackgroundColor(Color.BLUE);
                    btnDireita.setTextColor(Color.WHITE);
                }

                patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar, velocidadeCar );
            }
        });




        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                velocidadeCar = i;
                texV.setText(String.valueOf(velocidadeCar + " KM/H"));

                patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar, velocidadeCar );
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {


            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });



    }

    public void mudaControle(){
        Intent intent = new Intent(this, SegundaTela.class);
        startActivity(intent);
    }
    public  void patchControllerCar(boolean frenteCar, boolean trazCar, boolean esquerdaCar, boolean direitaCar, int velocidadeCar){
        String apiUrl = "http://192.168.1.26:3000/api/data";
        JSONObject jsonBody = new JSONObject();


        try {
            jsonBody.put("frente", frenteCar);
            jsonBody.put("traz", trazCar);
            jsonBody.put("esquerda", esquerdaCar);
            jsonBody.put("direita", direitaCar);
            jsonBody.put("velocidade", String.valueOf(velocidadeCar));
            // Adicione outros campos conforme necessário
        } catch (JSONException e) {
            e.printStackTrace();
        }

        ApiManager apiManager = ApiManager.getInstance(this);



        apiManager.patchRequest(apiUrl, jsonBody.toString(), new ApiManager.VolleyCallback() {
            @Override
            public void onSuccess(String result) {
                //texV.setText(String.valueOf("Resultado " + result));
                Log.d(TAG, "Sucesso: " + result);
            }

            @Override
            public void onError(String error) {
                //texV.setText(String.valueOf("Resultado " + error));
                Log.e(TAG, "Erro: " + error);
            }
        });






    }



}
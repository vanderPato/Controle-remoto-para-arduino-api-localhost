package com.vanderlei.fazendo_teste_para_tirar_duvidas;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

public class SegundaTela extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();

    boolean frenteCar = false, trazCar = false, esquerdaCar = false, direitaCar = false;
    Button btnFrente, btnTraz,btnEsquerda, btnDireita, controle2;
    TextView texV;
    SeekBar seekBar;
    int velocidadeCar;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_segunda_tela);

        controle2 = findViewById(R.id.controle2);
        seekBar = findViewById(R.id.seekBar);
//        containee = findViewById(R.id.containee);
        btnFrente = findViewById(R.id.btnFrente);
        btnTraz = findViewById(R.id.btnTraz);
        btnEsquerda = findViewById(R.id.btnEsquerda);
        btnDireita = findViewById(R.id.btnDireita);
        texV = findViewById(R.id.texV);
        MainActivity mainActivity = new MainActivity();


        controle2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mudaControle();
            }
        });


        btnFrente.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                if(motionEvent.getAction() == MotionEvent.ACTION_DOWN){
                    frenteCar = true;
                    texV.setText("TRUE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar );

                }else if(motionEvent.getAction() == MotionEvent.ACTION_UP){
                    frenteCar = false;
                    texV.setText("FALSE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar  );

                }
                return false;
            }
        });



        btnTraz.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                if(motionEvent.getAction() == MotionEvent.ACTION_DOWN){
                    trazCar = true;
                    texV.setText("TRUE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar  );

                }else if(motionEvent.getAction() == MotionEvent.ACTION_UP){
                    trazCar = false;
                    texV.setText("FALSE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar ,velocidadeCar );

                }
                return false;
            }
        });




        btnEsquerda.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                if(motionEvent.getAction() == MotionEvent.ACTION_DOWN){
                    esquerdaCar = true;
                    texV.setText("TRUE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar  );

                }else if(motionEvent.getAction() == MotionEvent.ACTION_UP){
                    esquerdaCar = false;
                    texV.setText("FALSE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar ,velocidadeCar );

                }
                return false;
            }
        });





        btnDireita.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                if(motionEvent.getAction() == MotionEvent.ACTION_DOWN){
                    direitaCar = true;
                    texV.setText("TRUE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar ,velocidadeCar );

                }else if(motionEvent.getAction() == MotionEvent.ACTION_UP){
                    direitaCar = false;
                    texV.setText("FALSE");
                    mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar  );

                }
                return false;
            }
        });


        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                velocidadeCar = i;
                mainActivity.patchControllerCar(frenteCar,trazCar,esquerdaCar,direitaCar,velocidadeCar  );
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
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }






}
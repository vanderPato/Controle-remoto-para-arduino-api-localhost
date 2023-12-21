package com.vanderlei.fazendo_teste_para_tirar_duvidas;

import android.content.Context;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

public class ApiManager {

    private static ApiManager instance;
    private RequestQueue requestQueue;
    private static Context context;


    private ApiManager(Context ctx) {
        context = ctx;
        requestQueue = getRequestQueue();
    }

    public static synchronized ApiManager getInstance(Context context) {
        if (instance == null) {
            instance = new ApiManager(context);
        }
        return instance;
    }


    public RequestQueue getRequestQueue() {
        if (requestQueue == null) {
            requestQueue = Volley.newRequestQueue(context.getApplicationContext());
        }
        return requestQueue;
    }

    public <T> void addToRequestQueue(Request<T> req) {
        getRequestQueue().add(req);
    }



    public void patchRequest(String url, String jsonBody, VolleyCallback callback) {
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(
                Request.Method.PATCH,
                url,
                null,
                response -> callback.onSuccess(response.toString()),
                error -> callback.onError(error.toString())
        ) {
            @Override
            public byte[] getBody() {
                return jsonBody.getBytes();
            }
        };

        addToRequestQueue(jsonObjectRequest);
    }

    public interface VolleyCallback {
        void onSuccess(String result);
        void onError(String error);
    }
}

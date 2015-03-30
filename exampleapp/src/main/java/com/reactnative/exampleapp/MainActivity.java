package com.reactnative.exampleapp;

import android.app.Activity;
import android.os.Bundle;

import java.io.IOException;
import java.io.InputStream;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            InputStream is = getAssets().open("index.android.bundle");
            setContentView(new RCTRootView(this, is));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

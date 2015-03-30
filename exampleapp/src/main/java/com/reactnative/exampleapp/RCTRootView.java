package com.reactnative.exampleapp;

import android.content.Context;
import android.widget.LinearLayout;
import org.mozilla.javascript.Scriptable;

import java.io.IOException;
import java.io.InputStream;

public class RCTRootView extends LinearLayout {

    private String script;

    public RCTRootView(Context context, InputStream stream) {
        super(context);
        loadBundle(stream);
    }

    private void loadBundle(InputStream stream) {
        try {
            byte[] buffer = new byte[stream.available()];
            stream.available();

            stream.read(buffer);
            stream.close();

            this.script = new String(buffer);

            bundleFinishedLoading();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void bundleFinishedLoading() {
        RCTUIManager uiManager = new RCTUIManager(this);

        org.mozilla.javascript.Context ctx = org.mozilla.javascript.Context.enter();
        ctx.setOptimizationLevel(-1);
        Scriptable scope = ctx.initStandardObjects();
        scope.put("RCTUIManager", scope, uiManager);
        ctx.evaluateString(scope, script, "<cmd>", 1, null);
    }
}

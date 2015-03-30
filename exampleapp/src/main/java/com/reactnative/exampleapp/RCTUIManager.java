package com.reactnative.exampleapp;

import android.content.Context;
import android.util.SparseArray;
import android.view.View;

import java.lang.reflect.InvocationTargetException;

public class RCTUIManager {

    private RCTRootView rootView;
    private SparseArray<View> viewRegistry = new SparseArray<View>();

    public RCTUIManager(RCTRootView rootView) {
        this.rootView = rootView;
    }

    public void createView(int reactTag, String viewName) {
        try {
            View view = (View) Class.forName(viewName).getConstructor(Context.class).newInstance(rootView.getContext());
            viewRegistry.put(reactTag, view);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    public void manageChildren(int[] moveFromIndices,
                               int[] moveToIndices,
                               int[] addReactChildTags,
                               int[] addAtIndices) {
        for (int i = 0; i < addAtIndices.length; i++) {
            View view = viewRegistry.get(addReactChildTags[i]);
            if (view != null) {
                rootView.addView(view,
                        addAtIndices[i],
                        new RCTRootView.LayoutParams(
                                RCTRootView.LayoutParams.MATCH_PARENT,
                                RCTRootView.LayoutParams.WRAP_CONTENT
                        )
                );
            }
        }
    }
}

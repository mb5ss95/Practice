package com.example.jni_prac;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;
import com.example.jni_prac.databinding.ActivityMainBinding;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    // Used to load the 'jni_prac' library on application startup.
    static {
        System.loadLibrary("jni_prac");
    }

    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        // Example of a call to a native method
        TextView tv = binding.sampleText;
        MyStruct myStruct = getMyStruct();
        tv.setText(String.valueOf(myStruct.intValue));
        ArrayList<MyStruct> lists = getMyStructList();
        for(MyStruct l : lists){
            System.out.println(l.floatValue);
            System.out.println(l.intValue);
        }
    }

    /**
     * A native method that is implemented by the 'jni_prac' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();
    public native MyStruct getMyStruct();
    public native ArrayList<MyStruct> getMyStructList();
}
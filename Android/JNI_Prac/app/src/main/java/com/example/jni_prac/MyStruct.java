package com.example.jni_prac;

public class MyStruct {
    int intValue;
    float floatValue;

    public MyStruct(int intValue, float floatValue) {
        this.intValue = intValue;
        this.floatValue = floatValue;
    }

    public int getIntValue() {
        return intValue;
    }

    public void setIntValue(int intValue) {
        this.intValue = intValue;
    }

    public float getFloatValue() {
        return floatValue;
    }

    public void setFloatValue(float floatValue) {
        this.floatValue = floatValue;
    }
}

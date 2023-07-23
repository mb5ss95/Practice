#include <jni.h>
#include <string>
#include <vector>

// C++ struct 정의
struct MyStruct {
    int intValue;
    float floatValue;
    // 추가 필드 정의 가능
};

std::string getString(){
    return "Hello from C++ this is test!!";
}

extern "C" JNIEXPORT jstring JNICALL Java_com_example_jni_1prac_MainActivity_stringFromJNI(
        JNIEnv* env,
        jobject /* this */) {
    std::string hello = getString();
    return env->NewStringUTF(hello.c_str());
}

// native-lib.cpp

extern "C" JNIEXPORT jobject JNICALL Java_com_example_jni_1prac_MainActivity_getMyStruct(JNIEnv *env, jobject) {
    // 구조체 인스턴스 생성
    MyStruct myStruct;
    myStruct.intValue = 42;
    myStruct.floatValue = 3.14f;

    // Java에서 사용할 수 있도록 jclass와 jmethodID를 가져옴
    jclass myStructClass = env->FindClass("com/example/jni_prac/MyStruct");
    jmethodID constructor = env->GetMethodID(myStructClass, "<init>", "(IF)V");

    // Java에서 사용할 MyStruct 객체 생성
    jobject myStructObject = env->NewObject(myStructClass, constructor, myStruct.intValue, myStruct.floatValue);

    return myStructObject;
}


extern "C" JNIEXPORT jobject JNICALL Java_com_example_jni_1prac_MainActivity_getMyStructList(JNIEnv *env, jobject) {
    // MyStruct 객체들을 담을 std::vector 생성
    std::vector<MyStruct> myStructVector;

    // MyStruct 객체들 추가
    MyStruct myStruct1;
    myStruct1.intValue = 42;
    myStruct1.floatValue = 3.14f;
    myStructVector.push_back(myStruct1);

    MyStruct myStruct2;
    myStruct2.intValue = 100;
    myStruct2.floatValue = 2.71f;
    myStructVector.push_back(myStruct2);

    // ArrayList 클래스와 메서드 가져오기
    jclass arrayListClass = env->FindClass("java/util/ArrayList");
    jmethodID arrayListConstructor = env->GetMethodID(arrayListClass, "<init>", "()V");
    jmethodID arrayListAddMethod = env->GetMethodID(arrayListClass, "add", "(Ljava/lang/Object;)Z");

    // ArrayList 객체 생성
    jobject arrayListObject = env->NewObject(arrayListClass, arrayListConstructor);

    // MyStruct 클래스와 생성자 가져오기
    jclass myStructClass = env->FindClass("com/example/jni_prac/MyStruct");
    jmethodID myStructConstructor = env->GetMethodID(myStructClass, "<init>", "(IF)V");

    // MyStruct 객체들을 ArrayList에 추가
    for (const auto& myStruct : myStructVector) {
        jobject myStructObject = env->NewObject(myStructClass, myStructConstructor, myStruct.intValue, myStruct.floatValue);
        env->CallBooleanMethod(arrayListObject, arrayListAddMethod, myStructObject);
    }

    return arrayListObject;
}
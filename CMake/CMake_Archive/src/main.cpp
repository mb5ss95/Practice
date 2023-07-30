#include <iostream>
#include <string>
#include <myClass.h>

using namespace std;

int main(){
    string name = "MoonByungSoo";
    string age = "182838";
    string address = "TheEarth";
    MyClass myclass(name, age, address);

    cout << myclass.getName() << " " << myclass.getAge() << " " <<myclass.getAddress() << "\n";
    
}
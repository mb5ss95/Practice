#ifndef MYCLASS_H
#define MYCLASS_H

#include <string>

class MyClass {
public:
    MyClass(std::string name, std::string age, std::string address);
    std::string getName();
    std::string getAge();
    std::string getAddress();

private:
    std::string name;
    std::string age;
    std::string address;
};

#endif
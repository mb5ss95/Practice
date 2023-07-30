#include <iostream>
#include <string>
#include "myClass.h"

MyClass::MyClass(std::string name, std::string age, std::string address) {
    this->name = name;
    this->age = age;
    this->address = address;
}

std::string MyClass::getName() {
    return this->name;
}

std::string MyClass::getAge() {
    return this->age;
}

std::string MyClass::getAddress() {
    return this->address;
}
#include <iostream>
#include <string>

using namespace std;

class Human {
private:
	string name;

protected:
	string getName() {
		return this->name;
	}

public:
	Human(){}
	Human(string name):name(name){
		cout << name << " 인간 탄생!\n";
	}
	~Human() {
		cout << name << " 인간 소멸...\n";
	}
	virtual void printInfo() {};
};

class Programmer : Human {
private:
	string jobName;
	string companyName;

public :
	Programmer(string name, string companyName) : Human(name), companyName(companyName), jobName("Programmer") {
		cout << companyName << "에 다니는 " << jobName << " 탄생!\n";
	}
	virtual ~Programmer() {
		cout << companyName << "에 다니는 " << jobName << " 소멸...\n";
	}
	void printInfo() override {
		cout << companyName << "에 다니는 " << getName() << "입니다!\n";
	}
};

class Teacher : Human {
private:
	string jobName = typeid(this).name();
	string schoolName;
public:
	Teacher(string name, string schoolName) : Human(name), schoolName(schoolName), jobName("Programmer") {
		cout << schoolName << "에 다니는 " << jobName << " 탄생!\n";
	}
	virtual ~Teacher() {
		cout << schoolName << "에 다니는 " << jobName << " 소멸...\n";
	}
	void printInfo() override {
		cout << schoolName << "에 다니는 " << getName() << "입니다!\n";
	}
};

class Rocker : Human {
private:
	string jobName = typeid(this).name();
	string companyName;
public:
	Rocker(string name, string companyName) : Human(name), companyName(companyName), jobName("Programmer") {
		cout << companyName << "에 다니는 " << jobName << " 탄생!\n";
	}
	virtual ~Rocker() {
		cout << companyName << "에 다니는 " << jobName << " 소멸...\n";
	}
	void printInfo() override {
		cout << companyName << "에 다니는 " << getName() << "입니다!\n";
	}
};


int main() {
	Human** human = new Human*[3];
	string name[] = { "현대 오토에버", "늘푸른 고등학교", "Moon Bar"};

	for (int i = 0; i < 3; i++) {
		human[i] = (Human*) new Programmer("문병수", name[i]);
		human[i]->printInfo();
		delete human[i];
		cout << "\n";
	}

}
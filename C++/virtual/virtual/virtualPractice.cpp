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
		cout << name << " �ΰ� ź��!\n";
	}
	~Human() {
		cout << name << " �ΰ� �Ҹ�...\n";
	}
	virtual void printInfo() {};
};

class Programmer : Human {
private:
	string jobName;
	string companyName;

public :
	Programmer(string name, string companyName) : Human(name), companyName(companyName), jobName("Programmer") {
		cout << companyName << "�� �ٴϴ� " << jobName << " ź��!\n";
	}
	virtual ~Programmer() {
		cout << companyName << "�� �ٴϴ� " << jobName << " �Ҹ�...\n";
	}
	void printInfo() override {
		cout << companyName << "�� �ٴϴ� " << getName() << "�Դϴ�!\n";
	}
};

class Teacher : Human {
private:
	string jobName = typeid(this).name();
	string schoolName;
public:
	Teacher(string name, string schoolName) : Human(name), schoolName(schoolName), jobName("Programmer") {
		cout << schoolName << "�� �ٴϴ� " << jobName << " ź��!\n";
	}
	virtual ~Teacher() {
		cout << schoolName << "�� �ٴϴ� " << jobName << " �Ҹ�...\n";
	}
	void printInfo() override {
		cout << schoolName << "�� �ٴϴ� " << getName() << "�Դϴ�!\n";
	}
};

class Rocker : Human {
private:
	string jobName = typeid(this).name();
	string companyName;
public:
	Rocker(string name, string companyName) : Human(name), companyName(companyName), jobName("Programmer") {
		cout << companyName << "�� �ٴϴ� " << jobName << " ź��!\n";
	}
	virtual ~Rocker() {
		cout << companyName << "�� �ٴϴ� " << jobName << " �Ҹ�...\n";
	}
	void printInfo() override {
		cout << companyName << "�� �ٴϴ� " << getName() << "�Դϴ�!\n";
	}
};


int main() {
	Human** human = new Human*[3];
	string name[] = { "���� ���信��", "��Ǫ�� ����б�", "Moon Bar"};

	for (int i = 0; i < 3; i++) {
		human[i] = (Human*) new Programmer("������", name[i]);
		human[i]->printInfo();
		delete human[i];
		cout << "\n";
	}

}
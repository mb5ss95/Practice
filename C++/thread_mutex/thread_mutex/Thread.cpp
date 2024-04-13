#include "Thread.h"

Thread::Thread() {
	m_thread1 = std::thread(&Thread::subRun, this);
	m_thread2 = std::thread(&Thread::mainRun, this);
	while (1);
}

Thread::~Thread() {

}

void Thread::mainRun() {
	while (cnt < MAX_CNT) {
		m_mutex.lock();
		std::cout << cnt << "\n";
		m_mutex.unlock();
		std::this_thread::sleep_for(std::chrono::milliseconds(100));
	}
}

void Thread::subRun() {
	while (cnt < MAX_CNT) {
		m_mutex.lock();
		std::cout << "lock,,,\n";
		std::this_thread::sleep_for(std::chrono::milliseconds(500));
		cnt++;
		m_mutex.unlock();
		std::cout << "unlock,,,\n";
		std::this_thread::sleep_for(std::chrono::milliseconds(500));
	}
}

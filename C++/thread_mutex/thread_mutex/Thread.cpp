#include "Thread.h"

Thread::Thread() {
	m_thread = std::thread(&Thread::subRun, this);
}

Thread::~Thread() {

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

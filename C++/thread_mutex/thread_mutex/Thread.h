#pragma once
#include <iostream>
#include <thread>
#include <chrono>
#include <mutex>

#define MAX_CNT 100000000

class Thread {
public:
	std::mutex m_mutex;
	std::thread m_thread;
	int cnt = 0;

	Thread();
	~Thread();
	void subRun();
};
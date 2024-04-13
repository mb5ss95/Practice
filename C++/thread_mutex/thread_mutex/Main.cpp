#include <iostream>
#include "Thread.h"

void mainRun(int &cnt) {
	while (cnt < MAX_CNT) {
		std::cout << cnt << "\n";
		std::this_thread::sleep_for(std::chrono::milliseconds(100));
	}
}

int main() {
	Thread thread;
	mainRun(thread.cnt);
	return 0;
}
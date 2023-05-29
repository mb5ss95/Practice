#include<stdio.h>
#include<pthread.h>
#include<unistd.h>
void* abc(void *p){
    int *a = (int*)p;
    int b = *(int*)p;
    while(1){
        printf("[thread] pointer a = %d, b = %d\n", *a, b);
        sleep(1);
    }
}
int main(){
    pthread_t t1;

    int gv = 1;
    pthread_create(&t1, NULL, abc, &gv);

    while(1){
        printf("[main] %d\n", gv);
        gv++;
        sleep(1);
    }

    pthread_join(t1, NULL);

    return 0;
}
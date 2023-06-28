#include <bits/stdc++.h>
using namespace std;

pair<char*, int> removeUtil(char* str, char* last_removed, int steps) {
    if (str[0] == '\0' || str[1] == '\0')
        return make_pair(str, steps);

    if (str[0] == str[1]) {
        *last_removed = str[0];
        while (str[1] && str[0] == str[1])
            str++;
        str++;
        return removeUtil(str, last_removed, steps + 1);
    }

    char* rem_str = removeUtil(str + 1, last_removed, steps + 1).first;

    if (rem_str[0] && rem_str[0] == str[0]) {
        *last_removed = str[0];
        return make_pair(rem_str + 1, steps + 1);
    }

    if (rem_str[0] == '\0' && *last_removed == str[0])
        return make_pair(rem_str, steps);

    rem_str--;
    rem_str[0] = str[0];
    return make_pair(rem_str, steps + 1);
}

int remove(char* str) {
    char last_removed = '\0';
    return removeUtil(str, &last_removed, 0).second;
}

int main() {
    char str1[] = "acbbca";
    cout << remove(str1) << endl;
    return 0;
}

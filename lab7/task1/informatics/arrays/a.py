s = int(input())
a = []
for i in range(s):
    a.append(int(input()))
for i in range(s):
    if(i % 2 == 0):
        print(a[i], end =" ")
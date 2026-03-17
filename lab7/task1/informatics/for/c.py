
a = int(input())
b = int(input())

for i in range(a, b + 1, 1):
    if( i % pow(i , 0.5) == 0):
        print(i)
def xor(a , b):
    if (a == 0 and b == 0):
        print(0)
    elif(a == 1 and b == 0):
        print(1)
    elif(a == 0 and b == 1):
        print(1)
    else:
        print(0)

a = int(input())
b = int(input())

xor (a, b)
a = int(input())
arr = []

s = 0

for i in range(a):
    num = int(input())
    arr.append(num)

for i in range(1, len(arr)): 
    if arr[i] > arr[i-1]:  
        s = s + 1

print(s)
a = int(input())
arr = list(map(int, input().split()))

s = 0
for i in arr:
    if (i > 0):
        s = s + 1
print(s)
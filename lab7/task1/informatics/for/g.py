a = int(input())

mini = 0

for i in range(2, a + 1, 1):
    if (a % i == 0):
        mini = i
        break
print(mini)
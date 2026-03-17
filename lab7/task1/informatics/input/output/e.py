v = int(input())
t = int(input())

s = v * t

otm = s % 109

if otm < 0:
    otm+=109
 

print(otm)



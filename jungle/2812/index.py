import sys

N,M = map(int,sys.stdin.readline().split())
numbers = list(map(int,sys.stdin.readline().strip()))

result = []
out = M

for i in range(N):
    while out > 0 and len(result) > 0:
        if(result[-1] < numbers[i]):
            result.pop()
            out -= 1
        else:
            break
    result.append(numbers[i])

# for i in result:
#     print(i, end='')

for i in range(N-M):
    print(result[i],end="")
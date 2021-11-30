import sys

N,M = map(int,sys.stdin.readline().split())
numbers = list(map(int,sys.stdin.readline().strip()))

result = []
out = M # 삭제할 숫자의 수

for i in range(N):
    while out > 0 and len(result) > 0: # 삭제할 수 가 남아있고, result도 0보다 크면,
        if(result[-1] < numbers[i]): # result[-1]은 아직 큰 수라고 확정이 나지 않은 수,
            result.pop() # 작으면 계속 팝
            out -= 1 # 넣었던 것을 뺏기 때문에, out 카운트 -= 1
        else:
            break
    result.append(numbers[i]) # 처음 result에 append

# for i in result:
#     print(i, end='')

for i in range(N-M):
    print(result[i],end="")
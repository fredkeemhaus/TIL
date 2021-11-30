import sys
from collections import deque

n = int(sys.stdin.readline())

dq = deque()

def solution(number):
    for i in range(1, number + 1):
        dq.append(i)

    while len(dq) > 1:
        dq.popleft()
        dq.append(dq.popleft())

    print(dq.pop())

solution(n)
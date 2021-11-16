
import sys
from collections import deque

n = int(input())
dq = deque()

for _ in range(n):
    cmd = list(map(str, sys.stdin.readline().split()))
    if cmd[0]=='push':
        dq.append(cmd[1])
    elif cmd[0]=='pop':
        if dq:
            print(dq.popleft())
        else:
            print("-1")
    elif cmd[0]=='size':
        print(len(dq))
    elif cmd[0]=='empty':
        if len(dq)==0:
            print(1)
        else:
            print(0)
    elif cmd[0]=='front':
        if dq:
            print(dq[0])
        else:
            print("-1")
    elif cmd[0]=='back':
        if dq:
            print(dq[-1])
        else:
            print("-1")

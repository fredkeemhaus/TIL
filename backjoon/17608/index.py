import sys
input = sys.stdin.readline
n = int(input())

arr = [int(input()) for _ in range(n)]

ans = 0
nowMax = 0
while arr:
    item = arr.pop()
    if item > nowMax:
        nowMax = item
        ans+=1
print(ans)
# m, n, l = map(int, input().split())
# shooters = list(map(int, input().split()))
# animals = []

# for _ in range(n):
#     x, y = map(int, input().split())
#     if y <= l:
#         animals.append((x, y))
        
# shooters.sort()
# animals.sort(key=lambda axis: axis[0])

# ans = 0
# idx = 0

# for i in range(len(animals)):
#     left, right = idx, len(shooters)-1
#     mid = 0
#     while left <= right:
#         mid = (left + right)//2
#         if shooters[mid] <= animals[i][0]:
#             if len(shooters) - 1 == mid or shooters[mid+1] > animals[i][0]:
#                 break
#             left = mid + 1
#         else:
#             right = mid - 1
#     idx = mid
#     if abs(animals[i][0] - shooters[mid]) + animals[i][1] <= l:
#         ans += 1
#     elif len(shooters) > mid+1 and abs(animals[i][0] - shooters[mid+1]) + animals[i][1] <= l:
#         ans += 1
# print(ans)

import sys

input = sys.stdin.readline

m, n, l = map(int, input().split())
man = list(map(int, input().split()))
man.sort()

ani = [list(map(int, input().split())) for i in range(n)]

cnt = 0

for a,b in ani:
    start = 0
    end = len(man)-1
    while start < end:
        mid = (start+end) // 2

        if man[mid] < a:
            start = mid+1
        else:
            end = mid
            
    if abs(man[end] - a) + b <= l or abs(man[end - 1] - a) + b <= l:
        cnt += 1

print(cnt)
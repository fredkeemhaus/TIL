import sys

N = int(sys.stdin.readline())
circles = []

for _ in range(N):
    x, r = map(int, sys.stdin.readline().split())
    circles.append([(x - r), 'L'])
    circles.append([(x + r), 'R'])

circles.sort(key=lambda x : (-x[0], x[1]), reverse=True)

stack = []
ans = 1 # 기본 1개

for cir in circles:
    if cir[1] == 'L':
        stack.append(cir)
    else:
        total_len = 0
        while stack and stack[-1][1] != 'L':
            total_len += stack.pop()[0]

        if total_len == cir[0] - stack[-1][0]:
            ans += 2
        else:
            ans += 1
        stack.append([cir[0] - stack.pop()[0], 'C'])

print(ans)
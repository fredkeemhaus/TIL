from collections import deque

n = int(input())
conenct_com = int(input())

dic = {}

for i in range(int(n)):
    dic[i+1] = set()

for _ in range(conenct_com):
    a, b = map(int, input().split())

    dic[a].add(b) # 노드간 이어진 branch
    dic[b].add(a) # 노드간 이어진 branch

def dfs(start, dic):
    for i in dic[start]:
        if i not in visited:
            visited.append(i)
            dfs(i ,dic)

visited = []
dfs(1, dic)
print(len(visited)-1)
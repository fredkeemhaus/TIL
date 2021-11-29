# 기본적인 형태의 그래프를 단순히 DFS와 BFS로 탐색한다.
# 이 문제에서는 '정점 번호가 작은 것'을 먼저 방문해야 합니다.
# 모든 노드와 간선을 차례대로 조회하여 O(N + M)의 시간 복잡도로 문제를 해결해야합니다.
# 큐 (Queue) 구현을 위해 collections 라이브러리의 deque(덱)를 사용합니다.

from collections import deque

def dfs(v):
    print(v, end=' ')
    visited[v] = True
    for e in adj[v]:
        if not(visited[e]):
            dfs(e)

def bfs(v):
    q = deque([v])
    while q:
        v = q.popleft()
        if not(visited[v]):
            visited[v] = True
            
            print(v, end=' ')
            for e in adj[v]:
                if not visited[e]:
                    q.append(e)

n, m, v = map(int, input().split())
adj = [[] for _ in range(n + 1)]

for _ in range(m):
    x, y = map(int, input().split())
    adj[x].append(y)
    adj[y].append(x)


for e in adj:
    e.sort()

visited = [False] * (n + 1)
dfs(v)
print()
visited = [False] * (n + 1)
bfs(v)
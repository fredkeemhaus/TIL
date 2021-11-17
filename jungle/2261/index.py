# 가장 가까운 두점 .
import sys
input = sys.stdin.readline

n = int(input())
pos = [list(map(int, input().split())) for i in range(n)]

# x 축 기준정렬
pos.sort()

# 거리계산 함수
def dist(p1, p2):
    return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2

def dac(start, end):
    # 시작, 끝 점이 동일하면 점이 하나이므로 최대값 리턴
    if start == end:
        return float('inf')
    # 점이 두개 남으면 사이의 거리 리턴
    if end - start == 1:
        return dist(pos[start], pos[end])
    # 분할 정복 파트
    mid = (start + end) // 2
    # 재귀 사용. 여기서 dl, dr 구하게 됨. 
    min_dist = min(dac(start, mid), dac(mid, end))
    # dl, dr 을 비교하여 얻은 minimun d 를 가지고 다음단계로 넘어간다.
    #x 축 기준으로 후보 점들을 찾음
    target_pos = []
    for i in range(start, end+1):
        # x 축상의 거리가 min d 보다 크기만 해도 이미 dist 상으로 구하는 d 도 더 크다.
        if (pos[mid][0] - pos[i][0])**2 < min_dist:
            target_pos.append(pos[i])
    
    # x 축 기준으로 찾아온 후보 점들을 가지고
    #y 축 기준 정렬
    target_pos.sort(key=lambda x: x[1])

    # y 축 기준으로 후보 점들 사이의 거리 비교 
    t = len(target_pos)
    # 이 이중 포문을 다 돌게되면 시간초과가 날 확률이 높다. 
    # 하지만 이미 x 축으로 후보들을 추린 상태에서 아래 break 장치를 통해 절대 시간초과가 나지 않게된다. 
    # 'closest pair' 이론 참고. 
    for i in range(t-1):
        for j in range(i+1, t):
            if (target_pos[i][1] - target_pos[j][1]) ** 2 < min_dist:
                # 가능한 해당 범위 안에 들어온 점들을 대상으로 min_dist 값 갱신. 
                min_dist = min(min_dist, dist(target_pos[i], target_pos[j]))
            else:
                # y 축 기준 정렬을 해놓은 상태이기 때문에 최소값보다 큰 값이 오자마자 break를 해준다. 
                break
            # 현재 후보 점이 다음 점과 최소 거리보다 멀다면 더 볼 필요가 없음. 
    return min_dist

print(dac(0, n-1))
 



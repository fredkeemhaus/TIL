import sys
import heapq
input = sys.stdin.readline

n = int(input())

card_list = []

for _ in range(n):
    heapq.heappush(card_list, int(sys.stdin.readline()))

else:
    answer = 0
    while len(card_list) > 0: # 0개 경우 비교 x
        try:
            result_1 = heapq.heappop(card_list) # 가장 작은 값
            result_2 = heapq.heappop(card_list) # 두번째로 작은 값
            answer += result_1 + result_2 # 더하기
            heapq.heappush(card_list, result_1 + result_2) # 다시 푸시 ( [40, 30] )
        except:
            continue # 한개일 경우 그냥 지나가기

    print(answer)
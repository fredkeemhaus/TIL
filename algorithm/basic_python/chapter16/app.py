# 순차 탐색

from random import *

rand_data_list = list()

for num in range(10):
    rand_data_list.append(randint(1, 100))

print(rand_data_list)

def sequencial(data_list, search_data):
    for index in (range(len(data_list))):
        if data_list[index] == search_data:
            return index

    return -1

print(sequencial(rand_data_list, 20))

# 알고리즘 분석
# 최악의 경우 리스트 길이가 n일 때, n번 비교해야 함
# O(n)
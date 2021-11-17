# 대표적인 정렬5: 퀵 정렬 (quick sort)
# 1. 퀵 정렬 (quick sort)이란?
# - 정렬 알고리즘의 꽃
# - 기준점(pivot 이라고 부름)을 정해서, 기준점보다 작은 데이터는 왼쪽 (left), 큰 데이터는 오른쪽(right)으로 모으는 함수를 작성함
# 각 왼쪽(left), 오른쪽(right)은 재귀용법을 사용해서 다시 동일 함수를 호출하여 위 작업을 반복함
# 함수는 왼쪽(left) + 기준점(pivot) + 오른쪽(right)을 리턴함

# 2. 어떻게 코드로 만들까?

def qsort(data):
    if len(data) <= 1: return data
    left, right = [], []
    pivot = data[0]
    
    for index in range(1, len(data)):
        if pivot > data[index]:
            left.append(data[index])
        else:
            right.append(data[index])

    return qsort(left) + [pivot] + qsort(right)

print(qsort([1,6,5,2,3,10]))

# list comprehension을 사용해서 더 깔끔하게 작성해보기

def qsort(data):
    if len(data) <= 1:
        return data
    
    pivot = data[0]
    
    left = [ item for item in data[1:] if pivot > item ]
    right = [ item for item in data[1:] if pivot <= item ]

    return qsort(left) + [pivot] + qsort(right)

print(qsort([1,6,5,2,3,10]))


# 1. 병합 정렬 (merge sort)
# - 재귀용법을 활용한 정렬 알고리즘
# -- 1. 리스틀르 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
# -- 2. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
# -- 3. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

# def merge(left, right):
#     # if left[lp] >

def mergesplit(data):
    if len(data) <= 1:
        return data
    medium = int(len(data) / 2)
    left = mergesplit(data[:medium])
    right = mergesplit(data[medium:])

    return left, right

print(mergesplit([1,25,7,24,6,8,9,10]))
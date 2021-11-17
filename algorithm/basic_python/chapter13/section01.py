# recursive call, 재귀 호출
# 고급 정렬 알고리즘에서 재귀 용법을 사용하므로, 고급 정렬 알고리즘을 익히기 전에 재귀 용법을 익혀야한다.

# 1. 재귀 용법 (recursive call, 재귀 호출)
# - 함수 언어에서 동일한 함수를 호출하는 형태
# - 여러 알고리즘 작성시 사용되므로 익숙해져야 함

# 예제
# - 팩토리얼을 구하는 알고리즘을 Recursive Call을 활용해서 알고리즘 작성

# 방법 1
def factorial(num):
    if num > 1:
        return num * factorial(num - 1)
    else:
        return num

for num in range(10):
    print(factorial(num))

# 방법 2
def factorial(num):
    if num <= 1:
        return num
    return num * factorial(num - 1)

for num in range(10):
    print(factorial(num))
    
# factorial(n)은 n - 1번의 factoiral() 함수를 호출해서, 곱셈을 함
# - 일종의 n-1번 반복문을 호출한 것과 동일
# - factorial() 함수를 호출할 때마다 지역변수 n이 생성됨
# 시간 복잡도/공간 복잡돈느 O(n-1)이므로 결국, 둘다 O(n)
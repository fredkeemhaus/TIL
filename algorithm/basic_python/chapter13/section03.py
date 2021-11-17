# 정수 n에 대해
# n이 홀수이면 3 * n + 1을 하고
# n이 작수이면 n을 2로 나눕니다.
# 이렇게 계속 진행해서 n이 결국 1이 될 때까지 2와 3의 과정을 반복

def func(n):
    print(n)
    if n == 1:
        return n
    
    if n % 2 == 1:
        return (func((3 * n) + 1))
    else:
        return (func(int(n / 2)))


print(func(3))

# 정수 4를 1, 2, 3의 조합으로 나타내는 방법은 다음과 같이 총 7가지가 있다.

def func(data):
    if data == 1:
        return 1
    elif data == 2:
        return 2
    elif data == 3:
        return 4

    return func(data - 1) + func(data - 2) + func(data - 3)

print(func(5))

# 정수 n이 입력으로 주어졌을 때, n을 1, 2, 3의 합으로 나타낼 수 있는 방법의 수르 구하시오.
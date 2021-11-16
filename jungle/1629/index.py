import sys

A, B, C = map(int, sys.stdin.readline().split())

print(A, B, C)


def solution(a, b):
    if b == 1: # b의 값이 1이면 a % C를 return한다.
        return a % C
    else:
        temp = solution(a, b // 2) # a^(b // 2)를 미리 구한다.
        if b % 2 == 0:
            return temp * temp % C # b가 짝수인 경우
        else:
            return temp * temp * a % C # b가 홀수인 경우

print(solution(A, B))

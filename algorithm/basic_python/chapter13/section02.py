# 4.재귀 용법을 활용한 프로그래밍 연습

# 1 ~ num까지의 곱을 구해라

# def multiple(num):
#     return_value = 1
#     for index in range(1, num + 1):
#         return_value = return_value * index

#     return return_value

# def multiple(num):
#     if num <= 1:
#         return num
#     else:
#         return num * multiple(num - 1)

# print(multiple(10))

# # 숫자로 이루어진 리스트의 합을 구하라

# import random
# data = random.sample(range(100), 10)

# print(data)

# def sum_list(data):
#     if len(data) <= 1:
#         return data[0]
#     return data[0] + sum_list(data[1:])

# print(sum_list(data))

def palindrome(string):
    if len(string) <= 1:
        return True
    
    if string[0] == string[-1]:
        return palindrome(string[1:-1])
    else:
        return False

print(palindrome('level'))

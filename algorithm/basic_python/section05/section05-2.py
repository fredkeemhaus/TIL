# Section05-2
# 파이썬 흐름제어 (반복문)
# 반복문 실습

# 코딩의 핵심 -> 조건 해결 중요
# 기본 반복문: for, while

v1 = 1
while v1 < 11:
    print("v1 is:", v1)
    v1 += 1

for v2 in range(10):
    print("v2 is:", v2)

for v3 in range(1, 11):
    print("v3 is:", v3)

# 1 ~ 100 합
sum1 = 0
cnt1 = 0

while cnt1 <= 100:
    sum1 += cnt1
    cnt1 += 1

print('1 ~ 100 : ', sum1)
print('1 ~ 100 : ', sum(range(1, 101)))
print('1 ~ 100 : ', sum(range(1, 101, 2))) # 2씩 건너뛰어라

# 시퀀스(순서가 있는)자료형 반복
# 문자열, 리스트, 튜플, 집합, 사전
# iterable 리턴 함수 : range, reverse, enumerate, filter, map, zip

names = ["Kim", "Park", "Cho", "Choi", "Yoo"]
for name in names:
    print("You are ", name)

word = "dreams"
for s in word:
    print('Word: ', s)


my_info = {
    "name": "Kim",
    "age": 33,
    "city": 'seoul'
}

for key in my_info:
    print("my_info: ", key) # key 값 호출이 기본

for key in my_info.values():
    print("my_info: ", key) # value 호출

for key in my_info.keys():
    print("my_info: ", key) # key 호출

for k, v in my_info.items():
    print("my_info: ", k, v) # key, value 호출

name = "KennRY"

for n in name:
    if n.isupper(): # 대문자
        print(n.lower()) # 소문자
    else:
        print(n.upper()) # 대문자


# break
numbers = [14, 3, 4, 7, 10, 24, 17, 2, 37, 15, 34, 36, 38]

for number in numbers:
    if number == 33:
        print('found: 33!')
        break
    else:
        print('not found: 33!')

# for - else 구문 (반복문에서 정상적으로 수행된 경우 else 블럭 수행)
for number in numbers:
    if number == 33:
        print('found: 33!')
        break
    else:
        print('not found: 33!')

else:
    print("Not Found 33....") # 결국 다 뒤졌는데 못찾았어


# continue

lt = ["1", 2, 5, True, 4.3, complex(4)]

for v in lt:
    if type(v) is float:
        continue
    print("타입: ", type(v))

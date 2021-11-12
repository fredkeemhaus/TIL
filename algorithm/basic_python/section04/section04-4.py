# Section04-4
# 파이썬 데이터 타입(자료형)
# 딕셔너리, 집합 자료형

# 딕셔너리(Dict) : 순서x, 중복x, 수정o, 삭제o

# Key, Value (Json) -> MongoDB
# 선언
a = {"name" : "kim", "phone" : "010-7777-7777", "birth" : 870214}
b = {0: 'Hello Python', 1: 'Hello Coding'}
c = {'arr': [1, 2, 3, 4, 5]}

print(type(a))

# 출력
print(a['name']) # 없으면 에러
print(a.get('name'))
print(a.get('name1')) # 없어도 에러는 안남 
print(c['arr'][1:3])

# 딕셔너리 추가
a['address'] = 'seoul'
print(a)
a['rank'] = [1, 2, 3, 4]
a['rank2'] = (1, 2, 3,)
print(a)

# keys, values, items

print(a.keys()) # key list
print(list(a.keys())) # list

temp = list(a.keys())
print(temp[1:3])

print(a.values())
print(list(a.values()))

print(a.items())
print(2 in b)
print('name2' not in a)

# 집합 (Sets) (순서x, 중복x)
a = set()
b = set([1, 2, 3, 4])
c = set([1, 4, 5, 6, 6])

print(type(a))
print(c)

t = tuple(b)
print(t)

l = list(b)
print(l)

s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

print(s1.intersection(s2)) # 교집합
print(s1 & s2) # short cut

print (s1 | s2) # 합집합
print(s1.union(s2)) # short cut

print (s1 - s2) # 차집합
print(s1.difference(s2)) # short cut

# 추가 & 제거
s3 = set([7, 8, 10 ,15])
s3.add(18)
s3.add(7) # 중복x
print(s3)

s3.remove(15) # value 값
print(s3)


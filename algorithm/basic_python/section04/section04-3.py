# Section04-3
# 파이썬 데이터 타입(자료형)
# 리스트, 튜플

# 리스트 (순서O, 중복O, 수정O, 삭제O)

a = []
b = list()
c = [1, 2, 3, 4]
d = [10, 100, 'Pen', 'Banana', 'Orange']
e = [10, 100, ['Pen', 'Banana', 'Orange']]

# 인덱싱
print(d[3])
print(d[-2])
print(d[0] + d[1]) 
print(e[2][1]) # banana
print(e[-1][-2]) # banana

# 슬라이싱
print(d[0:3]) # pen
print(e[2][1:3]) 

# 연산
print(c + d)
print(c * 3)
print(str(c[0]) + 'hi')

# 리스트 수정, 삭제
c[0] = 77
print(c) # 값 변경

c[1:2] = [100, 1000, 10000]
print(c)
c[1] = ['a', 'b', 'c']
print(c)

del c[1]
print(c)

del c[-1] # 인덱스를 감지
print(c)
print()
print()

# 리스트 함수
y = [5, 2, 3, 1, 4]
print(y)

y.append(6)
print(y
)
y.sort()
print(y)

y.reverse()
print(y)

y.insert(2, 7)
print(y)

y.remove(2) # value를 삭제
print(y)

y.pop()
print(y)

ex = [88, 77]
y.append(ex) # list 자체가 들어감
y.extend(ex) # list 안에 있는 value만 넣기
print(y)

# 삭제: del, remove, pop

# 튜플 (순서o, 중복o, 수정x, 삭제x)

a = ()
b = (1,)
c = (1, 2, 3, 4)
d = (100, 100, ('a', 'b', 'c'))

print(c[2])
print(c[3])
print(d[2][1])

print(d[2:])
print(d[2][0:2])

print(c + d)
print(c * 3)
print()
print()

# 튜플 함수
z = (5, 2, 1, 3, 4)
print(z)
print(3 in z)
print(z.index(5)) # value의 index 반환
print(z.count(1)) # value의 카운트

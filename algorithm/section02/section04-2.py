# Section04-2
# 문자열, 문자열 연산, 슬라이싱

str1 = "I am boy."
str2 = 'Niceman'
str3 = ''
str4 = str('ac')

print(len(str1), len(str2), len(str3), len(str4))


escape_str1 = "Do you have a \"big collection\""
print(escape_str1)
escape_str2 = "Tab\tTab\tTab"
print(escape_str2)


# Raw String
raw_s1 = r'C:\Programs\Test\Bin'
print(raw_s1)
raw_s2 = r'\\n\\n'
print(raw_s2)

# 멀티라인
multi = \
"""
문자열

멀티라인

테스트
"""
print(multi)

# 문자열 연산
str_o1 = '*'
str_o2 = 'abc'
str_o3 = 'def'
str_o4 = 'Niceman'

print(str_o1 * 100)
print(str_o2 + str_o3)
print(str_o1 * 3)
print('a' in str_o4)
print('f' in str_o4)
print('z' not in str_o4)

# 문자열 형 변환
print(str(77) + 'a')
print(str(10.4))

# 문자열 함수
# 참고 : https://www.w3schools.com/python/python_ref_string.asp

# a = 'niceman'
# b = 'orange'

# print(a.islower()) # 소문자
# print(b.endswith('e')) # 끝이 e
# print(a.capitalize())
# print(a.replace('nice','good'))
# print(list(reversed(b)))

a = 'niceman'
b = 'orange'

print(a[0:3]) # 0,1,2,3전까지 nic
print(a[0:4]) # nice
print(a[0:len(a)]) # niceman
print(a[:4])
print(a[:])

print(b[0:4:2]) # oa
print(b[1:-2]) # ran
print(b[::-1]) # egnaro

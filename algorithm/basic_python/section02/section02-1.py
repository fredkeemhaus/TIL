# Section02 - 1
# 파이썬 기초 코딩
# Print 구문의 이해
# https://python-course.eu/python-tutorial/formatted-output.php

# 기본출력

print('Hello Python')
print("Hello Python")
print("""Hello Python""") # " " 몇개를 추가해도 구분이 없다.
print('''Hello Python''') # ' ' 몇개를 추가해도 구분이 없다.

print()

# Seperator 옵션 사용
print('T', 'E', 'S', 'T') # T E S T
print('T', 'E', 'S', 'T', sep='') # TEST
print('2019', '02', '19', sep='-') # 2019-02-09
print('niceman', 'google.com', sep='@') # niceman@google.com

# end 옵션 사용
print('Welcome To', end=' ') # 줄 바꿈이 끝나지 않는다.
print('the black paradise', end=' ')
print('piano notes')

print()

# format 사용, [], {}, ()
print('{} and {}'.format('You', 'Me'))
print("{0} and {1} and {0}".format("You", "Me")) # You and Me and You
print("{a} are {b}".format(a='You', b='Me')) # You are me

# %s: 문자, %d: 정수, %f: 실수
print("%s's favorite Number is %d" % ('Fred', 7))

print("Test1: %5d, Price: %4.2f" % (776, 6534.123))
print("Test1: {0: 5d}, Price:{1: 4.2f}".format(776, 6534.123))
print("Test1: {a: 5d}, Price:{b: 4.2f}".format(a=776, b=6534.123))

print("'You'")
print('\'You\'')
print("'You'")
print("""'You'""")
print('\\You\\\n\n\n\n\n') # \n 엔터 한번
print('\t\t\ttest') # \t Tab 한번
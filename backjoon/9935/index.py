str = input()    # 전체 문자열
del_str = input()      # 폭발 문자열 
last_str = del_str[-1] # 폭발 문자열의 마지막 글자
stack = []
length = len(del_str)  # 폭발 문자열의 길이

for char in str:
    stack.append(char)
    if char == last_str and ''.join(stack[-length:]) == del_str: # 뒤에서 두번째가 del_str이면 del
        del stack[-length:]

answer = ''.join(stack)

if answer == '':
    print("FRULA")
else:
    print(answer)

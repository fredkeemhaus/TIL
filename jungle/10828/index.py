import sys
n = int(sys.stdin.readline())

stack=[]
for i in range(n):
    input = sys.stdin.readline().split()

    if input[0]=='push':
        stack.append(input[1])
    elif input[0]=='pop':
        if len(stack)==0:
            print(-1)
        else:
            print(stack.pop())
    elif input[0] == 'size':
        print(len(stack))
    elif input[0] == 'empty':
        if len(stack)==0:
            print(1)
        else:
            print(0)
    elif input[0] == 'top':
        if len(stack)==0:
            print(-1)
        else:
            print(stack[-1])
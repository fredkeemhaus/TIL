import sys

sys.setrecursionlimit(10**9)
def f(start, end):
    if start > end:
        return
    else:
        root = pre[start]

        div = end + 1 # division

        for pos in range(start+1, end+1):
            if root < pre[pos]:
                div = pos
                break

        f(start+1, div-1)
        f(div, end)
        print(root)

pre = []
while True:
    try:
        pre.append(int(sys.stdin.readline()))
    except:
        break
if pre:
    f(0, len(pre)-1)
import math, time
primelist = []
timelist = []

def prime(n):
    y = math.ceil(math.sqrt(n))
    for x in range(2, n+1):
                    start = time.time()
                    for i in range(2, y+1):
                        if i != x and x % i == 0:
                            break
                        else:
                            primelist.append(x)
                            end = time.time()
                            timelist.append(end - start)


prime(100)
print(primelist)
print(timelist)

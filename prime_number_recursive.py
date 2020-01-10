import numpy as np
n = 150
P = np.zeros((n+1), dtype = int) # n+1: P[0] = 0, P[150] = 150

P[0] = 1 
P[1] = 1

def prime(i):
	if i > n:
		return # algorithm terminates
	else:
		for j in range (2, n//i+1):
			P[i*j] = 1
			prime(i+1)

prime(2) # set i to 2

for x in range(0, n+1):
	if P[x] == 0:  # if P[x] = 0, then x is prime
		print(x)


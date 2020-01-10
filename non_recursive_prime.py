import numpy as np
n = 150
P = np.zeros((n+1), dtype = bool)
for i in range(2, n):
	j = 2 
	while(i * j <= n): 
		P[i * j] = 1 
		j += 1 
	if P[i] == 0:
		print (i)


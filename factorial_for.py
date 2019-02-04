n = 5
if n == 0:
	n = 1
else:
	for i in range(1, n-1):
		n = n * (i + 1)
		i = i + 1
print(n)

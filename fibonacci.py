def fibonacci1(n):
    
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci1(n - 1) + fibonacci1(n - 2)

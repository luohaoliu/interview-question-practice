def most_frequent_outcome(d1, d2):
    len_ans = abs(d1 - d2) + 1
    mi = min(d1, d2)
    ans = [mi + i for i in range(1, len_ans + 1)]
    return ans

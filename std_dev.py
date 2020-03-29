def std_dev(numbers):
    if len(numbers) > 0:
        avg = mean(numbers)
        var = sum([(i - avg) ** 2 for i in numbers]) / len(numbers)
        ans = sqrt(var)
        return ans
    return float('NaN')

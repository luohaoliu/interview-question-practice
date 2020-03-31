# Calculate the Jaccard similarity between two sets: the size of intersection divided by the size of union

def jaccard(a, b):
    return len(a & b) / len(a | b)

# TODO: Tail recursion?

# 1. Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.

class LL:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def findInteger(head, target):
    if head is None:
        return False

    if head.value == target:
        return True
    return findInteger(head.next, target)

# l = LL(1, LL(2, LL(3, LL(4))))
# print(l)

# print(findInteger(l, 2), 'expected true')
# print(findInteger(l, 7), 'expected false')


# 2. counting num times element occurs in a linked list

# not tail recursive
def count(head, target):
    if head is None:
        return 0

    if head.value == target:
        return 1 + count(head.next, target)
    else:
        return count(head.next, target)

# Languages that support Tail Call Optimization (Tail Recursion)
# Python NOT
# JS YES
# Java YES


# tail recursive
def count2(head, target, count=0):
    # <--
    if head is None:
        return count
    if head.value == target:
        return count2(head.next, target, count + 1)
    else:
        return count2(head.next, target, count)


l = LL(1, LL(2, LL(2, LL(3))))
print(l)

print(count2(l, 1), 'expected 1')
print(count2(l, 2), 'expected 2')
print(count2(l, 3), 'expected 1')

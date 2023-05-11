
'''
Print all K-length binary strings without consecutive 1s

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.
 
EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101
 
Explore:
maxLen > 0 and cannot be null
return strings, not integers
we have to separate them by new lines 
order we return the strings in does not matter 

Brainstorm:
- init printBinaryWithoutConsecutive1s that takes in maxLen
- init helperFunction that takes in str, length
    - if length is "0", print str & return
    -  helper(str + "0", length - 1)
    if len(str) == 0 or str[-1] != '1':
        helper(str + '1', length - 1)
helper('', maxLen)



Example length 3
- We're given the max length, and we automatically return a string of only zeros with that length
- Then we return a string of zeros that length - 1 with a 1 afterward
- Then we return a string of zeros that length - 2 with a 1, then add another 0 such that length of the string is equal to max_length 
- Then we retrun a string starting with 1, then add 0's such that length of string is equal to max_length
- Then we return a string starting with 1, then add one 0, and add another 1 such that length is equal to max length 

(In the case that we slice off chars of a string to check them against one another) Some condition where we don't add a string if for each char in the string, string[0] == 1 and string[0] == string[1]

if we had max length 3, but no condition for non-consecutive 1's:
    - 000 # filled in zeros
    - 001 # filled in zeros and added a 1
    - 011 # filled in zero and added two 1s
    - 111 # filled in 1s
    - 110 # filled in 1s and added 0
    - 100 # filled in 1 and added two zeros 
    - 101 # alternate starting with 1
    - 010 # alternate starting with 0 

    We can take the set of these strings
    We can remove the strings where while looping over each string using a range IF we find that the condition string[i] == 1 and string[i + 1] == string[1] is True. 

if we had length 2 with no condition for non-consectuive 0's:
    - 00 # filled in zeros to max length
    - 01 # filled in 0, then added 1
    - 11 # filled in 1's to max length 
    - 10 # filled in 1 then added 0 

    We can take the set of these strings
    We can remove the strings where while looping over each string using a range IF we find that the condition string[i] == 1 and string[i + 1] == string[1] is True. 


Outline:
- 

Implement:

Verify:
maxLen = 2 => 
00
01
10

maxLen = 3 =>
000
001
010
100
101

FUNCTION SIGNATURE
function printBinaryWithoutConsecutive1s(maxLen) {

'''


def printBinaryWithoutConsecutive1s(maxLen: int) -> None:

    def helper_function(string, length):
        if length == 0:
            if "11" not in string:
                print(string)
            return
        helper_function(string + '0', length - 1)
        if len(string) == 0 or (len(string) > 0 and string[-1] != '1'):
            helper_function(string + '1', length - 1)

    helper_function('', maxLen)


# Test Cases
print("======= Test Case 1")
printBinaryWithoutConsecutive1s(maxLen=1)
# 0
# 1

print("======= Test Case 2")
printBinaryWithoutConsecutive1s(maxLen=2)
# 00
# 01
# 10

print("======= Test Case 3")
printBinaryWithoutConsecutive1s(maxLen=3)
# 000
# 001
# 010
# 100
# 101

print("======= Test Case 4")
printBinaryWithoutConsecutive1s(maxLen=4)
# 0000
# 0001
# 0010
# 0100
# 0101
# 1000
# 1001
# 1010

print("======= Test Case 5")
printBinaryWithoutConsecutive1s(maxLen=5)
# 00000
# 00001
# 00010
# 00100
# 00101
# 01000
# 01001
# 01010
# 10000
# 10001
# 10010
# 10100
# 10101

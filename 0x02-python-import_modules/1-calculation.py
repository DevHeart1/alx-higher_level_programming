#!/usr/bin/python3

if __name__ == "__main__":

import calculator_1 as cal

a = 10
b = 5
c = cal.add(a, b)
 
print('{:d} + {:d} = {:d}'.format(a, b, c))


a = 10
b = 5
c = cal.sub(a, b)

print('{:d} - {:d} = {:d}'.format(a, b, c))


a = 10
b = 5
c = cal.mul(a, b)

print('{:d} * {:d} = {:d}'.format(a, b, c))


a = 10
b = 5
c = cal.div(a, b)

print('{:d} / {:d} = {:d}'.format(a, b, c))

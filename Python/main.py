""" Comment """
username = "Rock"
level = 10
print(f"Hello {username}!")
# dir(username)  # capitalize, ends/startswith, lower, upper, replace...
list = [1, "2", True]
# dir(list)  # append, clear, copy, count, index, insert, join, pop, remove, reverse, sort...
dictionary = {"key1": username, "key2": list}
# dir(dictionary)  # clear, items, keys, update, values
print(item for item in list)  # for loop
i = 0
while i != 5:  # while loop
    i += 1

from player import Warrior

p1 = Warrior(username, level)


def add(*nums):
    return sum(nums)


def my_decorator(func):
    def wrap_func():
        print("*" * 20)
        func()
        print("*" * 20)

    return wrap_func()


@my_decorator
def hello_there():
    print("Hello there")


hello_there


def generator(x):
    for i in range(x):
        yield i


# for item in generator(1000000):
#     print(item)


string = "Hello"
try:
    integer = int(string)
except ValueError:
    print("Value Error Occured")


# File handling

with open("test.txt", "r") as file:
    for line in file.readlines():
        print(line)


def main():
    """
    Info: this is the main function.
    """
    # print(add(1, 2, 3, 4, 5))
    pass


if __name__ == "__main__":
    # help(__name__)
    # help(main)
    print(Warrior.mro())


value = "one"
match value:  # requires python 3.10+
    case "one":
        result = 1
    case "two":
        result = 2
    case "three" | "four":
        result = (3, 4)
    case _:
        result = -1
print(result)


import unittest


def double(num):
    return num * 2


class Test(unittest.TestCase):
    def test_double(self):
        test_param = 10
        result = double(test_param)
        self.assertEqual(result, 20)


unittest.main()

# import time
# def leetspeak(phrase):
#     for word in phrase:
#         if word in ["a","A"]:
#             print("6", end= "")
#         elif word in ["e","E"]:
#             print("3", end= "")
#         elif word in ["i","I"]:
#             print("1", end= "")
#         elif word in ["o","O"]:
#             print("0", end= "")
#         else:
#             print(word, end="")
#     print()      

# def main():
#     phrase = input("Enter string: ")
#     start = time.time()
#     leetspeak(phrase)  
#     end = time.time()
#     print(end-start)  

# main()

import timeit
from re import sub

def leetspeak(phrase):
    # Define a regex pattern to match the letters to be replaced
    pattern = r"[aeio]"
    # Define a dictionary to map the letters to their corresponding numbers
    mapping = {"a": "4", "e": "3", "i": "1", "o": "0"}
    # Use the sub() method of the re module to replace the matched letters with their numbers
    result = sub(pattern, lambda m: mapping.get(m.group(0).lower(), m.group(0)), phrase)
    print(result)

def main():
    phrase = input("Enter string: ")
    leetspeak(phrase)

# Measure the running time of the leetspeak function using timeit
num_runs = 1000000
setup = "from __main__ import leetspeak, main"
stmt = "phrase = 'hello world'; leetspeak(phrase)"
total_time = timeit.timeit(stmt=stmt, setup=setup, number=num_runs)

# Calculate the average time per run
avg_time = total_time / num_runs
print(f"Average time per run: {avg_time:.6f} seconds")



# import timeit

# def leetspeak(phrase):
#     result = ['6' if word in ['a', 'A'] else
#               '3' if word in ['e', 'E'] else
#               '1' if word in ['i', 'I'] else
#               '0' if word in ['o', 'O'] else
#               word for word in phrase]
#     return ''.join(result)

# phrase = "hello world"
# print(leetspeak(phrase))

# # Measure the running time of the leetspeak function using timeit
# num_runs = 1000000
# total_time = timeit.timeit(lambda: leetspeak(phrase), number=num_runs)

# # Calculate the average time per run
# avg_time = total_time / num_runs
# print(f"Average time per run: {avg_time:.6f} seconds")


"""Prompt the user for two numbers and print their sum."""

import sys


def main() -> None:
    try:
        first = float(input("Enter first number: "))
        second = float(input("Enter second number: "))
    except (ValueError, EOFError, KeyboardInterrupt):
        print("Please enter valid numbers.")
        sys.exit(1)

    total = first + second
    # Print as integer if the sum is a whole number, otherwise as float
    if total.is_integer():
        print(f"Sum: {total:.1f}")
    else:
        print(f"Sum: {total}")


if __name__ == "__main__":
    main()
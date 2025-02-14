# JavaScript Uncommon Error: Unexpected Type in Conditional

This repository demonstrates a subtle JavaScript error that can occur when dealing with type coercion in conditional statements.

## The Bug

The `myFunction` attempts to handle cases where either `a` or `b` is 0 to prevent division by zero. However, if `a` or `b` is not a number (e.g., `undefined`, `null`, or a string), the strict equality (`===`) comparison will not trigger, resulting in an error when attempting to perform the division.

## The Solution

The solution involves explicitly checking if the variables are numbers using `typeof` before performing the comparison or division.

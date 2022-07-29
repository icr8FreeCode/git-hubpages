.. _expressions:

Statements and Expressions
==========================

.. index:: ! statement, ! expression

A **statement** is an instruction that the Python interpreter can run. So far,
we have used print statements and assignment statements.

An **expression** is a combination of values, variables, operators, and calls
to functions. Think of an expression as a formula made up of multiple parts.

.. sourcecode:: Python
   :linenos:

   # These are statements:
   message = "Hello, World!"
   print(24)

   # This statement contains an expression:
   total = 3 + 4

In line 6, before Python can assign a value to ``total``, the expression
``3 + 4`` must be *evaluated*. This means Python figures out the result of the
calculation ``3 + 4``, and then *returns* that value to the statement. The variable
``total`` does NOT store ``3 + 4``. Instead, it stores the result, ``7``.

.. index:: ! return value

Every expression produces a value, known as the **return value**. We say that
an expression *returns a value* when it runs.

When you print an expression in Python, the interpreter evaluates the
expression and displays the result.

.. admonition:: Example

   .. sourcecode:: Python
      :linenos:

      print(2 + 3)

      message = "Hello, World!"
      print(message)

   **Console Output**

   ::

      5
      Hello, World!

Line 1 does NOT print ``2 + 3``. Instead, it prints the *result* of calculating
``2 + 3``, so we see ``5`` in the console. The expression ``2 + 3`` *returns* the
value ``5``. Think of this as the print argument ``(2 + 3)`` getting evaluated as ``(5)``.

The statement in line 4 also has an expression. The variable ``message`` holds
a string. *Evaluating* the variable *returns* that string, so ``print(message)``
becomes ``print("Hello, World!")``.

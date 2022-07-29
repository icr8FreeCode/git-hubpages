Other Operators
===============

Earlier, you learned how to assign, and then *reassign* a variable:

.. sourcecode:: python
   :linenos:

   day = "Thursday"
   print(day)
   day = "Friday"
   print(day)

**Console Output**

::

   Thursday
   Friday

One of the most common forms of this involves making the new value of the
variable depend on the old value.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      my_number = 10
      print(my_number)
      my_number = my_number + 2
      print(my_number)

   **Console Output**

   ::

      10
      12

   On line 3, the new value of ``my_number`` becomes its old value plus 2.

Updating Variables
------------------

The statement ``my_number = my_number + 2`` takes the current value of
``my_number``, increases it by ``2``, then reassigns the result back to
``my_number``.

Think of the statement as a series of steps:

.. sourcecode:: python

   my_number = my_number + 2  
   my_number = 10 + 2         # Insert the old value of my_number
   my_number = 12             # Do the math and assign the result to my_number

This type of update is so common in Python (and programming in general) that we
have an operator to use as a shortcut. Another way to write ``my_number = my_number + 2``
is below:

.. sourcecode:: python

   my_number += 2

The operator ``+=`` increases the value of ``my_number`` by 2.

``+=`` always increases the value of a first operand by the amount of the
second.

.. index:: ! compound assignment operator

``+=`` is an example of a **compound assignment operator**, or an operator that
performs two actions in the same statement. These actions are a calculation and 
a variable assignment. The table below summarizes four examples of compound assignment 
operators.

.. list-table:: Compound Assignment Operators
   :widths: auto
   :header-rows: 1

   * - Operator
     - Meaning
   * - ``a += b``
     - ``a = a + b``
   * - ``a -= b``
     - ``a = a - b``
   * - ``a *= b``
     - ``a = a * b``
   * - ``a /= b``
     - ``a = a / b``

String Operators
----------------

So far, we have studied operators that work on numbers, but there are operators
that work on other data types as well. In particular, the ``+`` and ``*``
operators can be used with strings.

Try It!
^^^^^^^

Let's compare using ``+`` and ``*`` with numbers vs. strings.

.. admonition:: Examples

   Run the following code and examine the output.

      .. raw:: html

         <iframe height="400px" width="100%" src="https://repl.it/@launchcode/LCHS-String-Concatenation?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>
   
   Try changing the ``int`` and ``str`` values to see what happens!

.. _string-concatenation:

These examples show that the ``+`` and ``*`` operators *behave differently
based on the data type of the operands.*

#. For ``int`` and ``float`` data types, ``+`` adds two numbers together and
   returns the result.
   
   ``2 + 3`` returns ``5``.
#. For the ``str`` data type, ``+`` attaches the second string to the end of
   the first and returns the new, longer string.
   
   ``'Launch' + 'Code'`` returns ``'LaunchCode'``.
#. For ``int`` and ``float`` data types, ``*`` multiplies two numbers together
   and returns the result.
   
   ``12 * 3`` returns ``36``.
#. Between the ``str`` and ``int`` data types, ``*`` performs a repetition.
   ``'Fun' * 3`` returns ``'FunFunFun'``.
   
   - The ``*`` operator acts like multiple ``+`` operators.
   - ``'Fun' * 3`` does the same thing as ``'Fun' + 'Fun' + 'Fun'``.

.. index:: ! string concatenation

.. admonition:: Note

   Combining strings together to form a new, longer string is called
   **string concatenation**.

What would this statement print? Paste it into the editor to see!

.. sourcecode:: python

   print('Python' + '!' * 3)

Check Your Understanding
------------------------

.. admonition:: Question

   What is printed by the following statement?

   .. sourcecode:: python
      :linenos:

      first_word = "Python"
      second_word = "ROCKS"
      print(first_word + second_word)

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Python ROCKS</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> PythonROCKS</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Python+ROCKS</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> ROCKSPython</li>
      </ol>
      <p id="Q1"></p>

.. Answer = b

.. admonition:: Question

   What is printed by the following statement?

   .. sourcecode:: python
      :linenos:

      word = "Python"
      excl = "!"
      print(word + excl * 3)

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> Python!!!</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> PythonPythonPython!</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Python!Python!Python!</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> PythonPythonPython!!!</li>
      </ol>
      <p id="Q2"></p>

.. Answer = a

.. admonition:: Question

   Which TWO of the following will print ``Python ROCKS!``?

   .. raw:: html

      <ol type="a">
         <li><span id = "a" onclick="highlight('a', false)">print("Python" + "ROCKS" + "!")</span></li>
         <li><span id = "b" onclick="highlight('b', false)">print("Python", "ROCKS", "!")</span></li>
         <li><span id = "c" onclick="highlight('c', true)">print("Python", "ROCKS" + "!")</span></li>
         <li><span id = "d" onclick="highlight('d', false)">print("Python" + "ROCKS", "!")</span></li>
         <li><span id = "e" onclick="highlight('e', true)">print("Python " + "ROCKS" + "!")</span></li>
      </ol>

.. Answers = c & e
   
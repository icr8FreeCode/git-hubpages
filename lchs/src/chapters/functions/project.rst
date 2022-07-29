.. _functions-project:

Project: Functions
==================

The ``reverse()`` method flips the order of the elements within a list.
However, ``reverse()`` does not affect the digits or characters within those
elements.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      my_list = ['hello', 'world', 123, 'orange']

      my_list.reverse()
      print(my_list)

   **Console Output**

   ::

      ['orange', 123, 'world', 'hello']

What if we wanted the reversed list to be
``['egnaro', 321, 'dlrow', 'olleh']``?

Let's have some fun by creating a process that reverses BOTH the order of the
entries in a list AND the order of characters within the individual elements.

Remember that a function should perform only one task. To follow this best
practice, we will solve the list reversal by defining two functions---one that
reverses the characters in a string (or the digits in a number) and one that
flips the order of entries in the list.

Before You Start
----------------

If your teacher added you to a :ref:`Trinket course <trinket-course-assignments>`, login to your account
to access the starter code.

Otherwise, use the links below to code in your own free account.

.. admonition:: Note

   The code editors embedded in the exercises all include a *Remix* button in
   the upper right corner which will save the code to your account. For the
   matching repl.it code, click these links:

   #. `Parts A - C <https://repl.it/@launchcode/Functions-Project-Parts-A-C>`__
   #. `Bonus Missions <https://repl.it/@launchcode/Functions-Project-Bonus>`__

Part A: Reverse Characters
--------------------------

On a previous page, we examined a function that
:ref:`reverses the characters in a string <reverse_func>` using ``list()``
and ``join``. Let's rebuild that function now.

a. Define the function as ``reverse_characters``. Give it one parameter, which will
   be the string to reverse.
b. Within the function, use ``list()`` to create a list of characters from the
   string, then reverse the list.
c. Use ``join`` to create the reversed string and *return* that string from the
   function.
d. Below the function, define a variable and assign it a string value to test the function.
e. Call the ``reverse_characters`` function and use the variable as the argument.
   Check that your function correctly reverses the characters in the string.

.. admonition:: Tip

   Use these sample strings for testing:

   a. ``'apple'``
   b. ``'LC101'``
   c. ``'Capitalized Letters'``
   d. ``'I love the smell of code in the morning.'``

.. raw:: html

   <iframe src="https://trinket.io/embed/python/78987c281a" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Part B: Reverse Digits
----------------------

The ``reverse_characters`` function works great on strings, but what if the
argument passed to the function is a number? Using ``reverse_characters(1234)``
results in an error, since ``list()`` does not work on numbers (TRY IT). When
passed an ``int`` or ``float`` value, we want the function to return a number
with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string
``"4321"``).

a. Add an ``if`` statement to ``reverse_characters`` to check the ``type()`` of
   the parameter.
b. If ``type()`` is ``str``, return the reversed string as before.
c. If ``type()`` is ``int`` or ``float``, convert the parameter to a string,
   reverse the characters, then convert it back into a number.
d. Return the reversed number.
e. Be sure to print the result returned by the function to see if your code
   works for *both strings and numbers*. Do this before moving on to the
   next part.

.. admonition:: Tip

   Use these samples for testing:

   a. ``1234``
   b. ``'LC101'``
   c. ``8675.309``
   d. ``'radar'``

Part C: Complete Reversal
-------------------------

Now we are ready to finish our complete reversal process. Create a new
function with one parameter, which is the list we want to change. The
function should:

a. Define a new, empty list.
b. Loop through the old list.
c. For each element in the old list, call ``reverse_characters`` to flip the
   characters or digits.
d. Add the reversed string (or number) to the list created in part 'a'.
e. Return the final, completely reversed list.
f. *Be sure to print the results from each test case in order to check your
   code*.

.. admonition:: Tip

   Use this sample data for testing.

   .. list-table::
      :header-rows: 1

      * - Input
        - Output
      * - ``['apple', 'potato', 'Capitalized Words']``
        - ``['sdroW dezilatipaC', 'otatop', 'elppa']``
      * - ``[123, 8897, 4.2, 1138, 8675309]``
        - ``[9035768, 8311, 2.4, 7988, 321]``
      * - ``['hello', 'world', 12.3, 'orange', 987]``
        - ``[789, 'egnaro', 3.21, 'dlrow', 'olleh']``

Bonus Missions
---------------

#. Define a function with one parameter, which will be a string. The function
   must do the following:

   a. Have a clear, descriptive name like ``fun_phrase``.
   b. Take only the *last* character from strings with lengths of 3 or less.
   c. Take only the *first 3* characters from strings with lengths larger
      than 3.
   d. Use ``.format()`` to return the phrase ``We put the '___' in '___'.``
      Fill the first blank with the modified string, and fill the second blank
      with the original string.

#. Now test your function:

   f. Outside of the function, define a variable and assign it a string value
      (e.g. ``'Functions rock!'``).
   g. Call your function and print the returned phrase.

#. The area of a rectangle is equal to its *length x width*.

   a. Define a function with the required parameters to calculate the area of a
      rectangle.
   b. The function should *return* the area, NOT print it.
   c. Call your area function by passing in two arguments---the length and
      width.
   d. If only one argument is passed to the function, then the shape is a
      square. Modify your code to deal with this case.
   e. Use the returned value to print, ``The area is ____ cm^2.``

   .. admonition:: Tip

      Use these test cases.

      a. length = 2, width = 4 (area = 8)
      b. length = 14.2, width = 7.6 (area = 107.92)
      c. length = 20 (area = 400)

   .. raw:: html

      <iframe src="https://trinket.io/embed/python/25bb2d1445" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

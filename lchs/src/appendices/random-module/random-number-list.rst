.. _random-number-list:

Generating a Random Number List
===============================

In the :ref:`Generate Random Number <pick-random-number>` section of the
``Modules`` chapter, we see how to use the ``randint`` function to generate
a random integer within a given range.

.. admonition:: Example

   .. sourcecode:: python

      import random

      for turn in range(5):
         num_choice = random.randint(15, 25)
         print(num_choice)
      
   **Console Output:**

   ::

      22
      18
      15
      22
      17

   Each time the loop runs, line 4 selects a number within the range 15-25.

In this example, we use a loop to print out one random number each iteration.
Instead of printing, however, we can use the accumulator pattern and a list to
collect each value.

This technique provides us with a quick and easy way to build a set of random
numbers without having to pick them ourselves! If we want to use the list of
numbers later in the program, we can easily refer to the list variable.

.. admonition:: Try It!

   Run the following code several times to try the following:

   #. Generate lists of different lengths.
   #. Generate lists over different ranges.

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/2af76abe66" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


.. admonition:: Note

   Each time the program runs, it generates a new list of random numbers. If
   you want to save a list between runs, then you must copy it from the
   output and paste it into your code as a variable assignment.

   When is this helpful? If you are a teacher and want to give every student
   the same set of "random" values, you can run this program first to populate
   your list and check if it meets your needs.

Generate a Set of Unique Random Numbers
---------------------------------------

If we run the program above several times, we will notice that ``num_list``
often contains repeated values. Sometimes, however, we need a list of random
numbers that does NOT contain any repeats.

To generate a set of *unique* numbers (no repeats), we must use a ``while``
loop instead of a ``for`` loop in the accumulator pattern.

.. admonition:: Try It!

   Examine the code below to see how it differs from the ``for`` loop.

   #. Lines 1-4 work as they did before.
   #. The ``while`` condition in line 6 checks if ``num_list`` has the desired
      length. As long as the number of entries is less than ``list_length``,
      the loop continues running. Once ``num_list`` reaches the proper size
      (``5`` in this case), the loop ends.
   #. Line 8 selects a new number from within the given range.
   #. Line 11 checks if ``new_num`` does NOT exist inside ``num_list``. If
      ``True``, then the ``append`` statement on line 14 runs, and the chosen
      value is added to the list.
   #. If the condition on line 11 evaluates to ``False``, then ``new_num``
      is already an element in ``num_list``. The ``append`` statement gets
      skipped, and the chosen number gets thrown away.

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/33ebcb321c" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


   We MUST use a ``while`` loop to generate non-repetitive numbers. Since we do
   not know ahead of time how many turns it will take to build the list, trying
   to use a ``for`` loop will give inconsistent results.

   Run this program several times to prove that it builds a list with no
   repeated values.

.. admonition:: Warning

   Keep the length of your list SMALLER than the range of values you use in
   ``randint``! If you get this wrong, you will create an infinite loop.

   For example, the statement ``random.randint(0, 3)`` picks one of 4 possible
   values (``0, 1, 2, 3``). Given this range of four numbers, it is IMPOSSIBLE
   to build a list of 5 or more unique numbers!

.. _unique-dict-values:

Unique Dictionary Values
------------------------

We can also assign random numbers to the keys of a dictionary. For example,
lets say we have a collection of names and we want to give each person a raffle
ticket. We can use a ``while`` loop as above to generate unique ticket numbers.

However, since dictionaries use key/value pairs, we need to be very deliberate
about how we search for repeats. We need to use the ``.values()`` method to
check if a particular number has already been assigned to a key.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      import random

      names = ['Bob', 'Ann', 'Mae', 'Syd']
      ticket_holders = {}  # Create an empty dictionary.
      
      index = 0   # Set the index value for the first entry in the names list.
      while len(ticket_holders) < len(names):
         # Pick a new, random number from the given range.
         new_num = random.randint(100, 110)

         # Check for new_num in the values of the dictionary.
         if new_num not in ticket_holders.values():
            ticket_holders[names[index]] = new_num  # Add a new key/value pair
            index += 1     # Advance to the next entry in the names list.

   **Console Output:**

   ::

      {'Bob': 110, 'Ann': 102, 'Mae': 101, 'Syd': 107}

The syntax on line 12 is important! If we use:

.. sourcecode:: python

   if new_num not in ticket_holders:

instead of:

.. sourcecode:: python

   if new_num not in ticket_holders.values():

then Python searches for ``new_num`` in the *key names* of the dictionary.
Since ``new_num`` is an integer and all of the keys are strings, the condition
will ALWAYS evaluate to ``True``. The chosen number, even if it is a repeat,
will get assigned to the current key.

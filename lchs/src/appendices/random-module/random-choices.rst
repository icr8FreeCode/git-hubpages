.. _random-choices:

Choosing Random Items from a Collection
=======================================

In the :ref:`Select from a Collection <random-collection-item>` section, we see
how to use the ``random`` module to pick one item at random from a string or a
list.

.. sourcecode:: Python
   :linenos:

   import random

   colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
   title = 'The Princess Bride'

   # Select a random element from the colors list:
   color_choice = random.choice(colors)

   # Select a random character from the title string:
   char_choice = random.choice(title)

Just like with random numbers, we can use the accumulator pattern to build
a new collection by randomly selecting items from a different collection.

.. admonition:: Try It!

   Run the following program several times to see how it works!

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/8650e179cb" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


Choose Random, Unique Values
----------------------------

Just like with generating a list of random numbers, if we run the program above
several times, we will notice repeated characters in our collections.

To generate a set of *unique* characters (no repeats), we must use a ``while``
loop as we did before:

.. admonition:: Try It!

   Paste this code into the editor above to practice making unique ``choice``
   collections.

   .. sourcecode:: python
      :linenos:

      import string
      import random

      char_string = ''
      collection_length = 10

      while len(char_string) < collection_length:
         # Select a random letter from 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
         new_char = random.choice(string.ascii_uppercase)

         # Check if new_char is NOT already in char_string:
         if new_char not in char_string:
            char_string += new_char
      
      print(char_string)

A slight modification to the code will append the random choice to a list
instead.

Choose From a Dictionary
------------------------

If we have a dictionary, we can select a random element from it using the
following syntax:

.. sourcecode:: python

   random.choice(list(dictionary_name.keys()))
   random.choice(list(dictionary_name.values()))

The first line selects a *key* from ``dictionary_name``. Note that with this
key we also get access to its value. The second line selects a *value* from
``dictionary_name``, but NOT the key it is linked to.

Note the use of the ``list()`` function! When Python pulls from a collection,
it does so by using an *index* value. Since dictionaries are *unordered*, they
have no indexes. Thus, we need to convert the keys (or values) into a list
format before making the random choice.

If we leave off the method name:

.. sourcecode:: python

   random.choice(list(dictionary_name))

Python defaults to selecting from the keys.

.. admonition:: Try It!

   Run the following program several times to see how the results change.

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/7244d92997" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

   **Now try this:**

   #. Replace lines 16 & 17 with
      
      .. sourcecode:: python
         :lineno-start: 16

         item = random.choice(list(raffle_tickets.items()))
         print(item)
         print(item[0], item[1])

   #. What do you notice?

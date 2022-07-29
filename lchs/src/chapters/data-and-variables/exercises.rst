.. _data-and-variables-exercises:

Exercises: Data & Variables
===========================

Exercises appear regularly in the book. Just like the concept checks, the
exercises check your understanding of the topics in this chapter. They
also provide good practice for the new skills.

Part A - Printing to the Console
--------------------------------

Use the code editor at the end of this part to complete the following tasks:

#. Add parenthesis to the expression ``6 * 1 - 2`` to change its value from
   ``4`` to ``-6``.
#. The expression ``2 + 8 + 10 / 5`` evaluates to ``12.0``. Add parentheses to
   change the result to ``4.0``. How could you get a result of ``5.6``?
#. Assign a string of your choice to a variable named ``word``.

   a. Print the word 4 times on the same line, with spaces between each
      - ``word word word word``.
   b. Using a single ``print`` statement, display this:

      ::

         wordword
         wordword
         wordword

   c. Using any number of ``print`` statements, display this:

      ::

         word     word     word
         word     word     word
         word     word     word

      Note that each ``word`` is separated by a tab, not a space.

.. raw:: html

   <iframe height="500px" width="100%" src="https://repl.it/@launchcode/LCHS-Chp-4-Exercises-Part-A?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

:ref:`Check your solutions <chp4partA>`.

Part B - Using Variables
------------------------

.. admonition:: Note

   The remaining exercises require more space than the small embedded code
   editor. You will need to move to a larger workspace.

   If your teacher uses a :ref:`Trinket course <trinket-course-assignments>`, follow the links
   for instructions on how to access this assignment.

   If your teacher has NOT set up Trinket course, you
   can access separate starter code at `replit <https://repl.it/@launchcode/LCHS-Chp-4-Exercises-Part-B>`__
   or `Trinket <https://trinket.io/python/d2e5edfed2?showInstructions=true>`__.
   To save and share your code, be sure to login to your account.

Use the information given below to complete the part B exercises:

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Data
     - Value
   * - Name of the spaceship
     - Determination
   * - Ship Speed (mph)
     - 17,500
   * - Distance to Mars (km)
     - 225,000,000
   * - Miles per kilometer
     - 0.621

#. Create a variable for each value in the list above. Remember, do NOT include
   commas for ``int`` or ``float`` data types!
#. Create and assign a variable to hold the *miles to Mars* value. To get the miles to Mars,
   multiply the distance to Mars in kilometers by the miles per kilometer.
   (Let *Python* to the math! ``distance in km * miles per km``)
#. Create a variable to hold the hours it would take to get to Mars. To get the
   hours, you need to divide the miles to Mars by the spaceship's speed.
#. Create a variable to store the value for the *days to Mars*. To get the days
   it will take to reach Mars, divide the hours it takes to reach Mars by 24.
#. Using your variables, print to the console the sentence,
   ``"_____ will take ___ days to reach Mars."`` Fill in the blanks with 
   the spaceship name and the calculated time.
#. **Bonus**: The distance to the moon is 384,400 km. Repeat the calculations,
   but this time figure out the number of days it would take to travel to the
   Moon. Print a sentence that says, ``"_____ will take ___ days to reach the
   Moon."``.

:ref:`Check your solutions <chp4partB>`.

Part C - User Input
-------------------

If your teacher uses a Trinket course, solve part C there.
Otherwise, use this `standard repl <https://repl.it/@launchcode/LCHS-Chp-4-Exercises-Part-C>`__
or `free Trinket <https://trinket.io/python/26ff1e28c8?showInstructions=true>`__.

.. admonition:: Note

   The ``len()`` function returns the number of characters in a string.

   .. sourcecode:: Python
      :linenos:

      a_string = 'Rutabaga'

      print(len('the'))
      print(len(a_string))

   **Console Output**

   ::

      3
      8

#. Prompt the user to enter a word, then use the ``len()`` function to find the
   number of characters in the word. Print the message, ``The word '___'
   contains ___ characters.`` Fill in the blanks with the user's word and the
   number of characters. The output MUST include quotes around the word. For
   example:

   ::

      Enter a word: Tomato
      The word 'Tomato' contains 6 characters.

#. Prompt the user to enter the length and width for a rectangle. Calculate the
   area of the rectangle (``length * width``) and print the answer. The program
   should behave something like this:

   ::

      Rectangle length: 8
      Rectangle width: 4
      The rectangle has an area of 32.

#. Write a program that will find the *miles per gallon* for a car. Prompt the
   user to enter the number of miles driven and the number of gallons used.
   The program should behave something like this:

   ::

      How many miles did you drive? 280
      How many gallons did you use? 10
      Your car got 28 miles per gallon.

:ref:`Check your solutions <chp4partC>`.

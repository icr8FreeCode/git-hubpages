Chapter 11: Python Modules
==========================

The answers on this page show ONE way to solve the :ref:`exercises <modules-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.


Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

	<iframe src="https://trinket.io/embed/python3/fccf48bf5a" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


Solutions
---------
Practice makes better. You will create a program that accomplishes the
following:

a. Steps through a list of Yes/No questions.
b. Calls functions based on the user's responses.

Rather than coding all of the functions from scratch, you are going to use
existing modules to help assemble your project. :ref:`Get Starter Code Here<chp11StarterCode>`.

.. _chp11part1:

Import Module Code
^^^^^^^^^^^^^^^^^^

Lucky you! Most of the functions you need are in the ``averages.py`` and
``display.py`` files.

1. In ``main.py``, add a statement to import all functions from the
   ``averages`` module.

   .. sourcecode:: Python
      :linenos:

      import averages

3. Use the ``as`` keyword to rename the imported ``print_all`` function to
   ``display_results``.

   .. sourcecode:: Python
      :linenos:

      from display import print_all as display_results
   
:ref:`Back to the exercises <chp11partIMC>`.

.. _chp11part2:

Finish Coding A New Module
^^^^^^^^^^^^^^^^^^^^^^^^^^

``random_select.py`` requires your attention.

1. Add code to complete the ``random_from_list`` function. It should take a
   list as an argument and then return a
   :ref:`randomly selected element <random-collection-item>` from that list.

   .. sourcecode:: Python
      :linenos:

      import random

      def random_from_list(a_list):
         # Your code here to select a random element from the list passed to the function.
         random_element = random.choice(a_list)

         # Return the selected element
         return random_element
   
:ref:`Back to the exercises <chp11partFCANM>`.

.. _chp11part3:

Finish the Project
^^^^^^^^^^^^^^^^^^

Now complete the project code.

The line references given below assume that you added no blank lines during
your work in the previous sections. If you did, do not worry. The comments
in ``main.py`` will still show you where to add code.

1. **Line 19**: Call ``display_results`` to print all of the tests and student
   scores. Be sure to pass in the correct arguments.

   .. sourcecode:: Python
      :linenos:

      display_results(astronauts, test_titles, scores)

2. **Line 23**: Using dot notation, call ``average_for_test`` to print the
   class average for each test. Use ``title_index`` and ``scores`` as
   arguments.

   .. sourcecode:: Python
      :linenos:

      avg = averages.average_for_test(title_index, scores)

4. **Line 30**: Call ``random_from_list`` to pick the next spacewalker from the
   ``astronauts`` list.

   .. sourcecode:: Python
      :linenos:

      walker = random_select.random_from_list(astronauts)

:ref:`Back to the exercises <chp11partFTP>`.

Sanity check!
^^^^^^^^^^^^^
In your output, the spacings for the test score columns will probably NOT line up
perfectly as seen below. *This is OK!* 

When we learn how to display output in a window *other* than the console,
we will worry about making columns look nice.

   ::

      Would you like to display all scores? Y/N: Y
      Name    Math    Fitness Coding  Nav Communication
      Fox 95  86  83  81  76
      Turtle  79  71  79  87  72
      Cat 94  87  87  83  82
      Hippo   99  77  91  79  80
      Dog 96  95  99  82  70

   

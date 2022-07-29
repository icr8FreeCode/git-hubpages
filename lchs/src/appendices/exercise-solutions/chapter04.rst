Chapter 4: Data and Variables
=============================

The answers on this page show ONE way to solve the :ref:`exercises <data-and-variables-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

	<iframe src="https://trinket.io/embed/python3/aeb2267502" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Solutions
---------

.. _chp4partA:

Part A
^^^^^^

1. Add parenthesis to the expression ``6 * 1 - 2`` to change its value from
   ``4`` to ``-6``.

   .. sourcecode:: Python

      print(6 * (1 - 2))

3. Print a selected word in several different patterns.

   .. sourcecode:: Python
      :linenos:

      word = 'Rutabaga'
      
      # Part a: Print the word 4 times on the same line, with spaces in between.
      print(word, word, word, word)

      # Part b: Print 3 lines of 2 words each. Use a single print statement.
      print(word*2 + '\n' + word*2 + '\n' + word*2)   # '\n' moves the output to a newline.

      # Part c: Print 3 lines of 3 words each, with tabs between the words.
      # There are a number of ways to solve this part!

      # One way:
      print(word + '\t' + word + '\t' + word)  # Single line of 3 words (with tabs).
      print(word + '\t' + word + '\t' + word)  # Second line
      print(word + '\t' + word + '\t' + word)  # Third line

      # Another way:

      print(((word+'\t')*3+'\n')*3)  # This way includes extra tabs and newline.

      # Your way...

:ref:`Back to the exercises <data-and-variables-exercises>`.

.. _chp4partB:

Part B
^^^^^^

.. sourcecode:: Python
   :linenos:

   # 1. Declare and assign four variables:
   ship_name = 'Determination'
   speed_mph = 17500
   km_to_mars = 225000000
   mi_per_km = 0.621

   # 2. Define and assign a miles to Mars variable:
   miles_to_mars = km_to_mars * mi_per_km

   # 3 & 4. Calculate and store the hours and days it takes to get to Mars:
   hours_to_mars = miles_to_mars/speed_mph
   days_to_mars = hours_to_mars/24

   # 5. Print the sentence, "___ will take ___ days to reach Mars."
   print(ship_name, 'will take', days_to_mars, 'days to reach Mars.')

   # 6. Bonus mission:
   km_to_moon = 384400                     # Assign distance value (in km).
   mi_to_moon = km_to_moon * 0.621         # Convert km to miles.
   hours_to_moon = mi_to_moon/speed_mph    # Calculate hours to moon.
   days_to_moon = hours_to_moon/24         # Calculate days to moon.
   print(ship_name, 'will take', days_to_moon, 'days to reach the Moon.')

:ref:`Back to the exercises <data-and-variables-exercises>`.

.. _chp4partC:

Part C
^^^^^^

1. After the user enters a word, print the message, ``The word '___'
   contains ___ characters.``

   .. sourcecode:: Python
      :linenos:

      user_word = input('Please enter a word: ')
      num_chars = len(user_word)
      print("The word '" + user_word + "' contains", num_chars, "characters." )

3. Write a program that will find the *miles per gallon* for a car.

   .. sourcecode:: Python
      :linenos:

      miles_driven = float(input('How many miles did you drive? '))
      gallons_used = float(input('How many gallons did you use? '))
      print('Your car got', miles_driven/gallons_used, 'miles per gallon.')

.. admonition:: Note

   In Part C, questions 2 & 3, we use ``int()`` and ``float()`` to convert a
   string value into a numerical data type.
   
   What happens if a user enters a decimal value (like ``3.33``) for an
   ``int()`` input? What if they enter a whole number for a ``float()`` input?
   What happens if they enter letters instead? TRY IT!

   Later, we will learn how to protect our programs against unexpected input
   values.

:ref:`Back to the exercises <data-and-variables-exercises>`.

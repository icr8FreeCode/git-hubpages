Chapter 5: Making Decisions With Conditionals
=============================================

The answers on this page show ONE way to solve the :ref:`exercises <booleans-and-conditionals-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

   <iframe src="https://trinket.io/embed/python3/fccf48bf5a" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Solutions
---------

.. _chp5partA:

Part A: Basic Selection
^^^^^^^^^^^^^^^^^^^^^^^

1. If the user's entry is longer than 5 characters, print ``"Your entry is
   longer than 5 characters!"`` Otherwise, print nothing.

   .. sourcecode:: Python
      :linenos:

      user_entry = input('Enter a word: ')

      if len(user_entry) > 5:
         print("Your entry is longer than 5 characters!")

2. If the number entered is 100 or larger, print ``"Valid entry!"``  Otherwise,
   print, ``"Number too small."``

   .. sourcecode:: Python
      :linenos:

      num_entry = int(input('Enter a number larger than 100: '))
      if num_entry >= 100:
         print('Valid entry!')
      else:
         print('Number too small.')

3. Prompt the user to enter a letter. If the letter is a vowel, print
   ``"___ is a vowel."`` Else, print, ``"___ is NOT a vowel."``

   .. sourcecode:: Python
      :linenos:

      user_letter = input('Enter a letter: ')
      vowels = 'aeiouAEIOU'
      if user_letter in vowels:
         print(user_letter + " is a vowel.")
      else:
         print(user_letter + " is NOT vowel.")

:ref:`Back to the exercises <booleans-and-conditionals-exercises>`.

.. _chp5partB:

Part B: Logical Operators
^^^^^^^^^^^^^^^^^^^^^^^^^

2. Check if an integer is even and divisible by 5.
   
   .. sourcecode:: Python
      :linenos:

      test_string_1 = 'bookkeepers'
      test_string_2 = 'Apricots and apples'
      test_string_3 = 'carrot'
      test_string_4 = 'apple pie'

      # Replace test_string_1 with the other variable names to check each one.
      if len(test_string_1) > 9 and " " not in test_string_1:
         print(test_string_1 + " is a really long word!")
      else:
         print(test_string_1 + " is either short, or it contains multiple words.")

3. Adding the ``not`` in front of ``cap_consonants`` will execute the first
   ``print`` statement, since ``'A'`` is NOT in ``cap_consonants``. This makes
   the output inaccurate. Similarly, for capital constants, the ``else`` clause
   runs and displays incorrect output.
   
   Only lowercase vowels lead to an accurate print statement.

   .. sourcecode:: Python
      :linenos:

      letter = 'A'
      cap_consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
      vowels = 'aeiou'

      # Original code:
      if letter in cap_consonants or letter in vowels:
         print("'" + letter + "'", "is either a lowercase vowel OR a capital consonant.")
      else:
         print("Pick a capital consonant or a lowercase vowel")

      # Code with one 'not' added:
      if letter not in cap_consonants or letter in vowels:
         print("'" + letter + "'", "is either a lowercase vowel OR a lowercase consonant.")
      else:
         print("Pick a capital consonant or a lowercase vowel")

4. **Tip**: To check the expressions given in this problem, just put them
   inside a ``print()`` statement and check the output!

:ref:`Back to the exercises <booleans-and-conditionals-exercises>`.

.. _chp5partC:

Part C: Chained Conditionals
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2. Given the score on an exam, assign it the proper letter grade. Print the
   results as ``___% = ___``.

   **Tip**: Be sure to test your code with decimals like ``89.5`` or ``79.99``.

   .. sourcecode:: Python
      :linenos:

      score = float(input('Enter a score: '))

      if score >= 90:
         print(str(score) + "% = A")
      elif score >=80:
         print(str(score) + "% = B")
      elif score >=70:
         print(str(score) + "% = C")
      elif score >=60:
         print(str(score) + "% = D")
      else:
         print(str(score) + "% = F")

3. Pick an activity based on the current weather.

   .. sourcecode:: Python
      :linenos:

      temperature = 'hot'  # Change these 2 vales to print different results.
      humidity = 'rainy'

      if temperature == "hot" and humidity == "rainy":
         print("You should stay in and watch Netflix.")
      elif temperature == "hot" and humidity == "dry":
         print("You should go swimming!")
      elif temperature == "cold" and humidity == "dry":
         print("You should go visit a friend.")
      elif temperature == "cold" and humidity == "rainy":
         print("You should get under a blanket and read.")
      else:
         print("Do what ever you want to do!")

:ref:`Back to the exercises <booleans-and-conditionals-exercises>`.

.. _chp5partD:

Part D: Nested Conditionals
^^^^^^^^^^^^^^^^^^^^^^^^^^^

5. Collect a user's lunch order and calculate the bill.

   .. sourcecode:: Python
      :linenos:

      cost = 0

      lunch_selection = input('Welcome! Would you like a burger or a salad? ')
      if lunch_selection == "salad":
         cost += 4.99
         dressing = input("What kind of dressing would you like, ranch or italian? ")
         if dressing == 'ranch':
            cost += 0.50
         else:
            cost += 0.25
         print("Your order is a salad with " + dressing + " dressing, and your total is $" + str(cost))
      else:
         cost += 6.99
         cheese = input("Would you like cheese, yes or no? ")
         if cheese == "yes":
            cost += 1.50
            lunch_selection = "burger with cheese"
         print("Your order is a " + lunch_selection + ". Your total is $" + str(cost))

6. Where would be the BEST place to ask about adding a drink? EXPLAIN your reasoning.

   There is more than one way to do this, and being able to explain your
   reasoning is important!
   
   One possibility is to put the question inside the nested statements, but
   after the cheese/dressing conditional. It makes sense to complete the food
   order before repeating it back to the customer with their total. To do this,
   we will need to add a second nested conditional inside the outer ``if`` and
   ``else`` blocks.

   Alternatively, put the drink question in its own conditional outside of
   the nested statements. This avoids having to keep a copy of the same code in
   both of the outer ``if`` and ``else`` blocks. However, we will need to
   move the ``print`` statements into the drink conditional.

:ref:`Back to the exercises <booleans-and-conditionals-exercises>`.

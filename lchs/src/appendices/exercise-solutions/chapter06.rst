Chapter 6: Repeating Things With Loops
======================================

The answers on this page show ONE way to solve the :ref:`exercises <loops-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

   <iframe src="https://trinket.io/embed/python3/5e09fffbac" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


Solutions
---------

.. _chp6for:

``for`` Practice
^^^^^^^^^^^^^^^^

1. Construct ``for`` loops that accomplish the following tasks:
   
a. Print the numbers 0 - 20, one number per line.

   .. sourcecode:: Python
      :linenos:

      for number in range(21):
         print(number)
       

b. Print only the ODD values from 3 - 29, one number per line.

   .. sourcecode:: Python
      :linenos:

      # Using range(start, stop, step)
      for number in range(3, 30, 2):
         print(number)


d. Print the numbers 50 down to 20 in descending order, but only if the 
   numbers are multiples of 3.

   .. sourcecode:: Python
      :linenos:

      for number in range(50, 19, -1):
         #using the modulus operator to check if number is divisible by 3
         if number%3 == 0:
         print(number)


2. Given the string ``'LaunchCode'``, code two ``for`` loops to do the
   following:

a. Print out each character of the string, one letter per line. Do this
   WITHOUT using index values.

   .. sourcecode:: Python
      :linenos:

      word = "LaunchCode"
      for letter in word:
         print(letter)


b. Now use index values to print each character of the string---in reverse
   order---to a new line. Recall that you can access a single character from
   a string with the syntax ``var_name[index]``, where ``index`` is an
   integer value, and ``var_name`` is the variable used to store the string.

   .. sourcecode:: Python
      :linenos:

      # There are multiple ways to do this!
      max_index = len(word) - 1
      for index in range(max_index, -1, -1):
         print(word[index])
   
3. Given the string ``gibberish = 'Vna#hewzB*rQhT%yq^lv %iPwgOexWo &C^oUoGSdtJLj'``, print every fifth character, including the first character. Use index values and ``range(start, stop, step)``.

   .. sourcecode:: Python
      :linenos:

      gibberish = 'Vna#hewzB*rQhT%yq^lv %iPwgOexWo &C^oUoGSdtJLj'
      for index in range(0, len(gibberish), 5):
         print(gibberish[index])

   Bonus, Repeat the previous problem, but:

   a. Replace ``range(start, stop, step)`` with ``range(len(gibberish))``.
   b. Use an ``if`` statement and the modulus (``%``) operator to check if the
      index is divisible by 5.
   c. If ``True``, print the character. If ``False``, do not print the character.
   d. The output should be the same as before.

   .. sourcecode:: Python
      :linenos:

      for index in range(len(gibberish)):
         if index%5 == 0:
            print(gibberish[index])


:ref:`Back to the exercises <loops-exercises>`.

.. _chp6while:

``while`` Practice
^^^^^^^^^^^^^^^^^^
Define three variables for a spacecraft---one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the spacecraft reaches. Assign each variable an initial value of 0.

   .. sourcecode:: Python
      :linenos:

      # Three spacecraft variables.
      fuel_level = 0
      num_crew = 0
      altitude = 0

4. Construct ``while`` loops to do the following:

a. Ask the user for the starting fuel level. The loop should continue until
   the user enters a value between 5000 and 30000. If the user submits a
   number outside of the range, print ``"Invalid entry."``

   .. sourcecode:: Python
      :linenos:

      # Keep the loop running as long as fuel_level is OUTSIDE of the accepted range.
      while fuel_level < 5000 or fuel_level > 30000:  
         fuel_level = int(input("Enter starting fuel level (5000 - 30000): "))
         if fuel_level < 5000 or fuel_level > 30000:
            print("Invalid entry.")

5. Use a third ``while`` loop to update the fuel and the altitude of the
   spacecraft. Each iteration, decrease the fuel level by 100 units for each
   astronaut aboard. Also, increase the altitude by 50 kilometers.
   
   .. sourcecode:: Python
      :linenos:

      # fuel_level might not reach zero!
      # Check if subtracting the required amount of fuel from the current fuel_level returns a number 0 or higher.
      # If True, run the loop statements.
      while fuel_level - num_crew*100 >= 0: 
         # Decrease the fuel_level. 
         fuel_level -= 100*num_crew 
         # Increase the altitude.     
         altitude += 50                  

7. If the altitude is 2000 km or higher, add ``"Orbit achieved!"`` to the
   output. Otherwise add, ``"Failed to reach orbit."``
   
   .. sourcecode:: Python
      :linenos:

      if altitude >= 2000:
         ending = 'Orbit achieved!'
      else:
         ending = 'Failed to reach orbit.'

      print('The spacecraft gained an altitude of', altitude, 'km and has', fuel_level,'kg of fuel left.', ending)
   
:ref:`Back to the exercises <loops-exercises>`.

.. _chp6accumulator:

The Accumulator Pattern
^^^^^^^^^^^^^^^^^^^^^^^
9. Define a variable to hold the string ``'It was a bright cold day in April,
   and the clocks were striking thirteen.'`` Use the accumulator pattern to
   build a new string. It should contain all of the characters in the original
   string, but without any vowels.  For this task, y does NOT count as a vowel.
   Print the new string.

   .. sourcecode:: Python
      :linenos:

      sentence = 'It was a bright cold day in April, and the clocks were striking thirteen.'
      no_vowels = ''

      # Iterate through the sentence string one character at a time.   
      for char in sentence:  
         # Check if char is NOT in the string of lowercase and uppercase vowels.
         if char not in 'aeiouAEIOU':  
            # If True, include char in the string assigned to no_vowels.
            no_vowels += char         

      print(no_vowels)

:ref:`Back to the exercises <loops-exercises>`.

.. _chp6challenge:

Challenge
^^^^^^^^^
Construct a loop that combines two strings together, alternating the characters from each source. For now, be careful to make both strings the same length.

   .. sourcecode:: Python
      :linenos:

      # Collect two code words.
      code_1 = input("Enter first code: ")
      code_2 = input("Enter second code: ")

      # Check if the code words are the same length.
      if len(code_1) == len(code_2):
         # If True, zip the codes together (alternating characters) and print the result.
         final_code = ''
         for index in range(len(code_1)):
            final_code += code_1[index] + code_2[index]
         print(final_code, "accepted. Engine overload started. Evacuation recommended.")
      # If False, print a sad message.
      else:
         print("Invalid codes! The pirates captured your spacecraft.")

:ref:`Back to the exercises <loops-exercises>`.

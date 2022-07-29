Chapter 12: Python Dictionaries 
===============================

The answers on this page show ONE way to solve the :ref:`exercises <dictionaries-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.


Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

	<iframe src="https://trinket.io/embed/python3/5e09fffbac" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

.. _chp12partA:

Solutions
---------
Part A: Search a Dictionary
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``flavors`` dictionary contains entries that pair different ice cream
flavors with their cost per scoop. Your job is to do the following:

1. Write a function called ``return_cost`` that takes a dictionary and flavor
   choice as parameters.
   
   a. The function searches the dictionary for the flavor and returns its cost.
   b. If the flavor is not in the dictionary, return a value of ``0``.

   .. sourcecode:: Python
      :linenos:

      def return_cost(menu, item):
         if item in menu:        # Check if 'item' is a key in the 'menu' dictionary.
            return menu[item]   # Return the value for the key.
         return 0                # If 'item' isn't in the dictionary, return 0.

3. Write a function called ``fanciest_flavor`` that takes a dictionary as a
   parameter. The function should return the key name for the most expensive
   choice in the dictionary.

   .. sourcecode:: Python
      :linenos:

      # Write your fanciest_flavor function here:
      def fanciest_flavor(menu):  # 'menu' is the dictionary sent to the function.
         highest_cost = 0
         fanciest = ''
         # Loop through each key/value pair in the dictionary.
         for (flavor, price) in menu.items():
            if price > highest_cost:    # Compare the price for the current flavor vs. highest_cost.
                  fanciest = flavor       # If True, reassign the most expensive flavor
                  highest_cost = price    # and the highest_cost.
         return fanciest

:ref:`Back to exercises <dictionaries-exercises>`.

.. _chp12partB:

Part B: Keys from a Collection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the accumulator pattern to add new key/value pairs to an empty dictionary.
 
2. The function should take each name from the list and use it to create a key
   in the dictionary.
3. For the value of each key, assign a random integer from 100-500.

   .. sourcecode:: Python
      :linenos:

      tickets = {}        # Create an empty dictionary.
      for name in names:  # Loop through the 'names' list.
      tickets[name] = random.randint(100, 500)    # Assign a random number from 100 - 500 to the 'name' key.

5. In ``main()``, call the ``assign_tickets`` function and assign the result to
   a ``ticket_holders`` variable.

   .. sourcecode:: Python
      :linenos:

      def main():
         names = ['Caleb', 'Naomi', 'Owen', 'Ava', 'Aaron', 'Lydia']

         ticket_holders = assign_tickets(names)
         print(ticket_holders)

:ref:`Back to exercises <chp12Keys>`.

.. _chp12partC:

Part C: Modify Values
^^^^^^^^^^^^^^^^^^^^^

Oh no! Ticket numbers 100-199 were supposed to be held back for VIPs. You need
to reassign tickets to anyone who was given one of the reserved seats. Use the
editor in part B as you update your code.

The ``fix_tickets`` function should:

1. Accept a dictionary as a parameter.
2. Loop through the dictionary and check each ticket number to see if it is in
   the range 100-199 (including the end points).
3. For a ticket within the range, increase its value by ``500`` and reassign it
   to the key.

   .. sourcecode:: Python
      :linenos:

      def fix_tickets(tickets):
      # Iterate through the key/value pairs in the dictionary:
      for (key, value) in tickets.items():
        if 100 <= value <= 199:     # Check if 'value' is in the desired range.
            tickets[key] += 500     # If True, increase 'value' by 500 and reassign it to the key.

   To check your code, be sure to print ``ticket_holders`` before and after
   calling the ``fix_tickets`` function.

   .. sourcecode:: Python
      :linenos:

      # In main:
      print('Before:', ticket_holders)
      fix_tickets(ticket_holders)
      print('After:', ticket_holders)

:ref:`Back to exercises <chp12MV>`.

.. _chp12partD:

Part D: Counting Characters
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Write a function called ``character_count`` that counts how many times each
character appears in a string.

The function should:

2. Create an empty dictionary called ``counts``.
   
   .. sourcecode:: Python
      :linenos:

      counts = {}                     # Define an empty dictionary.
    
3. Loop through the string and check each character.
   
   a. If the character does NOT exist in as a key in ``counts``, add it and
      assign it a value of ``1``.
   b. If the character DOES exist as a key in ``counts``, increase its value by
      one.
    
   The counting should be *case-insensitive*. For example, ``'a'`` and ``'A'``
   both count as the same letter.
   
   .. sourcecode:: Python
      :linenos:

      for char in a_string.lower():   # Loop through each character in a_string.
   
4. Return the completed ``counts`` dictionary and assign it to a ``results``
   variable in ``main()``.

   .. sourcecode:: Python
      :linenos:

      #In the main function under the variable text
      # Call the character_count() function. Assign the returned dictionary to results.
    
      results = character_count(text) 

:ref:`Back to exercises <chp12CC>`.

.. _chp12partE:

Part E: Use a List to Sort Key/Value Output
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Now display the character count result in a cleaner way. Update your code in
the part D editor.

2. Modify your code to print a key/value pair ONLY IF the character is a
   letter.

   .. sourcecode:: Python
      :linenos:

      # Print the introductory sentence:
      print("The letter counts for '{0}' are:".format(text))
  
      # Loop through the dictionary:
      for (key, value) in results.items():
         # Check if key is a letter.
         if key in string.ascii_letters:
            # If True, print the key and its value from the results dictionary.  
            print(f"{key}: {value}")     
  
3. Modify your code again, but this time display the character counts in
   alphabetical order.
   
   a. Use the ``list`` function to create a list of the keys from the
      ``results`` dictionary.

   .. sourcecode:: Python
      :linenos:

      # Create a list of the keys from the results dictionary.
      keys = list(results.keys()) 

   b. Sort the list, then use a loop to print the key/value pairs, one pair
      per line.

   .. sourcecode:: Python
      :linenos:

      # Sort the keys alphabetically.
      keys.sort()             

      for key in keys:
         # Check if key is a letter.
         if key in string.ascii_letters:
            # If True, print the key and its value from the results dictionary.  
            print('{0}: {1}'.format(key, results[key])) 

:ref:`Back to exercises <chp12UseList>`.  
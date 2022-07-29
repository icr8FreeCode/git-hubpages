Chapter 8: Lists Keep Things In Order
=====================================

The answers on this page show ONE way to solve the :ref:`exercises <lists-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

    A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

    <iframe src="https://trinket.io/embed/python3/560cc5a91d" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

.. _chp8part1:

Solutions
---------
Part One: Adding and Removing Items
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. Create a list called ``adding_practice`` with a single entry: ``273.15``.
   Use the ``append`` method to add the following elements to the list one at a
   time. Print the list after each step to confirm the changes.

   .. sourcecode:: Python
      :linenos:

      # Create a new list with one entry.
      adding_practice = [273.15]  
      print(adding_practice)

      #b. Append new element 'hello' to the list:
      adding_practice.append('hello')
      print(adding_practice)

2. Use :ref:`concatenation <concatenating-lists>` to add these three items to
   the list all at once: ``[False, -4.6, '87']``.

   .. sourcecode:: Python
      :linenos:

      adding_practice += [False, -4.6, '87']
 
3. ``append``, ``insert``, ``pop``, and ``remove`` are used to add or remove
   elements from a list. *Bracket notation* can be used to modify any element
   within a list. Starting with the ``cargo_hold`` list write statements to do the following:

   .. sourcecode:: Python
      :linenos:

      #We can split lists across lines! This makes longer lists easier to read.
      cargo_hold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual',
          'meal packs', 'slinky', 'security blanket']
      
      #a. Use bracket notation to replace 'slinky' in the list with 'space
      tether'.
      cargo_hold[5] = 'space tether'
      print(cargo_hold)
      
      #b. Remove the last item from the list with pop. Print the element removed and the updated list.

      removed = cargo_hold.pop()  
      print('\nb) Element removed:', removed)
      print('Cargo hold:', cargo_hold)
      
      #d. append and insert require arguments inside the ().
      # Add the items 1138 and '20 meters' to the list.
      # the number at the start and the string at the end.
      # Insert 1138 at index 0.
      cargo_hold.insert(0, 1138)   
      cargo_hold.append('20 meters')   
      print('\nd) Cargo hold:', cargo_hold)
      
      #e. # Use the remove method to take the parrot out of cargo_hold.
      cargo_hold.remove('parrot')
      print('\ne) Cargo hold:', cargo_hold)
      
      #f. Use .format() to print the final list and its length.
      # "The list ___ contains ___ items."
      output = "The list {0} contains {1} items."
      print('\nf)', output.format(cargo_hold, len(cargo_hold)))
      

:ref:`Back to the exercises <lists-exercises>`.

.. _chp8part2:

Part Two: Slices & Methods
^^^^^^^^^^^^^^^^^^^^^^^^^^
1. Using the slice syntax ``list_name[start : end]`` you can either insert,
   replace, or remove items from a list.
   
   Use slices to make the following changes to the final ``cargo_hold`` list
   from part 1. Be sure to print the list after each step to confirm your
   work.

   .. sourcecode:: Python
      :linenos:

      cargo_hold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs',
       'space tether', '20 meters']

      # Use SLICES to make the following changes to the cargo_hold list.

      #a. Insert the string 'keys' at index 3 without replacing any other entries.
      cargo_hold[3:3] = ['keys']
      print(cargo_hold)

      #b.  Remove 'instruction manual' from the list.
      index = cargo_hold.index('instruction manual')
      cargo_hold[index:index+1] = []

      #c Replace the elements at indexes 2-4 with the items 'cat', 'book', and 'string cheese'.
      # Remember that slices go from the start index up to but NOT including the end index.
      cargo_hold[2:5] = ['cat', 'book', 'string cheese'] 

2. Some methods---like ``append`` and ``pop``---alter the original list,
   while others do not. Use the lists

   .. sourcecode:: python

      supplies_1 = ['duct tape', 'gum', 3.14, False, 6.022e23]
      supplies_2 = ['orange drink', 'nerf toys', 'camera', '42', 'Rutabaga']

   to see if taking a slice or using the ``reverse`` and ``sort`` methods
   changes the original list.

   .. sourcecode:: Python
      :linenos:

      #a. Print a slice of the last 3 items from supplies_1.
      print('Slice:', supplies_1[-3:])
      print('After slice:', supplies_1)

      # Does slice alter the original list?
      #Conclusion: Taking a slice does NOT alter the original list!

      #b. reverse the first list, sort the second, and then print both lists.
      supplies_1.reverse()
      supplies_2.sort()
      print('Reversed:', supplies_1)
      print('Sorted:', supplies_2)

      #c. Do reverse or sort alter the original lists? Both alter the original list.

:ref:`Back to the exercises <lists-exercises>`.

.. _chp8part3:

Part Three: Split, List, and Join
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. The ``split`` method converts a string into a list, while the ``join``
   method does the opposite.

   .. sourcecode:: Python
      :linenos:

      #a. Print phrase.split() vs. phrase.split('e') vs. list(phrase).
      phrase = 'In space, no one can hear you code.'

      print(phrase.split())
      print(phrase.split('e'))
      print(list(phrase))

      # What is the purpose of the argument inside the ()?
      #The argument inside .split() identifies where to divide in the string.

      #b. print ''.join(my_list) vs. 'a'.join(my_list) vs.'_'.join(my_list).
      my_list = ['B', 'n', 'n', '5']
      print(''.join(my_list))
      print('a'.join(my_list))
      print('_'.join(my_list))

      # What is the purpose of the argument inside the ()?
      #The argument inside .join() is the list of elements to attach together in a new string.

      #d. Do split, list, or join change the original string/list?
      #.split(), .join(), and list() do NOT change the original string/list.

:ref:`Back to the exercises <lists-exercises>`.

.. _chp8part4:

Part Four: Multi-dimensional Lists
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. Lists can hold different data types, even other lists! A
   *multi-dimensional list* is one with entries that are also lists.

   .. sourcecode:: Python
      :linenos:

      #a. Define and assign the following lists, which hold the name, chemical
      symbol and mass for different elements:

      # Here are three, 'one-dimensional' lists:
      element_1 = ['hydrogen', 'H', 1.008]
      element_2 = ['helium', 'He', 4.003]
      element_26 = ['iron', 'Fe', 55.85]

      #b. Append each of the element lists to 'table'.
      #'table' is a 2-dimensional list. Each element in table is also a list!
      table = []
      table.append(element_1)
      table.append(element_2)
      table.append(element_26)
      print(table)
      print(len(table))

      #c. Examine the difference between printing table[1] and table[1][1].
      #Explain the difference between the first and second index in table[1][1]
      #The first [] returns the index element list in table (element_2).
      #The second [] return the index value within the first[] element list (he)

      #d. Print symbol from element_26.
      print(table[2][1]))
      
2. **OPTIONAL**: ``table`` is an example of a *2-dimensional list*. The first
   "level" contains the element lists, and the second level holds the
   name/symbol/mass values.
   
   Now create a 3-dimensional list. A good mental model is to think of a filing
   cabinet.

   .. sourcecode:: Python
      :linenos:

      #a. Define at least four, 1-dimensional lists. Call each one a *folder*.
      folder_1 = ['page_1', 'page_2', 'page_3']
      folder_2 = ['page_9', 'page_8']
      folder_3 = ['page_a', 'page_b', 'page_c']
      folder_4 = ['page_x', 'page_y', 'page_z']

      #b. Now define at least two, 2-dimensional lists. Call these lists *drawers*. 
      #Each element in the list is one of the folders.
      drawer_1 = [folder_1, folder_2]
      drawer_2 = [folder_3, folder_4]

      #c. Now define one 3-dimensional *cabinet* list. 
      #Each element is one of the 2-D drawer lists.
      cabinet = [drawer_1, drawer_2]

:ref:`Back to the exercises <lists-exercises>`.
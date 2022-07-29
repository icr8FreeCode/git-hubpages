Gameplay Functions Review (Optional)
====================================

When you first cloned the Minesweeper project from GitHub, the repository
included several complete functions. The video tutorials in the chapter mention
these functions, but they skip a detailed analysis of the code. Well, now is a
good time to take a deeper look!

This page describes how the ready-made functions work. However, the code shows
ONE way to solve the gameplay tasks. There are many OTHER ways to achieve the
same results. Feel free to create a new branch in your Git repository and
experiment with your own ideas. You can try to streamline the functions, or
replace any of them with a completely new set of statements. Remember, we learn
to code by *coding*, and this includes examining other programmers' work.

The ``game_logic.py`` Module
----------------------------

This file manages the nitty-gritty details of running Minesweeper. It resets
the conditions for each new game, initializes session variables, populates
lists, hides mines, formats SQL query strings, and checks if the player makes a
safe choice on the board.

The module begins by importing three *other* Python modules:

.. sourcecode:: Python
   :linenos:

   import random
   import string
   from crud import *

``random`` is used to choose where to hide the mines. ``string`` helps build
the row labels and cell coordinates. The functions from ``crud`` run the SQL
queries.

Now let's examine four of the functions included in ``game_logic.py``.

The ``make_columns()`` Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``make_columns()`` is the shortest function in the module. It's job is to
fill a list with the column headings for the game board. It is called from the
``reset_board()`` function.

.. figure:: figures/col-headings.png
   :alt: The 11 column headings on the game board. The first is blank, followed by numbers 1 - 10.
   :width: 70%

   The game board has 11 columns, numbered 1 - 10. The first column doesn't
   contain a heading.

.. sourcecode:: Python
   :lineno-start: 20

   def make_columns():
      headings = ['']
      for label in range(10):
         headings.append(label+1)
      return headings.copy()

Here's a breakdown of the code:

#. **Line 21**: Instead of an empty list, ``headings`` begins with a single
   entry. That string value keeps the upper left cell on the board blank. Since
   the first column contains row letters instead of active spaces, no heading
   is necessary.
#. **Line 22**: This sets up a basic ``for`` loop. Each time it repeats,
   ``label`` is assigned a new integer (0, 1, 2, ... 9).
#. **Line 23**: This appends the value ``label + 1`` to the end of the
   ``headings`` list.
#. **Line 24**: This returns an independent copy of the column headings, which
   is assigned to ``session['columns']``.

.. admonition:: Note

   Since the loop just builds a list of 10 numbers, you might wonder why we
   don't hard-code the result.

   .. sourcecode:: Python

      headings = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   
   Using a loop keeps our code flexible. If we add a parameter to
   ``make_columns()``, we can adapt the ``for`` loop to generate a different
   number of headings. This opens up the possibility for other board layouts.

   .. sourcecode:: Python

      def make_columns(num_headings = 10):
         headings = ['']
         for label in range(num_headings):
            headings.append(label+1)
         return headings.copy()

The ``make_rows()`` Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``make_rows()`` is also called from the ``reset_board()`` function. Its job is
to build a list with all the string values needed for the row labels and button
text.

There are 10 rows on the game board (A - J), and each one contains 11 columns.
To fit this structure, ``make_rows()`` returns a two-dimensional
*list of lists*.

.. sourcecode:: bash

   rows = [ [row_A_entries], [row_B_entries], ... [row_J_entries] ]

Each entry in ``rows`` is a list with 11 elements. Each element is the string
value for a row label (``A - J``) or button text (like ``B7``).

To generate the 2-dimensional list, ``make_rows()`` uses a pair of nested
loops.

.. sourcecode:: Python
   :lineno-start: 26

   def make_rows():
      rows = []
      for row in range(10):
         letter = string.ascii_uppercase[row]
         cells = []
         for column in range(11):
            if column == 0:
               cells.append(letter)
            else:
               cells.append(letter + str(column))
         rows.append(cells)
      return rows

Here's a breakdown of the code:

#. **Line 27**: Assigns an empty list to ``rows``.
#. **Lines 28 - 30**: Line 28 starts the *outer loop*. Each time it repeats,
   ``row`` is assigned a new value in the range 0 - 9. Line 29 uses this
   integer to assign an uppercase character (``A - J``) to ``letter``. Line 30
   assigns an empty list to the accumulator variable ``cells``.
#. **Lines 31 - 35**: Line 31 begins the *inner loop*. Each time it repeats,
   ``column`` is assigned an integer in the range 0 - 10. When ``column == 0``,
   we are dealing with the first cell in the row. Line 33 appends ``letter`` to
   ``cells``.

   When ``column`` is not ``0``, the space on the board will contain a button.
   Line 35 appends a letter/number combination to ``cells``. This string will
   be used as the text inside the button.

   After the inner loop finishes, the ``cells`` list contains 11 entries. 
#. **Line 36**: This statement is part of the outer loop. It appends the
   completed ``cells`` list to ``rows``.
#. **Line 37**: This returns the completed ``rows`` list, which is assigned to
   ``session['rows']``.

The ``place_mines()`` Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``place_mines()`` is called from the ``index()`` function in ``main.py``. Its
job is to randomly assign mines to locations on the game board. It accepts a
single parameter, which is the number of mines to hide.

.. sourcecode:: Python
   :lineno-start: 39

   def place_mines(amount):
      mines = []
      while len(mines) < amount:
         row = random.choice(string.ascii_uppercase[0:10])
         column = random.randint(1, 10)
         location = row + str(column)
         if location not in mines:
            mines.append(location)
      mines.sort()
      record_mines(mines)
      count_mines()
      return mines.copy()

Here's a breakdown of the code:

#. **Line 40**: Assigns an empty list to the ``mines`` variable. This begins
   yet another example of the accumulator pattern!
#. **Line 41**: The condition ``len(mines) < amount`` keeps the ``while`` loop
   running until the number of entries in ``mines`` matches the number assigned
   to ``amount``.
#. **Line 42**: ``string.ascii_uppercase[0:10]`` returns a slice from the
   string of uppercase letters. In this case, the index values ``[0:10]``
   return the letters ``'ABCDEFGHIJ'``.

   ``random.choice`` then selects one letter from the slice.
#. **Line 43**: This selects a random integer from 1 - 10, including both end
   points.
#. **Line 44**: This combines the row letter with the column number and assigns
   the string to ``location``.
#. **Lines 45 & 46**: The conditional prevents duplicate choices for the mine
   locations. If the newly chosen cell is NOT currently in the ``mines`` list,
   it is added. Otherwise, the choice is ignored.
#. **Lines 47 - 50**: These statements alphabetize the ``mines`` list, call two
   of the ``crud.py`` functions, and return an independent copy of the list.

.. admonition:: Note

   We coded the ``record_mines()`` and ``count_mines()`` functions on the
   :ref:`Database Functions page <crud-tutorials>`.

The ``check_guess()`` Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``check_guess()`` is called from the ``play()`` function in ``main.py``. It
returns ``True`` each time the player chooses a safe cell on the game board.
This happens when the cell does NOT contain a mine, or if the user selects the
*Flag Mine* option before clicking on the space. ``check_guess()`` returns
``False`` when the player hits a mine.

.. sourcecode:: Python
   :lineno-start: 52

   def check_guess(guess, flag):
      safe_guess = True
      if flag:
         session['flags'].append(guess)
         session['num_mines'] -= 1
         if guess in session['mines']:
            session['mines'].remove(guess)
      else:
         sql_query = f"SELECT * FROM board WHERE coordinates = '{guess}' AND mine_id IS NULL"
         no_mine = execute_query(sql_query)
         if no_mine:
            session['guesses'].append(guess)
            if guess in session['flags']:
               session['flags'].remove(guess)
               session['num_mines'] += 1
         else:
            safe_guess = False        
      session.modified = True
      sql_query = f"UPDATE board SET guessed = True WHERE coordinates = '{guess}'"
      execute_query(sql_query)
      return safe_guess

Given the size of the function, it's easier to review it with a video!

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/MlSs38HWk2I" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

.. _check-surroundings-walkthrough:

The ``crud.py`` Module
----------------------

This file manages the nitty-gritty details of interacting with the game's
database. We reviewed or coded all but one of these functions earlier in this
chapter. Now it's time to complete that work.

The ``check_surroundings()`` Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``check_surroundings()`` is called at the start of each new round of
Minesweeper. When the player submits a number of mines to hide:

#. The ``index()`` function calls ``place_mines()``.
#. The ``place_mines()`` function picks random locations on the board to hide
   the new set of mines. Then it calls the ``count_mines()`` function.
#. ``count_mines()`` iterates through all of the cells in the ``board`` table,
   and it passes each location to ``check_surroundings()``.

For a given cell on the table, ``check_surroundings()`` counts the number of
mines hidden in the surrounding spaces. This total is stored in both the
session cookie and the database.

The code for ``check_surroundings()`` is probably the most involved. To help
break up the discussion, we've split the explanation into two parts. The first
describes how to perform a *2-dimensional search*, which checks the 8 cells
above, below, and to each side of the selected location. The second video
examines the Python code used to perform that search.

.. figure:: figures/2d-search.png
   :alt: Showing the difference between a 1-dimensional and 2-dimensional search.
   :width: 70%

   A 2-dimensional search involves changing the row AND column values.

How to Check Surrounding Cells
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/4_EU4nwMdRs" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

The ``check_surroundings()`` Code
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/t10yxhZNar8" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

Video Summary
^^^^^^^^^^^^^

#. To check all of the spaces surrounding a given cell, we can use a pair of
   :ref:`nested for loops <nested-loops>`. The *outer loop* sets a new row
   value. The *inner loop* iterates over the possible columns in each row.
#. To simplify our search algorithm, add extra cells to the board!
   
   a. Place the cells along the outer edge of the game board.
   b. The cells remain hidden from the player, and they will never contain a
      mine.
   c. The cost of storing data for the hidden cells is well worth it. We gain
      *a lot more* by decreasing the complexity of the search.

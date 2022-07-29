.. _db-exercises:

Exercises: Databases
====================

In these exercises, you will perform several :ref:`CRUD operations <crud-operations>`
with a new database file.

Part A: Set Up a New Database
-----------------------------

#. Launch Visual Studio Code and use the *File* menu to open your
   ``database_practice`` directory.
#. Double-click the ``.gitignore`` file to open it in the editor.
#. Choose a name for a new database file (like ``exercises.db``) and enter it
   on its own line in ``.gitignore``.
#. Create an ``exercises.py`` file. Start by importing the ``sqlite3`` module,
   then :ref:`open a connection <connect-to-db>` to your new database.
#. Don't forget to define a ``cursor`` object.
#. Run the program. Your new database should appear in the file tree.

The setup is done. You are ready to go!

Part B: Add a Table
-------------------

Imagine that you want to apply your new database skills to bring some order to
your game closet. To do this, you will use a ``games`` table to store some
information. The table needs at least 5 columns:

- ``game_id``: This is the primary key assigned to each row in the ``games``
  table.
- ``title``: This is the name of the game.
- ``num_players``: Gives a range for the number of people required to play the
  game.
- ``min_age``: Identifies the youngest recommended player age for the game.
- ``ranking``: Assigns a value of 1 - 5 to the game. The higher the number,
  the more you like the game.

The ``title`` and ``num_players`` columns will hold ``TEXT`` data types.
``game_id`` and ``min_age`` will be integers. ``ranking`` will be a ``FLOAT``
data type.

#. Define a ``sql_query`` variable and assign it a string to create the
   ``games`` table. Be sure to include the ``PRIMARY KEY`` syntax for the
   ``game_id`` column.
#. Use ``cursor.execute()`` to run the SQL query and create the new table.
#. Verify that the table was created by expanding the database name in the
   *SQLITE EXPLORER* tab.

   .. figure:: figures/db-exercises-table.png
      :alt: The expanded SQLite Explorer tab, showing the games table and column names.

Part C: Add Rows
----------------

#. Assign a new string to your ``sql_query`` variable. It should use the
   :ref:`INSERT INTO <sql-insert-syntax>` keywords to add an entry to the ``games``
   table. Remember to use placeholders after the ``VALUES`` keyword.
#. For the first new row, set the ``title`` as "Qwirkle", the ``num_players``
   as "2 - 4", the ``min_age`` as 6, and the ranking as 4.5.

   You do NOT need to include a value for ``game_id``, since the ``sqlite3``
   module automatically assigns primary key values.
#. Reuse the ``sql_query`` string to add another entry to the ``games`` table.
   This time, choose your own values for the columns.
#. It is possible to fill in only SOME of the columns for a given row. To skip
   one or more columns, leave their names and values out of the SQL command.

   Add 3 - 5 more rows to the ``games`` table. At least one of these should
   NOT fill in all of the columns.
#. Finish off your code with a ``.commit()`` statement, then ``.close()`` the
   connection to the database.
#. Run your program, then use the *Play* button in the *SQLITE EXPLORER* tab
   to view the ``games`` table.

.. admonition:: Note

   Notice that ``NULL`` appears in a cell whenever a value for that column
   is not assigned.

Part R: Access Game Data
------------------------

For this section, you will need to use several different query strings to
complete the steps.

#. Use :ref:`SELECT ... FROM ... <sql-select-syntax>` to return results from
   all of the columns in the ``games`` table.

#. Use ``list()`` to convert the returned results, then print the data to the
   console in a clear fashion. *Tip*: Define a function to accomplish this.
#. Repeat step 1, but return and print a single entry based on its ``game_id``
   value. You will need to include the ``WHERE`` keyword in your SQL query.
#. Repeat step 1, but print only the ``title`` data from the table. *Bonus*:
   Display the games in alphabetical order.
#. Select the ``title`` and ``min_age`` data, but print the results in
   *DECREASING* order by age.

Part U: Modify Game Data
------------------------

Remember to include a ``WHERE`` clause in your :ref:`UPDATE <sql-update-syntax>`
queries! If you leave it out, then *ALL* rows in the table will be changed.

Don't forget to view the ``games`` table after each step to confirm your work.

#. Update a single record based on its ``game_id``.

   a. The first entry we added in Part C has a ``game_id`` of ``1``. Use
      ``UPDATE ... SET ... WHERE`` to change the ``ranking`` for this entry to
      a different value.
   b. Use a single ``UPDATE`` statement to change two columns for the entry
      with ``game_id`` = 4.

#. Use :ref:`ALTER TABLE <add-table-column>` to add a new column, called
   ``will_donate``, to the table. Set the data type to ``BOOLEAN``.
#. With a single ``UPDATE`` command, set the ``will_donate`` value to ``True``
   for all entries that have a ``ranking`` lower than 3.0.

   .. admonition:: Note

      SQLite converts boolean values to integers. ``True`` is stored as ``1``,
      while ``False`` is saved as ``0``.

Part D: Remove Games
--------------------

Remember, there is no undo option after running :ref:`DELETE <sql-delete-syntax>`!

#. Delete a single row from the table based on its ``game_id`` value.
#. Write a single ``DELETE`` command to remove any games from the table that
   you don't consider fun. You can use either the ``ranking`` or ``will_donate``
   value to decide which rows to remove.

Bonus Exercises
---------------

Whew! You made it through all the exercises. Nice work!

Take a quick break and, if you wish, try these additional tasks that go above
and beyond the basic SQL commands.

#. Use logical operators (``AND``, ``OR``, ``NOT``) in ``WHERE`` statements.
#. Print the complete records for the games, but only if the ``min_age`` column
   ``IS NOT null``.
#. Experiment with the `ORDER BY <https://www.w3schools.com/sql/sql_orderby.asp>`__
   keywords.

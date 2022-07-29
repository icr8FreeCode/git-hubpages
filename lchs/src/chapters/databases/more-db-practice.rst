More Database Practice
======================

In the previous pages, we created a database, added a table to it, and saved
several entries in that table. Now we will learn how to modify the stored data.

Update Table Data
-----------------

By using an :ref:`UPDATE <sql-update-syntax>` query, we can change one or more
entries in a table. Code along with the following video to practice this
technique.

.. admonition:: Note

   The video shows a new column in the ``students`` table. Here's how to add
   that column and fill it with ``'Yes'`` strings:

   .. sourcecode:: Python
      :lineno-start: 6

      # Add the recent_grad column to the students table.
      sql_query = "ALTER TABLE students ADD COLUMN recent_grad TEXT"
      cursor.execute(sql_query)

      # Fill each cell in the column with a 'Yes' string.
      sql_query = "UPDATE students SET recent_grad = 'Yes'"
      cursor.execute(sql_query)
      database.commit()

   After running this code, your ``students`` table should match the one shown
   at the beginning of the video.

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube.com/embed/piXiY9j64I4" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

**Key points**:

#. The ``UPDATE`` query uses the ``SET`` keyword to identify one or more
   columns to change.
#. To identify which rows to change, the ``UPDATE`` query should also include a
   ``WHERE`` condition. If we leave out the condition, then *every* row in the
   table will be modified.
#. Combining ``SET`` and ``WHERE`` identifies which cell(s) in the table to
   change.

   .. figure:: figures/table-update.png
      :alt: Showing how SET and WHERE cross in a table to identify the cell(s) to change.
      :width: 80%

      Each cell in the table has a (column, row) position.

#. After running the query, use the ``.commit()`` method to confirm the
   changes.
#. After we commit an ``UPDATE`` query, there is no quick *Undo* option!

**Sample code**:

.. sourcecode:: Python
   :linenos:

   import sqlite3

   database = sqlite3.connect('practice.db')
   cursor = database.cursor()

   # Update selected cells from the 'students' table:
   sql_query = "UPDATE students SET recent_grad = 'No' WHERE grad_year < 2017"
   cursor.execute(sql_query)
   database.commit()

Delete Data
-----------

Code along with the following video to practice removing rows from a table.
Also learn how to delete an entire table from the database.

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube.com/embed/CDVGJWiDQI8" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

**Key points**:

#. The :ref:`DELETE FROM <sql-delete-syntax>` query removes selected rows from
   a table.
#. Add a ``WHERE`` clause to identify which rows should be deleted.
#. The ``DROP TABLE`` query removes an entire table from the database. ALL the
   row and column information will be deleted.
#. *There is NO undo option* for a ``DELETE`` or ``DROP`` query.

**Sample code**:

.. sourcecode:: Python
   :linenos:

   import sqlite3

   database = sqlite3.connect('practice.db')
   cursor = database.cursor()

   # Delete selected rows from the 'students' table:
   sql_query = "DELETE FROM students WHERE recent_grad == 'No'"
   cursor.execute(sql_query)
   database.commit()
   
   # Drop the 'remove_me' table from the database:
   sql_query = "DROP TABLE remove_me"
   cursor.execute(sql_query)

Check Your Understanding
------------------------

.. admonition:: Question

   Assume we have a table called ``books`` stored in our database. The table
   includes columns for ``title``, ``publish_date``, and ``category``.
   Which SQL query returns the titles for all non-fiction books published
   after 2019?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> SELECT title, category FROM books WHERE publish_date > 2019</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> SELECT publish_date > 2019 FROM books WHERE category = 'non-fiction'</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> SELECT books, title WHERE publish_date > 2019 AND category = 'non-fiction'</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> SELECT title FROM books WHERE publish_date > 2019 AND category = 'non-fiction'</li>
      </ol>
      <p id="Q1"></p>

.. Answer = d

.. admonition:: Question

   What should you do if you accidentally ``DROP`` a table from your database
   or ``DELETE`` the wrong row from a table?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> Accept that the data is gone and learn from your mistake.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Cry.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Blame someone else.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Use <em>Control-z</em> to undo the mistake.</li>
      </ol>
      <p id="Q2"></p>

.. Answer = a

.. admonition:: Question

   To ``UPDATE`` an entry in a table, the SQL query should specify a row and a
   column. Which keyword identifies the rows to change, and which keyword
   identifies the columns?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> SET identifies the rows. WHERE identifies the columns.</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, true)"> SET identifies the columns. WHERE identifies the rows.</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> FROM identifies the rows. SET identifies the columns.</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> FROM identifies the columns. WHERE identifies the rows.</li>
      </ol>
      <p id="Q3"></p>

.. Answer = b

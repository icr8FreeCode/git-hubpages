Database Operations
===================

Before we set up our first database, we need to recognize the four main actions
we will perform with it.

.. _crud-operations:

CRUD
----

.. index:: ! query, ! CRUD

.. index::
   single: SQL; query
   single: SQL; CRUD

To interact with a database, we write a **query**. Queries can be simple or
complex, depending on the task. We can fit each query’s purpose into one of
four categories:

#. Create
#. Read
#. Update
#. Delete

Taking the first letter from each category gives us the term **CRUD**. Let's
look at each type of operation in more detail.

Create
------

When we talk about *creating* something in a database, this can mean adding a
new table, a new row, or a new column.

Adding a Table
^^^^^^^^^^^^^^

To add a new table to the database, the query must include the following:

#. A name for the table,
#. A label for each column,
#. The data type for each column.

We will worry about the exact syntax later, but the query looks something like
this:

.. sourcecode:: mysql

   CREATE TABLE table_name (column_name_1 data_type, column_name_2 data_type,...)

Notice that a column name and its data type come as a pair
(``column_name_1 data_type``) and are NOT separated by commas. However, commas
ARE used to separate different name/type pairs inside the parentheses ``()``.

.. _sql-insert-syntax:

Adding a Row
^^^^^^^^^^^^

Once we have a table ready to go, the query to add a new entry must include:

#. The name of the table,
#. The name of one or more of columns in that table,
#. A value for each of the selected columns.

The general syntax to add a new row looks like this:

.. sourcecode:: mysql

   INSERT INTO table_name (column_1, column_2, ...) VALUES (value_1, value_2, ...)

When we insert a new row, we do NOT have to include a value for every column in
the table. When we leave out values, those spots in the table remain empty.

.. _add-table-column:

Adding a Column
^^^^^^^^^^^^^^^

To add a column to an existing table, the query must include:

#. The name of the table,
#. The name for the new column,
#. The data type for the new column.

The general syntax looks like this:

.. sourcecode:: mysql

   ALTER TABLE table_name ADD COLUMN column_name data_type

When we create a new column in a table, we don't need to fill it with any
values. Existing rows in the table will add the new slot but keep it empty.

.. index:: ! NULL

.. admonition:: Note

   Empty spaces in a database are assigned a special value called **NULL**.
   
   ``NULL`` is NOT the same as an empty string, ``0``, or ``False``. ``NULL``
   is literally an empty space, and it indicates that a data value does not
   exist for that spot in the table.

.. _sql-select-syntax:

Read
----

To get information from a table, the query must include:

#. The table name,
#. The name of one or more columns.

The query may also include a *condition* to help filter the results.

The general syntax looks like this:

.. sourcecode:: mysql

   SELECT column_name_1, column_name_2, ...
   FROM table_name
   WHERE condition

.. _sql-update-syntax:

Update
------

Once we get comfortable adding and retrieving information from the database,
the next step is to start changing it!

To modify a value in a table, the query must include:

#. The table name,
#. The name of a column,
#. The new value,
#. A condition.

The general syntax looks like this:

.. sourcecode:: mysql

   UPDATE table_name
   SET column_name = new_value
   WHERE condition

``SET`` selects a column from the table, and ``WHERE`` choses a specific row. 

The ``WHERE`` statement is optional, but we really want to include it! If we
don't, then EVERY value in that column will be changed to ``new_value``.

.. admonition:: Warning

   We must be very careful when we updating a table. There is no *Undo* command
   if we make a mistake!

.. _sql-delete-syntax:

Delete
------

Finally, there comes a time when we need to remove an entry from the database.
This does more than clear the values in the columns. The *entire row* is
removed from the table. If we print a table before and after a delete action,
we will see no gap where data used to be. Instead, we will see a new, shorter
table.

To delete a row from a table, the query must include:

#. The table name,
#. A condition to evaluate as ``True`` or ``False``.

The general syntax looks like this:

.. sourcecode:: mysql

   DELETE FROM table_name WHERE condition

When the query runs, each row in the table is checked for the ``condition``. If
``True``, then the row is removed from the table.

.. admonition:: Warning

   Deleting a row permanently removes it from the table, and there is no
   *Undo* option!

Check Your Understanding
------------------------

.. admonition:: Question

   Given this query:

   .. sourcecode:: mysql
      :linenos:

      SELECT event
      FROM events_master
      WHERE month = 07

   What is the name of the table?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">event</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> <code class="pre">events_master</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">month</code></li>
      </ol>
      <p id="Q1"></p>

.. Answer = b

.. admonition:: Question

   For the same query, what is the name of the column that holds the data we
   want?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> <code class="pre">event</code></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">events_master</code></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">month</code></li>
      </ol>
      <p id="Q2"></p>

.. Answer = a

.. admonition:: Question

   What action will this query perform?

   .. sourcecode:: mysql
      :linenos:

      DELETE FROM accounts WHERE age < 16

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> It removes the 'age' column from the 'accounts' table.</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> It removes rows 0 - 15 from the 'accounts' table.</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, true)"> It removes any row from 'accounts' that has a value less than 16 in the 'age' column.</li>
      </ol>
      <p id="Q3"></p>

.. Answer = c

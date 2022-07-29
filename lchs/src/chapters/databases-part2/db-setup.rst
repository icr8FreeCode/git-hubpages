Database Setup
==============

The Minesweeper game will use a combination of session cookies and database
operations to store important information. Let's begin by getting the database
file ready.

Start With an Outline
---------------------

Before we write any code, we need to think about what data the game needs in
order to work. In particular, we want to identify the information to save in
the game's database. There are LOTS of possibilities! However, for our basic
game, we want to start small. We can always refine the database structure
later!

Consider the data that needs to *persist*. For example, if a user leaves the
game in the middle of play and comes back later, what needs to go into the
database to keep a record of their progress?

For starters, our database should save:

#. Information about each mine hidden on the board. This includes a primary key
   value as well as a location (row letter plus column number).
#. Information about each individual cell on the board. This includes a primary
   key, the cell's location, the number of mines in surrounding cells, whether
   the user has clicked the cell, and whether the cell contains a mine.

This outline suggests 2 tables for the database - one for a list of mines, and
another for the cells on the game board.

``db_setup.py``
---------------

Use the tools in Visual Studio code to create a new Python file at the same
level as ``main.py``. Call the new file ``db_setup.py``. This will be a
separate program, and its only job is to create the database file and add two
tables.

Follow along with the video to build this program.

.. admonition:: Tip

   The video player automatically sets the resolution. However, this choice
   might not be good enough to clearly see all of the text.

   If the code looks blurry on your screen, click the gear icon in the video
   controls and increase the resolution to the maximum value.
   
.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/WGB6Pj1mTvw" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

.. admonition:: Note

   For our basic game, we might not use all of the columns in the tables yet.
   However, they could be useful later, so there's no harm in adding them now.

Video Summary
-------------

.. admonition:: Tip

   Don't try to code ``db_setup.py`` using only the summary! The clip contains
   information and specific code instructions that you really shouldn't skip.

   The text by itself doesn't provide enough detail on its own. It's a
   *SUMMARY* and not a *GMESD* (Give-Me-Every-Single-Detail).

#. After creating the ``game.db`` database file, add two new tables: ``mines``
   and ``board``. The first table stores an ID number and location for each
   mine created in the game. The second table stores information about each
   cell on the game board.
#. Adding ``DROP TABLE`` commands at the top of the file lets us quickly remove
   and recreate the two tables. This is useful if we need to make a fresh
   start.
#. The ``mines`` table includes two columns: ``mine_id`` and ``coordinates``.
   ``mine_id`` is the primary key, and its data type must be ``INTEGER`` instead
   of ``INT``. (For some reason, using the ``INT`` syntax doesn't automatically
   increment the primary key values).

   ``coordinates`` is of type ``TEXT`` and will store values like ``C9`` or
   ``E2``.
#. The ``board`` table includes columns for ``cell_id`` (the primary key),
   ``coordinates``, ``surr_mines`` (surrounding mines), ``guessed`` and
   ``mine_id``.

   ``cell_id``, ``surr_mines``, and ``mine_id`` are integers. ``coordinates``
   is a text data type, and ``guessed`` is a boolean.
#. No rows need to be added to the ``mines`` table at this time. However, the
   ``board`` table *does* require some information.
#. A pair of nested loops create a string value for the coordinates of each cell
   on the board.
#. The loops also execute a SQL query to insert new rows into the ``board``
   table. Each new row includes a string for ``coordinates`` and the value
   ``False`` for the ``guessed`` column.
#. Note the unused row and column labels (``X, Y, 0``, and ``11``). There is a
   reason for these extra labels, but we won't explore that until the
   :ref:`end of the chapter <check-surroundings-walkthrough>`.

Home Page Logic
===============

Now that we have our HTML templates ready, it's time to add some Python to get
the game running.

The ``index()`` Function
------------------------

The home page for our application is controlled by the ``index()`` function in
``main.py``. It serves several purposes:

#. To clear existing data in preparation for a new game,
#. To process the ``Main Menu`` form submission,
#. To hide a new batch of mines on the board,
#. To redirect a player to the URL where they will play the game.

To complete your ``index()`` function, open your Minesweeper project and code
along with the video:

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/GcBSzNl670I" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

Video Summary
-------------

Remember, this summary is NOT intended to replace the video walkthrough! The
notes give you information about the ideas explained in the clip. To see the
specific Python code and hear the logic behind it, you need to watch the movie.

#. Two helper functions have already been written for you. The
   ``reset_board()`` and ``place_mines()`` functions can be found in the
   ``game_logic.py`` file. Line 2 in ``main.py`` imports these functions from
   that module.
#. Use a conditional to break the ``index()`` function into two parts. One part
   deals with the form submission (a ``POST`` request), and the other resets
   the board after a ``GET`` request.
#. After a ``POST`` request, use ``request.form[]`` to collect data from the
   *Main Menu* form. This will be the number of mines the user wants to hide.

   a. Add some server-side validation to deal with invalid form submissions
      (e.g. submitting and empty field, or letters, or symbols, etc.).
   b. For invalid form submissions, set the number of mines to some default
      value, like ``10``.
   c. For now, don't worry about checking if the number of mines is within
      5 - 25. You can return to this idea :ref:`later <game-refinements>`.

#. Save the number of mines to the session cookie. Make sure the value is the
   ``int`` data type.

   .. sourcecode:: Python

      session['num_mines'] = number_submitted_from_form

#. After validating the number of mines, call the ``place_mines()`` function.
   Include the number of mines as the argument, and save the returned list to
   ``session['mines']``.
#. Finally, use the ``redirect()`` function to send the user to the ``/play``
   route.

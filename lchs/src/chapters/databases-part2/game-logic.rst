Game Page Logic
===============

Our home page is ready, the database functions operate, and we have access to
ready-made functions in ``game_logic.py``. After we add one final bit of code,
we can finally play our Minesweeper game!

The ``play()`` Function
-----------------------

The ``play()`` function controls the game page. It renders the ``mines.html``
template, collects and validates data from the form, calls a function to
analyze each guess, and redirects players to the home page as needed.

Open the ``main.py`` file in Visual Studio Code, then code along with each of
the following videos.

Collect and Validate Guesses
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/aDLCNfNkS5U" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

Collect Checkbox Data and Call ``check_guess()``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/P_P5l7GQ_9Y" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

``play()`` Summary
------------------

#. By typing the URL of the game page into the address bar, players can access
   the board before hiding any mines. To prevent this, we redirect them back to
   the home page if they arrive at the page through a ``GET`` request.
#. We need to collect two pieces of information from the game board: which cell
   the player selected and whether or not they clicked the *Flag Mine*
   checkbox.

   a. Each button on the board has the same name, and the value for each one
      matches its cell coordinates (like ``A10``).
   b. However, the value for the *New Game* button is the empty string.
   c. The checkbox input has a different name from the buttons.
   d. The syntax for requesting the button and checkbox data is slightly
      different.

      .. sourcecode:: Python
         :linenos:

         # Request button data from the form:
         request.form['button_name']

         # Request checkbox data:
         request.form.get('checkbox_name')

#. Even though each button has a defined ``value``, we still need to include
   some server-side validation. Invalid input redirects the user back to the
   home page.
#. After validating the data, we call the ``check_guess()`` function to see if
   the player clicked a mine or made a safe choice on the board.

Update ``mines.html``
---------------------

As the user plays the game, the appearance of the board changes. There are 4
possibilities for the cells in the table. Each one is either:

#. **Unselected**: These appear with a gray background and have an active, blue
   button.
#. **Selected and safe**: These appear with a white background and display a
   number showing how many mines are in the surrounding spaces.
#. **Flagged**: These appear with a goldenrod background and have an active,
   blue button.
#. **Mined**: These appear with a red background and an inactive button.
   Clicking a mined cell ends the game and reveals the locations of all
   remaining mines on the board.

The ``play()`` function calls ``check_guess()`` each time the user clicks a
button on the board. The results determine the how that cell should change
after it is selected.

To finish our Minesweeper game, we need to update the code in ``mines.html``.
Our goal is to properly display the board after each turn. Also, we'll provide
different feedback messages to indicate victory or defeat.

Open the ``mines.html`` template in Visual Studio Code, then code along with
the following videos.

Change Cells After Click
^^^^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/an8sh-Xp5PQ" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

Add Feedback Messages
^^^^^^^^^^^^^^^^^^^^^

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube-nocookie.com/embed/aIJZhKCjX1E" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

``mines.html`` Summary
----------------------

#. Each time a player clicks a button on the game board, its appearance
   changes.
#. We use 5 session key/value pairs to determine the styling and content for
   each cell:

   a. ``flags``: This key points to a list of all the cells the player marked
      with the *Flag Mine* option.
   b. ``guesses``: Points to a list of safe cells the player has clicked.
   c. ``mine_counts``: Points to a dictionary that contains the number of mines
      surrounding each space on the board.
   d. ``hit_mine``: A boolean value. Set to ``True`` when the player clicks on
      a mine.
   e. ``mines``: Points to a list containing the locations of hidden mines.

#. By adding an extended ``if/elif/else`` block to ``mines.html``, we can check
   the conditions for each cell just before it is rendered on the page.
#. Adding another Jinja3 conditional inside the ``<header></header>`` element
   allows us to display different feedback messages to the player.

Test the Game!
--------------

Yay! Our Minesweeper game is ready. Play a few games to see how the application
behaves.

.. admonition:: Tip
   
   When your teacher and/or parents ask why you're playing games instead of
   doing homework, tell them you're *beta-testing* a coding project.

As you play, you will find some glitches and rough spots in the game. This is
expected, and it's the whole point of testing! Keep a record of the flaws you
find, and note how serious each one is. Errors that crash the application or
impact the gameplay should be addressed before minor annoyances.

Even though the game functions, we can't call the application "complete" just
yet. In this chapter, we focused on getting the game up and running, and we
accomplished that goal. However, the project does contain a number of
shortcomings. How to fix these is up to you! You have a good starting place
right now. Your ideas will determine the next step.

.. admonition:: Note
   
   No project is ever really done. Unusual bugs will pop up that need to be
   fixed, or new feature ideas will pop into your brain. Coding an application
   is a continuous process of tinkering, testing, and discovery!

.. _console-game:

Assignment #3: Console Game
===========================

You and a partner will design a simple console game app. For example:

#. Guess letters to figure out a word or sentence
#. Guess a 3 or 4-color sequence
#. Play a game of 21
#. Global Thermonuclear War
#. etc.

.. admonition:: Example

   Click *Run* to play Rock, Paper, Scissors against the computer!

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/ed6caf8b53?outputOnly=true&runOption=run" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

.. _assignment3-requirements:

Requirements
------------

To be considered complete, your program must include each of the following:

#. User input (to make the program interactive).
#. At least one loop and one conditional.
#. Two or more functions, one of which must be a ``main()`` function.
#. At least one list.
#. A replay option (e.g. "Would you like to play again?").

To boost your score for this assignment, you and your partner can include one
or more of the following **Bonus Items**:

#. Use at least one dictionary in addition to (or in place of) the required
   list(s).
#. Use classes/objects.
#. Use a module (custom or ready-made).

Part 1: Choose an Idea
----------------------

Before you start coding, you and your partner must decide what game you want to
create!

#. Brainstorm ideas and write them down.
#. Show the list of your ideas to your teacher. Receive feedback on which ones
   are suitable for this assignment.
#. Narrow down your list, then select the idea that excites you the most.

Next, describe to each other what you want the program to do. Now is NOT the
time to write code! Discuss the GAME, not Python.

#. Write down the features you want your game to have.
#. Start simple! From your features list, select only the most important ideas
   for your game. You have a limited amount of time, and you can always add
   more features later.
#. Write down how the game will be played by the user. What inputs will be
   needed?
#. Identify what information needs to be displayed in the console (intro, user
   input prompts, results, etc.).

Part 2: Outline the Program
---------------------------

Now that you and your partner have chosen a game idea, the next step is to
block out the different parts of the program. This can be done with pencil and
paper, in a shared document, or with comments in a code editor.

The idea here is to describe how each part of the program works without
worrying about the actual Python code yet. This can include an outline of the
data and variables needed and/or a short description of the logic for each part
of the game (e.g. loops, conditionals, functions, etc.).

.. admonition:: Example

   For the Rock, Paper, Scissors game above, the outline might look something
   like:

   .. figure:: figures/rock-paper-scissors-outline.png
      :alt: A four part outline describing the different pieces of a rock-paper-scissors program.

Part 3: Code the Console Game
-----------------------------

Login to your Trinket or repl.it account. Start a new project and give it a
descriptive name (something flashier than ``Assignment 3``). Be sure to share
the link to the project with your partner!

Begin coding your game by following the outline you made in Part 2. Here are a
few tips to help you complete your project with less hassle:

#. Start by coding something small that works (NOT the whole game). For
   example, when the player clicks *Run*, what should they see on the screen
   first?
#. Test your new program carefully before moving on.
#. Next, add one small, new thing to the program. IMPORTANT: Keep your code
   working! If the new feature breaks the program, find and fix the bugs before
   moving on.
#. Add another feature to the program. Keep the code working.
#. Repeat this process until you have added all your planned features.

Part 4: Challenge Your Game
---------------------------

Your game is almost complete! You just need to run it a few times to check for
any leftover bugs.

Users often enter the wrong thing when prompted. For example, if they are asked
for a number between ``1`` and ``10``, they might enter ``100`` or the string
``'one'``. Your program needs to survive these cases.

.. index:: ! edge cases

Also, you need to check to make sure your program deals with **edge cases**
correctly. For example, in the range ``1 - 10``, the values ``1`` and ``10``
are at the *edge* of the accepted entries. A conditional that checks for
``user_choice < 1`` behaves differently than one that uses
``user_choice <= 1``. This small change in logic can cause unexpected results,
like never being able to select ``Rock`` in the Rock, Paper, Scissors game.

Run your program several times and do the following:

#. For every input statement, enter an invalid response. Try using values
   outside of the expected range. Also try entering the wrong data type (e.g.
   ``float`` or ``str`` when an ``int`` is required).
#. For every numerical input, enter the smallest valid option.
#. For every numerical input, enter the largest valid option.

If your program crashes or produces unexpected results during these tests, then
you need to find and fix the bugs.

Once you finish this final round of debugging, your game is ready!

.. admonition:: Tip

   One of the best ways to find bugs in your game is to let someone else play
   it!

Scoring
-------

Before you submit your final program, be sure that your code:

#. Works.
#. Includes your name and your partner's name.
#. Includes each of :ref:`the required items <assignment3-requirements>`.
#. Survives invalid input. For example, if your program asks the user to enter
   a number, it should not crash when they enter a letter.
#. Includes enough comments to describe what each part of the code is doing.
#. Follows proper Python naming conventions.

Your teacher will provide you with a detailed **rubric** for this assignment.
This describes how each part of the project will be graded, as well as how
many points each part can earn.

Submitting Your Work
--------------------

Your teacher will provide instructions for sharing the URL for your project.

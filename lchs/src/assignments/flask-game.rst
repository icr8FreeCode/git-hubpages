.. _flask-game:

Assignment #6: Flask Game
=========================

In :ref:`Assignment #3 <console-game>`, you and a partner designed a game app
that ran in the console. This was good practice for creating a complete program
from start to finish.

Now that you have some Flask experience, your team can move the game out of the
console and into a browser!

.. admonition:: Example

   On the left is the same console Rock-Paper-Scissors example from Assignment 3.
   The right hand side shows what it could look like in a browser as a Flask app.

   .. figure:: figures/RPSLS.gif
      :alt: On left console version of rock paper scissors, on the right the flask version.
      :width: 80%

If your teacher didn't ask you to complete the :ref:`Console Game <console-game>`
assignment, you should review that page to get some ideas about how the game
needed to operate.

If you DID create a console game but want to create a different one now, that's
fine! Maybe your teacher had you code a choose-your-own-adventure program after
chapter 5. Imagine what that would look like on the web, with each choice
updating the page or redirecting to a different one. You are free to recycle
any old project or think up something completely new.

.. _assignment6-requirements:

Requirements
------------

Your Flask application must include each of the following:

#. A web form to collect user input.
#. At least two HTML templates, one of which can be a ``base.html`` file. These
   should include placeholders to display data that can change when the page
   reloads.
#. CSS styling, either from a local ``style.css`` file or from
   :ref:`Bootstrap <bootstrap-classes>`.
#. At least one Jinja3 loop or conditional within the template(s).
#. Both :ref:`client-side and server-side validation <client-server-validation>`.
#. Python code that:

   a. Renders the required templates.
   b. Collects user input from the web form.
   c. Creates, accesses, modifies, or deletes data from a Flask ``session``.
   d. Generates feedback messages for the user.
   e. Runs the game!

Part 1: Choose an Idea
----------------------

Before you dive into the code, you and your partner need to make a plan. This
is a bigger project, and your work will be much easier if you start with some
thinking time.

**If you want to recycle code from an earlier game**:

#. Discuss what you want the game to look like in the browser. Make sketches
   for each of the planned webpages.
#. Decide if you will use a ``base.html`` template. If so, consider what HTML
   elements you want to put in that file.
#. Examine your old Python code and determine what needs to be replaced. For
   example, console games rely on ``print`` statements to display text. Flask
   applications send data to an HTML file instead.
#. Identify which of your old functions can be used as-is. Importing them as a
   module will save you some time and effort.
#. Decide which functions need to be refactored. Some might need to be replaced
   completely, while others might require small modifications to render a
   template and/or collect data.

**If you want to create a new game**:

#. Brainstorm! Describe to each other some game possibilities, then pick one.
#. Write down the features you want your game to have.
#. Start simple! From your features list, select only the most important ideas
   for your game. You have a limited amount of time, and you can always add
   more features later.
#. Identify what information needs to be displayed in the browser (intro,
   forms, results, etc.).
#. Make sketches for what your game will look like in the browser. How many
   templates will you need? Will you use a ``base.html`` template?
#. Create a general outline for the functions your application is going to
   need.

.. admonition:: Note

   Regardless of whether you recycle old code or not, your Flask application
   is going to need multiple functions! Even if your app only renders one
   webpage, you should NOT cram all of the game logic in the same place.
   Remember, functions should be small and accomplish only one task.

   Not every function in a Flask app has to render a template. It's perfectly
   fine for a function to serve a supporting role instead.

.. _flask-game-part-2:

Part 2: Create a GitHub Repository
----------------------------------

Since you will work on this project from multiple locations, on different
devices, and as part of a team, keeping track of your code is critical.

To help manage this, you will save your project on `GitHub <https://github.com>`__.
Follow the steps on the :ref:`Remote Setup <flask-game-repo>` page to create a
new Git repository, push it up to GitHub, and give your partner permission to
make edits.

Once your remote repo is ready, return to this page and start working on your
project!

Part 3: Code the Flask Application
----------------------------------

Begin coding your game by following the notes you made in Part 1. Here are some
reminders about building larger projects:

#. Commit early and often.
#. Start small. For example, what template needs to render when the player
   first loads the page? What should the page look like?
#. Test that starter code to make sure it works. Save, commit, and push your
   changes to GitHub.
#. Add one small, new thing to the program. IMPORTANT: Keep your code working!
   If the new feature breaks the program, find and fix the bugs before moving
   on.
#. Save, commit, and push!
#. Repeat this process for all of your planned features.

.. admonition:: Tip

   Remember, you can use Git to :ref:`checkout a new branch <branching-in-git>`
   before you add a new feature to your game. That way, if your experiment
   crashes and burns, you can restore a working version of your code.

   Also, working with branches saves time! One partner can focus on the webpage
   design (HTML/CSS), and the other can checkout a different branch to focus on
   the game logic.

Part 4: Test Your Game
----------------------

Your team has run the application lots of times to check the different pieces.
Now it's time to challenge your game! The goal here is to find bugs by
deliberately trying to break your program.

.. index:: edge cases, ! beta tester

#. Start by checking the web form. Be brutal! Any errors you miss will
   eventually be found by visitors to your site.
   
   a. What happens when you submit an invalid entry?
   b. What happens when you refresh the page or reload it from the address bar?
   c. What if you try to submit duplicate entries?
   d. What if you submit HTML code?
   e. What if you use the browser tools to remove the ``required`` attribute
      from the ``input`` tag and submit an empty response?

#. Test **edge cases**, which are entries that fall at the ends of an accepted
   range (like ``1`` and ``10`` in the range ``1 - 10``).
#. If users must make a series of choices in the game, test every possible
   order and combination of those choices.
#. Play the game like it's the first time you've seen it. Don't just run
   through the actions that you *know* work.
#. Proofread the game instructions. Are they clear? How might users
   misinterpret them?
#. Find one or more **beta testers**. These are people who had no other role
   in creating your game. Have them play, then ask them for their feedback.

Submitting Your Work
--------------------

Your teacher will provide instructions for sharing your GitHub URL and/or
demonstrating your project.

Before you submit your application, be sure that it:

#. Works.
#. Provides a good user interface (UI) and user experience (UX).
#. Meets each of the :ref:`project requirements <assignment6-requirements>`.
#. Survives invalid input.
#. Includes enough comments in the code to describe what each part does.
#. Is fun to play!

Your teacher will provide you with a detailed rubric for this assignment. This
describes how each part of the project will be graded.

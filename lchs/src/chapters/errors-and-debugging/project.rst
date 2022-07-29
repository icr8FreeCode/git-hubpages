.. _debugging-project:

Project: Errors and Debugging
=============================

Avast, ye scurvy dogs! We be needn' ta fix yonder code!

The cap'n in charge of clearing our rocket for launch be out with a cold, and
ye be the next tech in line.

Yer job is to check the code and fix any bugs. Remember, the lives of the crew
rest upon yer shoulders. Happy second day on the job!

Yer directions:

#. Launch the rocket *only if* the fuel, crew and computer all check out OK.
#. If a check fails, print that information to the console and scrub the
   launch (then scrub the deck).
#. If all checks be successful, print a countdown to the console, then
   bellow "Liftoff!"

.. admonition:: Note

   If yer teacher added ye to a :ref:`Trinket course <trinket-course-assignments>`, do the exercises
   there.

   If ye NOT be in a Trinket course, use the links given
   in the text below.

   Yep! This page be in pirate-talk! If ye not like pirates (ye foul blaggart),
   then :ref:`click here for normal text <translated-pirate-project>`.

Fix Syntax Errors First
-----------------------

Find this code at `repl.it <https://repl.it/@launchcode/LCHS-Debugging-Syntax-Errors-Project>`__
or `Trinket <https://trinket.io/python/e919db137a?showInstructions=true>`__.

#. Run code block 1 as-is and squint yer eyes at the error message. Fix the
   mistake, and then re-run the code to check it.

   ::

      launch_ready = False
      fuel_level = 17000

      if fuel_level >= 20000
         print('Fuel level cleared.')
         launch_ready = True
      else:
         print('WARNING: Insufficient fuel!')
         launch_ready = False

#. Code block 2 hides two syntax errors. Run the code as-is to find the mistakes.
   
   *Tip*: Don't be too hasty, Matey! Only ONE error gets flagged at a time. Fix
   that ONE problem, and then re-run the code to check yer work. Avoid trying
   to fix multiple issues at once.

   ::

      crew_status = True
      computer_status = 'green'

      if crew_status and computer_status = 'green':
         print('Crew & computer cleared.')
         launch_ready = True
      else:
         print('WARNING: Crew or computer not ready!')
         launch_ready = False

      if (launch_ready):
         print("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...")
         print("Fed parrot...")
         print("Ignition...")
         print("Liftoff!')
      else:
         print("Launch scrubbed.")

Fix Runtime Errors Next
-----------------------

Fix this code at `repl.it <https://repl.it/@launchcode/LCHS-Debugging-Runtime-Errors-Project>`__
or `Trinket <https://trinket.io/python/b9380365cb?showInstructions=true>`__.

#. Remember to examine the error message for clues about what went wrong. Pay
   close attention to any line numbers given in the message---these will help
   ye locate and repair the bug.

   ::

      launch_ready = False
      fuel_level = 27000

      if fuel_Level >= 20000:
         print('Fuel level cleared.')
         launch_ready = True
      else:
         print('WARNING: Insufficient fuel!')
         launch_ready = False

#. *Arrr!*  Now find and fix the runtime error in a longer code block.

   ::

      launch_ready = False
      fuel_level = 27000

      if fuel_level >= 20000:
         print('Fuel level cleared.')
         launch_ready = True
      else:
         print('WARNING: Insufficient fuel!')
         launch_ready = False

      if launch_ready:
         print("10, 9, 8...")
         print("Fed parrot...")
         print("6, 5, 4...")
         print("Ignition...")
         printt("3, 2, 1...")
         print("Liftoff!")
      else:
         print("Launch scrubbed.")

Solve Logic Errors Last
-----------------------

Logic errors do not generate warning messages or prevent the code from running,
but the program still does not work like ye want. (Refer to the
:ref:`Fixing Logic Errors <fixing-logic-errors>` section if ye need to
review).

Fix this code at `repl.it <https://repl.it/@launchcode/LCHS-Debugging-Logic-Errors-Project>`__
or `Trinket <https://trinket.io/python/5b243176c2?showInstructions=true>`__.

#. First, run this sample code as-is and examine the output. Should the rocket
   have launched? Did it?

   Do not worry about fixing the code yet. Ye will do that in the next steps.

   .. raw:: html

      <iframe height="700px" width="100%" src="https://repl.it/@launchcode/LCHS-Debugging-Project-5?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#. Let's break the code down into smaller chunks. Consider the first ``if/else``
   block below.

   ::

      if fuel_level >= 20000:
         print('Fuel level cleared.')
         launch_ready = True
      else:
         print('WARNING: Insufficient fuel!')
         launch_ready = False
   
   a. Comment out lines 13 - 25 in the code editor.
   b. Add ``print("launch_ready =", launch_ready)`` after the first block,
      then run the program.
   c. Given the ``fuel_level`` value, should ``launch_ready`` be ``True`` or
      ``False`` after the check? Is the program behaving as expected?

#. Now consider the second ``if/else`` block. Add another
   ``print("launch_ready =", launch_ready)`` after this block and run the
   program.

   ::

      if crew_status and computer_status == 'green':
         print('Crew & computer cleared.')
         launch_ready = True
      else:
         print('WARNING: Crew or computer not ready!')
         launch_ready = False

   Given ``crew_status`` and ``computer_status``, should ``launch_ready`` be
   ``True`` or ``False`` after this check? Is the program behaving as expected?

#. Now consider both ``if/else`` blocks together (keeping the added ``print``
   lines). Run the code and examine the output.

   ::

      launch_ready = False
      fuel_level = 17000
      crew_status = True
      computer_status = 'green'

      if fuel_level >= 20000:
         print('Fuel level cleared.')
         launch_ready = True
      else:
         print('WARNING: Insufficient fuel!')
         launch_ready = False

      print("launch_ready =", launch_ready)

      if crew_status and computer_status == 'green':
         print('Crew & computer cleared.')
         launch_ready = True
      else:
         print('WARNING: Crew or computer not ready!')
         launch_ready = False

      print("launch_ready =", launch_ready)

   Given the values for ``fuel_level``, ``crew_status`` and
   ``computer_status``, should ``launch_ready`` be ``True`` or ``False``? Is
   the program behaving as expected?

#. Ahoy, Houston! We spied a problem! The value of ``launch_ready`` assigned
   in the first ``if/else`` block got changed in the second ``if/else``
   block. Dangerous waters, Matey.
   
   Since the issue is with ``launch_ready``, ONE way to fix the logic error is
   to use a different variable to store the fuel check result. Make yer code do
   this, then check if yer change works by updating the first ``print``
   statement.

#. Almost done, so wipe the sweat off yer brow! Modify the final ``if/else``
   block to print the countdown and "Liftoff!" if both the fuel check and
   ``launch_ready`` variables are ``True``. Print "Launch scrubbed" if either
   check fails.

      Blimey! That's some good work. Now go feed yer parrot.

Project: Conditional Launch
===========================

Complete this project to boost your conditional skills. Don't worry if you
struggle a bit. Struggling (and needing to review) before succeeding is a
natural and frequent part of coding. Making mistakes helps you learn.

.. admonition:: Note

   There is no starter code for this project. However, if your teacher uses a
   :ref:`Trinket course <trinket-course-assignments>`, you will submit your
   work there. 

   Otherwise, login to your repl.it or Trinket account and start a new project.

Spacecraft Data
---------------

Use the following variables for a spacecraft we want to launch:

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Variable
     - Value
   * - ``engine_indicator_light``
     - ``"red blinking"``
   * - ``space_suits_on``
     - ``True``
   * - ``shuttle_cabin_ready``
     - ``True``
   * - ``crew_status``
     - ``space_suits_on and shuttle_cabin_ready``
   * - ``computer_status_code``
     - ``200``

Part A: PREDICT
---------------

#. Examine the code below. What will be printed to the console?

   Use the value of ``engine_indicator_light`` assigned above to answer this
   question.

   .. sourcecode:: python
      :linenos:

      if engine_indicator_light == "green":
         print("Engines started")
      elif engine_indicator_light == "green blinking":
         print("Engines preparing to start")
      else:
         print("Engines off")

#. Do these two code blocks produce the same result?

   .. sourcecode:: python
      :linenos:

      # Code block 1
      if crew_status and computer_status_code == 200 and space_suits_on:
         print("All systems go!")
      else:
         print("WARNING! Not ready.")

      # Code block 2
      if not crew_status or computer_status_code != 200 or not space_suits_on:
         print("WARNING. Not ready")
      else:
         print("All systems go!")

Part B: Cabin Safety Checks
---------------------------

#. Use an ``input`` statement to prompt the user to enter the speed of the
   spacecraft. Store this result in the variable ``spacecraft_speed``. Remember
   to convert the input from the ``str`` data type to ``int`` or ``float``.

#. Write conditional expressions to satisfy the safety rules below. Use
   ``spacecraft_speed`` and the same variables defined at the top of the page.

   a. ``crew_status``

      - If the value is ``True``, print ``"Crew Ready"``
      - Else print ``"Crew Not Ready"``

   b. ``computer_status_code``

      - If the value is ``200``, print
        ``"Please stand by. Computer is rebooting."``
      - Else, if the value is ``400``, print ``"Success! Computer online."``
      - Else print ``"ALERT: Computer offline!"``

   c. ``spacecraft_speed``

      - If the speed is ``> 17500``, print
        ``"ALERT: Escape velocity reached!"``
      - Else, if the speed is ``< 8000``, print
        ``"ALERT: Cannot maintain orbit!"``
      - Else print ``"Stable speed"``

#. Before you move to part C, run your program several times to test your code.
   Change only ONE variable value at a time to make sure your conditionals
   print the expected results.

   a. Change the value of ``space_suits_on`` to ``False``.
   b. Change ``computer_status_code`` to ``400``, then ``100``.
   c. Enter different values for ``spacecraft_speed``. (Tip: ``17500`` and
      ``8000`` should both produce ``Stable speed``).

.. admonition:: Note

   In step 3, you are *trying* to make your code fail. Testing helps you spot
   and fix bugs!

Part C: Fuel Safety Checks
--------------------------

Define two new variables:

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Variable
     - Value
   * - ``fuel_level``
     - ``10000``
   * - ``engine_temperature``
     - ``2000``

#. Use ``if/elif/else`` statements to monitor the spacecraft's fuel status.
   Order is important when working with conditionals, and the checks below are
   NOT written in the correct sequence.

   Read ALL of the checks before coding and decide on the best order for the
   statements.

   a. If ``fuel_level`` is above 20000 AND ``engine_temperature`` is at or
      below 2500, print ``"Full tank. Engines good."``
   b. If ``fuel_level`` is above 10000 AND ``engine_temperature`` is at or
      below 2500, print ``"Fuel level above 50%.  Engines good."``
   c. If ``fuel_level`` is above 5000 AND ``engine_temperature`` is at or below
      2500, print ``"Fuel level above 25%. Engines good."``
   d. If ``fuel_level`` is at or below 5000 OR ``engine_temperature`` is above
      2500, print ``"ALERT: Check fuel level and engine temperature."``
   e. If ``fuel_level`` is below 1000 OR ``engine_temperature`` is above 3500
      OR ``engine_indicator_light`` is red blinking, print ``"ENGINE FAILURE
      IMMINENT!"``
   f. Otherwise, print ``"Fuel and engine status pending..."``

Test Your Fuel Status Code
^^^^^^^^^^^^^^^^^^^^^^^^^^

Run your code several times to make sure it prints the correct phrase for
each set of conditions. The table below gives you some practice values as well
as the expected output.

.. list-table::
   :widths: auto
   :header-rows: 1

   * - **fuel_level**
     - **engine_temperature**
     - **engine_indicator_light**
     - **Result**
   * - Any
     - Any
     - ``red blinking``
     - ``ENGINE FAILURE IMMINENT!``
   * - 21000
     - 1200
     - NOT ``red blinking``
     - ``Full tank. Engines good.``
   * - 900
     - Any
     - Any
     - ``ENGINE FAILURE IMMINENT!``
   * - 5000
     - 1200
     - NOT ``red blinking``
     - ``ALERT: Check fuel level and engine temperature.``
   * - 12000
     - 2600
     - NOT ``red blinking``
     - ``ALERT: Check fuel level and engine temperature.``
   * - 10000
     - 2500
     - NOT ``red blinking``
     - ``Fuel level above 25%. Engines good.``

A Final Bit of Fun!
-------------------

The spacecraft should only launch if the fuel tank is full and the engine check
is OK. *However*, let's establish an override command to ignore any warnings
and send the ship into space anyway!

#. Create the variable ``command_override``, and set it to be ``True`` *or*
   ``False``.

   If ``command_override`` is ``False``, then the shuttle should only launch
   if the fuel and engine check are OK.

   If ``command_override`` is ``True``, then the shuttle will launch
   regardless of the fuel and engine status.

#. Code the following ``if/else`` check:

   If ``fuel_level`` is above 20000 AND ``engine_indicator_light`` is NOT
   red blinking OR ``command_override`` is ``True``, print ``"Cleared to
   launch!"``

   Else print ``"Launch scrubbed!"``

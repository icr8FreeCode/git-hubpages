User Input
==========

``print`` works fine to display messages on the screen that never change. If we
want to display different messages, we could try adding a variable:

.. admonition:: Example

   Run the code below, then change the value of ``name`` to make the program
   greet you by name!

   .. raw:: html

      <iframe height="400px" width="100%" src="https://repl.it/@launchcode/LCHS-Input-Practice-1?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

To print a greeting for a specific user, ``print("Hello Dave!")`` only works if
Dave is the actual user. To greet someone else, we could change the string
inside the ``()`` to be ``'Hello Sarah!'`` or ``'Hello Elastigirl!'`` or any
other name we need.

Similarly, to make the statement ``print("Hello, " + name + "!")`` work for
different users, we need to go into the code and change the string we assign to
``name``.

However, what if we do not know the name of the user beforehand?

It would be great if we could ask the user of our program to enter a name, save that string,
and then print a personalized greeting.

Of course, Python gives us a way to do this!

Requesting Data
----------------

.. index:: ! input, ! prompt

To personalize the greeting, we need **input** from the user. This
involves displaying a **prompt** on the screen (e.g. ``Please enter a number:``), and then 
saving the response from the user. Whatever information the user
enters can be stored in a variable.

Python has a built-in function to collect information from a user. As you might
expect, it is called ``input``.

Syntax
^^^^^^

.. sourcecode:: python

   variable_name = input('User prompt...')

The keyword ``input`` tells Python to display the prompt in the console. It
then waits for the user to type in some information. Once the user taps *Enter*
or *Return*, the data is collected and stored in the variable.

.. admonition:: Note

   There is a lot going on here behind the scenes, but for now you should
   follow this bit of wisdom:

      I turn the key, and it goes.

   Most of us do not need to know exactly how cars, phones, or microwave ovens
   work. We just know enough to use them in our day to day lives. Similarly, we
   do not need to understand *how* ``input`` collects data from the console. We
   just need to know that it *does* if we use the correct syntax.

Try It!
^^^^^^^

In the editor above:

#. Replace line 2 with ``name = input('Please enter your name: ')``.
#. Run the program again. You should see the text ``Please enter your name:``
   appear in the black output box (the *console*).
#. In the console, type in a name, tap *Enter*, and examine the result.
#. Run the program several more times and enter different names.

Try adding another ``+ name`` term inside the ``print`` statement and see
what happens. Next, add code to prompt the user for a second name. Store the
response in ``other_name``, then print both names using ``print``.

Using the Collected Data
------------------------

After collecting a name, the program does not actually DO anything with the
information. If we want to use the data, we need to tell Python what to do with
the ``name`` variable.

By storing the user's name inside the variable called ``name``, we gain the ability to hold onto
the data and use it when we want.

.. admonition:: Try It

   Write a program that requests a user's first and last name, then prints an
   output that looks like:

   ::

      First name: Elite
      Last name: Coder
      Last, First: Coder, Elite

   .. raw:: html

      <iframe height="500px" width="100%" src="https://repl.it/@launchcode/LCHS-Input-Practice-2?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

Critical ``input`` Detail
-------------------------

There is one *very important* quirk about the ``input`` function that we need to
remember. Given ``print(7 + 2)``, the output would be ``9``.

Now explore the following code, which prompts the user for two numbers and then
prints their sum:

.. raw:: html

   <iframe height="400px" width="100%" src="https://repl.it/@launchcode/LCHS-Input-Practice-3?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

Do you see the output you expected?

If we enter ``7`` and ``2``, we may expect an output of ``9``. The result printed is ``72``. What gives?!?!?

.. index:: concatenate

The quirk with the ``input`` function is that it *treats all entries as
strings*, so numbers get **concatenated** rather than added. Concatenation
means that the second string gets attached to the end of the first.

Just like ``"ABC" + "def"`` outputs as ``ABCdef``, ``"7"`` + ``"2"`` outputs
as the string ``72``.

   Python treats input data as strings!

If we want our program to perform math operations on the entered numbers, we must
:ref:`use type conversion <type-conversion>` to change the string values into
numbers.

.. admonition:: Try It

   #. In the print statement, use ``int()`` to convert ``num_1`` and ``num_2``
      from strings to integers. Run the program and examine the result.
   #. Instead of collecting ``num_1`` as a string and then converting it later,
      we can do this in a single step. In line 1, place
      ``input("Enter a number: ")`` inside the ``int()`` function like this:
      
      ``int(input("Enter a number: "))``.
   #. Repeat step 2 for ``num_2``.
   #. Remove the ``int`` functions from the print statement. Run the program
      and examine the result.
   #. What happens if you enter ``Hi`` or ``4.33`` instead of a whole number?

Check Your Understanding
------------------------

.. admonition:: Question

   What is printed when the following program runs?

   .. sourcecode:: python
      :linenos:

      user_age = input("Please enter your age: ")
      # The user enters 25.

      print(type(user_age))

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"><code class="pre"> &lt;class 'str'&gt;</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"><code class="pre"> &lt;class 'int'&gt;</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"><code class="pre"> user_age</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"><code class="pre"> 25</code></li>
      </ol>
      <p id="Q1"></p>

.. Answer = a

.. admonition:: Question

   Assume you want the user to enter a decimal value, like ``4.33``. Which of
   the following statements would throw an error after the user taps *Return*?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"><code class="pre"> input('Enter a decimal value: ')</code></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"><code class="pre"> float(input('Enter a decimal value: '))</code></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"><code class="pre"> int(input('Enter a decimal value: '))</code></li>
      </ol>
      <p id="Q2"></p>

.. Answer = c

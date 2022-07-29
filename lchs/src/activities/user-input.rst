Activity #1: User Input
=======================

In this activity, you will practice collecting user input from the console and
storing the data in different variables.

Python uses the ``input`` keyword to prompt the user for information. This
allows you to build some simple interactivity into your programs.

.. admonition:: Tip

   For best results, complete the :ref:`Data and Variables chapter <data-and-variables>`
   before starting this activity.

Setup
-----

#. Open your code editor. Create a new file called ``user_input_practice``.
#. Define three variables: ``word``, ``whole_num``, and ``decimal_num``. Assign
   ``word`` a string value, ``whole_num`` an integer, and ``decimal_num`` a
   a float value.
#. Add three ``print`` statements to output the following text. Fill in the
   blanks with the values of the variables.

   a. ``The variables have values of: ____,   ____, and   ____``.
   b. Repeat ``word`` a ``whole_num`` amount of times.  For example, if
      ``word = 'Hello'`` and ``whole_num = 3``, print ``HelloHelloHello``.
   c. Display the result of a simple calculation (+, -, \*, /) between
      ``whole_num`` and ``decimal_num``.

#. Run your code to make sure your print statements behave as expected.

Add One Input
-------------

Instead of assigning ``word`` a hard-coded string, we want to ask the user to
type in that information.

To collect user input from the console, Python uses the ``input`` keyword.

#. Replace line 1 with the following syntax: 
   
   .. sourcecode:: Python
      :linenos:
      
      word = input('Enter a word:')
      
   The string inside the parentheses ``()`` will be displayed in the console.
   Unlike a ``print`` statement, the program will display the prompt and then
   wait for the user to tap the *Enter* key before continuing.
#. Run your program to check that it correctly collects and prints the entered
   word. You should NOT need to update your ``print`` statements.
#. Note that the prompt displayed in the console does not include any space
   after ``Enter a word:`` unless you added it in the code. TRY IT!

   a. Compare the prompts ``'Enter a word:'`` and ``'Enter a word: '``.
   b. To collect user input on the line *below* the prompt, add the newline
      character ``\n`` to the end of the string:

      .. sourcecode:: Python
         :linenos:
         
         word = input('Enter a word:\n')

   c. What does the ``\t`` character do in ``'Enter \t a \t word:\t'``?

#. The examples in step 3 show different ways of using whitespace to change the
   look of the output in the console.

.. pull-quote::

   Whitespace - Good idea!

Numerical Inputs
----------------

Replace the hard-coded number for ``whole_num`` with an ``input`` statement.
Use the prompt, ``"Enter a whole number: "``.

When you run the program, you get an error message! This occurs because
*Python treats all input data as the string data type*. To correct this, you
need to convert the input to the ``int`` data type.  You can do this with two
lines of code, or you can combine these into a single command.

.. admonition:: Example

   **Two Lines**:

   Store the input in the variable, then use the ``int()`` function to convert
   from the string data type to the integer data type.

   .. sourcecode:: Python
      :lineno-start: 2

      whole_num = input("Enter a whole number: ") # String data type, like "3".
      whole_num = int(whole_num)                  # Now an int data type, like 3.

   **One Line**:

   Place the input statement inside the ``int()`` function.

   .. sourcecode:: Python
      :lineno-start: 2

      whole_num = int(input("Enter a whole number: "))

#. Using either of the options shown above, update ``whole_num`` to store the
   user's input as an integer data type.
#. Run your program to check that it correctly collects and uses the entered
   number. You should NOT need to update your print statements.
#. Replace the hard-coded value for ``decimal_num`` with an ``input``
   statement.  Use the prompt, ``"Enter a decimal number: "``. You will need to
   convert the input to the ``float`` data type.
#. Run your program again to make sure it still works.

Submit Your Work
----------------

Follow your teacher's instructions on how to submit your work for review.

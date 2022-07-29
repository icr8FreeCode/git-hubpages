Variables
=========

.. index:: ! variable

One of the most powerful features of a programming language is the ability to
use variables. A **variable** is a name that refers to a value. Recall that a
value is a single, specific piece of data, such as a specific number or string. Variables allow us to store values for later use.

You can think of a variable as a label that *points to* a piece of data.

.. figure:: figures/variable.png
   :alt: The label title points to a the string value "Ready Player One", and the label lucky_number points to the value 9.

   The variable ``title`` points to the string value ``'Ready Player One'``, and ``lucky_number`` points to the integer value ``9``.

With this picture in mind, let's learn how to create and use variables in
Python.

Assigning Values
----------------

.. index:: ! assignment statement

**Assignment statements** create new variables and also give them values to
refer to. The syntax for an assignment statement is:

.. sourcecode:: Python

   variable_name = value

The assignment statement links a name, on the left hand side of the ``=``, with
the value on the right hand side. The *value* refers to any type of data.

.. admonition:: Example

   .. sourcecode:: Python

      message = "Python ROCKS!"
      num = 17
      pi = 3.14159

This example makes three assignments. The first assigns the string value
``"Python ROCKS!"`` to a new variable named ``message``. The second gives the
integer ``17`` to ``num``, and the third assigns the float ``3.14159`` to a
variable called ``pi``.

.. admonition:: Warning

   The ``=`` sign does NOT work both ways. ``17 = num`` causes an error. The
   variable name MUST be on the left, and the value MUST be on the right.

One common mistake is to confuse the assignment operator ``=`` with the idea of
equality (things being the same). *Equality* compares two values, like ``5``
vs. ``4`` or ``'dog'`` vs. ``'dog'``. *Assignment* gives a value to a variable.

We will explore *equality* later and see that it uses the ``==`` operator
instead of ``=``.

Evaluating Variables
--------------------

.. index:: variable, evaluation

Once we create a variable and assign it a value, we can use the variable name to refer to that value.

.. admonition:: Example

   These two examples give the exact same output.

   .. sourcecode:: python

      print("Hello, World!")

   .. sourcecode:: python
      :linenos:

      message = "Hello, World!"
      print(message)

In the second example just above, the variable name ``message`` points to the 
value ``"Hello, World"``. ``print(message)`` means the same thing as ``print("Hello, World!")``, so we
say that ``message`` **evaluates to** ``"Hello, World!"``

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      message = "Python ROCKS!"
      num = 17
      pi = 3.14159

      print(message)
      print(num)
      print(pi)

   **Console Output**

   ::

      Python ROCKS!
      17
      3.14159

In each case, the printed result is the value of the variable. 

Try This
^^^^^^^^

Do variables have data types? Run the following code to find out.

.. raw:: html

   <iframe height="500px" width="100%" src="https://repl.it/@launchcode/LCHS-Variable-Types?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true"></iframe>

The type of a variable is same as the data type of its current value.

Reassigning Variables
---------------------

We use variables in a program to store values, like the current score at
a football game. Just like a score, variables can change over time.

To see this, read and then run the following program. Notice how we change the
value of ``day`` three times. We even give it a value of a different data type.

.. raw:: html

   <iframe height="450px" width="100%" src="https://repl.it/@launchcode/LCHS-Reassign-Variables?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

A great deal of programming involves asking the computer to remember things.
For example, we might want to keep track of the number of missed calls on our
phones. Each time we miss another call, we can update a variable to reflect the
new total.

Check Your Understanding
------------------------

.. admonition:: Question

   What is printed when the following code runs?

   .. sourcecode:: python
      :linenos:

      day = "Thursday"
      day = 32.5
      day = 19
      print(day)

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Thursday</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> 32.5</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> 19</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Thursday 32.5 19</li>
      </ol>
      <p id="Q1"></p>

.. Answer = c

.. admonition:: Question

   How can you determine the data type of a variable?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Print out the value of the variable.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> Use <code class="pre">type()</code>.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Use it in a known equation and print the result.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Look at the assignment of the variable in the code.</li>
      </ol>
      <p id="Q2"></p>

.. Answer = b

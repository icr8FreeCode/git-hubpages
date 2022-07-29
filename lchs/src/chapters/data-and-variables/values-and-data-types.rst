Values and Data Types
=====================

Programs are made up of two main things:

#. Data
#. Operations that do stuff with the data

.. index:: ! data, ! value

Let's start by looking at **data**, which is any piece of information stored in
a program. The most basic unit of data is called a *value*.

A **value** is a specific piece of data, such as a word or a number. Some
examples are ``5``, ``"Hello, World!"``, and ``11.333``.

.. index:: ! data type, ! int, ! string, ! float

Each value is an example of a **data type**. We will use many different data
types in this course, but here are your first three:

#. **string** - One or more characters enclosed in quotes, such as
   ``"Hello, World"``. In Python, strings can be enclosed in single quotes or
   double quotes, so ``'A'`` and ``"B"`` both count as strings.
#. **int** - Stands for *integer*, which is a whole number like ``4``, ``-23``,
   and ``42``.
#. **float** - Any number with a decimal like ``3.14159``, ``-0.01``, and
   ``3.0``.

.. index:: ! type

If you are not sure of the data type for a value, Python has the ``type()``
function to let us know!

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      print(type("Hello, World!"))
      print(type(17))
      print(type(3.14))

   **Console Output**

   ::

      <class 'str'>
      <class 'int'>
      <class 'float'>

Not surprisingly, Python reports that the data type of ``"Hello, World!"`` is
``str``, which stands for ``string``. The data types for ``17`` and ``3.14``
are ``int`` and ``float``, respectively.

We will learn about other data types in later chapters.

More On Strings
---------------

#. What about values like ``"17"`` and ``"3.2"``? They look like numbers, but
   they are in quotation marks like strings.

   Run the following code to find out.

   .. admonition:: Try It!

      .. raw:: html

         <iframe height="500px" width="100%" src="https://repl.it/@launchcode/LCHS-type-function?lite=true" scrolling="no" frameborder="no" allowtransparency="true"></iframe>

      What is the data type of the values ``"17"`` and ``"3.2"``?

.. _quote-reminder:

#. In Python we can use either single quotes (``'``) or double quotes (``"``) for
   strings. *Triple* quotes (``'''`` or ``"""``) can be used for multi-line
   strings.

   .. admonition:: Example

      Add the following lines to the code editor above, then run the program again.

      .. sourcecode:: js
         :lineno-start: 3

         print(type('This is a string'))
         print(type("And so is this"))
         print('''Rutabagas
         in the
         spring''')

#. Double-quoted strings can contain single quotes inside them, like
   ``"Bruce's beard"``.
#. Single-quoted strings can have double quotes inside them, like
   ``'The knights who say "Ni!"'``.
#. Python doesn't care whether you use single or double quotes around strings,
   since the quote marks are not stored as part of the value.

.. admonition:: Warning 

   If a string contains a single quote (such as ``Bruce's beard``), then
   surrounding it with single quotes gives unexpected results. 

   Try running the following piece of code:

   ::

      print('Bruce's beard')

More On Numbers
---------------

When you type a large number, you might be tempted to use commas, as in
``42,000``. However, this is NOT allowed for the ``int`` and ``float`` data
types in Python.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      print(42000)
      print(42,000)

   **Console Output**

   ::

      42000
      42 0

This may be a surprising output! Because of the comma, Python treats
``42,000`` as a *pair* of values. As we saw in the
:ref:`print function <print-function>` section, ``print`` can display any
number of values as long as you separate them by commas.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      print(42, 17, 56, 34, 11, 4.35, 32)
      print(3.4, "hello", 45)

   **Console Output**

   ::

      42 17 56 34 11 4.35 32
      3.4 hello 45

Remember not to put commas or spaces in your numbers!

Also, remember that Python and other programming languages are strict about
*syntax*. Even the smallest change can make your program do something you did
not intend.

Check Your Understanding
------------------------

.. admonition:: Question

   Identify the data type for each of the following values. Click on each option
   to reveal the answer.

   .. raw:: html

      <ol type="a">
         <li onclick="revealAnswer('resultA', 'str')">'Python' <span id="resultA"></span></li>
         <li onclick="revealAnswer('resultB', 'float')">12.75 <span id="resultB"></span></li>
         <li onclick="revealAnswer('resultC', 'str')">"42" <span id="resultC"></span></li>
         <li onclick="revealAnswer('resultD', 'str')">"""&^%$""" <span id="resultD"></span></li>
         <li onclick="revealAnswer('resultE', 'int')">3 <span id="resultE"></span></li>
         <li onclick="revealAnswer('resultF', 'float')">0.55 <span id="resultF"></span></li>
      </ol>

.. Answers = str, float, str, str, int, float



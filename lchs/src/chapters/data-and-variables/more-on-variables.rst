More on Variables
=================

The previous section covered the big picture for variables--creating,
evaluating, and reassigning. This section deals with some of the finer points
for variables.

Naming Python Variables
-----------------------

Just like the ``print`` function must follow specific syntax rules, variable
names in Python have their own set of rules:

#. Variable names MUST begin with a letter or an underscore ``_``.
#. Variable names CANNOT contain spaces. If you have more than one word in a
   name, connect the words with underscores (e.g. ``price_of_eggs``).
#. Variable names may only use letters (a-z and A-Z), underscores (_), and
   numbers (0-9).
#. Case matters! ``animal`` and ``Animal`` are different variable names.

In addition to these rules, there are also some *conventions*. These are
habits that Python programmers follow to keep their code consistent with
others' across the world. You do not have to follow these suggestions, but you
really *SHOULD*:

#. Use names that clearly describe their values. For example, if you need to
   store the price of eggs, call your variable ``price_of_eggs`` instead of
   ``x``. Similarly, ``vowel`` makes more sense than ``v``.
#. Stick to lowercase letters and underscores in the variable name, unless the
   value is a constant.
#. Use all UPPERCASE to name constants (e.g. ``PI`` or ``SPEED_OF_LIGHT``).

Compare
^^^^^^^

Writing good code is about more than just solving the task at hand. It also
includes making the code easy to read, update, and maintain.

Consider these examples of variable names:

.. admonition:: Example

   **Weaker variable names**:

   .. sourcecode:: Python
      :linenos:

      x = 5
      y = 3.14
      z = y * x ** 2
      print(z)
   
   What is this program doing? Hard to say. The variable names ``x``, ``y``,
   and ``z`` don't tell us anything about how they are used. 

   Let's look at an improved version of this program.

   **Stronger variable names**:

   .. sourcecode:: Python
      :linenos:

      radius_of_circle = 5
      PI = 3.14
      area_of_circle = PI * radius_of_circle ** 2
      print(area_of_circle)
      
   With improved variable names, it becomes clear that the program is
   calculating the area of a circle of radius 5. Here's another benefit of descriptive variable names. 
   Although we have not yet learned what the symbols ``*`` and ``**`` do on line 3, the variable 
   names give us an idea of what the symbols mean.


Keywords
--------

.. index:: ! keyword, ! reserved words

The following code produces an error:

.. sourcecode:: Python

   print = "Hello, World!"

The problem here is that ``print`` is a Python **keyword**---a word
reserved by the language for its own use. ``print`` does something very
specific, so we cannot use it to store a value.

.. admonition:: Tip

   Most code editors will highlight keywords in a different color than
   variables or other parts of your code. This gives you a visual clue about
   which words are reserved for use as keywords.

There are a little over 30 keywords in Python. You can find a complete list of
them `here <https://www.programiz.com/python-programming/keyword-list>`__.

Cool Tricks
-----------

Finally, here are a couple of nice details that save you a few lines of code.

#. You can assign multiple values to multiple variables in the same line.

   .. sourcecode:: python

      message, num, PI = "Python ROCKS!", 17, 3.14159

#. You can assign the same value to multiple variables all at once.

   .. sourcecode:: python

      word_1 = word_2 = "same"

Check Your Understanding
------------------------

.. admonition:: Question

   Which of the following are legal Python variable names? Select ALL that
   apply.

   .. raw:: html
      
      <ol type="a">
         <li><span id = "1a" onclick="highlight('1a', false)">Student_Grade%</span></li>
         <li><span id = "1b" onclick="highlight('1b', true)">Student_Grade_Percent</span></li>
         <li><span id = "1c" onclick="highlight('1c', false)">Student Grade Percent</span></li>
         <li><span id = "1d" onclick="highlight('1d', false)">student_grade%</span></li>
         <li><span id = "1e" onclick="highlight('1e', true)">student_grade_percent</span></li>
         <li><span id = "1f" onclick="highlight('1f', false)">student grade percent</span></li>
         <li><span id = "1g" onclick="highlight('1g', true)">g</span></li>
      </ol>

.. Answer = b and e and g 

.. admonition:: Question

   Which of the following are legal AND recommended Python variable names?
   Select ALL that apply.
   
   .. raw:: html
      
      <ol type="a">
         <li><span id = "2a" onclick="highlight('2a', false)">Student_Grade%</span></li>
         <li><span id = "2b" onclick="highlight('2b', false)">Student_Grade_Percent</span></li>
         <li><span id = "2c" onclick="highlight('2c', false)">Student Grade Percent</span></li>
         <li><span id = "2d" onclick="highlight('2d', false)">student_grade%</span></li>
         <li><span id = "2e" onclick="highlight('2e', true)">student_grade_percent</span></li>
         <li><span id = "2f" onclick="highlight('2f', false)">student grade percent</span></li>
         <li><span id = "2g" onclick="highlight('2g', false)">g</span></li>
      </ol>

.. Answer = e 


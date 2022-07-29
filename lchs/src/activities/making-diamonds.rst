Activity #3: Making Diamonds
============================

.. admonition:: Tip

   For best results, complete the :ref:`Functions chapter <functions-toc>`
   before starting this activity.

One good way to solve large problems is to split them into smaller tasks. With
code, these smaller pieces are solved by writing *functions*. Combining the
results from each function allows us to complete the bigger task.

To master functions, you need to write a *lot* of them.

In this activity, you will write lots of small functions and combine their
output. By the end, you will create "shape strings", like this nifty diamond:

::

       #
      ###
     #####
    #######
   #########
   #########
    #######
     #####
      ###
       #

Part 1: Warm Up (Lines, Rectangles, and Squares)
------------------------------------------------

Review the ``make_line()``, ``make_rectangle()``, and ``make_square()``
functions you wrote for the :ref:`chapter 10 exercises <make-line>`. These
provide a good reminder for how to return a value from a function, how to use
the accumulator pattern, and how to call one function from inside another.

Recall that the functions do NOT print anything. Instead, each one returns a
complete string, which can be assigned to a variable.

Each function definition includes a default character for making the shape.
If a function call leaves out the string argument, the returned value uses the
``#`` character.

.. list-table:: Sample Results
   :header-rows: 1

   * - Function Call
     - Returned Value
     - Printed Output
   * - ``make_line(4, 'a')``
     - ``"aaaa"``
     - ::

          aaaa
   * - ``make_rectangle(5, 2)``
     - ``"#####\n#####"``
     - ::

          #####
          #####
   * - ``make_square(3, '$')``
     - ``"$$$\n$$$\n$$$"``
     - ::

          $$$
          $$$
          $$$

Note how the returned strings make use of the *newline character* (``\n``).

Part 2: Making Triangles
------------------------

Your next step is to build some more complicated shapes.

#. Write a function called ``make_space_line()`` that returns a line with a
   given number of spaces, followed by a given number of characters, followed
   by another set of spaces.
   
   a. The examples below use dots to represent the spaces. Do NOT do this in
      your code.  Use actual whitespace instead.
   b. The function call may or may not include a character. Be sure to assign a
      default value when you define the function.

   .. list-table:: Sample Results
      :header-rows: 1
   
      * - Function Call
        - Returned Value
      * - ``make_space_line(5, 3)``
        - ``".....###....."``
      * - ``make_space_line(3, 2, 'C')``
        - ``"...CC..."``
#. Code a ``make_triangle()`` function that calls ``make_space_line()`` and
   returns a triangle of a given height.

   .. list-table:: Sample Results
      :header-rows: 1

      * - Function Call
        - Returned Value
        - Printed Output
      * - ``make_triangle(3)``
        - ``"#\n###\n#####"``
        - ::

              #
             ###
            #####
      * - ``make_triangle(4, '*')``
        - ``"*\n***\n*****\n*******"``
        - ::

               *
              ***
             *****
            *******
#. The trickiest part of the ``make_triangle()`` function is relating the
   height to the number of spaces/characters in each line. Here are some hints:

   a. Call the top line of the triangle row 0, the next row 1, etc.
   b. The number of characters (like ``#``) in each line is ``2*row + 1``.
   c. Each row has the same TOTAL length (spaces + characters).
   d. Look at the bottom row. What is the relationship between the *height* of
      the triangle and the total line length? (Your teacher has the answer).
   e. Knowing the total length and the number of characters for a row, how many
      spaces belong on each end of the row?

Part 3: Make a Diamond
----------------------

Your final step is to write a function called ``make_diamond()`` that behaves
like this:

.. list-table:: Sample Results
   :header-rows: 1

   * - Function Call
     - Returned Value
     - Printed Output
   * - ``make_diamond(3)``
     - ``"#\n###\n#####\n#####\n###\n#"``
     - ::

           #
          ###
         #####
         #####
          ###
           #
   * - ``make_diamond(4, '$')``
     - ``"$\n$$$\n$$$$$\n$$$$$$$\n$$$$$$$\n$$$$$\n$$$\n$"``
     - ::

            $
           $$$
          $$$$$
         $$$$$$$
         $$$$$$$
          $$$$$
           $$$
            $

Note that the integer in the function call determines the height for the top
half of the shape.

**Hints**:

#. Don't repeat yourself! Remember that functions can call other functions. The
   diamond shape is just one triangle stacked on top of another.
#. Do you remember coding the :ref:`reverse_string() <reverse_func>` function?

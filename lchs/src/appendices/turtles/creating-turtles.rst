Creating Turtles
================

Let’s write some lines of Python code to create a new turtle and make it draw a
single line.

Just like a library holds hundreds of books, some of which we might want to
check out, the ``turtle`` module contains all the information we need to make
our drawings. We can choose which of the stored properties and functions to use
and leave the other parts alone. Before we can use the turtle tools, however,
we must to add them to our program.

.. sourcecode:: Python
   :linenos:

   import turtle

The keyword ``import`` tells Python to find a file called ``turtle`` and make
it available to our program. We will not see any extra statements appear in our
code, but our program can now access the tools we need.

.. admonition:: Note

   The ``turtle`` library is one part of the Python software installation, so
   you do not need to worry about adding the file on your own. As long as you
   have Python installed on your machine, you also have turtles!

A New Turtle Object
-------------------

To create a new turtle object, use the syntax

.. sourcecode:: Python

   turtle_name = turtle.Turtle()

``turtle_name`` is a variable, and it should follow the Python naming rules.
``turtle.Turtle()`` tells Python to access the ``turtle`` module and call the
``Turtle()`` method. Remember that Python is case-sensitive, so
``turtle.turtle()`` will throw an error message.

For the examples in this appendix, we will name the turtle ``bob``, but any
valid variable name will work.

Once we create a turtle, we need to tell it how to move. We will begin with
a single line:

.. admonition:: Example

   Run the program to draw a line on the screen.

   .. raw:: html

      <iframe height="450px" width="100%" src="https://repl.it/@launchcode/Turtle-Appendix-Movement-Basics?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

The ``forward`` method changes the location of turtle ``bob`` on the screen by
moving it a number of pixels in the direction it is facing.

Try It!
^^^^^^^

#. Change the number inside the parentheses () to make ``bob`` travel a
   different distance.
#. Try to make ``bob`` move backwards instead.
#. Can you find the distance from the starting position to the edge of the
   drawing space? (This number will depend on your device and on the size of
   the window).

Open A Drawing Space
--------------------

In the repl.it example above, the drawing space for the turtle graphics is
included with the code editor and console. There is some code running in the
background that sets up the view, and this allows us to focus on other parts of
the program.

If we want to play with Python turtles outside of repl.it, we need to create
the drawing space ourselves. Take a look at the following animation that shows
a different turtle program running outside of repl.it:

.. figure:: figures/turtle-window-close.gif
   :alt: GIF showing the drawing space closing immediately after the turtle completes its drawing.
   :width: 40% 

   A closing window means we cannot appreciate our turtle art!

That looks weird. A window opens, ``bob`` appears and draws several circles,
and then the window quickly closes. If we blink at the wrong time, we could
easily miss the event.

Later in this appendix, we will provide more details for controlling the
drawing space. For now we will add two statements to our turtle program to keep
the window open until we have a chance to admire the art.

.. sourcecode:: Python
   :linenos:

   import turtle
   window = turtle.Screen()

   bob = turtle.Turtle()

   bob.forward(75)

   window.exitonclick()

Just like line 4 creates a new turtle object called ``bob``, line 2 creates a
screen object called ``window``. This variable allows us to modify the
appearance of the drawing space---like its size, title, and background color.

In the original program, the drawing space closes right after the statement
``bob.forward(75)``. By defining ``window``, we can decide when to close the
space. In line 8, the screen method ``exitonclick()`` tells Python to wait for
the user to click inside the window. Once this happens, the program ends and
closes the drawing space.

.. admonition:: Note

   ``window = turtle.Screen()`` does not *open* the drawing space. Instead, it
   allows us to control the space. By assigning ``Screen()`` to ``window``, we
   can access different tools---like choosing how and when to close the drawing
   space.

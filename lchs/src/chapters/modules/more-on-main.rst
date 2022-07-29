.. _more-about-main:

More About ``main()``
=====================

Here is the final copy of our ``main()`` practice program. It runs correctly.

.. raw:: html

   <iframe height="600px" width="100%" src="https://repl.it/@launchcode/Why-Use-Main-step-3?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Now let's mess it up.

Open the ``random_lists.py`` code in the editor and scroll to the bottom. Add
a function call to the code:

.. sourcecode:: Python
   :lineno-start: 43

   def main():
      numbers = create_random_number_list(8, -10, 10)
      no_repeat_numbers = create_unique_number_list(5, 0, 10)
      letters = create_random_letter_list(8)
      numbers.sort()
      no_repeat_numbers.sort()
      print(numbers)
      print(no_repeat_numbers)
      print(letters)

   main()

Run the program again. You should see extra output.

Why Did We Do This?
-------------------

We need to demonstrate one last detail about how to correctly use a ``main()``
function.

Return to the ``main.py`` code. In this case, we *want* the ``main()`` function
to run. However, ANY ``.py`` file can be imported as a module into any other
Python program.

If we want to use the ``find_average_score`` or ``create_report`` functions in
a different program, then we can easily import ``main.py`` into that other
file. However, as it is written, lines 20 - 27 will ALWAYS run whenever we
import the module.

We need to adjust our code so that ``main()`` executes when it is part of the
central program but NOT when it is part of an imported module.

Wrapping Up
-----------

Before Python runs a program, it defines a few special variables. One of
these is called ``__name__``, and it is automatically assigned the string value
``"__main__"`` when the code runs by itself. For an imported module, on the
other hand, ``__name__`` matches the module name.

This means we can use ``__name__`` to check if the code is being run by itself,
or if it has been imported by another program!

In both ``main.py`` and ``random_lists.py``, replace the function call:

.. sourcecode:: Python

   main()

with this:

.. sourcecode:: Python

   if __name__ == "__main__":
      main()

The program should correctly run again!

The first line uses an ``if`` statement to check the value of the ``__name__``
variable. If the value matches ``"__main__"``, then the ``main()`` function
gets called. If the condition is ``False``, then the code was imported as a
module, and we do NOT call ``main()``.

The ability to choose when to execute the ``main()`` function is extremely
useful! This is especially true for code that might be imported into a
different program.

Whew! That was a lot of words and code. If your eyes glazed over, be sure to
pay attention to this:

.. admonition:: Tip

   #. Avoid loose statements in your code.
   #. Include a ``main()`` function, and set it up this way:

   .. sourcecode:: Python

      def main():
         # Control code here...

      if __name__ == "__main__":
         main()

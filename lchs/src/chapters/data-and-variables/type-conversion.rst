.. _type-conversion:

Type Conversion
===============

.. index:: ! int(), ! str(), ! float()

.. index::
   pair: type; conversion

Sometimes it is necessary to convert values from one type to another. A common
example occurs when a program receives string input, like ``"23"``, but needs
to use the value as a number.

Python provides a few simple **type conversion** functions that allow us to
change between data types. The functions ``int()``, ``float()`` and ``str()``
will try to convert whatever is in the ``()`` (the *argument*) into the types
``int``, ``float`` and ``string``, respectively.

The ``int()`` function takes a floating point number or a string and turns it
into whole number. Instead of *rounding* a decimal value, ``int()`` *discards*
the decimal portion of the number.

.. index:: ! truncate

.. admonition:: Example

   Let's see ``int()`` in action. Run the following code and note how ``int()``
   changes the decimal values.

   .. raw:: html

      <iframe height="500px" width="100%" src="https://repl.it/@launchcode/LCHS-Type-Conversion-int?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true"></iframe>

   New vocabulary! **Truncate**: Remove the decimal part of a number WITHOUT rounding.

What happens if we try to convert a string to an integer, but the string is not
actually a whole number? Add the following code to the editor above, then run
the program again. You should see an error message.

.. sourcecode:: Python

   print(int("80days"))
   print(int("12.34"))

In order for ``int()`` to work, the string has to be a whole number like
``'-2'`` or ``"526"``. Any string with letters, spaces, or punctuation will
throw an error. Modify the new examples by deleting the ``days`` and ``.``,
then rerun the program. You should see the integers ``80`` and ``1234``.

The type converter ``float()`` turns an integer or an allowed string into a
``float``. The type converter ``str()`` turns its argument into a ``string``.

Remember that when we print a string, the quotes are removed. However, if we
use the ``type()`` function, we can see the data type.

.. admonition:: Example

   Let's see ``float()`` and ``str()`` in action.

   .. raw:: html

      <iframe height="450px" width="100%" src="https://repl.it/@launchcode/LCHS-Type-Conversion-float-and-str?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true"></iframe>

Check Your Understanding
------------------------

.. admonition:: Question

   What value is printed when the following statement runs?

   .. sourcecode:: Python

      print( int(53.785) )

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Nothing is printed. An error is generated.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> 53.785</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> 54</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> 53</li>
      </ol>
      <p id="Q1"></p>

.. Answer = d

.. admonition:: Question

   Which of the following generates an error message when passed to
   ``float()``? Feel free to try running each of the options.

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> '3'</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> 18</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> '3 3'</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> '12.38'</li>
      </ol>
      <p id="Q2"></p>

.. Answer = c

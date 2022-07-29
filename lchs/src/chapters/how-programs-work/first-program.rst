Your First Python Program
=========================

Traditionally, the first program written in a new language is called
``Hello, World!`` because all it does is display the words, *Hello, World!* on
the screen. In Python, the source code looks like this.

.. sourcecode:: Python

   print("Hello, World!")

.. index:: ! print function

This is an example of using the **print function**, which doesn’t actually
print anything on paper. It displays a value on the screen. In this case, the
result is the phrase:

::

   Hello, World!

.. _hello-world:

Try It!
-------

Type ``print("Hello, World!")`` into the code editor below, then click the
green *Run* button.

.. admonition:: Warning

   Do NOT just copy/paste the code. You will learn best by typing, trying,
   changing, and fixing.

.. raw:: html

   <iframe height="400px" width="100%" src="https://repl.it/@launchcode/LCHS-Hello-World?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

The quotation marks inside the parentheses () mark the beginning and end of the
value to display. They don’t appear in the result.

Some people judge the quality of a programming language by the simplicity of
the ``Hello, World!`` program. By this standard, Python does very well.

.. admonition:: Note

   If you typed correctly, you saw the output ``Hello, World!``. If you left out
   or mistyped any characters, then you either saw a misspelled output or an
   error message. Do not worry if you make mistakes! These experiences still
   teach you something. Fix any errors and try again.

Now Play
--------

Once you print ``Hello, World!`` successfully, go back and play around with the
code. Make a change, click *Run*, and see what happens. Try to:

#. Change the message printed.
#. Figure out what the parentheses do. Will the code work without them?
#. Remove one or both quotation marks. Do we need to include both *opening* and
   *closing* marks?
#. Is there a difference between using a single or a double quote (``'`` vs.
   ``"``)?
#. Print multiple messages one after the other.
#. Print two messages on the same line.
#. Print a number. (Bonus: Print two numbers added together).
#. Print a message that contains quote marks, such as ``You're`` or ``I can
   print, "Hello, World!"``.
#. Other. You choose!

Spend a few minutes trying these changes. Do not worry if you miss some of the
targets. Learning comes through experience, and you WILL learn all the details
behind ``print`` soon.

Once you finish practicing (and hopefully making some mistakes), you will have
a pretty good idea of how the ``print`` function in Python works.

.. admonition:: Try It

   On paper (or in a document on your computer), write one or two sentences about
   ``print``. You should provide more detail than, “It prints things.”

Check Your Understanding
-------------------------

.. admonition:: Question

   The print function:

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> sends information to be printed on paper.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> displays a value on the screen.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> tells the computer to put the information in print, rather than cursive, font.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> tells the computer to speak the information.</li>
      </ol>
      <p id="Q1"></p>

.. Answer = b.

.. admonition:: Question

   Which of the following correctly prints ``Coding Rocks``? Select ALL that
   apply.

   .. raw:: html
      
      <ol type="a">
         <li><span id = "a" onclick="highlight('a', false)">print(Coding Rocks)</span></li>
         <li><span id = "b" onclick="highlight('b', false)">print"Coding Rocks"</span></li>
         <li><span id = "c" onclick="highlight('c', true)">print('Coding Rocks')</span></li>
         <li><span id = "d" onclick="highlight('d', false)">print("Coding Rocks')</span></li>
         <li><span id = "e" onclick="highlight('e', true)">print("Coding Rocks")</span></li>
      </ol>

.. Answers = c, e


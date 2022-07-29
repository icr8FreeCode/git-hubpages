The ``main()`` Event
====================

The last new skill for this chapter is to learn why we need to add a
``main()`` function to our programs and modules. The best way to explain this
is to examine what happens when we do NOT include ``main()``.

The program below uses two files---``main.py`` and the module
``random_select.py``.

A Sample Program With One Module
--------------------------------

Let's pretend that we want to create a program that gives us information about
student scores. We started by coding the ``find_average_score`` and the
``create_report`` functions. Now we want to test these functions by sending
in lists of numbers.

Notice that we first ``import`` the required module. Next, we define the
``find_average_score`` and ``create_report`` functions. Finally, we include
four statements to call the functions and print some output.

In lines 20 - 21, we call ``find_average_score`` with a list of numbers with a
known average (3) and then print the result.

In line 23, we create a list of 8 random scores with values ranging from 90 -
100. In line 24, we call ``create_report`` and send it the ``pretend_scores``
list so we can check the format of the returned string.

.. admonition:: Example

   Let's see how well our program works. Run the code as-is and examine the
   output.

   .. raw:: html

      <iframe height="900px" width="100%" src="https://repl.it/@launchcode/Why-Use-Main?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

   Wait... what? The output contains three lists that we don't expect from our
   code we wrote in lines 20 - 24.

   #. Comment out lines 20 - 24, then re-run the program.
   #. Wait... what? The two ``print`` statements are commented out, but output
      still appears in the console!

Loose Statements
----------------

OK, we have a problem with our program, but it's not with ``main.py``. Click on
the *Files* icon in the top-left corner of the editor. This will show the names
of the two files that make up this program.

Click on ``random_lists.py`` to show its code in the editor.

.. index::
   single: statement; loose

The module contains five functions, but the issue is at the bottom of the file.
Scroll to the end of the code to find the 8 statements in lines 44 - 51. We
call these **loose statements** because they are not part of any function.

Sometimes loose statements are just leftover commands that we used to test some
of the functions. However, most of the time, the loose code is needed to run the
program. It could prompt the user for information, call the functions in the
proper order, set up a required drawing space, etc.

In this case, the loose code contains three ``print`` statements, and these
create the unexpected output. This brings up a very important point:

   Loose statements ALWAYS run, even if none of the functions in the program
   get called.

In ``main.py``, by running ``import random_lists`` on line 1, the loose code in
the module executes. This is why we see three lists appear in the console even
if we remove all ``print`` commands in ``main.py``.

We need to learn how to deal with loose statements so that they only run when
we want them to.

Add a ``main()`` Function
-------------------------

In our example, the loose code in ``random_lists`` is just there for testing.
We could simply remove it, but let's deal with it in a better way.

Loose code winds up in a program because it does not fit into any of the
defined functions. However, these statements DO relate to each other because
they serve the same purpose---they control the main job of the program.

Update the code in ``random_lists`` by defining a ``main()`` function before
the loose code. Next, indent the loose lines so that they move into the
function:

.. sourcecode:: Python
   :lineno-start: 44

   def main():
      numbers = create_random_number_list(8, -10, 10)
      no_repeat_numbers = create_unique_number_list(5, 0, 10)
      letters = create_random_letter_list(8)
      numbers.sort()
      no_repeat_numbers.sort()
      print(numbers)
      print(no_repeat_numbers)
      print(letters)

``main()`` requires no parameters, nor does it need a return statement.

Return to ``main.py`` and uncomment lines 20 - 24. Click *Run* and notice that
the extra output disappears! Since the loose code from ``random_lists`` is now
inside its own function, it will only run if we call ``main()``.

.. admonition:: Try It!

   In ``main.py``, add the statement ``random_lists.main()`` and re-run the
   program. The three extra lists should appear.

Add ``main()`` to ``main.py``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's do the same thing to wrap up the loose code in ``main.py``:

.. sourcecode:: Python
   :lineno-start: 20

   def main():
      average = find_average_score([3, 1, 5])
      print(average)

      pretend_scores = random_lists.create_random_number_list(5, 90, 100)
      print(create_report(pretend_scores))

The following editor contains the updated code, with a ``main()`` function
present in both files.

.. admonition:: Example

   Most of the work happens inside the function, but we still need the last
   four lines of code to get things done. They perform the main job of the
   program (printing a score report).

   Run the program again to see how it behaves now:

   .. raw:: html

      <iframe height="700px" width="100%" src="https://repl.it/@launchcode/Why-Use-Main-step-2?lite=true" scrolling="no" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

   Drat! Now NO output appears!

Since we placed the loose code into the ``main()`` function, those statements
will not run unless we *call* the function.

In ``main.py``, add one more statement to the bottom of the code:

.. sourcecode:: Python
   :lineno-start: 20

   def main():
      average = find_average_score([3, 1, 5])
      print(average)

      pretend_scores = random_lists.create_random_number_list(5, 90, 100)
      print(create_report(pretend_scores))

   main()

Now when we run the code, it behaves as we want. Lines 20 - 25 tell Python,
*OK, we are defining a function called 'main()', and it holds all of the
statements that control how the program behaves.*

Line 27 tells Python, *Please run the 'main()' function*.

Yes, You Really Want to Add ``main()``
--------------------------------------

In many programming languages, like Java and C#, we are not allowed to leave
loose statements sitting at the bottom of our code. Python is more forgiving,
but as a best practice we should keep ALL statements inside of a defined
function.

*Why?*

New coders often think that adding ``main()`` provides little benefit, but they
really, really, REALLY should. The reasons have everything to do with avoiding
bugs from loose statements:

#. Using ``main()`` prevents running unwanted code when we import a module.
#. The ``main()`` function helps organize our code by putting all of the setup
   and control statements in one place. For example, in a turtle program,
   ``main()`` would be the place to define new turtles, set their properties,
   change the window appearance, and call drawing functions.
#. Using ``main()`` helps prevent shadowing of variables.

   .. admonition:: Examples

      If we define a list variable in a loose statement, then every function in
      the program can access that list.

      .. sourcecode:: Python
         :linenos:

         def add_item():
            a_list.append(9)

         def flip_list():
            a_list.reverse()

         a_list = [2, 4, 6]
         add_item()
         flip_list()
         print(a_list)
      
      **Console Output**

      ::

         [9, 6, 4, 2]

      If we define a list variable in ``main()``, then it is harder to
      accidentally change it in another function. We have to send the list in as
      an argument before the other function can act on it.

      .. sourcecode:: Python
         :linenos:

         def add_item():
            a_list.append(9)

         def flip_list():
            a_list.reverse()

         def main():
            a_list = [2, 4, 6]
            add_item()
            flip_list()
            print(a_list)
         
         main()
      
      **Console Output**

      ::

         File "main.py", line 2, in add_item
            a_list.append(9)
         NameError: name 'a_list' is not defined

Check Your Understanding
------------------------

.. admonition:: Question

   The ``main()`` function can ONLY be added to the ``main.py`` file.

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> True</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> False</li>
      </ol>
      <p id="Q1"></p>

.. Answer: b

.. admonition:: Question

   What is the purpose of the ``main()`` function? Select ALL that apply.

   .. raw:: html
      
      <ol type="a">
         <li><span id = "A" onclick="highlight('A', true)">To tie up loose code statements.</span></li>
         <li><span id = "B" onclick="highlight('B', true)">To control the main tasks that a program performs.</span></li>
         <li><span id = "C" onclick="highlight('C', false)">To import modules.</span></li>
         <li><span id = "D" onclick="highlight('D', false)">To keep the program from running.</span></li>
         <li><span id = "E" onclick="highlight('E', true)">To complete any setup needed to get the program started.</span></li>
         <li><span id = "F" onclick="highlight('F', true)">To keep control statements from running if the code is imported as a module.</span></li>
      </ol>

.. Answers: a, b, e, f.


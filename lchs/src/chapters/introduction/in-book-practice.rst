Using This Book
===============

Throughout this book, you will find different types of exercises. Each one
gives you a quick way to review or practice coding. To get the most out of the
book, try ALL of the tasks.

Concept Checks
--------------

Many pages end with a *Check Your Understanding* section, which contains a few
quick questions. You should use these as a review of what you just read.

The concept check questions are partially interactive---you can often click on
your chosen answer(s) to see if you are correct. However, your choices are NOT
saved. Leaving or refreshing the page erases the results.

If you want to save your answers, we recommend keeping a notebook where you can
write down the questions/answers that you find the most important or
interesting.

Try It!
^^^^^^^

.. raw:: html

   <script type="text/JavaScript">
      function highlight(id, answer) {
         text = document.getElementById(id).innerHTML
         if (text.indexOf('Correct') !== -1 || text.indexOf('Nope') !== -1) {
            return
         }
         if (answer) {
            document.getElementById(id).style.background = 'lightgreen';
            document.getElementById(id).innerHTML = text + ' - Correct!';
         } else {
            document.getElementById(id).innerHTML = text + ' - Nope!';
            document.getElementById(id).style.color = 'red';
         }
      }

      function evaluateMC(id, correct) {
         if (correct) {
            document.getElementById(id).innerHTML = 'Yep!';
            document.getElementById(id).style.color = 'blue';
         } else {
            document.getElementById(id).innerHTML = 'Nope!';
            document.getElementById(id).style.color = 'red';
         }
      }
   </script>

Answer the following practice questions:

.. admonition:: Question

   Multiple Choice: Select the correct option!

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> <strong>Pick this answer!!!</strong></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Don't choose this answer.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Don't choose this answer either.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> I insist on losing this point.</li>
      </ol>
      <p id="Q1"></p>

.. admonition:: Question

      Multiple Answers: Try clicking each of the options below (the words, not
      the letter labels).
      
      .. raw:: html
      
         <ol type="a">
            <li><span id = "Option a" onclick="highlight('Option a', false)">Option a</span></li>
            <li><span id = "Option b" onclick="highlight('Option b', true)">Option b</span></li>
            <li><span id = "Option c" onclick="highlight('Option c', true)">Option c</span></li>
            <li><span id = "Option d" onclick="highlight('Option d', false)">Option d</span></li>
            <li><span id = "Option e" onclick="highlight('Option e', true)">Option e</span></li>
         </ol>

In-Page Examples
----------------

Some sections provide coding practice. These short examples include code
you can run and/or modify to quickly reinforce what you just read. Play around
with these!

We use two sites to provide the embedded code editors: Repl.it and Trinket.
The appearance of the editors differs, but they both function in a similar
manner. You type your code into one panel, click the *Run* button, and the
program results get displayed in a second panel.

Try It!
^^^^^^^

.. admonition:: Tip

   If you find the coding space in the embedded editors a little too small, you
   can expand them. For repl.it editors, clicking on the *open in repl.it*
   button in the upper-right corner opens the editor into its own browser tab.
   For Trinket editors, click on the three horizontal bars in the upper-left
   corner. Choose the *Fullscreen* option to expand the workspace.

Here is an example of the repl.it code editor. The coding panel appears at the
top of the frame, with the output below.

.. raw:: html

   <iframe height="600px" width="100%" src="https://repl.it/@launchcode/Embedded-Try-It-Example?lite=true" scrolling="no" frameborder="yes" allowtransparency="true"></iframe>

Here is an example of the Trinket code editor. The coding panel appears at the
left of the frame, with the output to the right. Also, clicking on the
*Instructions* tab displays steps for you to follow.

.. raw:: html

   <iframe src="https://trinket.io/embed/python/32d45e0cdd?runOption=run" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

.. index:: ! Replit, ! trinket.io

Longer Examples and End of Chapter Exercises
--------------------------------------------

Longer examples and practice problems have links to **Replit** or
**Trinket.io**. These websites allow you to write, run, and save your code.
Repl.it and Trinket accounts are free, so we encourage you to sign up for one.

.. admonition:: Warning

   Depending on your school's privacy policy, student access to either site may
   be restricted. Check with your teacher before creating an account!

   #. `Replit signup <https://replit.com/signup?from=landing>`__.
   #. `Trinket.io signup <https://trinket.io/signup>`__.

As you explore the examples in this book, feel free to make changes to
the code. If you want to save your edits, click the *Fork* or *Remix* button at
the top of the workspace. Repl.it/Trinket will store a copy of the code in your
personal account.

.. figure:: figures/fork-remix-buttons.png
   :alt: Image showing the Fork and Remix buttons to save code to your repl.it or Trinket account.
   :width: 70%

   Repl.it uses the Fork button to save a copy of the code. Trinket calls it Remix.

Try It!
^^^^^^^

Here is the same code used in the example above. Click on each link to open it
in the repl.it or Trinket workspaces.

.. admonition:: Example

   You need to be logged into your account in order to save any changes you
   make to the code.

   .. sourcecode:: python
      :linenos:

      import turtle

      bob = turtle.Turtle()
      bob.color('blue')
      bob.shape('turtle')

      bob.left(90)
      bob.circle(75)

      # Try changing the color or shape (circle, square, triangle, arrow) for bob.
      # Try changing the size of the circle.

   `Repl.it link  <https://repl.it/@launchcode/Embedded-Try-It-Example#main.py>`__
   
   `Trinket.io link <https://trinket.io/python/32d45e0cdd>`__

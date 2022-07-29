Programming Languages
=====================

   "It'll take a few moments to get the coordinates from the navicomputer."
   - Han Solo

.. index:: ! program

Given a set of inputs, Han's computer analyzes the data and returns information
about safely navigating a hyperspace jump. The computer does this by running a
**program**.

At the most basic level, a *program* is how we tell the computer what it needs to do to follow an algorithm.
These instructions consist of a set of commands, calculations, and manipulations that achieve a specific result.
However, the computer cannot solve the problem on its own. Someone---a
programmer---had to figure out a series of steps for the computer to follow.

What Computers Understand
-------------------------

   "Computer, scan the surface for lifeforms."

   "Hey Siri, what movies are playing nearby?"

.. index:: ! binary

Even though today's tech makes it seem like computers understand our speech,
the devices do NOT use English, Chinese, Spanish, etc. to do their jobs.
Instead, computers operate using **binary code**, which consists only of 0s
and 1s. For example, here is the binary version of the text ``Hello World``:

``01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111
01110010 01101100 01100100``

Each set of 8 digits represents one character in the text.

.. index:: ! hexadecimal

To make things a little easier, data may also be written as **hexadecimal**
values. Here is ``Hello World`` in *hex*:

``48 65 6c 6c 6f 20 57 6f 72 6c 64``

To run an algorithm, all of the steps must be written in binary or hex so the
computer can understand the instructions.

.. admonition:: Note

   You do NOT need to worry about binary or hexadecimal code to make your
   programs work!

Languages
---------

Writing code using only 0s and 1s wastes time and energy. To fix this, many
clever people designed ways to convert the text humans understand into the
binary or hexadecimal forms needed by machines.

.. index:: ! programming language

A **programming language** is a set of key words and rules for teaching a
computer how to perform a task. Examples of programming languages include
Python, JavaScript, Basic, COBOL, C++, C#, Java, and many others.

These languages can be written and understood by humans, and each
one has its own characteristic style and *syntax*.

How Computers Run Programs
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. index:: ! compiler

Since computers only understand binary code, every programming language
includes a **compiler**, which is a special tool that translates a programmer's
work into the 0s and 1s that the machines need.

If we want to print ``Hello, World!`` on the screen, we would write the
instructions in our chosen programming language, then select "Run". Our code
gets sent to the compiler, which converts our typed commands into something the
computer can use. The instructions are then executed by the machine, and we
observe the results.

.. figure:: figures/Compiler.png
   :alt: Diagram showing the code getting sent through the compiler.

In the example above, the *syntax* for printing ``Hello, World!`` varies
between the Python, JavaScript, and Java languages, but the end result is the
same.

How Many Programming Languages Are There?
-----------------------------------------

Ask Google, "How many programming languages are there?" and many, many results
appear. Even with all these options, there is no specific answer to the
question. There are hundreds, if not thousands, of programming languages available.

Arguments occur whenever someone makes a top 10 list for programming languages,
but regardless of the opinions, one fact remains.

   Once you learn one language, learning the next is much, much easier.
   
Once you know two programming languages, adding a third becomes child's play.

The reason for this is that *thinking like a coder* does not change with the
language. Your logic, reasoning, and problem solving skills apply just as well
for Python as they do for JavaScript, Swift and C#. To display text on the
screen in Python, we use ``print()``, for JavaScript we use ``console.log();``,
for C# the command is ``Console.WriteLine();``. The *syntax* for each language
varies, but the results are identical.

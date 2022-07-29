Algorithms
==========

Have you ever alphabetized a stack of papers or a list of words? Did you sing
the alphabet song while you were performing the task? Did you sort the words
into groups based on the first letter? Did you "fan" the papers so you could
look at all of the names as you organized the stack? Did you get help from a
partner and split the task in half?

Regardless of how you completed the task, you probably followed a *pattern* to
make the process easier. If you had to repeat the task with a new set of words,
you could jump right in and follow the same pattern.

.. index:: ! algorithm

The word **algorithm** is just a fancy name for a pattern or set of steps that
solve a specific problem.

Algorithms Are Easy to Find
---------------------------

Imagine a recipe for baking cookies. After the list of ingredients comes a
series of step-by-step instructions for making the treats. If you want to cook
something else, like a cake or a roast, you follow a different set of steps
using a different set of ingredients.

An *algorithm* is like a recipe. It is a careful series of steps that, when
followed, produce a specific result. Programmers create algorithms to
accomplish small tasks. By combining many separate, small tasks, programmers
build larger applications.

For Example
^^^^^^^^^^^

Let's take a look at alphabetizing a list of words:

``apple, pear, zebra, box, rutabaga, fox, banana, socks, foot``

Here is one way to complete the task:

#. Arrange the words from a - z based only on the first letter:

   ``apple, box, banana, fox, foot, pear, rutabaga, socks, zebra``

#. If more than one word starts with 'a', rearrange those words based on the
   second letter. Repeat for the words that start with 'b', then 'c', etc.:

   ``apple, banana, box, fox, foot, pear, rutabaga, socks, zebra``

#. If multiple words start with 'a' and have the same second letter, rearrange
   those words based on the third letter. Repeat for the 'b' words, then the
   'c' words, etc.:

   ``apple, banana, box, foot, fox, pear, rutabaga, socks, zebra``

#. If other repeats exist, continue sorting the list by comparing the 4th, 5th,
   6th letters (etc.) until all the words are properly arranged.

This is not the ONLY way to solve the task, but it provides a series of steps
that can be used in many different situations to organize different lists of
words.

Alphabetizing is a process we can teach a computer to do, and the algorithm
will complete the process much more rapidly than a human.

Algorithms Do Many Things
-------------------------

Cookbooks contain pages and pages of algorithms. Following 2 or 3 of these
produces a nice dinner plus dessert. Programmers use this same idea, only they
work with devices instead of food.

Every algorithm is designed to do one small job. Combining different algorithms
together allows programmers to solve much more complicated problems.

#. Have you ever used the "You may also like..." option when looking at movies
   or books online? Algorithms take your past choices and use them to recommend
   new titles.
#. In 2019, astronomers took X-ray data collected by NASA and used algorithms
   to create the first image ever taken of a black hole.

   .. figure:: figures/blackhole.png
      :alt: nasa.gov. Image of a black hole taken by the Chandra telescope.
      :width: 80%

   https://www.nasa.gov/mission_pages/chandra/news/black-hole-image-makes-history

#. The apps on a phone are just combinations of algorithms working together to
   do a job. Applying a filter to a photo, playing a game with users across
   the world, or just calling mom all result from carefully designed sets of
   instructions.

Programmers can do so many things with computers, but the devices are useless
unless we give them algorithms to follow.

Check Your Understanding
-------------------------

.. admonition:: Question

   An algorithm is:

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> A solution to a problem that can be solved by a computer.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> A step by step list of instructions that if followed exactly will solve a problem.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> A single command run by a programming language.</li>
      </ol>
      <p id="Q1"></p>

.. Answer = b.

.. admonition:: Question

   Select ALL of the following that can be solved by using an algorithm:

   .. raw:: html
      
      <ol type="a">
         <li><span id = "a" onclick="highlight('a', true)">Answering a math problem.</span></li>
         <li><span id = "b" onclick="highlight('b', true)">Sorting numbers in decreasing order.</span></li>
         <li><span id = "c" onclick="highlight('c', true)">Making a peanut butter and jelly sandwich.</span></li>
         <li><span id = "d" onclick="highlight('d', true)">Assigning guests to tables at a wedding reception.</span></li>
         <li><span id = "e" onclick="highlight('e', true)">Creating a grocery list.</span></li>
         <li><span id = "f" onclick="highlight('f', true)">Suggesting new music for a playlist.</span></li>
         <li><span id = "g" onclick="highlight('g', true)">Making cars self-driving.</span></li>
      </ol>

.. Answer = all of the above.



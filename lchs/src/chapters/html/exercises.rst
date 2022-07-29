Exercises: HTML
===============

If your teacher added you to a :ref:`Trinket course <trinket-course-assignments>`, login to your account
to access the starter code for each exercise.

Otherwise, use the links below to code in your own free account.

.. admonition:: Note

   The code editors embedded in the exercises all include a *Remix* button in
   the upper right corner which will save the code to your Trinket account. For
   the matching repl.it code, click these links:

   #. `Parts 1 - 3 <https://repl.it/@launchcode/LCHS-HTML-Exercises-Parts-1-3>`__
   #. `Part 4 <https://repl.it/@launchcode/LCHS-HTML-Exercises-Part-4>`__

Part 1: Add a Few Elements
--------------------------

In the editor below, complete the ``index.html`` file for a simple webpage:

#. Add an ``h1`` to the page that says "Why I Love Web Development".
#. Add an ordered list to the page. It should include 3 items that describe
   why you are excited about web development.
#. Add a paragraph about the first web page you want to make (or have already
   made) with your web development superpowers!
#. Below your paragraph, add a link to an external website. Be sure the text
   displayed on the screen indicates where the link leads.

.. admonition:: Note

   The starter code contains other HTML inside of the ``head`` element that you
   do not need to modify. Just add code for this exercise, NOT delete!

   Also, when clicking on your link to make sure it works, right-click to open
   it in a new tab!

.. raw:: HTML

   <iframe src="https://trinket.io/embed/html/a11542d519" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Part 2: Organize the Elements
-----------------------------

Next, add some semantic tags to organize and expand your HTML file. Use the
same editor from Part 1.

#. Add ``<header>`` tags around the ``h1`` element.

   .. sourcecode:: html
      :lineno-start: 11

      <header>
         <h1>...</h1>
      </header>

#. Below the ``h1``, add some follow-up text to expand the ``header`` element.
   This could include one or more subheadings or a short paragraph
   (``<p></p>``).
#. Below the header, add a ``section`` element that includes a pair of
   ``<article>`` tags.

   .. sourcecode:: html

      <section>
         <article>
         
         </article>
      </section>

#. Move the ``ol`` element from Part 1, Step 2 into the article. Add a sentence
   or two to introduce the list.
#. Add a second ``article`` element in the ``section``. Move your paragraph
   from Part 1, Step 3 into this element. Also add a ``ul`` element that lists
   items you could include on your future webpage.
#. Create a new ``section`` element below the first. Add an ``h2`` heading
   called "Favorite websites", then include at least three links. (You can
   re-use the link from Part 1, Step 4).
   
   .. admonition:: Tip
   
      If want to be fancy, you can place the links in a list.

      .. sourcecode:: html

         <ul>
            <li><a href="...">Link text</a></li>
         </ul>

#. Add a ``footer`` element that includes the name of your school, the name of
   your programming class, and the date. Place ``<small>`` tags around the text
   to reduce the size of the words.
#. (Optional) Look up the entity codes for some fun symbols, then scatter them
   around in your text.

Part 3: Add Attributes
----------------------

Now add attributes to some of the tags to change the look of the text. Use the
same editor from Part 1.

#. Use ``style="color:color_name"`` to change the text color of your headings
   to something other than black.

   - Does adding the style attribute to the ``<h1>`` tag have a different
     effect than adding it to the ``<header>`` tag?

#. Use the ``type`` attribute in the ordered list to change the bullets from
   numbers to lowercase letters.
#. Change the font for one of the paragraphs with
   ``style="font-family:Brush Script MT"``. Play around by trying other
   font names like ``Helvetica``.
#. Use the ``style`` attribute to align the ``small`` text to the right edge of
   the screen.

Part 4: Other Semantic Tags
---------------------------

The editor below contains an image and some text, which you can use to practice
other useful tags and attributes.

.. raw:: html

   <iframe src="https://trinket.io/embed/html/bd7c04d694" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Image Attributes
^^^^^^^^^^^^^^^^

Inside the ``<img>`` tag, add the ``width="value"`` or ``height="value"``
attribute to change the size of the image. ``value`` refers to a number of
pixels. Start with a value of ``150`` and then experiment by moving up and down
from there.

.. admonition:: Note

   If both ``width`` and ``height`` are used, the image resizes to their
   values. If only one or the other is added to the ``img`` tag, the image
   will scale to keep the same proportions as the original.

The ``src`` attribute references an image saved in the same folder as this HTML
file. You cannot see the actual folder in the embedded editor, but clicking on
the image icon in the toolbar shows that seven photos are available. Feel free
to change the number in ``pet_1.jpg`` to change which picture gets displayed.

.. admonition:: Warning

   The ``src`` attribute also accepts the address for any image on the web.
   However, pulling images from other sites to display on your own may violate
   copyright laws.

   Discuss with your teacher how to properly cite or request permission to use
   images that don't belong to you.

Special Text Tags
^^^^^^^^^^^^^^^^^

#. In your math and science classes, you use *superscripts* or *subscripts* to
   correctly express chemical or mathematical formulas.

   .. admonition:: Examples

      .. raw:: html

         <p>Subscripts: 2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O</p>

         <p>Superscript: ax<sup>2</sup> + bx + c = 0</p>

   To make characters appear smaller and below the main line of text, wrap them
   with the ``<sub></sub>`` tags. For superscripts, use the ``<sup></sup>``
   tags instead.

#. In the editor, add some subscripts and superscripts inside the first
   paragraph.
#. Next, replace the second set of ``<p>`` tags with ``<blockquote>``. What
   happens? This tag is often used to set apart quotes taken from books,
   movies, plays, etc.

Details, Details
^^^^^^^^^^^^^^^^

Sometimes, you want to display information on a webpage only when the user
clicks in a specific spot. One way to accomplish this is by using the
``details`` element.

Paste this code into the editor:

.. sourcecode:: html

   <details>
      <p>Some text here...</p>
      <p>Some more text here...</p>
      <ul><em>List of items:</em>
         <li>One list item</li>
      </ul>
   </details>

#. What does the ``details`` element do on the screen?
#. Change the first ``p`` element to ``<summary>``. What happens?
#. Replace the generic text inside the ``details`` element with a description
   of how you might use it on a webpage.

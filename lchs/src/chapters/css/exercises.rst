Exercises: CSS
==============

.. admonition:: Note

   We built a website for you to test your CSS knowledge! To allow you to view
   your work in its own browser tab, we saved the
   `starter code in repl.it <https://repl.it/@launchcode/LCHS-CSS-Exercises>`__.

   Complete the exercises, then follow your teacher's instructions about how to
   submit your work.

Add the following style rules to the website. It's OK to look back in the
chapter, but try to complete as many of the tasks as possible before you check!

External CSS
------------

Add element, class, and id selectors to the ``style.css`` file to do the
following:

#. Change the background color of the whole page to yellow.
#. Change the text color to green for all paragraphs, and set ``font-family``
   to ``Courier``.
#. Change all ``h1`` elements to 48px font size and underline the text.
   (*Bonus:* Make it a wavy underline). Change all ``h2`` elements to 36px
   font size. Also, decorate the text with both an overline and an underline.
#. Align all text to the center of the page.
#. Instead of aligning all of the text to the center, use a CSS class to align
   only the headings to the center of the page.
#. Create a class called ``fancy-text`` with a ``font-family`` of 
   ``cursive``. What happens when you apply this class to a section, a
   paragraph, or a heading?
#. Can you place more than one value in the ``class`` attribute, like
   ``class="class_name_1 class_name_2"``? Try it to find out!
#. Change the font color of the element with ``id="cool-text"`` to blue. 
#. Use a CSS ``id`` to change the items in the ordered list to a color and size
   of your choosing. Remember, you can only add that ``id`` attribute to ONE
   tag.
#. Use a class or id to put an interesting border around one of the sections.

Internal CSS
------------

#. Add an internal ``p`` selector that sets the ``font-family`` to
   ``Helvetica`` and the text color to ``slategray``.

   a. Does the internal element selector override the external one?
   b. Check ``<p class="fancy-script">``. Does the internal element selector
      override the external class?

#. In ``head``, move the ``<link>`` element below the closing ``</style>`` tag.
   Does changing the order of the two elements matter?

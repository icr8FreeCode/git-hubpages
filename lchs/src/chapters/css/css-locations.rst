Linking CSS to HTML
===================

To use CSS, we need to apply our style rules to a set of HTML code. There are
three different places to add CSS in an HTML file:

#. **Inline**: The CSS gets placed inside individual HTML tags. This is a good
   place to add some quick, specific styling to a small number of elements.
   
   There is no selector in inline CSS. Instead, the ``style`` attribute is
   used. With inline CSS, the styling rule only applies to that one HTML
   element.

   .. sourcecode:: html

      <tag style="declaration block">Content...</tag>

#. **Internal**: One or more CSS style rules are placed within the ``head``
   element at the start of the HTML document. The ``<style>`` tags wrap the
   CSS content.
   
   Internal CSS works great when we have a small number of style rules that
   we need to apply to the whole document. The general syntax is:

   .. sourcecode:: html
      :lineno-start: 3

      <head>
         <title>My Web Page</title>
         <style>
            selector {
               property: value;
               property: value;
               /* Other property assignments */
            }

            selector {
               property: value;
               property: value;
            }

            /* Other CSS rules */
         </style>
      </head>
   
   Note that the syntax for the CSS rules follows the format we used on the
   previous page.

.. _link-external-css:

#. **External**: The CSS style rules are placed in a separate file. This
   document only contains CSS code, and it is saved with a ``.css`` extension.
   The external CSS file must be linked to the HTML document in the ``head``
   element.

   External CSS is great when we have large amounts of rules that apply to the
   whole page. We can also *reuse* an external CSS document by linking it to
   multiple webpages. The general syntax for this is:

   .. sourcecode:: html
      :linenos:

      <head>
         <title>My Web Page</title>
         <link rel="stylesheet" type="text/css" href="style.css">
      </head>

   Let's step through what's going on in line 3:

   #. ``<link>`` is the HTML tag that tells the browser to connect a webpage
      and a separate, named file.
   #. ``rel`` describes how the link *relates* to the page. In this case, the
      linked file provides style instructions, so we set ``rel`` to the value
      ``"stylesheet"``.
   #. ``type`` tells the browser what kind of content is saved within the
      linked file. ``type`` should be set to ``"text/css"`` for all style
      sheets. This tells the browser to expect CSS syntax when it opens the
      file.
   #. ``href`` provides the path to the CSS document as well as its name. The
      path tells the browser where to look for the file it needs to open.
      
      In this case, ``href="style.css"`` tells the browser, "Look in the same
      folder as the HTML file, and open the document called ``style.css``."

      .. admonition:: Note

         The ``href`` path can describe where a file is stored on a computer,
         or it can be a web address where the CSS code can be accessed.

CSS Order of Importance
-----------------------

Since CSS instructions can be placed in three locations, it's not hard to
create conflicting style rules. If an external CSS file sets a heading text to
blue, while an internal rule sets the color to red, which one wins? To deal
with cases like this, browsers follow a specific order when applying styles.

#. Inline CSS receives the highest importance. It overrules any other styling.
#. Internal CSS comes next in importance.
#. External CSS receives the lowest level of importance.

The different CSS selectors also follow a specific order:

#. ``id`` styling rules receive higher importance.
#. ``class`` styling rules come next.
#. ``element`` level styling rules receive the lowest importance.

Finally, nesting HTML elements inside others affects their styling. Any rules
for the internal element override the rules on the outer element.

.. admonition:: Example

   The following HTML code nests 3 ``section`` elements. Note how the style
   rules for the inner elements get applied instead of the outermost color
   choice.

   .. sourcecode:: html
      :linenos:

      <section style="background-color:lightblue">
         Outer section...
         <section style="background-color:yellow">
            Inner section...
            <section style="background-color:white">Innermost section...</section>
            Inner section...
         </section>
         Outer section...
      </section>
   
   **Output**

   .. figure:: figures/nested-styles.png
      :alt: 3 nested sections. The inner sections show background colors different from the outer style rule.

.. admonition:: Tip

   This order of importance is actually quite useful. We use it to our
   advantage whenever we need to override a more general style rule with one
   designed for a specific element.

Try It!
-------

The editor below contains some plain HTML and a ``style.css`` file. Follow the
instructions below the code to practice adding CSS style rules to the document.
Also, pay attention to how the order of importance affects how the rules get
applied.

.. raw:: html

   <iframe src="https://trinket.io/embed/html/f75c53eff8" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>


#. On line 7, use the ``<link>`` tag to connect the ``style.css`` file to the
   HTML code. Properly done, you will see the plain webpage change quite a bit.
   This is an example of bringing in *external CSS*.
#. Note that the ``li`` selector from ``style.css`` affects all list elements
   on the page. On line 15, add BOTH ``class="small-red-text"`` and
   ``id="large-blue-item"`` to the ``<li>`` tag. Which style rule gets applied
   (``element``, ``class``, or ``id``)?
#. Inside ``<head></head>`` and below the ``<link>`` tag, add the following
   code. This is an example of *internal CSS*:

   .. sourcecode:: html
      :lineno-start: 8

      <style>
         li {
            color: green;
            text-decoration: underline wavy;
         }
      </style>

   What level of importance does the internal ``li`` selector receive compared
   to the external ``li``, ``class``, and ``id`` rules?

#. Add a ``section`` selector to the internal CSS. Set the background to a
   color of your choice. Does this internal rule override the font, text color,
   and border rules set in ``style.css``?
#. Use inline styling to add a border to one of the ``<section>`` tags. One fun
   option is ``style="border:4px double blue"``.
   
   ``4px`` sets the border thickness to 4 pixels. ``double`` refers to the
   border type (``solid``, ``dashed``, and ``dotted`` are also options).
   
   Does this inline CSS affect the ``section`` properties set by the internal
   and external style rules?

Check Your Understanding
------------------------

.. admonition:: Question

   What is the order of importance for CSS style rules?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Internal > External > Inline</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> Inline > Internal > External</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Inline > External > Internal</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> External > Internal > Inline</li>
      </ol>
      <p id="Q1"></p>

.. Answer = b

.. admonition:: Question

   What is the order of importance for CSS selectors?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> element > class > id</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> element > id > class</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> class > id > element</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> class > element > id</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> id > element > class</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> id > class > element</li>
      </ol>
      <p id="Q2"></p>

.. Answer = f

.. admonition:: Question

   In the ``head`` element of an HTML file, an internal CSS rule sets the text
   color for all ``p`` elements to blue. The HTML file also links to external
   CSS that defines an ``id`` selector to make red text (``#red-text``).

   Given the following HTML code, what color will the text be on the screen?

   .. sourcecode:: html

      <p id="red-text" style="color: yellow">This is some text...</p>


   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> red</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> blue</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, true)"> yellow</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> orange</li>
      </ol>
      <p id="Q3"></p>

.. Answer = c



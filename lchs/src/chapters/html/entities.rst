.. _html-entities:

HTML Entities
=============

Some symbols, like ``<`` and ``>``, are reserved for use in HTML code. If we
include reserved characters in the text we want to display on the screen, web
browsers might interpret the symbols as tags.

.. admonition:: Example

   The following HTML code should display a simple heading element, followed
   by two (non-working) buttons. Unfortunately, the *Back* button does not
   display correctly, and the editor shows several error messages.

   Hover over each red *X* to read the messages. Even though the heading and
   *Next* button appear on the page, the editor flags problems in the code
   because of the extra ``<`` and ``>`` symbols.

   .. raw:: HTML

      <iframe src="https://trinket.io/embed/html/43f39dcf45" width="100%" height="300" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

   The syntax highlighting in line 8 also points out that our HTML is a little
   off.

.. index:: ! character entities

**Character entities** are used to display reserved characters in HTML. To
safely include a reserved character as part of some text, the general syntax
is:

.. sourcecode:: HTML

   &entity_name;
   &#entity_number;

Every reserved character has its own ``entity_name``, like ``gt`` for the
greater than sign, in addition to a number (``62`` for ``>``). To display a
reserved character on the screen, begin with the ``&`` symbol, followed by
either the entity name or number. End with a semicolon ``;``.

#. In the code editor above, replace the ``<<`` in line 8 with ``&lt;&lt;`` to
   make the *Back* button appear as intended.
#. In line 7 replace the ``<`` symbol with its number, ``&#60;``. The line
   rendered properly before, but using the entity instead of the symbol makes
   the error message go away.
#. In line 9 replace the two ``>`` symbols with either the entity name or
   number.

Entity Table
------------

Besides reserved characters, we can also use entity names and numbers to
display special symbols, like ``&`` or arrows.

The table below summarizes some of the common entities. More complete tables
can be found at `W3Schools <https://www.w3schools.com/html/html_entities.asp>`__
and this `Character Entity Reference Chart <https://dev.w3.org/html5/html-author/charref>`__.

.. list-table:: HTML Character Entities
   :widths: auto
   :header-rows: 1

   * - Description
     - Entity Name
     - Entity Number
     - Result
   * - Ampersand
     - ``&amp;``
     - ``&#38;``
     - &
   * - Less than
     - ``&lt;``
     - ``&#60;``
     - <
   * - Greater than
     - ``&gt;``
     - ``&#62;``
     - >
   * - Copyright
     - ``&copy;``
     - ``&#169;``
     - ©
   * - Arrows
     - ``&larr; &uarr; &rarr; &darr;``
     - ``&#8592; &#8593; &#8594; &#8595;``
     - .. raw:: html

          &larr;, &uarr;, &rarr;, &darr;
   * - Joy emoji
     - (no entity name)
     - ``&#128514;``
     - .. raw:: html

          &#128514;

.. admonition:: Note

   Entity names are case sensitive.

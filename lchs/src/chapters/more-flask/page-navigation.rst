.. _page-navigation:

Page Navigation
===============

So far, we've used the address bar in the browser to access each webpage we've
built. However, we need to do better than this. Users shouldn't have to type
in the address for every page they want to visit!

Adding links that connect to other pages in our website makes navigation much
easier. These links can take many forms, like a simple list of URLs, a set of
clickable icons, *Next Page* and *Previous Page* buttons, a dropdown menu, or a
nav bar. (You can find several of these options on this page!)

A List of Links
---------------

Let's start with a basic, unordered list of links. Each item will lead to one
of the pages in our website. For now, we will keep the design simple. We can
make it look nice after we get the navigation working.

Since we want the list to appear on every page, we will add it to the base
template.

#. Open ``base.html`` in Visual Studio Code.
#. Add a ``nav`` element below the ``endblock`` statement. Include a heading
   and an unordered list. Make one item for each of the pages you created
   earlier.

   .. sourcecode:: html
      :lineno-start: 15

      <nav>
         <h3>Page Navigation</h3>
         <ul>
            <li>Pizza Topping Form</li>
            <li>Second Page</li>
         </ul>
      </nav>

   Save your work, then launch ``main.py``. The list should appear on each page
   that extends ``base.html``.
#. Next, change the list items from text to active links.

   a. Wrap the text in link tags, ``<a></a>``.

      .. sourcecode:: html

         <li><a href="">Pizza Topping Form</a></li>
         <li><a href="">Second Page</a></li>
   
   b. Fill in the ``href`` values with the path to each page:

      .. sourcecode:: html

         <li><a href="/">Pizza Topping Form</a></li>
         <li><a href="/second">Second Page</a></li>

   Note the values assigned to each ``href``. The strings *match the paths*
   from the ``@app.route()`` handlers in ``main.py``. They should NOT be the
   ``.html`` names you gave to the template files. The paths you use will
   depend on your Python code. They might not match this example.
#. Save your work, then refresh the tab in the browser. Properly done, the
   navigation links should work something like this:

   .. figure:: figures/basic-nav.gif
      :alt: Clicking either of the two links in the list navigates to the chosen page.

      A list of links provides basic website navigation.

.. admonition:: Try It!

   If we hover the pointer over one of the links, its URL appears in the bottom
   corner of the browser window.

   .. figure:: figures/link-url.png
      :alt: Hovering over a link displays the target URL in the lower corner of the browser window.

Bring in Some Logic
-------------------

So far, so good. The list of links works. However, there is a weakness in our
code. If we add, remove, or rearrange the pages in our website, we need to
manually adjust the ``li`` elements in ``base.html``. It would be better if the
size and order of the list automatically updates when we make a change.

Fortunately, we make this happen by adding a ``for`` loop to the base template.
Since each link requires two pieces of data (an ``href`` value and the link
text), we have a few options for feeding this information from Python to the
templates. Three possibilities are a list of lists, a dictionary, or an object
created from a user-defined class. (There are other choices as well).

In this case, we will use a dictionary.

Update ``main.py``
^^^^^^^^^^^^^^^^^^

#. Near the top of the code in ``main.py``, define a dictionary called
   ``navigation``.
#. Add one key/value pair for each page in your website. The *key* will be the
   text for the link. The *value* will be the path to that page.

   .. sourcecode:: Python
      :lineno-start: 3

      app = Flask(__name__)
      app.config['DEBUG'] = True

      navigation = {
         'Pizza Toppings Form': '/',
         'Second Page': '/second'
      }
   
#. Include the ``navigation`` dictionary as an argument in each
   ``render_template()`` function.

   .. sourcecode:: Python

      return render_template('template_name', navigation = navigation, ...)

.. _jinja3-dictionary-iteration:

Update ``base.html``
^^^^^^^^^^^^^^^^^^^^

Jinja3 uses the same syntax as Python to loop through a dictionary
:ref:`by key/value paris <key-value-iteration>`.

#. Replace the ``li`` items in the list with a loop:

   .. sourcecode:: html
      :lineno-start: 15

      <nav>
         <h3>Page Navigation</h3>
         <ul>
            {% for (text, path) in navigation.items() %}
               <li><a href={{path}}>{{text}}</a></li>
            {% endfor %}
         </ul>
      </nav>

#. Each time the loops runs, ``text`` is assigned the next key in the
   dictionary. ``path`` takes the value of that key.
#. Save your work, then refresh the tab in the browser. Test to make sure both
   links still work.

.. admonition:: Try It!

   With the loop in place, changes made to ``navigation`` will appear on all
   pages that extend ``base.html``. Test this out!

   #. Try rearranging the order of the key/value pairs in ``navigation``.
   #. Add a third page to the website. Include a key/value pair for the page in
      the ``navigation`` dictionary.

A Dropdown Menu
---------------

As a website grows, the navigation menu requires more space on the page. To
keep their layout neat and consistent, web developers often use features that
hide the menu until a user reveals it.

.. figure:: figures/dropdown-menu.png
   :alt: A dropdown menu appears when the cursor hovers over a heading.
   :width: 80%

   Menu items appear when the user hovers over a each heading.

While it won't be as fancy as the image, we can add some CSS rules to make our
own dropdown menu. It will appear when the user moves their pointer over the
``Page Navigation`` heading.

#. First, add the following ``class`` attributes to the ``<nav>``, ``<h3>``,
   and ``<ul>`` tags:

   .. sourcecode:: html
      :lineno-start: 15

      <nav class="dropdown">
         <h3 class="droptitle">Page Navigation</h3>
         <ul class="dropdown-content">
            {% for (text, path) in navigation.items() %}
               <li><a href={{path}}>{{text}}</a></li>
            {% endfor %}
         </ul>
      </nav>
   
#. Next, add the following class selectors to ``style.css``. The explanation
   for how the code works follows this section.

   .. sourcecode:: CSS
      :linenos:

      .dropdown {
         position: relative;
      }

      .droptitle {
         margin-bottom: 0px;
      }

      .dropdown-content {
         display: none;  /* Hides content */
         position: absolute;
         margin-top: 0px;
         background-color: white;
         width: 100%;
         border: 1px solid lightgray;
         padding: 10px 15px;
      }

      .dropdown:hover .dropdown-content {
         display: block;  /* Displays content */
      }

#. Save, then use *Shift + Refresh* or *Control + Refresh* to apply the CSS
   changes in the browser. Move the cursor over the heading to test the code.

   .. figure:: figures/css-dropdown.png
      :alt: A dropdown menu showing a 3-item unordered list.
      :width: 50%

      Yay! A working dropdown menu!

CSS Breakdown
^^^^^^^^^^^^^

Let's take a look at how the CSS rules make a working dropdown.

#. **Line 2**: ``position: relative`` makes the elements inside the
   ``<nav></nav>`` tags pair up with each other. The ``h3`` comes first, with
   the ``ul`` right below it.
#. **Line 11**: When the dropdown items appear, ``position: absolute`` makes
   them *overlap* other content instead of pushing it further down the page.
   The revealed menu covers up other text and images. If we set this value to
   ``relative``, then anything below the menu would shift position when it
   opens.
#. **Lines 6 & 12**: For dropdown menus, we need to be careful with margins. If
   the gap between the label and the choices is too large, then the content
   will disappear when the user moves their mouse to make a selection! To
   prevent this, we set the *bottom* margin of ``droptitle`` to zero pixels.
   Similarly, we set the *top* margin of ``dropdown-content`` to ``0px``.
#. **Lines 13-16**: These properties control the appearance of the menu.
   
   a. Setting a ``background-color`` hides any content that the menu overlaps
      when it opens.
   b. ``width: 100%`` makes the menu take up the same horizontal space as
      its container (``nav``).
   c. ``border`` and ``padding`` make the menu area and text more obvious.

#. **Line 10**: ``display: none`` hides the element from the screen. The menu
   items are still on the page, but they do not appear in the view.
#. **Lines 19-21**: ``.dropdown:hover .dropdown-content`` controls the
   operation of the menu. In the browser, when the pointer moves over the
   ``nav`` element, ``dropdown:hover`` becomes ``True``. When this happens,
   ``display: block`` is applied to the ``dropdown-content`` class. This
   overrules the ``display: none`` statement in line 10, and the menu appears
   on the page! When the pointer moves away from the menu, ``dropdown:hover``
   becomes ``False``, and ``display: none`` is reapplied.

.. admonition:: Tip

   You can explore other dropdown styling options at
   `W3Schools <https://www.w3schools.com/css/css_dropdowns.asp>`__.

Navigation Bar and Other Options
--------------------------------

There are LOTS of ways to create smooth website navigation. While we won't dive
any deeper into this topic, here are a few helpful resources you can explore on
your own.

**Down the Rabbit Hole**:

#. `CSS Navbar at W3Schools <https://www.w3schools.com/css/css_navbar.asp>`__.
#. ``Navs & tabs``, ``Navbar``, and ``Pagination`` components at
   `Bootstrap <https://getbootstrap.com/docs/5.0/components/navs-tabs/>`__.
#. `Flask-Menu <https://flask-menu.readthedocs.io/en/latest/>`__ is an
   extension that adds support for generating menus.

Select Inputs
=============

A *select* input creates a clickable menu that gives the user a drop-down list
of options. While it is possible to make the input accept more than one choice,
it's usually best to stick with allowing just one item.

The select input combines two HTML tags: ``<select>`` and ``<option>``. The
general syntax is:

.. sourcecode:: html

   <select name="...">
      <option value="...">First menu option.</option>
      <option value="...">Second menu option.</option>
      <!-- etc. -->  
   </select>

When the form gets submitted, the ``name`` attribute in the ``<select>`` tag
provides the key. The ``value`` attribute from the chosen ``<option>`` is
assigned to that key.

A select input works very much like a group of radio buttons.

.. admonition:: Example

   Let's use a drop-down menu to select our color choice.

   .. sourcecode:: html
      :linenos:

      <form action="https://handlers.education.launchcode.org/request-parrot" method="POST">
         <select name="color">
            <option value="red"> Red</option>
            <option value="green"> Green</option>
            <option value="blue"> Blue</option>
         </select>
         <button>Send to Parrot</button>
      </form>

   .. figure:: figures/select-parrot.png
      :alt: The 'Red' menu option is selected. This assigns the value 'red' to the 'color' key.
      :width: 70%

      The value of the selected ``option`` element is assigned to the ``color`` key.

Setting a Default ``<option>``
------------------------------

A ``select`` input always returns a value when a form is submitted, even if the
user never clicks on the menu. By default, ``select`` displays the first
``option`` element as the current choice.

Just like a radio button group, we should ALWAYS offer the user a *No Choice*
option. This can be an empty menu slot or some form of non-selectable title.

.. admonition:: Example

   Here are two examples of *no choice* menu options. Each one is the first
   ``option`` element, and the ``value`` attribute is assigned the empty
   string.

   .. sourcecode:: HTML
      :linenos:
   
      <!-- Example 1: Empty Top Slot -->
      <select name="color">
         <option value="" selected></option>
         <option value="red"> Red</option>
         <option value="green"> Green</option>
         <option value="blue"> Blue</option>
      </select>

      <!-- Example 2: Title -->
      <select name="color">
         <option value="" disabled selected>Choose a color:</option>
         <option value="red"> Red</option>
         <option value="green"> Green</option>
         <option value="blue"> Blue</option>
      </select>

   .. list-table::
      :header-rows: 1

      * - Example 1
        - Example 2
      * - .. raw:: html

              <select name="color"> Example #1
                 <option value="" selected></option>
                 <option value="red"> Red</option>
                 <option value="green"> Green</option>
                 <option value="blue"> Blue</option>
              </select>
        - .. raw:: html

              <select name="color">
                 <option value="" disabled selected>Choose a color:</option>
                 <option value="red"> Red</option>
                 <option value="green"> Green</option>
                 <option value="blue"> Blue</option>
              </select>

   The ``selected`` attribute sets an option as the default choice, and it will
   be displayed when the page first loads.
   
   In Example 1, the blank menu slot can be chosen as an option. The
   ``disabled`` attribute in Example 2 (line 11) means that once the user picks
   a different option, the default title cannot be re-selected.

.. admonition:: Try It!

   Return to your local ``index.html`` form.

   #. Save and commit the work in the ``radio`` branch.
   #. Return to ``main`` and checkout a new branch called ``select``.
   #. In the new branch, modify your form to use a select input with at least
      three options.
   #. What happens if you submit the form without clicking the select menu?
   #. Experiment by placing the ``selected`` and ``disabled`` attributes inside
      different ``<option>`` tags.
   #. Try using the ``hidden`` attribute in place of ``disabled``. What does it
      do to the input?

When to Use What
----------------

Checkboxes, radio buttons, and select drop-down menus all behave in a similar
way. However, they are NOT always interchangeable. When should we use each
input type?

Here are a few guidelines:

#. If the user needs to select multiple options, or be able to unselect items,
   go with checkboxes.
#. If the user must make a single choice from a long list, radio buttons work
   better than a drop-down menu.
#. Top-down lists are easier to read. Whenever possible, arrange a set of
   choices vertically instead of side-by-side.

`This article <https://community.appway.com/screen/kb/article/checkboxes-radio-buttons-dropdowns-when-to-use-what-1482810890174>`__
also gives a nice summary of when to use the different input types.

Check Your Understanding
------------------------

.. admonition:: Question

   For a select input, what determines the key/value pair when the form is
   submitted?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> The <code class="pre">name</code> and <code class="pre">value</code> attributes inside the <code class="pre">select</code> tag.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> The <code class="pre">name</code> and <code class="pre">value</code> attributes inside the <code class="pre">option</code> tag.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> The <code class="pre">name</code> from the <code class="pre">select</code> tag and the <code class="pre">value</code> from <code class="pre">option</code>.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> The <code class="pre">name</code> from the <code class="pre">option</code> tag and the <code class="pre">value</code> from <code class="pre">select</code>.</li>
      </ol>
      <p id="Q1"></p>

.. Answer = c

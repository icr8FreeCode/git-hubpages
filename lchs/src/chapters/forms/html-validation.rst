Form Validation with HTML5
==========================

On the :ref:`Text Inputs <client-side-validation>` page, we looked at
*client-side validation*. By changing the ``type`` attribute in the ``<input>``
tag, we make the browser perform a quick check of the data entered into a
field. Types like ``number``, ``email``, ``date``, etc. compare the data from
an input box to a particular format. However, these checks do NOT prevent a
user from leaving an input blank.

The ``required`` attribute prevents form submission if the user skips one or
more of the input fields. It flags any input that returns the empty string
(``""``) as its value.

``required`` lets us place an emphasis on the most important information we
need to collect from a form.

.. admonition:: Example

   The ``Name`` and ``Student ID`` fields are necessary, but ``Favorite Color``
   can be left blank.

   .. sourcecode:: html
      :linenos:

      <input type="text" name="name" placeholder="Enter your full name." required/>
      <input type="password" name="id_num" required/>
      <input type="text" name="fav_color"/>

   .. figure:: figures/required-field.png
      :alt: The empty Name and Student ID fields are flagged with a red border.

      After trying to submit the form, red borders flag the empty, ``required`` fields.

The ``required`` attribute also works for non-text inputs as well.

#. **Radio buttons**: Only *one* ``required`` attribute is needed for the
   group. This group consists of all ``input`` elements that share the same
   ``name`` attribute.

   .. sourcecode:: html
      :linenos:

      <label><input type="radio" name="color" value="red" required/> Red</label><br>
      <label><input type="radio" name="color" value="green" /> Green</label><br>
      <label><input type="radio" name="color" value="blue" /> Blue</label>

#. **Select element**: Place the ``required`` attribute inside the ``<select>``
   tag. Also, one of the ``<option>`` tags must include ``selected`` and assign
   the empty string to the ``value`` attribute.

   .. sourcecode:: html
      :linenos:

      <select name="color" required>
        <option value="" selected>Choose a color:</option>
        <option value="red">Red</option>
        <!-- etc. -->
      </select>

#. **Checkboxes**: If we need the user to click a *specific* checkbox, then the
   ``required`` attribute works well. This would be something like those
   *I agree to the terms and conditions* statements we need to click before
   installing new software or creating an online account.

Note that HTML5 currently does NOT support using ``required`` on a *group* of
checkboxes, even if they share the same ``name``. If we want to make sure the
user clicked at least one checkbox option, we need to use a different
validation method.

.. index:: ! server-side validation
   single: form; server-side validation

**Server-side validation** refers to actions that happen *after* a form is
submitted. When the server receives a request containing form data, it runs
code to check that data. If any information is missing or in the wrong format,
the server sends a response that flags the errors.

Client-side validation takes place before contacting the server. The browser
prevents submission if it finds a problem inside the form. Server-side
validation occurs afterwards, and it gives developers much more control over
how to check the data. Good developers combine both validation methods to build
strong webpages. We will study server-side validation in the next few chapters.

Check Your Understanding
------------------------

.. admonition:: Question

   When should we include form validation in our code?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Anytime the user enters a password.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Anytime the user needs to provide required data.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Anytime the data in an input field needs to follow a specific format.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Anytime we build a form.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> All of the above.</li>
      </ol>
      <p id="Q1"></p>

.. Answer = e

.. admonition:: Question

   A user fills out a form with their login information and clicks *Submit*.
   They receive an error message pointing out that they entered an incorrect
   password for their account. This is an example of:

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> client-side validation</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> sever-side validation</li>
      </ol>
      <p id="Q2"></p>

.. Answer = b

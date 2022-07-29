Project: Improve the User Experience
====================================

Recall the web form we created in :ref:`the last chapter <server-side-validation>`.
As designed, if the user enters invalid data, they won't know about their
mistake until they reach the results page. This flaw in the user interface (UI)
lowers the quality of the user experience (UX).

One common practice for web forms is to keep a user on the original page when
they make a mistake. Also, displaying an error message about what went wrong
gives the user a smooth way to make corrections.

For this project, you will update a fake account sign-up page to improve the
UI/UX. When a user submits invalid information, the following should happen:

#. The form page will reload,
#. All valid entries will remain in their input fields,
#. One or more messages will appear explaining what went wrong,
#. The user can re-enter information and submit again.

When the user successfully fills out the form, they will be sent to a different
webpage.

Setup
-----

The starter code for this project is saved in the same
`GitHub repository <https://github.com/LaunchCodeEducation/LCHS_flask_logic>`__
you used for the exercises. However, the project code is in a separate branch.

#. Open the ``LCHS_flask_logic`` directory in Visual Studio Code. If you
   haven't downloaded it from GitHub yet, return to :ref:`the exercises <more-flask-exercises-setup>`
   and follow the instructions for cloning the project to your device.
#. In the terminal, switch to the ``project-start`` branch:

   .. sourcecode:: bash
   
      $ git checkout project-start

#. Just like you did for :ref:`the chapter exercises <more-flask-exercises-setup>`,
   create and activate a new virtual environment.
#. Install Flask.
#. Save and commit your work.

Run the Application
^^^^^^^^^^^^^^^^^^^

Launch ``main.py`` and open the application in a new tab in your browser.

As designed, the form works. Submitting a valid set of data will lead to a
success page. However, the user interface needs some major fixes.

Recall that part of a UI is the code that makes it work. However, the
appearance of the interface is just as important.

Part A: Clean Up the View
-------------------------

The layout and colors on the page are a bit distracting. Since this is the
sign-up page for your web application, it is the first thing new users see. If
it gives them a poor UX, then they might decide NOT to join!

Open the ``style.css`` and ``register.html`` files in Visual Studio Code. Make
the following changes by adjusting the CSS style rules, adding ``class``
attributes inside the HTML tags, or adding new HTML code.

#. Remove the yellow background color from the page.
#. Fix the rainbow background in the header. Just because you *can* apply lots
   of color, doesn't mean you *should*.

   .. admonition:: Tip
   
      Note how the black letters in the heading stand out against the lighter
      colors, but get hard to read on top of the darker colors. The opposite
      would be true for a light text color.

      For best results, try to keep a consistent, sharp contrast between the
      text color and the background.

#. Center the ``h2`` and ``form`` elements on the page.
#. Inside the form, left-align the input labels and center the *Submit* button.
#. Make the font size for the labels and input boxes large enough to easily
   read.
#. Style the *Submit* button to make it stand out more.
#. Below the form, display some rules for filling out the input fields:

   a. The username should be 3-8 characters long. It cannot contain spaces.
   b. The password needs to be 8 or more characters long, with no spaces. Also,
      it should contain at least one letter, one number, and one special symbol
      (``%``, ``#``, ``&``, or ``*``).

#. Once you finish updating the appearance of the page, save and commit your
   work.

The form looks better now, and it does work. However, try entering some invalid
information and click *Submit*.

Notice that the form gets erased, and this is a problem. The code behaves
correctly by rejecting invalid entries. However, the user has no way of knowing
this! To them, the form simply didn't work.

To improve their experience, users need to receive some type of feedback
whenever they submit a form. This will be your focus in the remaining sections.

Part B: Keep Valid Entries
--------------------------

One good way to improve the UX is to keep any *correct* entries in place and
remove the incorrect ones. This becomes more and more important as the number
of input fields increases.

Open ``main.py`` and take a look inside the ``sign_up()`` function. The
``inputs`` dictionary organizes data for the form. Each key is the label for
one of the input fields. Each value is a list with strings to assign to the
``type``, ``name``, and ``placeholder`` attributes.

Inside ``register.html``, note how the ``for`` loop builds the labels and input
fields for the form.

.. admonition:: Example

   .. sourcecode:: html
      :lineno-start: 7

      {% for (label, values) in inputs.items() %}
         <label>{{label}}: <input type="{{values[0]}}" name="{{values[1]}}" placeholder="{{values[2]}}" required /></label>
      {% endfor %}

   #. **Line 7**: The ``label`` variable is assigned a key from the ``inputs``
      dictionary. The ``values`` variable is assigned the list for that key.
   #. **Line 8**: Each time the loop repeats, the ``{{label}}`` placeholder is
      filled in by a key from the dictionary. The ``type``, ``name``, and
      ``placeholder`` strings are assigned from the ``values`` list.

In order to save valid entries after the user submits the form, you need to
update both the HTML and the Python code.

Update ``register.html``
^^^^^^^^^^^^^^^^^^^^^^^^

The template only needs one modification for this part. Inside the ``input``
tag, add the ``value="{{values[3]}}"`` attribute. If the user submits a valid
entry, it will be saved in the ``values`` list. ``{{values[3]}}`` will place
that value into the input field when the page reloads.

If the user submits an invalid entry, ``values[3]`` will be assigned the empty
string. This clears the input field when the page reloads.

Update ``main.py``
^^^^^^^^^^^^^^^^^^

#. Return to ``main.py``. For each list in the ``inputs`` dictionary, add the
   empty string as the last element.

   .. sourcecode:: Python
      :lineno-start: 42

      inputs = {
         # Label: [type, name, placeholder, value]
         'Username': ['text', 'username', '3-8 characters, no spaces', ''],
         'Password': ['password', 'password', '8 or more characters, no spaces', ''],
         'Confirm Password': ['password', 'confirm', 'Retype the password', '']
      }

   The first time the page loads, all of the input fields will be empty, and
   the ``placeholder`` text will appear.
#. Examine the ``check_username()`` function. It defines two parameters,
   ``name`` and ``form_info``. ``name`` is the string the user submitted in the
   ``Username`` field. ``form_info`` refers to the ``inputs`` dictionary. The
   function returns ``True`` or ``False`` depending on whether or not ``name``
   is valid (3-8 characters long, with no spaces).
#. Add a conditional to the function. If ``True``, assign ``name`` to the 
   ``Username`` list in the dictionary.

   .. sourcecode:: Python
      :lineno-start: 16

      def check_username(name, form_info):
         if 3 <= len(name) <= 8 and ' ' not in name:
            form_info['Username'][3] = name
         
         return 3 <= len(name) <= 8 and ' ' not in name

   In line 18, ``form_info['Username'][3]`` refers to index 3 of the
   ``Username`` list. When the webpage loads, this entry will be assigned to
   the ``value`` attribute inside the ``<input>`` tag.
#. Save your work, then reload the webpage. Test the code by entering a valid
   username and invalid password. Properly done, your correct entry should
   remain in the input field after the page reloads. Test the code again by
   entering an invalid username. This time, the name field should clear when
   the page reloads.
#. Follow a similar process for the ``check_password()`` and
   ``check_confirm()`` functions.
#. Check your work! There are six possible valid/invalid combinations to test
   with the form. Note that an invalid password should clear the *bottom two*
   input fields.

Once your application passes all of the tests, save and commit your code.

Part C: Display Error Messages
------------------------------

Your next step is to display error messages on the form page. Each message will
appear below its matching input box. These alerts provide details for fixing
any mistakes.

Once again, you will need to work with the code in both the template and
``main.py``.

#. In ``register.html``, add a paragraph element below the input.

   .. sourcecode:: html
      :lineno-start: 7

      {% for (label, values) in inputs.items() %}
         <label>{{label}}: <input type="{{values[0]}}" name="{{values[1]}}" placeholder="{{values[2]}}" value="{{values[3]}}" required /></label>
         <p class="error">{{values[4]}}</p>
      {% endfor %}

   ``{{values[4]}}`` is a placeholder for the error message. If the entry is
   valid, this space will remain empty. If the entry is invalid, text will be
   inserted.
   
   Note that the ``class`` attribute applies some styling to the error text.
#. In ``main.py``, add another empty string to the end of each list in the
   ``inputs`` dictionary.

   .. sourcecode:: Python
      :lineno-start: 42

      inputs = {
         # Label: [type, name, placeholder, value, error_msg]
         'Username': ['text', 'username', '3-8 characters, no spaces', '', ''],
         'Password': ['password', 'password', '8 or more characters, no spaces', '', ''],
         'Confirm Password': ['password', 'confirm', 'Retype the password', '', '']
      }
   
   The first time the page loads, no error messages appear.
#. Return to the ``check_username()`` function. An invalid username is either
   too long, too short, or contains spaces. Modify the conditional to check for
   each of these errors:

   .. sourcecode:: Python
      :lineno-start: 16

      def check_username(name, form_info):
         if ' ' in name: 
            form_info['Username'][4] = 'Username cannot contain spaces.'
         elif len(name) < 3 or len(name) > 8:
            form_info['Username'][4] = 'Username must be 3-8 characters long.'
         else:
            form_info['Username'][3] = name
         return 3 <= len(name) <= 8 and ' ' not in name

   a. **Lines 17 & 18**: Check for spaces in ``name``. If ``True``, replace the
      last entry in the ``Username`` list with an error message.
   b. **Lines 19 & 20**: Check if ``name`` is too short or too long. If
      ``True``, replace the last entry in the ``Username`` list with a
      different error message.
   c. **Lines 21 & 22**: If both conditions are ``False``, then ``name`` is
      valid. Store its value in the ``Username`` list, just like in part B.
#. Save your work, then reload the webpage. Test by entering usernames that are
   too long, too short, or contain spaces. Make sure you see the proper error
   message each time. Also, be sure to enter a valid username (no error message
   should appear).
#. Follow a similar process for the ``check_password()`` and
   ``check_confirm()`` functions. Be sure to test your application!

Save and commit your code before moving to Part D.

Part D: Redirect on Success
---------------------------

OK, you've got the appearance, validation, and error messages in place. The
final part of this project deals with what happens *after* a successful form
submission.

Note that the ``sign_up()`` function *redirects* the user to a success page if
all of their entries are valid.

.. sourcecode:: Python

   # If all of the input fields contain valid data, send the user to the success page.
   if check_inputs(username, password, confirm, inputs):
      return redirect('/success')

As mentioned earlier :ref:`in this chapter <redirect>`, ``redirect`` sends the
program flow to a different path and function. In this case, the user sees a
cheerful success message! However, what happens if a user guesses the path for
the success page?

.. admonition:: Try It!

   Reload the form page. Instead of filling in the input fields, enter
   ``http://127.0.0.1:5000/success`` in the address bar.

   Whoa! Success without ANY valid data!

Your application lets users access any webpage on your site if they know its
URL. However, they should only be able to reach the success page if they
submit valid data from the form. You need to fix this!

#. In the ``return redirect()`` statement, add ``code = 307`` after the
   template name.
#. In the ``success()`` function, add a conditional to check for a ``GET/POST``
   request.
   
   a. If a ``GET`` request was made, ``redirect`` back to the form page.
   b. For a ``POST`` request, ``render`` the ``success.html`` template.

#. Save, then reload the form page. Test your code by entering the URL for the
   success page in the address bar. You should be redirected back to the form.
   Also, make sure you wind up at the success page when you submit valid
   entries in the form!
#. Demonstrate your finished application to your teacher. Once it checks out,
   save and commit your code.

.. admonition:: Note

   ``code = 307`` is a crude way of restricting access to the success page, but
   it gets you thinking in the right direction.
   
   Unfortunately, exploring better ways to restrict access is beyond the scope of
   this text.

Bonus Mission
-------------

.. index:: ! message flashing

In this project, you built code to display error messages inside a form. The
goal was to provide feedback to the user so they could correct their mistakes.

The Flask framework contains tools to handle user feedback. The process is
called **message flashing**, and it gives developers a way to streamline their
code.

In ``main.py``, you kept track of messages as part of the ``inputs``
dictionary. With message flashing, Flask does this work automatically. The
`Flask website <https://flask.palletsprojects.com/en/2.0.x/patterns/flashing/>`__
provides a short tutorial on how to set up and display ``flash`` messages. Take
a look at the examples, and then refactor your application to use the ``flash``
tools.

.. pull-quote::

   Good applications and user interfaces are all about feedback. If the user
   does not get enough feedback they will probably end up hating the application.
   Flask provides a really simple way to give feedback to a user with the
   flashing system.

   -- Flask documentation

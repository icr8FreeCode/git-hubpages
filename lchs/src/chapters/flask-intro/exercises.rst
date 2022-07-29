Exercises: Flask Intro
======================

In the following exercises, you will create a Flask application that does the
following:

#. Uses a form to collect a :ref:`hex code <turtle-color>` from the user.
#. Validates the submitted code.
#. Returns feedback to the user.
#. Displays the color produced by the hex code.

.. _flask-repo:

Part A: Setup
-------------

The starter code for this project is stored in a GitHub repository. You will
need to :ref:`clone the repo <clone-repo>` to your device.

#. Open your ``flask_projects`` folder in Visual Studio Code. Enter ``pwd`` in
   the terminal to verify your path.

   ::

      $ pwd
      /Users/username/Desktop/local_practice/flask_projects

#. Download the stater code into this directory. In the terminal, enter the
   command:

   ::

      $ git clone https://github.com/LaunchCodeEducation/lchs_flask_intro.git

#. Use *File --> Open* to open the ``lchs_flask_intro`` folder. You should see
   five files in the left panel.

   .. figure:: figures/exercises-start.png
      :alt: File tree showing 5 items.

Install Flask
^^^^^^^^^^^^^

Use the terminal to :ref:`create a virtual environment <venv-flask>`, activate
it, and install Flask to your project.

::

   Mac Users:
   $ python3 -m venv exercises-env
   $ . exercises-env/bin/activate
   (exercises-env) $ pip install Flask

   Windows Users:
   $ py -3 -m venv exercises-env
   $ . exercises-env/Scripts/activate
   (exercises-env) $ pip install Flask

Add Directories
^^^^^^^^^^^^^^^

Remember that Flask requires you to store your templates and supporting files
in specific places inside your project.

#. Use the buttons in VS Code to create the ``static`` and ``templates``
   directories.
#. Drag the HTML file into ``templates``. Move the image and CSS files into
   ``static``.
#. Your file tree should now look like this:

   .. figure:: figures/flask-tree-start.png
      :alt: The project file tree after adding Flask and two directories. 

#. Before moving on, make sure to save and commit your work.

Part B: Render the Form
-----------------------

#. From the terminal, use ``python hexcode.py`` to launch the application.
#. Open your browser and navigate to ``http://127.0.0.1:5000/hex_form``.
   Unfortunately, the form doesn't look very nice right now. By moving the
   ``.html`` and ``.css`` files into different directories, we broke the link
   between them.

   .. figure:: figures/plain-hex-form.png
      :alt: Hex form with no image or CSS rules applied.
      :width: 60%
   
      Your webpage rendered, but it needs some work.

#. Open the ``hex_form.html`` file in Visual Studio Code. On line 7, update the
   ``href`` attribute. Replace ``style.css`` with the :ref:`url_for <link-stylesheet-flask>`
   function.

   .. sourcecode:: html
      :lineno-start: 7

      <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='style.css')}}">

#. On line 27, do the same thing to update the ``src`` attribute inside the
   ``<img>`` tag. Be sure to change the filename to ``hex_figure.png``.
#. Save your changes. Refresh the webpage to make sure the style rules and
   image are now in place.

   .. figure:: figures/hex-form-midway.png
      :alt: Hex form with CSS rules and image applied.
      :width: 40%
   
      Your form now.

Add Placeholders
^^^^^^^^^^^^^^^^

Notice that the ``input`` elements on lines 23 and 24 use the hard-coded hex
value ``FF0000``. Every time the page loads, the text in the input box will
always show ``FF0000``, and the color box will always be red. 

.. sourcecode:: html
   :lineno-start: 23

   <label>Enter a code: #<input type="text" name="hex" value="FF0000" required/></label><br>
   <input type="color" value="#FF0000" disabled/>

Add :ref:`placeholders <template-placeholders>` to the template to make the
input boxes change when the form is submitted.

#. In lines 23 and 24, replace ``FF0000`` with the ``{{hex}}`` placeholder:

   .. sourcecode:: html
      :lineno-start: 23

      <label>Enter a code: #<input type="text" name="hex" value="{{hex}}" required/></label><br>
      <input type="color" value="#{{hex}}" disabled/>

   Be sure to keep the ``#`` symbol in line 24. 

#. In line 21, replace the ``Feedback will appear here...`` text with a
   different placeholder. Use whatever variable name you want, but remember to
   surround it with double curly braces ``{{}}``.
#. Now open ``hexcode.py``. In the ``hex_form()`` function, add ``hex`` and
   your feedback variable. Assign values to them.
   
   Also, add arguments to the ``render_template()`` function to pass the values
   to the template.

   .. sourcecode:: python
      :lineno-start: 6

      @app.route('/hex_form')
      def hex_form():
         hex = 'FF0000'
         feedback = ''

         return render_template('hex_form.html', hex=hex, feedback=feedback)

#. Save your changes and make sure the webpage still works.
#. In the Python code, change the value of ``hex`` to ``00FF00``, ``0000FF``, or
   ``987654``. Save, then refresh the page. It should respond differently to
   each of the values.
#. Test your feedback placeholder by changing its string in the Python code.
#. Once you have the template responding to the data you send to it, save and
   commit your work.

   .. figure:: figures/working-placeholders.png
      :alt: Input fields responding to Python data.
   
      The values assigned in the Python code show up on the webpage.

Part C: Collect User Input
--------------------------

Right now, nothing much happens when you click the *Check Hex Code* button. You
need to add more code so you can do something with the form data.

#. In ``hex_form.html`` add ``action`` and ``method`` attributes inside the
   ``<form>`` tag. Assign them values of ``"/hex_form"`` and ``"POST"``, 
   respectively. Refresh the webpage, then submit the form. You should see an
   error message.

   .. figure:: figures/method-not-allowed.png
      :alt: The "Method Not Allowed" error.

   Your form sends a ``POST`` request, but the Python function is expecting a
   ``GET`` request. This is why the page renders OK initially, but not after
   the button is clicked.
#. To fix this, return to the ``hexcode.py`` file. Update the ``@app.route``
   decorator to accept two types of HTTP requests. This should take care of the
   *Method Not Allowed* error.

   .. sourcecode:: Python
      :lineno-start: 8

      @app.route('/hex_form', methods=["GET", "POST"])

.. _flask-check-method:

Check the Method
^^^^^^^^^^^^^^^^

When the page first loads, the browser sends a ``GET`` request and receives the
``hex_form`` template from the Flask server. The browser sends a ``POST``
request when the form is submitted, and we want the page to change in response.

To make this happen, update your Python code.

#. Add this conditional to the ``hex_form()`` function:

   .. sourcecode:: python
      :lineno-start: 9

      def hex_form():
         if request.method == 'POST':
            # More code will go here...
         else:
            hex = 'FF0000'
            feedback = ''
         
         return render_template('hex_form.html', hex=hex, feedback=feedback)

   ``request.method`` returns the type of HTTP request received by the server.
   If ``request.method == 'POST'`` returns ``True``, then the form was
   submitted. You need to recover the data.
#. Use ``request.form`` to get the hex code and assign it to a variable.

   .. sourcecode:: python
      :lineno-start: 9

      def hex_form():
         if request.method == 'POST':
            hex = request.form['hex']
            feedback = "Successful submission!"
         else:
            hex = 'FF0000'
            feedback = ''
         
         return render_template('hex_form.html', hex=hex, feedback=feedback)

   Line 11 recovers the value from the input element with ``name="hex"``.
#. There is no form data for ``feedback``, but it does need a value. Assign it
   any message you like on line 12.
#. Save the changes, then reload the webpage. Use the form to submit several
   valid hex codes. You should see the input boxes change, and the feedback line
   should appear.
#. What happens when you submit an INVALID hex code, like ``AA9``?
#. Be sure to commit your changes before continuing.

.. admonition:: Note

   If the browser sends a ``GET`` request to the server,
   ``request.method == 'POST'`` returns ``False``. In that case, the ``else``
   clause runs. ``hex`` and ``feedback`` get assigned the default values of
   ``FF0000`` and the empty sting.

   You can make this happen by clicking in the address bar of the browser and
   tapping *Enter*. This resets the form to its original appearance.

Part D: Validate the Input
--------------------------

Your application is working now and transferring data between the Python code
and the HTML template. The next step is to add validation to check if the user
submits a valid color code. 

The rules for hex codes are simple. They start with the ``#`` symbol, followed
by 6 other characters. These characters can be any combination of digits
(``0-9``) and the letters ``A-F``.

As written, the HTML code includes the ``#`` symbol where it is needed. All you
need to focus on is validating the 6 characters. You will do this in two steps.
First, check the length of the input. Next, check the individual characters.

Check Input Length
^^^^^^^^^^^^^^^^^^

Perform the validation right after you collect the user's hex code from the
form.

.. sourcecode:: python
   :lineno-start: 10

   if request.method == 'POST':
      hex = request.form['hex']
      # Your validation code goes here.

#. ``hex`` must contain exactly 6 characters. Add a conditional to check the
   length of the string collected from the form.
#. If the string is NOT 6 characters long:

   a. Assign an error message to the feedback variable. This should explain to
      the user why their code didn't work.
   b. Re-assign a value to ``hex`` to replace the user's invalid one. This can
      be the empty string or a valid code. (Keep in mind that this value of
      ``hex`` will be sent to the template).

#. If the string is 6 characters long, assign the empty string to the feedback
   variable.
#. Save, then refresh the form in the browser. Submit at least 3 hex codes to
   check your work (one too long, one valid, one too short).

Once you have the length validation working, save and commit your progress.

Check Characters
^^^^^^^^^^^^^^^^

You will use a separate function to check the characters in the hex code.

#. Near the top of your Python program, define the ``valid_hex_chars``
   function.

   .. sourcecode:: python
      :lineno-start: 4

      app = Flask(__name__)
      app.config['DEBUG'] = True

      def valid_hex_chars(parameter_name):
         # Your code here.

#. The function should:

   a. Include a parameter that accepts the user's hex code.
   b. Use a loop to check if each character is either a digit (0-9) or a letter
      (A-F). Case does NOT matter for the letters.
   c. Return ``True`` if all 6 characters are valid.
   d. Return ``False`` if even one character is incorrect.

#. Back in the ``hex_form()`` function, modify your conditional by adding an
   ``elif`` clause:

   .. sourcecode:: python

      elif not valid_hex_chars(hex):
         # Your new code here.
      else:
         # Your old code here.

#. Note that the ``elif`` statement calls the ``valid_hex_chars()`` function.
   If the hex characters are invalid, assign a different error message to the
   feedback variable.
#. Save, then refresh the form in the browser. Submit several different hex
   codes to test this part of the validation.

   .. admonition:: Tip

      Valid hex codes: ``987654``, ``AaBbCf``, ``3CF98b``
      
      Invalid hex codes: ``1234AG``, ``k23Wb4``, ``87*654``

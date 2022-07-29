Styling Flask Templates
=======================

So far, we've used plain HTML for our sample form. However, in the
:ref:`last chapter <style-forms>`, we applied some CSS rules to spice up how
it looks.

.. figure:: figures/styled-favorite-form.png
   :alt: A styled HTML form with a heading, background color, aligned fields, and large button. 
   :width: 40%

   One option for a styled form.

For our web applications, we definitely want to link a stylesheet to our HTML
templates. To do this, we must save the ``.css`` file in a very specific place
within our project.

The ``static`` Directory
------------------------

.. index:: ! dynamic, ! static

By adding placeholders to our templates, we can change the content on a webpage
based on a user's actions. This makes the page **dynamic**. Style rules, on the
other hand, remain fixed.

CSS code is an example of a **static** file. It does not change as the user
interacts with the page. Other examples of static files include images, video
clips, and JavaScript code.

In our Flask project, the ``templates`` folder holds all of the ``.html`` files
for our website. We need to create a similar directory for our static files.

#. In Visual Studio Code, use the terminal panel (or the buttons in the File
   Explorer pane) to create a new directory called ``static``. The folder
   should be at the same level as ``hello.py`` and ``templates``.

   .. figure:: figures/static-directory.png
      :alt: A file tree showing the 'static' folder in the 'hello_flask' directory.

      The ``static`` folder in the ``hello_flask`` project tree.

#. Inside the ``static`` folder, create a new file called ``style.css``.
#. Find the CSS code you used in the :ref:`last chapter <style-forms>` to
   style your form. Copy and paste that code into ``style.css``.
#. Save and commit your work.

.. _link-stylesheet-flask:

Link to the Stylesheet
^^^^^^^^^^^^^^^^^^^^^^

When ``.html`` and ``.css`` files are in the same directory, the syntax for the
``<link>`` tag is:

.. sourcecode:: html

   <link rel="stylesheet" type="text/css" href="style.css">

Now that we've separated our HTML and CSS files, we need to update the ``href``
attribute. Instead of ``style.css``, we need to fill in a *path* that describes
where to find the stylesheet.

Fortunately, Flask provides a function that does this automatically! The syntax
for this is:

.. sourcecode:: html

   <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='style.css') }}">

Note the following:

#. The double curly braces ``{{}}`` act as a placeholder in our HTML file.
#. Instead of a variable name, we call the ``url_for()`` function. As its name
   implies, it finds the URL for the selected file. The ``'static'`` and
   ``filename`` arguments indicate the directory and file we want.
#. ``url_for()`` returns the path for the ``style.css`` file. When the browser
   renders the HTML template, that path gets assigned to ``href`` instead of
   the placeholder.

.. admonition:: Try It!

   #. Update the ``head`` element in ``favorite_form.html`` to link to your
      stylesheet.

      .. sourcecode:: html
         :lineno-start: 3

         <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Favorite Form</title>
            <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='style.css')}}">
         </head>

   #. Save the changes, then launch the application.
   #. Navigate to ``http://127.0.0.1:5000/form`` to see if your CSS styles were
      applied to the form.
   #. Tweak your HTML and CSS code as necessary to get the form to look the way
      you want.

Pro Tip
-------

When we save a change to our HTML code, clicking the *Refresh* button in the
browser displays the new layout. However, this doesn't always work for changes
made to the CSS. Browsers often save the stylesheet in memory to speed up
reloading. If the browser continues to use the old code, we won't be able to
see our new styles.

To fix this, we need to force a clean reload of the page. For most browsers
(like Firefox, Chrome, and Safari), hold down the ``Shift`` key and click
*Refresh*. For Microsoft Edge, use the ``Control`` key plus *Refresh*.

Style Another Template
----------------------

The ``form_results.html`` template also contains plain HTML.

#. Add a ``<link>`` to the same stylesheet you used for your form.
#. Navigate to the form in your browser. Fill in the fields and click *Submit*.
#. Once on the results page, check to make sure your style rules were applied.
#. If necessary, adjust your HTML and CSS code. Try to refine the appearance of
   the results page WITHOUT altering the look of the form.

Video Summary
-------------

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube.com/embed/jR0xncreOVg" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

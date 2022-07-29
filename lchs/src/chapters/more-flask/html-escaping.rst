.. _html-escaping:

HTML Escaping
=============

Collecting data from a text input allows visitors to interact with our webpage.
However, it also exposes our program to damage if we don't carefully validate
the user's submission.

The following example demonstrates one possible problem.

.. admonition:: Try It!

   The editor below builds a simple form that sends data to the Parrot Server.

   .. raw:: html

      <iframe src="https://trinket.io/embed/html/7a12452a92" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

   #. Enter your favorite color, then click *Submit*. Examine the results page,
      then click the *Run* button to return to the form.
   #. Repeat step 1, but this time put ``<h1>`` tags around your choice. For
      example, ``<h1>vermilion</h1>``. Click *Submit* and notice how the
      results page looks different.
   #. Return to the form one more time. Copy lines 10 - 16 from the HTML code and
      paste the statements into the input box. Click *Submit*.

      .. figure:: figures/html-hijack.png
         :alt: Request parrot page with an active form submitted by the user.
         :width: 50%

         Text inputs allow ANYTHING to be submitted.

By submitting HTML code in the text box, users can actually hijack the
structure of our webpage. While this might look amusing and harmless, it
exposes our program to attack. Besides HTML, users can also submit JavaScript
code.

Since the JavaScript programming language runs in a browser, the hackers can
use the text box to insert their own programs onto our page. These programs
might redirect visitors to malicious sites, give the hackers access to
sensitive data on the server, or allow them to launch attacks on other networks
from your IP address.

Fortunately, we can prevent this type of attack by adding some specific
validation to our Python code.

Escaping Text Entries
---------------------

.. index::
   single: HTML; escaping

**HTML escaping** is essential for developing safe web applications. It helps
block code submitted through a form input. HTML escaping occurs as part of
sever-side validation.

The code below is open to attack. It shows the ``results`` function, which
collects and displays a single input from the user (the function for rendering
the form is not shown).

The ``color`` variable on line 8 accepts input from the form. If the user
submits HTML tags, these will be sent to the browser when the ``return``
statement executes. This code will render in the browser, and it will produce
similar results to the live example above.

.. sourcecode:: Python
   :linenos:

   from flask import Flask, request

   app = Flask(__name__)
   app.config['DEBUG'] = True

   @app.route("/results", methods=['POST'])
   def results():
      color = request.form['color']
      return 'Favorite color: ' + color

   # Form code here...

   if __name__ == '__main__':
      app.run()

To prevent users from hijacking the page, we need to catch any HTML characters
(like the ``<`` and ``>`` symbols) and disarm them. Fortunately, Python comes
with a module that streamlines the task.

.. admonition:: Example

   The ``cgi`` module contains methods that convert code statements into simple
   string values.

   .. sourcecode:: Python
      :linenos:

      from flask import Flask, request
      import cgi

      app = Flask(__name__)
      app.config['DEBUG'] = True

      @app.route("/results", methods=['POST'])
      def results():
         color = request.form['color']
         return 'Favorite color: ' + cgi.escape(color)

      if __name__ == '__main__':
         app.run()

   #. **Line 2**: Import the ``cgi`` module.
   #. **Line 10**: ``cgi.escape(color)`` converts HTML code markers into string
      data. An entry like ``<h1>vermilion</h1>`` will now appear on the page as
      normal text surrounded by the ``h1`` tags.

      .. figure:: figures/html-escaped-text.png
         :alt: Request parrot page with escaped HTML code.

         ``cgi.escape()`` to the rescue!

Always Escape
-------------

We need to be careful with information collected from a user. Since we have no
control over what they type in, we must *always* take steps to keep our
application safe. This is especially true if we want to display some of that
data in the browser.

While we can't predict all possible user actions, we can protect our work by
checking the collected data Every. Single. Time.

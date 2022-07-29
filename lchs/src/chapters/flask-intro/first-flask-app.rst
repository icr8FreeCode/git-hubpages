.. _first-flask:

Your First Flask App
====================

A Flask application is just a Python program that uses some specific tools. To
use these resources, we must first import them. We also need to learn some new
syntax and organize our code in a very specific way.

Initial Code
------------

In the ``hello_flask`` directory, create a new Python file called ``hello.py``.
Next, paste this code into the file, then save. We'll discuss what each line
does in a moment.

.. sourcecode:: Python
   :linenos:

   from flask import Flask

   app = Flask(__name__)
   app.config['DEBUG'] = True

   @app.route('/')
   def hello():
      message = "Hello, Flask!"
      return message

   if __name__ == '__main__':
      app.run()

.. index:: ! decorator

Here is the breakdown for the code:

#. **Line 1**: This imports the ``Flask`` class from the ``flask`` module.
#. **Line 3**: A lot of work goes on behind the scenes when this statement
   runs.
   
   a. It creates an object called ``app`` from the ``Flask`` class. We will use
      the object's methods to control the flow of data between the Python code
      and our webpages.
   b. The ``__name__`` argument tells Flask where to find any other files we
      create for our program.

#. **Line 4**: Turns on a debugging mode. This allows us to update our Python
   code and see the results while the program is running.
#. **Line 6**: ``@app.route()`` is called a **decorator**. This links a
   function to a particular URL. When the user visits that URL in their
   browser, it triggers the function. We will take a closer look at this on the
   next page.
#. **Lines 7 - 9**: The ``hello()`` function returns the ``message`` string we
   want to display in the browser.
#. **Lines 11 - 12**: Checks to make sure the Python file is being run as the
   main program instead of a module. If the condition is ``True``, then
   ``app.run()`` executes and starts our Flask application.

.. admonition:: Note

   If you are using Replit create a new python repl and change lines 11 -12 to:

   .. sourcecode:: Python
      :lineno-start: 11

      if __name__ == '__main__':
         app.run(
            host = '0.0.0.0',
            port = 8080
         )


Launch the App
--------------

The code above is a very small, but still functional, web application. Our next
step is to launch it and see what it looks like in a browser.

To start a Flask application, we follow three basic steps:

#. Activate the virtual environment,
#. Launch a Python/Flask program,
#. Open a web browser and navigate to a specific IP address.

.. admonition:: Try It!

   Make sure you are in the ``hello_flask`` directory first. Then:

   #. In the terminal, activate the virtual environment with the command
      ``. hello-env/bin/activate`` on a Mac, or ``. hello-env/Scripts/activate``
      on Windows. You should see ``(hello-env)`` appear before the terminal
      prompt.
   #. From the terminal, run the ``hello.py`` program. LOTS of text will follow
      the command.

      .. sourcecode:: bash
         :linenos:

         (hello-env) $ python hello.py
         * Serving Flask app "hello" (lazy loading)
         * Environment: production
         WARNING: This is a development server. Do not use it in a production deployment.
         Use a production WSGI server instead.
         * Debug mode: on
         * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
         * Restarting with stat
         * Debugger is active!
         * Debugger PIN: 722-822-088

      *Mac users*:  Remember to use ``python3``.

   #. You only need to pay attention to two lines:
      
      a. Line 1 launches the ``hello.py`` program.
      b. Line 7 tells you that Flask started a server on your machine. It also
         shows you the IP address for that server.
      c. In this example, the address is ``http://127.0.0.1:5000``. The exact
         numbers might be different on your machine, however.

   #. Open a new tab in your web browser. Copy/paste the URL into the address
      bar.
   #. Ta da! There's our webpage.

      .. figure:: figures/hello-flask.png
         :alt: Webpage showing the text, "Hello, Flask!"

         Navigate to the IP address shown in the terminal to see the message from your Python code.

   .. admonition:: Note

      If you are using Replit.com remember to run from the shell tab.

      .. figure:: figures/repl_flask.png
         :alt: Showing what running a Flask app in Replit looks like.

         


Change the Python Code
^^^^^^^^^^^^^^^^^^^^^^

Right now, the webpage at ``http://127.0.0.1:5000`` displays the text ``Hello,
Flask!`` This matches the value assigned to the ``message`` variable in the
Python code. Let's see what happens when we change this.

#. Assign a different string to the ``message`` variable. Save, then refresh
   the page in the browser.
#. Notice that the text on the webpage changes to match. Updating the Python
   code affects what we see in the browser! This is what Flask does. It
   connects a Python program to a webpage.
#. Let's do more. On line 2 in ``hello.py``, import the ``random`` module.

   .. sourcecode:: python
      :linenos:

      from flask import Flask
      import random

#. Now update the ``hello()`` function as follows:

   .. sourcecode:: python
      :lineno-start: 7

      @app.route('/')
      def hello():
         message = "Here's a random number: {0}"
         num = random.randint(1, 25)   # Select a random integer from 1 - 25.
         return message.format(num)

#. Save, then refresh the webpage several times. With every refresh, the
   ``hello()`` function runs again, and line 10 assigns a new random number to
   ``num``. Notice that the message in the browser changes to display the new
   number.

   .. figure:: figures/random-message.gif
      :alt: Every time the webpage gets refreshed, a random number gets displayed.

Add Some HTML
-------------

Right now, the ``hello()`` function returns a string, which appears on the
webpage. However, this string value does not have to be simple text. Let's see
what happens when we include some HTML tags:

.. admonition:: Example

   Put some ``h1`` tags around the message in line 9:

   .. sourcecode:: python
      :lineno-start: 9

      message = "<h1>Here's a random number: {0}</h1>"

   When we save our code and refresh the page in the browser, we will see a
   change in the text:

   .. figure:: figures/string-with-html.png
      :alt: The message in the webpage now appears as an h1 heading.

      Nice! We now have an ``h1`` heading on the page.

When the ``hello()`` function returns a string, Flask sends that string to the
browser. Just like we saw with :ref:`the first HTML page <first-html-page>` we
built, a browser *renders* plain text as... plain text. However, by adding HTML
tags to the string, we can tell the browser how we want to structure the page.

.. admonition:: Try It!

   Let's add a form and a button to our webpage.

   #. Modify the ``hello()`` function as follows:

      .. sourcecode:: python
         :lineno-start: 8

         def hello():
            page = """
               <h1>Here's a random number: {0}</h1>
               <form>
                  <button>New Number</button>
               </form>
            """
            num = random.randint(1, 25)
            return page.format(num)
   
   #. Save the code, then refresh the page. Click the *New Number* button
      several times.
   #. Since we include no ``action`` attribute inside the ``<form>`` tag,
      clicking the button submits the form to the current URL. This causes the
      page to refresh and display a new random number.

   Note how lines 9 - 14 resemble a simple HTML document. By enclosing the HTML
   code in triple quotes (to allow for multiple lines), we can return it from
   the function as a single string value.
   
   When the browser receives the results of ``page.format(num)``, it ignores
   the quotes and renders the HTML code.

Stopping the Application
------------------------

The ``app.run()`` statement loops continuously. This lets the Flask server wait
for incoming HTTP requests. The program runs in a holding pattern until it
receives a request, then it processes the data and sends back a response.
This wait/receive/respond cycle continues until we deliberately shut it down.

To stop our Flask sever and web application, type ``Control+c`` in the
terminal. Once done, refreshing the page in the browser results in an
*Unable to connect* error. The server is off, so requests made to it receive no
response.

.. admonition:: Tip

   Now would be a good time to commit your work to the ``hello_flask``
   repository.

Video Summary
-------------

This video relates to the content on the :ref:`First Flask App <first-flask>`
and the :ref:`Routes <flask-routes>` pages.

.. raw:: html

   <section class="vid_box">
      <iframe class="vid" src="https://www.youtube.com/embed/nSqwz99kyLI" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </section>

Check Your Understanding
------------------------

.. admonition:: Question

   In the terminal, how can we tell if a virtual environment is active?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> The command <code class="pre">python --version</code> works.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> The name of the environment appears before the terminal prompt.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> A directory for the environment appears in the project's file tree.</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> Global temperatures stabilize because of our new, carefully maintained environment.</li>
      </ol>
      <p id="Q1"></p>

.. Answer = b

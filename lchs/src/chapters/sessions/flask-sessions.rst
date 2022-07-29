Flask Sessions
==============

Cookies provide a useful way to store data for longer periods of time. However,
we must never forget one critical fact:

   Cookie data is not secure.

As we saw on the previous page, the browser tools allow users to view any
cookies stored on their devices. Not only can users access the cookies, they
can also easily modify them.

For example, let's say we create a Flask application to manage an online store.
If we use a cookie to save the total cost of an order, a dishonest customer
could edit the file and change their bill from ``$125.47`` to ``$1.50``.
Similarly, if a different cookie tracks store credit, the user could easily
bump their total from ``$10.00`` to ``$10,000.00``.

For security, we should *never* use cookies to store sensitive data.

Our next step is to add some more security to the persistent data we save. This
still won't protect information like passwords, but it gets us a little closer
to where we want to go.

What are Sessions?
------------------

.. index:: ! session

.. index::
   single: Flask; session

A Flask **session** uses cookies to store data on a user's device. However,
unlike plain cookies, a session restricts who can change the file. A *session
cookie* still gets saved to a user's device, but they cannot modify it without
permission.

When we create session cookies, we must include a secret key in our code. This
adds some encryption to the data stored on the user's machine. When the browser
sends a set of cookies back to the server, Flask tries to decode each one with
the same key. If the key is missing or incorrect, the data is ignored.

Without knowing the secret key, it becomes harder (but not impossible) for
outside users to access or change the saved data.

.. _cookies-vs-sessions:

Cookies vs. Sessions
^^^^^^^^^^^^^^^^^^^^

Cookies and sessions are very similar, but not quite the same thing. Think of
sessions as cookies with extra features.

The easiest way to spot a difference is to view cookies and sessions in the
browser tools. Let's compare two cases. In the first example, we visit a
website that sets a single key/value pair.

.. figure:: figures/cookie-vs-session-1.png
   :alt: Showing a cookie and session key/value pair in the browser tools.

   The key/value pair for a normal cookie is clearly visible. The session data is not.

The website on the left side of the figure sets a regular cookie. Note that we
can clearly see both the key and its value. Modifying either of these would be
a snap. The right hand side comes from a website that uses a session. Notice
that the key is no longer listed under the ``Name`` column. Also, the ``Value``
shows a long list of random characters. The data does not appear as readable
text.

In the next example, the two websites set multiple key/value pairs.

.. figure:: figures/cookie-vs-session-2.png
   :alt: Showing cookie and session information after multiple key/value pairs are set.

   Multiple key/value pairs are stored in the same session.

Note that on the left, we can see exactly how many cookies have been set. We
can also clearly read all of the key/value pairs. On the right, the session
saves the same amount of data, but it appears as a *single* item.

Set Up Flask Sessions
---------------------

To work with sessions in our Flask programs:

#. Import the ``session`` object from the ``flask`` library.
#. Set up a secret key to encrypt the session cookies.

The general syntax for this is:

.. sourcecode:: python
   :linenos:

   from flask import Flask, request, redirect, render_template, session
   
   app = Flask(__name__)
   app.config['DEBUG'] = True
   app.secret_key = 'This_is_NOT_a_good_secret_key!'

On line 1, ``session`` replaces ``make_response``. On line 5, we assign a
string value as the ``secret_key``. The more complicated we make this string,
the harder it will be for outsiders to decrypt the data.

With these two updates to our code, we are ready to start working with session
cookies. We'll practice this on the next page. First, however, let's learn how
to set a good secret key.

.. admonition:: Warning

   Using sessions does provide more safety than plain cookies, but sessions are
   NOT secure. The data is still stored on a user's machine, which means they
   have direct access to the file.

   While it takes more steps to view the key/value pairs, accessing the data
   from a session is a fairly straightforward process.

Strong Secret Keys
------------------

Just like a password, we want our ``secret_key`` to be hard to guess. However,
even if we think of a great key, typing it directly into our code presents
problems.

Imagine we used this for a hard to guess secret key:

.. sourcecode:: python
   :lineno-start: 5

   app.secret_key = 'K>~EEAnH_x,Z{q.43;NmyQiNz1^Yr7'

This seems pretty good! However, if we share our program code with others, then
we give away the key. Anyone who opens the ``.py`` file will see the string we
used.

Also, if we push our program up to GitHub, then we save our code in the cloud.
*Anyone* who visits the URL for our repository can see the value assigned to
``secret_key``.

.. admonition:: Warning

   For the local programs you create in this course, assigning a specific
   string to ``secret_key`` will work fine.

   However, if you ever want to *deploy* one of your Flask programs to the web
   (where the world can see it), you need to take steps to protect the secret
   key.

Searching Google turns up several ways to keep ``secret_key`` hidden. However,
exploring these methods is beyond the scope of this course.

Check Your Understanding
------------------------

.. admonition:: Question

   To store a user's password, which of the following should we use?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> A cookie</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> A session</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> Something else</li>
      </ol>
      <p id="Q1"></p>

.. Answer = c

.. admonition:: Question

   By default, how long to cookies and sessions persist on a user's device?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> Until they quit the browser.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Until they refresh the page.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Until they close the tab.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Until they use the browser tools to clear the data.</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> Until midnight.</li>
      </ol>
      <p id="Q2"></p>

.. Answer = a

.. admonition:: Question

   Can programmers change how long cookie and session data persists?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, true)"> Yes</li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> No</li>
      </ol>
      <p id="Q3"></p>

.. Answer = a

What is Flask
=============

.. index:: ! webpage
   single: webpage; static
   single: webpage; dynamic

Over the past few chapters, we used HTML and CSS to design **static** web
pages. The content we put on a static page remains the same regardless of what
visitors do. The only way to change the content or appearance of the page is to
open up the code files and edit the HTML or CSS.

**Dynamic** web pages respond to user actions and update their appearance based
on those actions. For example, think of a page that shows the menu for a local
restaurant. A *static* version lets users scroll through the food choices and
read the descriptions and prices. A *dynamic* version might let users click on
items to order, choose how many servings of each, and display a running total
for the cost of the order.

Static pages provide information for users to read. Dynamic pages allow users
to interact with the content.

.. admonition:: Note

   Adding a link to an HTML page does NOT make it dynamic. The content on the
   page itself remains fixed. The link just sends out a new HTTP request to
   retrieve a different HTML page.

Web Applications
----------------

.. index:: ! web application

A **web application** is a program that users run in their browsers. These
applications can be simple or complex, but they usually combine code that runs
on the client (HTML/CSS) with code that runs at a server (Python, Java, etc.).
The *front-end* part of the application controls what users see in their
browsers. The *back-end* part controls how data gets processed and transmitted.

Examples of web applications include online shopping spaces, email programs,
video conferencing, and anything that includes a login page or a *Submit*
button. All of these applications require code that works across multiple
browsers AND controls how the server deals with HTTP requests/responses.

Fortunately, a lot of the nuts-and-bolts details behind building a web
application have been automated. In our case, modules exist for Python that
allow us to quickly set up a new web-based program.

A Web Framework
---------------

.. index:: ! Flask, ! web framework

**Flask** is an example of a **web framework**. It is a collection of
libraries, tools, and resources that take care of the low-level tasks required
to make a web application work. This lets us focus on building our project
instead of worrying about how the client and server actually talk to each
other.

Flask also lets us test our applications in a browser. It sets up a web server
on our personal device. We can then use that local server to try out our
dynamic webpages. For example, instead of sending form data to the parrot
server, we can use Flask to collect the data, perform actions with it, and then
display new information on the page.

.. admonition:: Example

   When the user submits this form, the webpage displays the original and
   modified text.

   .. figure:: figures/demo-flask-app.gif
      :alt: An interactive form that adds text to the screen when the user submits an entry.

      Flask helps us develop interactive webpages.

In this chapter, we create some simple Flask applications to get a feel for how
to use the framework.

.. admonition:: Tip

   In this course, we go over the basics of using Flask. If you are interested
   in going further, here are some useful resources to help you take the next
   steps:

   #. `Flask documentation <https://flask.palletsprojects.com/en/2.0.x/>`__
   #. `The Flask Mega-Tutorial <https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world>`__
   #. `What is Flask (from pythonbasics.org) <https://pythonbasics.org/what-is-flask-python/>`__

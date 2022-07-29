Jinja3 Templates
================

In the :ref:`last chapter <flask-templates>`, we learned how to render a
*template* in the browser. We also practiced adding :ref:`placeholders <template-placeholders>`
to the template and filling them with data sent from a Python function. At the
time, we didn't give these templates an official name.

.. index:: ! Jinja3

The Flask framework uses the Jinja3 template language. Jinja3 lets us include
both variables and a little programming logic inside of an HTML document. When
the file is rendered by a browser, these placeholders get replaced with actual
values.

Most of a Jinja3 template consists of normal HTML. Sprinkled throughout the
code, however, we will find the following:

#. **Double curly braces**: ``{{ }}`` These surround a variable or an
   expression. When we create a template, sometimes we know where we want to
   place a specific item, but we don't know its exact value. For example, if we
   want to list movies playing in our area, we can't hard-code titles. We want
   our application to automatically fill in the list when the titles change.
   ``{{ }}`` serve as placeholders for future data.
#. **Code statements**: ``{%  %}`` This syntax surrounds simple statements like
   loops or conditionals. Adding small bits of logic to our HTML helps us avoid
   some of the more tedious steps for building a webpage. We will learn more
   about this later in the chapter.

More Reasons for Using Templates
--------------------------------

As we saw last chapter, templates help organize our application. They let us
keep our HTML code (the view) separate from the nuts-and-bolts processing tasks
of our program (the logic). We can send data from our Python code to the
template, and this changes the content that appears on the page. We can also
collect information from the browser and process it by sending the data to
specific functions.

Jinja3 templates also provide strong, automatic :ref:`HTML escaping <html-escaping>`.
This saves us some work by automating part of the validation process.

Finally, if we have content that needs to appear on multiple pages on our site,
Jinja3 lets us build one template off of another. For example, maybe we have a
menu bar or logo that we want to reuse. To keep our work DRY, it makes sense to
reuse one set of code instead of putting identical statements in separate
files.

The idea is to keep common code in a single file, then link that file to
others. This lets us *extend* a standard layout across different pages. We link
a shared base structure to more specific code stored in different files.

.. _http-requests:

Requests
========

.. index::
   single: HTTP; request

All HTTP requests must follow the structure described by the
`World Wide Web Consortium (W3C) <https://www.w3.org/>`__. Let's take a look at
the most important and most commonly used parts of this structure.

In general, an HTTP request looks like this:

::

   GET /blog/ HTTP/1.1
   Host: www.launchcode.org
   User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:67.0) Gecko/20100101 Firefox/82.0.2
   Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
   Accept-Language: en-US,en;q=0.5
   Accept-Encoding: gzip, deflate, br
   DNT: 1
   Connection: keep-alive
   Upgrade-Insecure-Requests: 1
   Cache-Control: max-age=0

   Request Body

The structure has these components:

.. index::
   single: HTTP; request method
   single: HTTP; request headers

#. **Request line:** The first line is the request line. It includes the
   **request method**, the path from the URL, and the HTTP version being used.
#. **Request headers:** From line 2 until the first blank line, the *headers*
   consist of a series of key-value pairs, one per line.
#. **Blank line:** This marks the end of the request headers.
#. **Request body (Optional):** Below the blank line, the request body takes up
   the remainder of the HTTP request. 

Request Methods
---------------

In the request line, we already discussed the role the *path* plays in the URL.
However, the first part of this line is new to us.

The *request method* identifies the action that must be done with the requested
data. HTTP defines `8 methods <https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods>`__,
but we only need to pay attention to two of them: ``GET`` and ``POST``.

The ``GET`` Method
^^^^^^^^^^^^^^^^^^

.. index::
   single: HTTP; GET

The ``GET`` method tells the server that we only want to *retrieve* data. This
is the most commonly used method. It is used to request HTML pages, CSS and
JavaScript files, and images. When we click on a link in a web page, we trigger
a ``GET`` request for the linked page.

``GET`` requests usually do not have a body, since they just *ask* for
information. We don't need to provide commands to change that data in any way.

.. admonition:: Example

   ``GET`` requests are usually used for:

   #. Loading a page after typing its URL in the browser's address bar.
   #. Conducting a search via a search engine.
   #. Loading a page after clicking on a link.
   #. Refreshing a webpage.

The ``POST`` Method
^^^^^^^^^^^^^^^^^^^

.. index::
   single: HTTP; POST

Using the ``POST`` method tells the server that we want to *add or modify* the
data on the server. As we will learn in the next chapter, ``POST`` is used when
submitting a form. 

``POST`` requests usually have a body. It contains data that the server will
process and/or store in some fashion.

.. admonition:: Example

   ``POST`` requests are used for:

   #. Logging into a web site.
   #. Sending an email using an online service.
   #. Making an online purchase.
   #. Providing information through an electronic form.

Headers
-------

There are `lots of request headers <https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields>`__,
but only a few will be useful to us.

.. list-table:: Common HTTP Request Headers
   :header-rows: 1

   * - Header
     - Purpose
     - Example
   * - ``Host``
     - The domain name or IP address for the server receiving the request.
     - ``www.launchcode.org``
   * - ``User-Agent``
     - Information about the client (usually a browser) making the request. The
       example is for a version of Firefox on a Mac.
     - ``Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:67.0) Gecko/20100101 Firefox/82.0.2``
   * - ``Accept``
     - The types of data that the client requires in the response.
     - ``text/html, image/jpeg``
   * - ``Content-Type``
     - The type of data included in the request body. Usually only used for
       ``POST`` requests.
     - ``application/json, application/xml``

Body
----

The optional request body can contain any kind of data. For example, when
signing into a web site, the body will contain a username and password.

As mentioned above, ``GET`` requests generally do *not* have a body.

Check Your Understanding
------------------------
   
.. admonition:: Question

   Which type of method (``GET`` or ``POST``) should be used for each of the
   following actions. Click on each option to reveal the correct answer.

   .. raw:: html

      <ol type="a">
         <li onclick="revealAnswer('resultA', 'POST')">Making a purchase from Amazon. <span id="resultA"></span></li>
         <li onclick="revealAnswer('resultB', 'POST')">Logging into a gmail account. <span id="resultB"></span></li>
         <li onclick="revealAnswer('resultC', 'GET')">Looking up (then reading) an NPR article. <span id="resultC"></span></li>
         <li onclick="revealAnswer('resultD', 'GET')">Streaming a movie trailer on YouTube. <span id="resultD"></span></li>
         <li onclick="revealAnswer('resultE', 'GET')">Clicking a link in a Wikipedia page. <span id="resultE"></span></li>
         <li onclick="revealAnswer('resultF', 'POST')">Submitting an online assignment to your teacher. <span id="resultF"></span></li>
      </ol>

.. Answers = POST, POST, GET, GET, GET, POST.

.. _web-addresses:

Web Addresses
=============

.. index:: ! URL, ! web address

When a client makes a request to a server, it does so using a
**uniform resource locator (URL)**. URLs are also called **web addresses**.

.. admonition:: Examples

   As regular users of the web, we are already familiar with URLs like these:

   - ``https://education.launchcode.org/lchs/``
   - ``https://en.wikipedia.org/wiki/Client–server_model``
   - ``https://repl.it``

A URL contains a lot of information about the request, including *what* is
being requested and *where* it should be sent. URLs contain several parts, and
the general structure looks like:

::

   scheme://host:port/path?query_string

The five parts of this URL are:

#. Scheme
#. Host
#. Port (optional)
#. Path (optional)
#. Query String (optional)

Only the ``scheme`` and ``host`` are required, and the parts must be in the
*exact* order shown. Let's look at each of these in detail.

Scheme
------

.. index::
   single: url; scheme

The first portion of every URL specifies the **scheme**. Common schemes include
``http``, ``https``, and ``file``. The scheme usually identifies the *protocol*
for the request. For us, this will always be ``http`` or ``https``. If left
off, a web browser will insert the scheme http/s for you. 

The scheme is *always* followed by ``://``.

Host
----

.. index::
   single: url; domain

The **host** portion of a URL specifies where the request should be sent. The
host can be either an IP address, like ``104.25.128.113``, or a domain name,
like ``www.launchcode.org``.

Port
----

.. index::
   single: url; port

Following the host is an optional **port** number. The port determines which
application on the server needs to handle the request.

When the port number is missing, a default value is used. For ``http://``, the
default port is ``80``. When using ``https://``, the default port is ``443``.

Ports ``80`` and ``443`` prompt the server to run programs that handle web
requests. For example, assume a server receives a request to port ``443``.
When this happens, a special security program runs to encrypt/decrypt the data.
If the request comes in at port ``80``, then a different program runs and
handles the data without the extra security features.

Path
----

.. index::
   single: url; path

The **path** of a URL consists of a series of names separated by ``/``. It
looks similar to the result returned when we enter the ``pwd`` command in the
terminal.

The path tells the server *what* is being requested. It includes a series of
names that end with a specific directory or file. For example,
``/blog/entries/2018/`` requests the contents of the ``2018`` directory, while
``/blog/index.html`` requests only the ``index.html`` file from the ``blog``
folder.

If the path is missing in the URL, then the **root path** ``/`` is used. The
root path usually sends us to the home page for a given site.

.. _query-string:

Query String
------------

.. index::
   single: url; query string

After the path comes the **query string**, which begins with ``?``. The *query*
itself contains a set of key-value pairs. Each pair is joined by ``=`` and is
separated from the other pairs by ``&``.

While the path specifies *what* the request is asking for, the query string
provides additional information needed to fulfill the request. For example, a
query string from a search using DuckDuckGo might look like this:

::

   ?q=recent+nasa+images&ia=images

This query has *two* key-value pairs:

- ``q`` : ``recent+nasa+images``
- ``ia`` : ``images``

A search for "NASA" returns its `home page and lots of other information <https://duckduckgo.com/?q=nasa&t=h_&ia=web>`__.
Adding the query string helps narrow down the results. In this case, we want to
focus on recent images shared by NASA.

.. admonition:: Try It!

   #. Follow the link https://google.com/?q=python and compare the query string
      ``q=python`` compares to the text that appears in the search box.
   #. In the address bar, change ``q=python`` to ``q=python+turtles`` and tap
      *Enter*. How does the page change?
   #. Does including the query string in the address bar actually run the
      Google search?

Video Summary
-------------

If you'd like to reinforce your reading with a video explanation for URLs,
here's a helpful, five minute clip:

- `How Do URLs Work? <https://www.youtube.com/watch?v=OvF_pnJ6zrY>`__

Check Your Understanding
------------------------

.. admonition:: Question

   For the URL ``https://launchcode.org/lchs``, identify the ``host``.

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> lchs</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> https</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> launchcode</li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> launchcode.org</li>
      </ol>
      <p id="Q1"></p>

.. Answer = d

.. admonition:: Question

   For the URL ``https://education.launchcode.org/lchs/index.html``, identify
   the ``path``.

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> /index.html</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> /lchs/index.html</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> /education.launchcode.org/lchs/index.html</li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> /education.launchcode.org</li>
      </ol>
      <p id="Q2"></p>

.. Answer = b

.. admonition:: Question

   For the query string ``?q=nasa+images&t=h_&iax=videos&ia=videos``, which of
   the following is NOT a key/value pair?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">q : nasa+images</code></li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, true)"> <code class="pre">t : h_iax</code></li>
         <li><input type="radio" name="Q3" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">ia : videos</code></li>
      </ol>
      <p id="Q3"></p>

.. Answer = b

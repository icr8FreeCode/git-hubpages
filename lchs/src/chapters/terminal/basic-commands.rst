.. _basic-terminal-commands:

How to Do Stuff in the Terminal
===============================

There are many commands we can use in the terminal to move through the
filesystem of our computers. The list below shows some of the common actions
programmers take.

Clicking on a link in the table will lead to a :ref:`tutorial <terminal-commands-tutorial>`
on how to use that command.

.. list-table:: Basic Terminal Commands
   :header-rows: 1

   + - Command
     - Result
   + - ``ls``
     - :ref:`Lists <terminal_ls>` all files and folders in the current
       directory.
   + - ``cd directory_path``
     - :ref:`Change directory <terminal_cd>`. Navigates from the current
       directory to the new ``directory_path``.
   + - ``pwd``
     - :ref:`Print working directory <terminal_pwd>`. Prints the path of the
       current directory.
   + - ``mkdir folder_name``
     - :ref:`Make directory <terminal_mkdir>`. Creates ``folder_name`` inside
       the current directory.
   + - ``touch new_filename``
     - :ref:`Creates a file <terminal_touch>` called ``new_filename`` in the
       current directory.
   + - ``rm file_name``
     - :ref:`Removes <terminal_rm>` ``file_name`` from the current directory.
   + - ``man command``
     - :ref:`Manual <terminal_man>`. Prints to the screen the manual pages for
       the ``command``. This includes the proper syntax and a description of
       how that command works.
   + - ``clear``
     - :ref:`Empties <terminal_clear>` the terminal window of old commands and
       output.
   + - ``cp source_path target_path``
     - :ref:`Copies <terminal_cp>` the file or directory at ``source_path`` and
       puts it in the ``target_path``.
   + - ``mv source_path target_path``
     - :ref:`Moves <terminal_mv>` the file or directory at ``source_path`` from
       its current location to ``target_path``.

.. admonition:: Note

   #. ``rm`` permanently deletes items from the computer. This action cannot be
      undone.
   #. Git Bash does not support ``man``. Instead, ``command --help`` provides
      a similar result.

Beyond these basic commands, there are some shortcuts we can use in place of
typing out a full path or directory name.

.. list-table:: Directory Shortcuts
   :header-rows: 1
   :widths: auto

   + - Shortcut
     - Where it goes
   + - ``~``
     - The Home directory
   + - ``.``
     - The current directory
   + - ``..``
     - The parent directory of the current directory

.. admonition:: Tip

   If we type the first few letters of a directory name and tap the *Tab* key,
   the terminal will often automatically complete the name for us!

   ::

      $ ls
      homework       really_long_directory_name
      README.md      docs
      $ cd re  <-- Tap the Tab key
      $ cd really_long_directory_name  <-- Presto!

Check Your Understanding
------------------------

.. admonition:: Question

   Which terminal command deletes a file completely from the computer?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <span style="color:#419f6a; font-weight: bold">cp</span></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> <span style="color:#419f6a; font-weight: bold">rm</span></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <span style="color:#419f6a; font-weight: bold">mv</span></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <span style="color:#419f6a; font-weight: bold">del</span></li>
      </ol>
      <p id="Q1"></p>

.. Answer = b

.. admonition:: Question

   Which shortcut takes you to the parent directory?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, true)"> <span style="color:#419f6a; font-weight: bold">..</span></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> <span style="color:#419f6a; font-weight: bold">~</span></li>
         <li><input type="radio" name="Q2" autocomplete="off" onclick="evaluateMC(name, false)"> <span style="color:#419f6a; font-weight: bold">.</span></li>
      </ol>
      <p id="Q2"></p>

.. Answer = a



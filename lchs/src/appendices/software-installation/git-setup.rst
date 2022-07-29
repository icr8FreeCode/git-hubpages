.. _git-install:

Installing Git
==============

One of the most important habits for a programmer deals with proper version
control. The :ref:`Git Some Control <git-chapter>` chapter deals with this
critical process.

.. admonition:: Note

   Before starting the Git installation, make sure you finished setting up
   :ref:`terminal <terminal-setup>`, :ref:`VS Code <vsc-install>`, and
   :ref:`Python <python-install>` on your machine.

Follow the instructions below to install the latest version of Python:

#. :ref:`Windows <git-win-install>`
#. :ref:`Mac <git-mac-install>`
#. :ref:`Chromebook <git-chrome-install>`

.. _git-win-install:

Windows Users
-------------

Since you already installed Git Bash when you set up your terminal, you are
good to go!

.. _git-mac-install:

Mac Users
---------

#. Launch the *Terminal* application, or open a new terminal panel in VS Code.
#. Type the command ``git --version`` in the terminal.
#. If the output includes a version number, like the sample below, then you are
   ready to go! The actual version isn't that important, as long as you see
   ``2.x`` or higher.

   ::

      $ git --version
      git version 2.20.1

#. If the output does not include a version number, then a popup will open and
   ask to install some tools on your computer. Accept the invitation!
#. After the installation is done, double check that it worked by typing
   ``git --version`` again.

.. _git-chrome-install:

Chromebook Users
----------------

#. Launch the *Terminal* application, or open a new terminal panel in VS Code.
#. Type the command ``git --version`` in the terminal.
#. If the output includes a version number, like the sample below, then you are
   ready to go! The actual version isn't that important, as long as you see
   ``2.x`` or higher.

   ::

      $ git --version
      git version 2.20.1

#. If the output does not include a version number, then you will need to
   install the software from the terminal. Enter the command
   ``sudo apt-get install git``. You will see lots of text appear as the
   installation runs. If you are prompted to give permission, enter ``y``.
#. After the installation is done, double check that it worked by typing
   ``git --version`` again.

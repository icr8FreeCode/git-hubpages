Remote Repositories
===================

In this chapter, we learned how to use the Git version control system to keep
snapshots of our projects. This version history (the repository) is stored on
our personal machine.

One advantage of keeping this *local* repo is that we can work on our project
anytime we want. We don't need access to the internet. One issue with a local
repo, however, is that keeping a copy on our personal device does not always
fit how we code. For example:

#. Students often use different devices in class and at home.
#. In a school, the same computer gets used by multiple students.
#. Coding projects are often done in teams. Each partner needs their own,
   current copy of the repository.

Also, accidents happen. If our device takes an unexpected trip to the floor, or
falls in the toilet, or gets juice spilled on it, or gets stolen, or the hard
drive crashes, then our project is gone.

Fortunately, the whole point of a VCS is to keep a backup of our work. This
includes support for shared machines and recovering from accidents!

Local, Remote, GitHub, Oh My!
-----------------------------

.. index:: 
   single: repository; remote

How can we work on our saved code when we need to use a different device? This
is where **remote repositories** come in. Unlike a *local* repo (stored on our
machine), a remote repository is stored online.

If you've ever used the Dropbox service, or created a Google doc (or
spreadsheet, presentation, etc.), then you have used a remote repository. For
example, you can login to your Google account from a computer at school and
start working on a slide presentation. Google stores your work and lets you
access it from any other computer that can connect to the web. You just login
to Google again and continue working on the same file right where you left off.
You can also share your work with one or more partners. Changes made by one
person update the slides for everyone else. That way, the entire team sees the
most current version.

Instead of keeping a Git repository only on our local machine, we can use an
online service to store the repo instead. Then we pull down copies of that repo
to work on the code from different devices.

.. index:: ! GitHub

To get started with remote repositories, create an account on
`GitHub <https://www.github.com/>`__. This is a very popular service that
manages repositories and much, much more. Not only can we store our own work
on the site, users allow each other to view, clone, and contribute to their
code!

.. admonition:: Warning

   Check with your teacher before signing up for a GitHub account. Depending on
   your school's technology policy, there might be some restrictions.
 
Team Projects
-------------

Let's say we join a team that already has a project going. To start helping, we
need to get a copy of the repository. Fortunately, the team uses GitHub!

Even without an account, we can *clone* our team's work and save it on our own
machine. Once we have an account (and permission from our team), we can push
the commits we make from our machine up to GitHub. Neat!

.. _clone-remote-repo:

To clone a remote repository, the terminal command is:

.. sourcecode:: bash

   git clone repo-url

The ``repo-url`` part of the command is where we fill in the web address of the
repository we want to clone. 

.. admonition:: Try It!

   Since you already initialized the ``git_practice`` directory as a Git
   repository, it's important to move out of that folder before cloning a new
   repo!

   #. In VS Code, use the terminal to return to the ``local_practice``
      directory. Confirm your location with the ``pwd`` command.

      ::

         $ pwd
         /Users/username/Desktop/local_practice

   #. Now clone an existing project from GitHub. Copy and paste this command
      into the terminal:

      ::

         $ git clone https://github.com/LaunchCodeEducation/LCHS-git-clone-example.git

   #. Use the file tree or the ``ls`` command so see that a new folder has been
      saved in the ``local_practice`` directory. Navigate into that folder and
      look around.

      ::

         $ cd LCHS-git-clone-example
         $ ls
         main.py
         $ python main.py

      *Mac users*: Remember to use ``python3`` instead of ``python`` in the
      terminal.
   
   You can view the code you cloned by opening ``main.py`` in VS Code. Any
   branches, changes, and commits you make will be saved to your local version
   of the repository. The remote version remains unchanged by the actions you
   take on your device.

Saving to a Remote Repository
-----------------------------

Once we clone a repository to our machine, any changes we make to the project
stay on our personal device. To update the remote repo, we need to *push* our
changes up to GitHub.

In this chapter's :ref:`Project <git-project>`, we will go through a detailed
process to practice pushing and pulling changes from a GitHub repository. Your
teacher may also have you work through :ref:`Assignment 5 <communication-log>`,
which adds some partners to your GitHub experience.

For now, we will just look at a summary of the Git commands needed to update a
remote repository. The process only adds one new step:

#. ``git status``
#. ``git add .``
#. ``git commit -m "Message..."``
#. ``git push origin branch-name``

Step 4 uses the new command ``git push`` to move our local commits up to
GitHub. The command changes the online repository. ``origin`` makes sure that
any new files and code do indeed go to the remote (the *origin* of the
project). ``branch-name`` identifies the branch that the new commits go to.

Check Your Understanding
------------------------

.. admonition:: Question

   What is the command for sending a commit to a remote repository?

   .. raw:: html

      <ol type="a">
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, true)"> <code class="pre">git push</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git pull</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git clone</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git commit</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git add</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git status</code></li>
         <li><input type="radio" name="Q1" autocomplete="off" onclick="evaluateMC(name, false)"> <code class="pre">git outta here</code></li>
      </ol>
      <p id="Q1"></p>

.. Answer = a.



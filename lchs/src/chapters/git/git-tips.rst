Git Tips
========

Now that we know about branches, we should definitely use them often. Keeping
the core, working code in ``main`` and growing that code in branches is a very
strong technique.

This page explores some details that often come up as we work with branches.

.. _git-stash:

Git Stash
---------

It happens to the best of us. We get a great idea for our project, and we dive
into creating the new code. Things are going well, until we realize that we put
our brilliant idea in the wrong branch of the repo! Lines and lines of new
code, all in the wrong place.

Of *course* Git offers us a way to remove the new work from the current branch
and move it into another. The command for this is called ``git stash``.

.. admonition:: Warning

   ``git stash`` will only save our butts if we have NOT committed the new
   changes to the repo yet. This is why we should always use ``git status`` to
   check things out before using the ``add`` and ``commit`` commands.

Try It!
^^^^^^^

Imagine that you want to add a few more lines to the text file in the
``make-conflict`` branch.

#. Return to the ``main`` branch in the ``git_practice`` repo.
#. Add new lines to ``conflict_demo.txt`` and save the file.
#. Type ``git status`` in the terminal. The first line of the output tells us
   that we're in the wrong branch. We want to be in ``make-conflict``, not
   ``main``!

   ::

      $ git status
      On branch main
      Changes not staged for commit:
         (use "git add <file>..." to update what will be committed)
         (use "git checkout -- <file>..." to discard changes in working directory)

         modified:   conflict_demo.txt

#. Enter ``git stash`` in the terminal and notice how the changes made in
   the text file disappear. Those changes are stored by Git, but they are no
   longer in ``main``. Entering ``git status`` again shows a clean branch.
#. Use ``git checkout`` to move into the ``make-conflict`` branch. Follow this
   with the ``git stash pop`` command.

   ::

      $ git checkout make-conflict
      Switched to branch 'make-conflict'
      $ git stash pop
      On branch make-conflict
      Changes not staged for commit:
         (use "git add <file>..." to update what will be committed)
         (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   conflict_demo.txt

      no changes added to commit (use "git add" and/or "git commit -a")
      Dropped refs/stash@{0} (dedea22f5c66ef992103fcc82d7eaed82d4463f5)

#. Aha! The changes we made in ``main`` appear in the ``make-conflict``
   branch. We can use ``status/add/commit`` to add them to the repository.

``stash`` is similar to the ``append`` list method in Python. We don't need to
know the complete details for how it works, but we can imagine that ``stash``
takes a snapshot of the branch. It then returns the branch to the state of the
last commit.

``stash pop`` takes the snapshot and applies it to the current branch.

Deleting a Branch
-----------------

Imagine that we finish our work in a branch and successfully merge it into
``main``. Now that the code exists in ``main``, we might not need the old
branch anymore. To delete a branch, the terminal syntax is:

.. sourcecode:: bash

   git branch -d branch-name

If the branch contains changes that haven't been merged yet, Git gives us an
error message and keeps the branch intact. Git will also provide a helpful clue
about how to remove the branch anyway, if we really want to go through with
that action.

.. admonition:: Warning

   Deleting a local branch cannot be undone!

.. admonition:: Example

   Let's delete ``hello-branch`` from the ``git_practice`` repository:

   ::

      $ git branch
        hello-branch
      * make-conflict
        main
      $ git branch -d hello-branch
      Deleted branch hello-branch (was d99e424).
      $ git branch
      * make-conflict
        main

Git More Information
--------------------

If you would like to explore additional discussions, tutorials, and videos
about Git, here are some resources you can explore on your own:

#. `What is Version Control <https://www.git-tower.com/learn/git/ebook/en/command-line/basics/what-is-version-control/#start>`__
#. `Git branches <https://www.git-tower.com/learn/git/ebook/en/command-line/branching-merging/branching-can-change-your-life/#start>`__
#. `Git video tutorial <https://www.git-tower.com/learn/git/videos/#episodes>`__
   (24 topics to choose from)
#. `Official Git documentation <https://git-scm.com/doc>`__

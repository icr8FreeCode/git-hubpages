.. _git-project:

Project: Git a Remote Repository
================================

In this activity, you are going to create a remote repository and practice
pushing changes to it from your local machine.

Step 1: Create a New Local Repository
-------------------------------------

#. Launch Visual Studio Code and open the terminal panel.
#. Navigate into the ``local_practice`` directory and create a new folder. You
   can name it whatever you want, but you will be reusing code from your
   :ref:`Turtle Races <turtle-races>` project.
#. Use the *File* menu to open the new folder in VS Code. In the terminal, use
   ``pwd`` to confirm that you are in the correct directory.
#. Use ``git init`` to initialize your project as a Git repository.
#. Move your ``turtle_race.py`` file into the directory. You an do this with
   :ref:`terminal commands <terminal_mv>`, or you can drag-and-drop the
   existing file into the folder.
#. Run ``turtle_race.py`` to confirm that it still works. If not, debug your
   program to get it running again.
#. Save and commit the changes.
#. Check the name of your default branch with the ``git branch`` command. If
   necessary, use ``git branch -m`` to change the name of the branch to
   ``main``.

.. admonition:: Note

   If you did not complete the Turtle Races project, no worries. Just add a
   new Python file to the repository. Code a simple ``print`` statement
   inside a loop and run with that.

Step 2: Create a Remote Repository
----------------------------------

#. Login to your `GitHub <https://github.com/>`__ account in a web browser.
   Click on the "+" button to add a new repository.

   .. figure:: figures/project/new-repo-button.png
      :alt: The New Repository link in the dropdown menu at top right on GitHub.

      The *New Repository* link is in the dropdown menu at top right on GitHub.

#. To create a new repository:

   a. Fill in the name and description. 
   b. Uncheck *Initialize this repository with a README* and click
      *Create Repository*.

   .. figure:: figures/project/create-repo.png
      :alt: Creating a new repository in GitHub by filling out the form.
      :width: 80%

      Create a new repository in GitHub

#. On the next screen, click on the *HTTPS* button at the top of the page.
   Next, click the *Copy* button in the *push an existing repository* section.

   .. figure:: figures/project/new-repo-push.png
      :alt: The page you see after creating an empty repository, with several options.
      :width: 80%

      Connecting to a repository in GitHub

#. Go back to your terminal and paste the commands copied from GitHub. These
   should be very similar to:

   ::

      $ git remote add origin https://github.com/username/turtle-races.git
      $ git branch -M main
      $ git push -u origin main

   The final command produces quite a bit of output. The final line,
   ``Branch 'main' set up to track remote branch 'main' from 'origin'`` lets
   you know that the process worked.

   .. admonition:: Note

      You may be asked to enter your GitHub username and personal access token
      after ``git push`` and ``git pull`` commands. Do so whenever necessary.

#. GitHub should now have the same files and code as your local project. Click
   on the project name link at the top of the page. This takes you to a
   dashboard that shows you what's stored in the repo. You can see your code by
   clicking on different file names.

   .. figure:: figures/project/repo-first-commit.png
      :alt: A repository with one commit in GitHub.
      :width: 80%

      A GitHub repository with one commit.

#. Your local and remote repositories are now linked. In the terminal, use the
   ``git remote -v`` command to check for the URL of the remote repo.

   ::

      $ git remote -v
      origin  https://github.com/username/turtle-races.git (fetch)
      origin  https://github.com/username/turtle-races.git (push)

Step 3: Push to the Remote Repository
-------------------------------------

Right now, your local and remote repositories match. As you continue working on
your device, the two repos become different. From time to time, you need to
*push* your local commits up to GitHub to keep the local and remote versions
the same.

#. In VS Code, add a new text file called ``README.txt``. Inside the file,
   add a short description of your Turtle Races project.
#. Save and commit your changes to the local repo.
#. To update the version stored on GitHub, enter the command
   ``git push origin main`` in the terminal. The output includes information
   about what's happening on GitHub. The final lines indicate if the push was
   successful, and they will look something like: 

   ::

      To https://github.com/username/turtle-races.git
         51dbfe6..2e6f4fa  main -> main

#. After making the push, you should see ``README.txt`` added to the GitHub
   repository. The contents of that file also appear below the list of file
   names.

   .. figure:: figures/project/repo-readme-push.png
      :alt: The turtle-races GitHub repo with README.txt added.
      :width: 80%

      ``git push`` added our local commits to the remote repository.

Push a New Branch
^^^^^^^^^^^^^^^^^

Whenever you push changes up to GitHub, the action only affects the current
branch. In the steps above, you updated ``main``.

#. Back in VS Code, use ``git checkout -b`` in the terminal to create a new
   branch called ``readme``.
#. In the new branch, make some changes to the ``README.txt`` file. Save and
   commit those changes.
#. Your local repository contains two branches now, but GitHub only knows about
   one. To add the new branch to the remote, just use its name instead of
   ``main`` in the ``git push`` command:

   ::

      $ git push origin readme
      
      To https://github.com/username/turtle-races.git
         * [new branch]      readme -> readme

#. After this push, your GitHub project shows a list of branches in a dropdown
   menu.

   .. figure:: figures/project/branch-dropdown.png
      :alt: The dropdown menu lists the branches in the repository.

      Select different branches from the dropdown menu.

#. Click on ``README.txt`` to see its contents. Use the dropdown menu to switch
   between the ``main`` and ``readme`` branches. Notice how the text changes
   inside the file.

.. admonition:: Note

   In :ref:`Assignment #5 <communication-log>`, you will learn how to perform a
   merge in GitHub. For now, we will leave the branches separate.

Step 4: Pull Down Changes From the Remote
-----------------------------------------

If you are working with a team on a project, it is very likely that one of your
partners will push up changes to GitHub. When this happens, you need to *pull*
those changes down to your own device.

To practice this, make a change in GitHub and then move those changes to your
local repo.

#. In your GitHub project page, select the ``readme`` branch from the dropdown
   menu.
#. Click on the ``README.txt`` file name, then select pencil icon to edit the
   file.

   .. figure:: figures/project/pencil-edit-button.png
      :alt: The pencil icon opens the GitHub file editor.

#. Add some more text to the file, or change the words already there. When
   done, click the *Commit changes* button at the bottom of the page.

   .. figure:: figures/project/GitHub-commit.png
      :alt: The GitHub 'Commit changes' button.
      :width: 40%

#. Return to VS Code, and make sure you are in the ``readme`` branch.

   ::

      $ git branch
      * main
        readme
      $ git checkout readme

#. Enter the command ``git pull``. Just like ``git push``, the output tells you
   what's happening to your local files. The final lines indicate if the pull
   was successful, and they will look something like:

   ::

      $ git pull
      Lots of output...

      Updating b407366..03f9f4c
      README.txt | 5 ++++-
      1 file changed, 4 insertions(+), 1 deletion(-)

   The ``+`` and ``-`` symbols indicate additions or deletions from the listed
   files.

After the pull, you will see the updated text appear in VS Code.

Success
-------

Nice work! You now have experience with:

#. Creating a new local repository.
#. Creating a remote repository on GitHub.
#. Linking your local and remote repos.
#. Pushing and pulling changes between your local and remote versions.

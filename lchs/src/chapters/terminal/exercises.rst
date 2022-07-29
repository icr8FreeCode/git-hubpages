Exercises: Terminal
===================

Launch the terminal application and perform the following tasks:

#. Using your terminal, navigate to your ``Home`` directory using ``cd ~``.
#. Use ``ls`` to view the contents of your Home directory.
#. Use ``cd`` to move into your ``Desktop`` directory.
#. In the terminal, use ``mkdir`` to create a folder on the ``Desktop`` called
   ``my_first_directory``. Look on your Desktop. Do you see it?
#. Use ``cd my_first_directory`` to move inside that directory.
#. ``pwd`` to check your location.
#. Create a file called ``my_first_file.txt`` with ``touch my_first_file.txt``.
#. Use ``ls`` to prove that ``my_first_file.txt`` appears in
   ``my_first_directory``. (*Bonus*: Open the file in a text editor and write
   yourself a message!)
#. Make a copy of ``my_first_file.txt`` onto the Desktop with
   ``cp my_first_file.txt ../my_first_copy.txt``.

   .. admonition:: Tip

      Notice the different file name in the command! This keeps us from making
      two files that have the same name.

#. Move up to your Desktop directory with ``cd ..``.
#. Use ``ls`` to verify that ``my_first_copy.txt`` appears on your Desktop.
   (*Bonus*: Open it up. Is it the same as your first file?)
#. Move your copied file into ``my_first_directory`` with
   ``mv my_first_copy.txt my_first_directory/``.
#. Use ``ls`` to see that the copied file is no longer on your Desktop.
#. Type ``cd my_first_directory``, followed by ``ls`` to confirm that
   ``my_first_copy.txt`` has been moved into that folder.
#. Type ``rm my_first_copy.txt`` followed by ``ls``. Congratulations, you just
   deleted the file!
#. ``cd ..`` to get back to your Desktop.
#. Type ``rm -r my_first_directory/``. Use ``ls`` and a visual check to verify
   that you removed the directory.

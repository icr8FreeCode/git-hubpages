Exercises: Local Development
============================

Take a moment to think about how many logins you use each day. Do you have
different passwords for each one? How many characters do they contain? Do you
mix letters, digits, and special characters? Do you use the same password
multiple times, even though that's a bad idea?

There are lots of **password manager** applications on the market these days.
One feature of these apps lets users quickly create new, strong passwords.

The logic behind a password generator is fairly straightforward. In these
exercises, you will use your Python skills to make one!

Setup
-----

#. Open Visual Studio Code and create a new directory. Also, create an empty
   ``.py`` file for your program. Be sure to follow the proper Python naming
   conventions.
#. In your new file, start by adding ``import`` statements for the :ref:`random <random-module>`
   and :ref:`string <string-module>` modules.
#. This program might be used as a module later, so you need to set up your
   ``main()`` function as described in the :ref:`More About main() <more-about-main>`
   section.

   .. sourcecode:: Python

      def main():
         print('Welcome to the password generator!')
         # Your code here...

      if __name__ == "__main__":
         main()

Part A: Choose a Length
-----------------------

Write a function called ``pw_length`` that does the following:

#. Prompts the user to choose a length for their new password. Acceptable
   values range from 8 - 30 characters.
#. Uses a ``while`` loop to validate the user's entry. If an entry is invalid,
   the loop should print an error message and reprompt the user for the length.
#. Returns an integer for the password length.

.. admonition:: Note

   Be sure to test your function! In ``main()`` call ``pw_length`` and print
   the value returned by the function.
   
   Try entering invalid options like ``abc``, ``33``, ``-2``, and ``3.14159``.
   Also, check to make sure the edge values ``8`` and ``30`` both work.

**Sample Output**

::

   Welcome to the password generator!
   Choose a password length (8 - 30 characters): 2
   Please enter a whole number from 8 - 30.
   Choose a password length (8 - 30 characters): Hello
   Please enter a whole number from 8 - 30.
   Choose a password length (8 - 30 characters): 10
   Returned value = 10

Part B: Include Special Characters?
-----------------------------------

Write a boolean function called ``includes_special()`` that does the following:

#. Asks if the user wants to include special characters in the new password.
   Special characters include symbols like ``&``, ``}``, ``*``, etc.
#. Uses a ``while`` loop to accept only ``yes/no`` or ``Y/N`` answers. These
   options should be case-insensitive.
#. Returns the boolean ``True`` or ``False`` based on the user's choice.

In ``main()`` call and test ``includes_special()``.

**Sample Output**

::

   Welcome to the password generator!
   Include special characters (Y/N)? no
   Please enter 'Y' or 'N'.
   Include special characters (Y/N)? 0
   Please enter 'Y' or 'N'.
   Include special characters (Y/N)? y
   Returned value = True

Part C: Generate New Password
-----------------------------

Write a function called ``make_password()`` that does the following:

#. Calls the ``pw_length`` and ``includes_special`` functions.
#. Defines a ``characters`` variable that:

   a. Combines ``string.ascii_letters`` and ``string.digits`` (to get all upper
      and lowercase letters, plus the digits ``0-9``).
   b. Includes ``string.punctuation`` if the user wants special characters.

#. Builds a new password by randomly choosing from the ``characters`` string.
#. Returns the new password.

In ``main()`` remove (or comment out) any function calls and ``print``
statements you used to test Parts A and B.

Call ``make_password()`` and assign the returned value to a variable. Print out
the password to check your work. Repeat your test several times, both with and
without special characters.

**Sample Output**

::

   Welcome to the password generator!
   Choose a password length (8 - 30 characters): 15
   Include special characters (Y/N)? y
   Your new password is: Sd"A%OO0nSzU?52

Part D: Add a ``Login`` Class
-----------------------------

Below the ``import`` statements, define a ``Login`` class.

#. Use the ``__init__`` method to initialize properties for a site name, a
   username, and a password.
#. Define a method called ``change_password`` that calls the ``make_password``
   function and updates the password property.
#. Define a ``__str__`` method that displays the login information in a clean
   way.

Test your class by creating a new ``Login`` object (you will need to prompt for
the site and username).

Be sure to print the object to the console before and after calling the
``change_password`` method.

.. admonition:: Warning

   It NOT a good idea to print passwords to the screen or save them without
   encrypting them! You are just doing it here to test your code.

**Sample Output**

::

   Welcome to the password generator!
   Please enter the site name: WOPR
   Please create a username: imsai8080
   Choose a password length (8 - 30 characters): 8
   Include special characters (Y/N)? n
   
   Login for: WOPR
   Username: imsai8080
   Password: 0cFqu5hc

   Would you like to change your password (Y/N)? y
   Choose a password length (8 - 30 characters): 30
   Include special characters (Y/N)? y
   imsai8080, your new WOPR password is: &,|]ws@Rlb[)Rj&^5BOg)(]m&|Aj__

Part E: Final Touch (Optional)
------------------------------

If a user doesn't like the password generated, they must rerun the program and
enter their choices for the length and special characters again. Some people
will find this annoying.

Modify your ``make_password`` function to give the user a preview of their new
password. If they don't like it, have the function generate new ones until the
user accepts. These follow-up options should not require the user to enter a
length or special character choice.

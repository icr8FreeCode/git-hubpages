Chapter 9: Errors and Debugging
===============================

The answers on this page show ONE way to solve the :ref:`exercises <errors-and-debugging-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

    A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

    <iframe src="https://trinket.io/embed/python3/0f03fdcb76" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Solutions
---------

.. _chp9part1:

Find and Fix Syntax Errors
^^^^^^^^^^^^^^^^^^^^^^^^^^
The following code sample contains 3 syntax errors.

    .. sourcecode:: Python
        :linenos:
        
        import string
        alphabet = string.ascii_uppercase
        value = int(input"Enter an index value: "))
        index = value%26

        if value > = len(alphabet):
        print("The letter at index {0} ({1}) is '{2}'.".format(value, index, alphabet[index]))
        else:
        print("The letter at index {0} is '{1}'."format(index, alphabet[index]))

1.  Before making any changes, run the code as-is to generate the first error
    message.
2.  Use the error message to fix the first bug. Do NOT change anything in the
    code unless it involves fixing the first bug.

    .. sourcecode:: Python
        
        # Error Message One

        """
        File "main.py", line 3
            value = int(input"Enter an index value: "))
                            ^
        SyntaxError: invalid syntax
        """
        # Original Code from line 3 is missing a ( after the input keyword.
        # Note the error gives you the line and puts a little ^ near the error

        #Fixed Code from line 3
        #value = int(input("Enter an index value: "))

3.  After changing the code, run the program again. If there is another bug in
    the program, you will see a different error message.

    .. sourcecode:: Python  

        # Error Message Two
        """ 
        File "main.py", line 6
            if value > = len(alphabet):
                    ^
        SyntaxError: invalid syntax
        """

        # Original Code from line 6 has an extra space between > and =
        
        # Fixed Code from line 6
        #if value >= len(alphabet):

4.  Repeat steps 2 and 3 until you fix all of the bugs and the program runs
    successfully.

    .. sourcecode:: Python
        :linenos:

        #Working Program Below, All bugs fixed
        import string
        alphabet = string.ascii_uppercase

        value = int(input("Enter an index value: "))
        index = value%26

        if value >= len(alphabet):
            print("The letter at index {0} ({1}) is '{2}'.".format(value, index, alphabet[index]))
        else:
            print("The letter at index {0} is '{1}'.".format(index, alphabet[index]))

:ref:`Back to the exercises <errors-and-debugging-exercises>`.

.. _chp9part2:

Find and Fix Runtime Errors
^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following code sample contains 3 runtime errors.
    
    .. sourcecode:: Python
        :linenos:

        word = input("Enter a school-appropriate word: ")
        print("The last letter in '{0}' is '{1}'".format(word, word[len(word)]))

        first_num = int(input("Enter a whole number: "))
        second_num = input("Enter another whole number: ")

        print(f"For {first_num} and {second_num}:")
        print("\tSum = {0}".format(first_num + second_num))
        print("\tDifference = {0}".format(first_num - second_num))
        print("\tProduct = {0}".format(first_num * secnod_num))
        if second_num != 0:
            print("\tQuotient = {0}".format(first_num / second_num))
        else:
            print("\tQuotient = undefined (cannot divide by 0)")

1.  Before making any changes, run the code as-is to generate the first error
    message.

    .. sourcecode:: Python
        
        #Error 1
        """
        Traceback (most recent call last):
        File "main.py", line 2, in <module>
            print("The last letter in '{0}' is '{1}'".format(word, word[len(word)]))
        IndexError: string index out of range
        """  

        #Original Code on line 2, remember index starts at 0 not 1 so len(word) would return a value + 1
        
        #Fixed Code:
        #print("The last letter in '{0}' is '{1}'".format(word, word[len(word) - 1]))

        #or alternatively

        #remember a -1 index takes us to the end of a string 
        #print("The last letter in '{0}' is '{1}'".format(word, word[-1]))

2.  Follow the same process you used above to fix the runtime errors. Note that
    syntax highlighting does NOT show all possible runtime errors.

    .. sourcecode:: Python
        
        #Error 2
        """
        Traceback (most recent call last):
        File "main.py", line 8, in <module>
            print("\tSum = {0}".format(first_num + second_num))
        TypeError: unsupported operand type(s) for +: 'int' and 'str'
        """

        #Original Code on line 8
        #print("\tSum = {0}".format(first_num + second_num))
        #Which looks correct - reread error code and the error is type int and str, look up at our variables

        #Line 5 code is the problem. We need to change the data type to int.

        #Fixed Code:
        #second_num = int(input("Enter another whole number: "))

        #Hint for Error 3: check your spelling!

    .. sourcecode:: Python
        :linenos:

        #Working Program Below, All bugs fixed.
        word = input("Enter a school-appropriate word: ")
        print("The last letter in '{0}' is '{1}'".format(word, word[len(word) - 1]))

        first_num = int(input("Enter a whole number: "))
        second_num = int(input("Enter another whole number: "))

        print(f"For {first_num} and {second_num}:")
        print("\tSum = {0}".format(first_num + second_num))
        print("\tDifference = {0}".format(first_num - second_num))
        print("\tProduct = {0}".format(first_num * second_num))
        if second_num != 0:
            print("\tQuotient = {0}".format(first_num / second_num))
        else:
            print("\tQuotient = undefined (cannot divide by 0)")

:ref:`Back to the exercises <errors-and-debugging-exercises>`.

.. _chp9part3:

Solve Logic Errors
^^^^^^^^^^^^^^^^^^
1.  The following code contains two logic errors.  When given a student's score
    on an exam, the program *should* convert the points earned into a
    percentage (points earned / points possible * 100). Find and fix the errors
    so that the program gives the correct result.

    .. sourcecode:: Python
        :linenos:

        #Original Code with bugs
        points_earned = 8
        points_possible = 10

        percentage = points_possible/points_earned * 10
        print(f"The student earned {points_earned} points out of {points_possible}, or {percentage}%.")

        # Here are some test cases:
        # Earning 8 out of 10 possible points = 80.0%. 
        # 11 of of 15 is 73.33333333333333%.
        # 23.4 out of 25 93.6%.

        # First, run the program as is. Note the output:

        """The student earned 8 points out of 10, or 12.5%."""

        # Look at line 5 and see that variables are reversed should be points_earned/points_possible.
        # Check your code by running it, did you find the second logic error?
        # Percentage would be *100 not *10, should be 8/10 * 100 

        #Fixed code: percentage = points_earned/points_possible * 100

        #Next test out more examples (line 10 and 11) to see if program still works.

2.  The next program should convert a student's percentage into a letter grade.
    The code follows a simple 10-point scale and allows for decimal results:
    A: 100% - 90%, B: 89 - 80, C: 79 - 70, D: 69 - 60, F: Any score under 60%.

    .. sourcecode:: Python
        :linenos:

        output = "The student's score of {0}% is a(n) '{1}'."

        score_percent = 93.5

        if score_percent > 90:
            letter_grade = 'O'
        elif score_percent > 70:
            letter_grade = 'A'
        elif score_percent > 80:
            letter_grade = 'E'
        elif score_percent <= 60:
            letter_grade = 'P'
        else:
            letter_grade = 'T'

        print(output.format(score_percent, letter_grade))

        #Some of the things to notice in the code above:
        #The wrong letter grades are assigned 
        #The score logic also jumps around 90 to 70 to 80 etc, this could be problematic. 
        #What happens when testing say 83 if we just fix the letter grade assigned and not order.
        #Also > is not including the 90, 70, 80, etc.
        #Line 54 is using <= which needs to be either switched to < or >=.
        #Does it make a difference if you use < 60 and assign F and the else statement returns D? Test it out!
   
One possible solution:
    
    .. sourcecode:: Python
        :linenos:

        if score_percent >= 90:
            letter_grade = 'A'
        elif score_percent >= 80:
            letter_grade = 'B'
        elif score_percent >= 70:
            letter_grade = 'C'
        elif score_percent >= 60:
            letter_grade = 'D'
        else:
            letter_grade = 'F'
   
3.  The last code sample checks if a username is valid, but it's not working yet.
    Add ``print`` statements as directed to find and fix the logic errors.

    **Username rules**:

    a. Must be 5 - 10 characters long.
    b. Must only contain letters and numbers.
    c. Must contain at least 1 digit.

    **Test names**:

    a. ``"R2D2"`` should be invalid (too short).
    b. ``"CoderGirl"`` should be invalid (no number).
    c. ``"rut*baga8"`` should be invalid (illegal symbol).
    d. ``"This1IsTooLong"`` should be invalid (too long).
    e. ``"High5"`` and ``"pyth0n"`` are both valid (that's a zero in place of
       the "o").

    .. sourcecode:: Python
        :linenos:

        #One possible solution:

        import string
        username = 'CoderGirl'
        is_valid = False
        has_digit = False

        # Add print statements as directed to help find and fix the logic error.

        # Check length
        if len(username) >= 5 and len(username) <= 10:  
            is_valid = True
        #check logic of above if statement 
        #print(is_valid)

        # Loop to check the characters in username.
        for char in username:
            # Check for a digit (0-9).   
            if char in string.digits: 
                has_digit = True
            # Check for non-letters.  
            elif char not in string.ascii_letters:  
                is_valid = False
            #else:
                #is_valid = True
            #to check logic of this loop
            #print(char, is_valid, has_digit)

        if is_valid and has_digit:
            print(f"'{username}' is a valid username.")
        else:
            print((f"'{username}' is invalid."))

        #Part 3-1
        """
        On line 13, add print(is_valid) to check if the conditional on line 11 correctly assigns True and 
        False based on the length of the username. Be sure to run the program with all four test names. 
        R2D2 and This1IsTooLong should return False, while CoderGirl and rut*baga8 should return True.

        Is the conditional on line 11 doing its job correctly? YES
        """
        #Part 3-3 and 3-4
        """
        On line 26, add print(char, is_valid, has_digit). Make sure to indent the statement the same amount
        as the else on line 23.

        Run the program again with all 4 test names. Note how the values of is_valid and has_digit change
        each time the loop repeats. Use the output to find and fix the logic error in the loop.
        """

        # The else statement line 23 seems redundant and is changing is_valid to True when its not.
        # We just need to check for if char has a digit (change has_digit to True),
        # and if it has a strange character (change is_valid to False).
        # Got rid of else statement.
        # Run program to check that all names return correct answer.

*Bonus fix*: The loop runs after the length check passes *or* fails. How can we make it so that the 
loop runs only *if* the length test passes? Try nesting the for loop (lines 17-23) under the first if statement checking for length (lines 11-12).

:ref:`Back to the exercises <errors-and-debugging-exercises>`.
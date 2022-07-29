Chapter 7: Stringing Characters Together
========================================

The answers on this page show ONE way to solve the :ref:`exercises <strings-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

    A suggested solution is ONE way to solve the problem, not the ONLY way.

Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

    <iframe src="https://trinket.io/embed/python3/fa4912a3e8" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Solutions
---------

.. _chp7part1: 

Part One: Bracket Notation
^^^^^^^^^^^^^^^^^^^^^^^^^^
1. Identify the result for each of the following statements:
   
   a. ``'Characters'[8]`` = r
   
   d. ``len("Do spaces count?")`` = 16

   *There's no starter code for this one, just try it on your own with
   old-fashioned pencil and paper!*

2. Use bracket notation to:

   a. Print a slice of the first 12 characters from
      ``"Strings_are_sequences_of_characters."``

    .. sourcecode:: Python
        :linenos:

        text = 'Strings_are_sequences_of_characters.'
        print(text[:12])
 
   c. Print a slice of the middle 12 characters from the same string.

    .. sourcecode:: Python
        :linenos:

        #simple solution that solves for just text = 'Strings_are_sequences_of_characters.'
        print(text[12:24])

3. Use index values to loop *backwards* through a string:

   a. First, print one letter per line.

    .. sourcecode:: Python
        :linenos:

        max_index = len(word) - 1
        for index in range(max_index, -1, -1):
        print(word[index])

   b. Next, instead of one letter per line, use the accumulator pattern to build
      up and print the reversed string. For example, if given the string
      ``'good'``, your program prints ``doog``.

    .. sourcecode:: Python
        :linenos:

        word = "tomato"
        new_word = ""
        for index in range(max_index, -1, -1):
            new_word += word[index]
    
        print (new_word)

   c. Finally, use concatenation to print the combination of the original and
      reversed string. For example, given the string ``'tomato'``, your program
      prints ``tomatootamot``. (If you want to be fancy, include the ``|``
      character to make the output look almost like a mirrored image: ``tomato | otamot``). 

    .. sourcecode:: Python
        :linenos:

        print(word + new_word)

:ref:`Back to the exercises <strings-exercises>`.

.. _chp7part2:

Part Two: String Methods and Operations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. The ``len()`` function returns the number of characters in a string. However,
   the function will NOT give us the length of an integer. If ``num = 1001``,
   then ``len(num)`` throws an error instead of returning ``4``.

   a. Use ``str()`` to change ``num`` from an ``int`` to a string data type.
   b. Print the length (number of digits) in ``num``.

    .. sourcecode:: Python
        :linenos:

        num = 1001

        # Exercise 1a and 1b
        print(len(str(num)))

   c. Modify your code to print the number of digits in a ``float`` value (e.g.
      ``num = 123.45`` has 5 digits but a length of 6). The digit count should
      NOT include the decimal point.

    .. sourcecode:: Python
        :linenos:

        num = 123.45
        new_num = str(num).replace(".","")
        print(len(new_num))

   d. What if ``num`` could be EITHER an integer or a decimal? Add an ``if/else``
      statement so your code can handle both cases.  (Hint: Consider using the
      ``find()`` method or the ``in`` operator to check if ``num`` contains a
      decimal point).

    .. sourcecode:: Python
        :linenos:

        # Experiment! There are many ways to do this. 
        if  type(num) is float or type(num) is int:
            print(len(str(num)) - str(num).count("."))
        else:
            print(len(num))
    
2. Given ``word = 'bag'``:

   a. Set up a loop to iterate through the string of lowercase vowels,
      ``'aeiou'``.
   b. Inside the loop, create a new string from ``word``, but with a different
      vowel. Use the ``replace()`` string method.
   c. Print the new string.

    .. sourcecode:: Python
        :linenos:

        word = 'bag'

        vowels = "aeiou"
        for vowel in vowels:
            new_word = word.replace("a", vowel)
            print(new_word)
   
3. Consider a string that represents a strand of DNA:
   ``dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "``. There
   are some typos in the string that you need to fix:

   a. Use the ``strip()`` method to remove the leading and trailing whitespace,
      and then print the result.

    .. sourcecode:: Python
        :linenos:

        print(dna.strip())

   c. Note that you need to *reassign* the changes back to the ``dna`` variable in order to see them printed. 
      Apply these fixes to your code so that ``print(dna)`` prints the DNA strand in UPPERCASE
      with no whitespace.

    .. sourcecode:: Python
        :linenos:

        dna = dna.strip().upper()
        print(dna) 

4. Let's use string methods to do more work on the same DNA strand:

   b. Look for the sequence ``'CAT'`` with ``find()``. If found print, ``'CAT
      found'``, otherwise print, ``'CAT NOT found'``.

    .. sourcecode:: Python
        :linenos:

        if dna.find("CAT") > -1:
            print("CAT gene found")
        else:
            print("Cat gene NOT found")
  
   c. Use ``count()`` to find the number of hyphens (``-``) in the string, then
      print the number of *genes* (in this case, a gene is a set of 3 letters) in the DNA strand. Note
      that the number of genes will be 1 more than the number of hyphens.
      
    .. sourcecode:: Python
        :linenos:
      
        print(dna.count("-")+1)

:ref:`Back to the exercises <strings-exercises>`.

.. _chp7part3:  

Part Three: String Formatting
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1. Assign your favorite, school-appropriate number and word to two variables.
   
   a. Use ``format()`` and index values to print the string,
      ``"Here is my number: ___, and here is my word: ___, and here is my
      number again: ___."``
      
    .. sourcecode:: Python
        :linenos:

        my_num = 42
        my_word = 'feckless'
      
        output = "Here is my number: {0}, and here is my word: {1}, and here is my number again: {0}."
        print(output.format(my_num, my_word)

2. The following code sample works, but it can be improved.
   
    .. sourcecode:: python
        :linenos:

        advice = "Don't Panic"

        output = "The text, '{0}' contains {1} characters."

        print(output.format("Don't Panic", 11))
 
   a. Assuming that ``advice`` remains a string, when will the code produce the
      wrong output?

    ::
    
        When we change advice to something else.

   b. Why will the code do this?

    ::

        Because the print statement is hard coded with 'Don't Panic' instead of the variable name advice.

   c. What should the programmer do to fix the code?

    .. sourcecode:: Python
        :linenos:

        #One way to code the above answer:
        print(output.format(advice, len(advice)))

:ref:`Back to the exercises <strings-exercises>`.


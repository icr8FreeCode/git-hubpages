Chapter 10: What's Your Function
================================

The answers on this page show ONE way to solve the :ref:`exercises <functions-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

    A suggested solution is ONE way to solve the problem, not the ONLY way.


Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

	<iframe src="https://trinket.io/embed/python3/aeb2267502" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

.. _chp10partA:

Solutions
---------
Part A: More Turtles
^^^^^^^^^^^^^^^^^^^^

1. Use a loop and the ``draw_square`` function we wrote
   :ref:`in this chapter <draw-square-code>`.
   Make each side 30 units long, and note that the turtle moves away from the
   last square.
   
   (Check the :ref:`Turtle Appendix <turtle-guide>` if you need to review the
   turtle methods).

    .. sourcecode:: Python
        :linenos:

        # Turtle setup commands. Change these as you see fit!
        bob = turtle.Turtle()
        bob.color('blue')
        bob.pensize(3)
        bob.speed(8)


        num_squares = 5     # Set the number of shapes to draw.
        length = 30         # Set the side length.

        for square in range(num_squares):
            draw_square(bob, length)    # Draw one square.
            bob.penup()                 # Lift the pen.
            bob.forward(2*length)       # Move to the next position.
            bob.pendown()               # Drop the pen.
 
2. Define a new function called ``draw_polygon`` that
   takes 3 parameters---a turtle object, a number of sides, and the length of
   each side. Place the new function in the lines before
   ``bob = turtle.Turtle()``.

   *Hint*: You drew polygons as part of the 
   :ref:`Turtle Project <draw-polygon>` in the Loops chapter.

    .. sourcecode:: Python
        :linenos:

        def draw_polygon(turtle_name, num_sides, side_length):
            turn_angle = 360.0/num_sides
            for side in range(num_sides):
                turtle_name.forward(side_length)
                turtle_name.left(turn_angle)

After you finish coding the function, replace the ``draw_square`` function
call in the loop with ``draw_polygon`` to produce a row of shapes.

3. Write a function called ``draw_sprite`` that draws a figure. The function needs 
   parameters for the turtle, the number of legs, and the length of the legs.

    .. sourcecode:: Python
        :linenos:

        def draw_sprite(turtle_name, num_legs, leg_length):
            turn_angle = 360.0/num_legs
            for side in range(num_legs):
                turtle_name.forward(leg_length)
                turtle_name.backward(leg_length)
                turtle_name.left(turn_angle)

   Call the function to create a sprite with 10 legs of length 115.

    .. sourcecode:: Python
        :linenos:

        bob.shape('circle')
        legs = 10      # Set the number of legs for the sprite.
        length = 115   # Set the length for each leg.
        draw_sprite(bob, legs, length)  # Draw the sprite.

   Try It!

   Add a parameter to draw_polygon called fancy_corners. If True, then the function should call 
   draw_sprite at each corner of the shape. Make the sprite legs half the length of each side.

    .. sourcecode:: Python
        :linenos:

        # One possible solution:
        def draw_fancy_polygon(name, num_sides, side_length, fancy_corners = False):
            turn_angle = 360.0/num_sides
            for side in range(num_sides):
                name.forward(side_length)
                if fancy_corners:
                    draw_sprite(name, num_sides, side_length/2)
                name.left(turn_angle)

        # Call function
        bob.shape('turtle')
        sides = 6      # Set the number of legs for the polygon.
        length = 100   # Set the length for each side.
        # Draw a polygon with sprites at each vertex.
        draw_fancy_polygon(bob, sides, length, True)

:ref:`Back to the exercises <functions-turtle-exercises>`.

.. _chp10partB:

Part B: Return Values
^^^^^^^^^^^^^^^^^^^^^

1. Write a ``shift_case`` function that takes a single string parameter and
   returns a different string. The function should loop through the string and
   change uppercase characters to lowercase, and lowercase to uppercase.

   For example, for the argument ``'Hello, World!'``, the function returns
   ``'hELLO, wORLD!'``.

    .. sourcecode:: Python
        :linenos:

        def shift_case(a_string):
            shifted_string = ''
            for char in a_string:
                if char.isupper():
                    shifted_string += char.lower()
                else:
                    shifted_string += char.upper()
            return shifted_string

        # Call the shift_case() function and assign the returned value to result.
        result = shift_case('Python ROCKS!')  
        print(result)

        # Fun Fact: Python has a string method that does the same thing!
        # def shift_case(a_string):
        #     return a_string.swapcase()
   
2. Write a function ``make_line(num_chars, symbol)`` that returns a line with
   exactly ``num_chars`` symbols. ``num_chars`` will be an integer, and
   ``symbol`` will be a character. Note that the function must *RETURN* a
   string, not print it!

   If the function call does not provide an argument for ``symbol``, use the
   default character ``'#'``.

    .. sourcecode:: Python
        :linenos:

        def make_line(num_chars, symbol = '#'):
            return symbol*num_chars

        print(make_line(5, 'T'))
        print(make_line(8))

   
3. Add a function called ``make_rectangle`` that returns a rectangle string with
   a given width, height, and symbol. The function should NOT print each row of
   the rectangle. Instead, it must return a single string that contains the
   entire rectangle shape.

    .. sourcecode:: Python
        :linenos:

        #Call your make_line function to create each row of the rectangle string.
        #The newline character, \n, will be helpful to you.
        #Do NOT include a newline character at the end of your string.
        #Use # as the default symbol.

        #One possible solution
        def make_rectangle(width, height, symbol = '#'):
            rectangle = ''
            for row in range(height):
                rectangle += make_line(width, symbol) + '\n'
            return rectangle.strip()

        print(make_rectangle(5, 3))
        print(make_rectangle(2, 4, '*'))

:ref:`Back to the exercises <make-line>`.

.. _chp10partBonus:

Bonus Exercises
^^^^^^^^^^^^^^^

1. Add a ``draw_spiral`` function to one of the turtle editors to produce
   either of the following shapes. *Hint*: The function needs a turtle, an
   angle, a starting line length and the number of lines to draw.

    .. sourcecode:: Python
        :linenos:

        import turtle

        bob = turtle.Turtle()
    
        # Start at the center and expand outward.
        # One possible solution.

        def draw_spiral(name, angle, start_length, lines):
            # turn takes values 0, 1, 2... lines-1.
            for turn in range(lines):
                # Each line is 5 pixels longer than the previous one.
                #What happens if you change 5 to 3, or 7? Play around!      
                name.forward(start_length + 5*turn)    
                name.left(angle)

        # Turtle setup commands. Change these as you see fit!
        bob.color("tomato")
        bob.pensize(3)
        bob.speed(8)
        bob.shape('turtle')
        
        # Arguments for the spiral. Play with these!
        turn_angle = 90
        first_line_length = 5
        num_lines = 40

        # Call the function:
        draw_spiral(bob, turn_angle, first_line_length, num_lines)
       
2. Add functions to the editor in part B, exercise 6 to produce any of the
   following shapes:

    .. sourcecode:: Python
        :linenos:

        #                       
        ##                     
        ###                   
        ####                 
        #####               

        def make_downward_stairs(height, symbol = '#'):
            stairs = ''
            # row takes values 0, 1, 2, ... height-1.   
            for row in range(height): 
                # The number of symbols is 1 larger than the row number (0 --> 1, 1 --> 2, etc.)   
                stairs += symbol*(row+1)
                    # Add an new line unless its the last row
                    if row != height-1:      
                        stairs += '\n'
                return stairs
            
            # call your function 
            print(make_downward_stairs(5)


            ##
           ####
          ######
         ########
        ##########

            def make_pyramid(height, symbol = '#'):
                shape = ''
                # The triangle starts with 2 symbols in the top row.
                # Each successive row has 2 more symbols than the previous one.
                # The number of symbols = 2*(row + 1). (Where row = 0, 1, 2, ...)

                # The rows are centered relative to each other. This means that all but the
                # bottom row need spaces before the first symbol.
                # For a 2-row figure, the top line would need 1 space.
                # For a 3-row figure, the top line needs 2 spaces, etc.
                # Thus, the number of spaces ranges from 0 (bottom) to height - 1 (top).
                
                # row = 0, 1, 2, ... height - 1.
                for row in range(height): 
                    # Calculate the number of spaces required.          
                    num_spaces = height - row - 1   
                    # Calculate the number of symbols needed.
                    num_symbols = 2*(row + 1)       
                    
                    # Create a string with the calculated number of spaces and symbols,
                    # then add it to shape.
                    shape += num_spaces*' ' + num_symbols*symbol  
                    # Add a newline for every row except the last one.
                    if row != height-1:             
                        shape += '\n'
                return shape

            # call your function
            print(make_pyramid(5, '^')))

:ref:`Back to the exercises <functions-bonus-exercises>`.